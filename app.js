let topSetup, sideSetup, setup, selected, selectedSetupId, selectedSetupType;

const DATA_URL = 'https://gist.githubusercontent.com/wVibzz/82076e7b54f58f8c7940989e114b4aeb/raw/data.json';

// Dark Mode Functions
function initDarkMode() {
  const toggle = document.getElementById('dark-mode-toggle');
  if (!toggle) return;
  
  const saved = localStorage.getItem('zc-dark-mode');
  const isDark = saved !== 'false';
  
  toggle.checked = isDark;
  if (!isDark) {
    document.documentElement.classList.add('light-mode');
  }
  
  toggle.addEventListener('change', function() {
    const isDarkMode = this.checked;
    localStorage.setItem('zc-dark-mode', isDarkMode);
    
    if (isDarkMode) {
      document.documentElement.classList.remove('light-mode');
    } else {
      document.documentElement.classList.add('light-mode');
    }
  });
}

function renderButtons() {
  const cats = {
    small: "small-towers",
    medium: "medium-towers",
    tall: "tall-towers",
    special: "special-towers"
  };

  Object.keys(cats).forEach(cat => {
    const container = document.getElementById(cats[cat]);
    if (!container) return;

    const towers = setup.filter(t => t.category === cat);
    container.innerHTML = towers.map(t => {
      const isSelected = selected.name === t.name;
      const activeClass = isSelected ? `${cat}-active` : '';
      return `<button onclick="selectTower('${t.name}')" class="tower-btn ${activeClass}">
        ${t.name}
        ${t.h ? `<span class="tower-height">${t.h}</span>` : ''}
      </button>`;
    }).join("");
  });
}

function selectTower(name) {
  selected = setup.find(t => t.name === name);
  selectedSetupId = selected.setups[0].id;
  selectedSetupType = 'top';
  renderButtons();
  renderGrid();
}

function selectSetup(id, type) {
  selectedSetupId = id;
  selectedSetupType = type;
  renderGrid();
}

function renderCoords(coords) {
  if (!coords || coords.length === 0) {
    return '<span class="empty-cell">—</span>';
  }
  return coords.map(c => {
    const doubleTag = c.t?.includes('d') ? ' <span class="tag tag-double">Double</span>' : '';
    const noteTag = c.note ? ` <span class="tag tag-note">${c.note}</span>` : '';
    return `<span class="coord-chip">${c.xz}${doubleTag}${noteTag}</span>`;
  }).join('');
}

function renderGrid() {
  const allSetups = selectedSetupType === 'side' && selected.sideSetups
    ? selected.sideSetups
    : selected.setups;

  const currentSetup = allSetups.find(s => s.id === selectedSetupId) || selected.setups[0];

  let headerHtml = `
    <div class="header-top">
      <span class="tower-name">${selected.name}</span>
      ${selected.altName ? `<span class="tower-alt">(${selected.altName})</span>` : ''}
      ${selected.h ? `<span class="meta-tag meta-height">H: ${selected.h}</span>` : ''}
    </div>
  `;

  if (selected.setups.length > 0) {
    headerHtml += `<div class="setup-section">
      <div class="setup-section-label">Top Setups</div>
      <div class="setup-tabs">`;
    selected.setups.forEach(s => {
      const isActive = (s.id === selectedSetupId && selectedSetupType === 'top') ? 'active' : '';
      headerHtml += `<button class="setup-tab ${isActive}" onclick="selectSetup('${s.id}', 'top')">${s.label}</button>`;
    });
    headerHtml += `</div></div>`;
  }

  if (selected.sideSetups && selected.sideSetups.length > 0) {
    headerHtml += `<div class="setup-section side-section">
      <div class="setup-section-label side-label">Side Setups</div>
      <div class="setup-tabs">`;
    selected.sideSetups.forEach(s => {
      const isActive = (s.id === selectedSetupId && selectedSetupType === 'side') ? 'active' : '';
      headerHtml += `<button class="setup-tab setup-tab-side ${isActive}" onclick="selectSetup('${s.id}', 'side')">${s.label}</button>`;
    });
    headerHtml += `</div></div>`;
  }

  if (currentSetup.setupType) {
    headerHtml += `<div class="setup-type">${currentSetup.setupType}</div>`;
  }

  document.getElementById("tower-header").innerHTML = headerHtml;

  const standingYs = new Set();
  const otherYs = new Set();

  if (currentSetup.front) Object.keys(currentSetup.front).forEach(y => standingYs.add(y));
  if (currentSetup.frontLow) Object.keys(currentSetup.frontLow).forEach(y => standingYs.add(y));
  if (currentSetup.back) Object.keys(currentSetup.back).forEach(y => standingYs.add(y));
  if (currentSetup.frontOther) Object.keys(currentSetup.frontOther).forEach(y => otherYs.add(y));
  if (currentSetup.backOther) Object.keys(currentSetup.backOther).forEach(y => otherYs.add(y));

  const sortedStandingYs = Array.from(standingYs).sort((a, b) => Number(a) - Number(b));
  const sortedOtherYs = Array.from(otherYs).sort((a, b) => Number(a) - Number(b));
  const hasFrontLow = !!currentSetup.frontLow;
  const hasOther = sortedOtherYs.length > 0;

  if (sortedStandingYs.length === 0 && sortedOtherYs.length === 0) {
    document.getElementById("tower-grid").innerHTML = '<div class="no-data">No coordinate data available</div>';
    return;
  }

  let html = `<table class="grid-table">
    <thead>
      <tr>
        <th class="col-y">Y</th>
        <th class="col-front">Front</th>
        ${hasFrontLow ? '<th class="col-front-low">Front Low</th>' : ''}
        <th class="col-back">Back</th>
      </tr>
    </thead>
    <tbody>`;

  if (sortedStandingYs.length > 0) {
    if (hasOther) {
      html += `<tr class="section-header"><td colspan="${hasFrontLow ? 4 : 3}">Standing Heights</td></tr>`;
    }
    sortedStandingYs.forEach(y => {
      const frontCoords = currentSetup.front?.[y];
      const frontLowCoords = currentSetup.frontLow?.[y];
      const backCoords = currentSetup.back?.[y];

      html += `<tr>
        <td class="y-cell">Y${y}</td>
        <td class="coord-cell">${renderCoords(frontCoords)}</td>
        ${hasFrontLow ? `<td class="coord-cell">${renderCoords(frontLowCoords)}</td>` : ''}
        <td class="coord-cell">${renderCoords(backCoords)}</td>
      </tr>`;
    });
  }

  if (sortedOtherYs.length > 0) {
    html += `<tr class="section-header"><td colspan="${hasFrontLow ? 4 : 3}">Other Heights (Bed Break Risk)</td></tr>`;
    sortedOtherYs.forEach(y => {
      const frontCoords = currentSetup.frontOther?.[y];
      const backCoords = currentSetup.backOther?.[y];

      html += `<tr class="other-height">
        <td class="y-cell">Y${y}</td>
        <td class="coord-cell">${renderCoords(frontCoords)}</td>
        ${hasFrontLow ? `<td class="coord-cell"><span class="empty-cell">—</span></td>` : ''}
        <td class="coord-cell">${renderCoords(backCoords)}</td>
      </tr>`;
    });
  }

  html += '</tbody></table>';
  document.getElementById("tower-grid").innerHTML = html;
}

// Settings Modal
function openSettings() {
  const modal = document.getElementById('settings-modal');
  if (modal) {
    modal.classList.add('active');
    document.body.classList.add('modal-open');
  }
}

function closeSettings() {
  const modal = document.getElementById('settings-modal');
  if (modal) {
    modal.classList.remove('active');
    document.body.classList.remove('modal-open');
  }
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
  // Initialize dark mode
  initDarkMode();
  
  // Settings modal event listeners
  const settingsModal = document.getElementById('settings-modal');
  if (settingsModal) {
    // Close modal when clicking outside
    settingsModal.addEventListener('click', function(e) {
      if (e.target === this) {
        closeSettings();
      }
    });
  }

  // Close modal with Escape key
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
      closeSettings();
    }
  });

  // Load tower data if on main page
  const towerGrid = document.getElementById('tower-grid');
  if (towerGrid) {
    fetch(DATA_URL + '?t=' + Date.now())
      .then(r => r.json())
      .then(data => {
        topSetup = data.topSetup;
        sideSetup = data.sideSetup;
        setup = topSetup;
        selected = setup[0];
        selectedSetupId = selected.setups[0].id;
        selectedSetupType = 'top';

        renderButtons();
        renderGrid();
      })
      .catch(err => {
        console.error('Failed to load data:', err);
        towerGrid.innerHTML = '<div class="no-data">Failed to load tower data</div>';
      });
  }

  // Announcement from Gist
  const GIST_URL = 'https://gist.githubusercontent.com/wVibzz/fc4d2a76c522a802c25b9c794f2bb5aa/raw/announcement.json';

  fetch(GIST_URL + '?t=' + Date.now())
    .then(r => r.json())
    .then(data => {
      if (!data.enabled || !data.message) return;

      const dismissed = localStorage.getItem('announcement-dismissed');
      if (dismissed === data.message) return;

      const banner = document.createElement('div');
      banner.className = `announcement announcement-${data.type || 'info'}`;
      banner.innerHTML = `
        <span>${data.message}</span>
        <button aria-label="Dismiss">&times;</button>
      `;

      banner.querySelector('button').onclick = () => {
        localStorage.setItem('announcement-dismissed', data.message);
        banner.remove();
      };

      document.body.insertBefore(banner, document.body.firstChild);
    })
    .catch(() => {});
});
