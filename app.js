let towers, selected;

const DATA_URL = 'https://gist.githubusercontent.com/wVibzz/d7daea325f795bd41ed16cf2d83f8c7a/raw/data.json';

function applyTheme(isDark) {
  document.documentElement.classList.toggle('light-mode', !isDark);
  const btn = document.getElementById('theme-toggle');
  if (btn) btn.textContent = isDark ? '🌙' : '☀️';
}

function initDarkMode() {
  const saved = localStorage.getItem('zc-dark-mode');
  let isDark = saved === null || saved === 'true';
  applyTheme(isDark);

  const btn = document.getElementById('theme-toggle');
  if (!btn) return;

  btn.addEventListener('click', function() {
    isDark = !isDark;
    localStorage.setItem('zc-dark-mode', isDark ? 'true' : 'false');
    applyTheme(isDark);
  });
}

function esc(s) {
  return String(s ?? '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

function t(key, fallback) {
  return window.I18N ? I18N.t(key, fallback) : fallback;
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

    const list = towers.filter(t => t.category === cat);
    container.innerHTML = list.map(t => {
      const activeClass = selected && selected.code === t.code ? `${cat}-active` : '';
      const code = t.name !== t.code ? `<span class="tower-height">${esc(t.code)}</span>` : '';
      return `<button onclick="selectTower('${esc(t.code)}')" class="tower-btn ${activeClass}">
        ${esc(t.name)}${code}
      </button>`;
    }).join("");
  });
}

function slugify(s) {
  return String(s).toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
}

function towerBySlug(slug) {
  return towers.find(t => slugify(t.name) === slug);
}

function render() {
  document.title = `${selected.name} - ${t('app.title', 'Zero Cycle Cheat Sheet')}`;
  renderButtons();
  renderGrid();
}

function selectFromUrl() {
  const slug = decodeURIComponent(location.hash.replace(/^#/, ''));
  selected = (slug && towerBySlug(slug)) || towers[0];
  render();
}

function selectTower(code) {
  const t = towers.find(t => t.code === code);
  if (!t) return;
  selected = t;
  history.pushState(null, '', '#' + slugify(t.name));
  render();
}

function renderOptions(opts) {
  if (!opts || opts.length === 0) {
    return '<span class="empty-cell">&mdash;</span>';
  }
  return opts.map(o => {
    const bow = o.bow === 'with'
      ? `<span class="opt-bow opt-bow-with">${esc(t('opt.with_bow', 'With bow'))}</span>`
      : o.bow === 'no'
        ? `<span class="opt-bow opt-bow-no">${esc(t('opt.no_bow', 'No bow'))}</span>`
        : '';
    const warn = o.anchor ? `<span class="opt-warn">${esc(t('anchor.' + o.anchor, o.anchor))}</span>` : '';
    return `<div class="opt">
      <div class="opt-tags">
        <span class="opt-orient">${esc(t('orient.' + o.orient, o.orient))}</span>
        ${bow}
      </div>
      <div class="opt-coord">
        <span class="opt-label">${esc(t('opt.stand', 'Stand'))}</span>
        <span class="coord-val">${esc(o.player)}</span>
      </div>
      <div class="opt-coord">
        <span class="opt-label opt-label-bed">${esc(t('opt.bed', 'Bed'))}</span>
        <span class="coord-val coord-val-bed">${esc(o.bed)}</span>
      </div>
      ${warn}
    </div>`;
  }).join('<div class="opt-divider"></div>');
}

function renderGrid() {
  const headerHtml = `
    <div class="header-top">
      <span class="tower-name">${esc(selected.name)}</span>
      ${selected.name !== selected.code ? `<span class="tower-alt">(${esc(selected.code)})</span>` : ''}
      ${selected.h ? `<span class="meta-tag meta-height">H: ${esc(selected.h)}</span>` : ''}
    </div>
  `;
  document.getElementById("tower-header").innerHTML = headerHtml;

  const heights = selected.heights || [];
  if (heights.length === 0) {
    document.getElementById("tower-grid").innerHTML =
      `<div class="no-data">${esc(t('msg.no_data', 'No coordinate data available'))}</div>`;
    return;
  }

  let html = `<table class="grid-table">
    <thead>
      <tr>
        <th class="col-y">${esc(t('table.standing_height', 'Standing Height'))}</th>
        <th class="col-front">${esc(t('table.front', 'Front'))}</th>
        <th class="col-back">${esc(t('table.back', 'Back'))}</th>
      </tr>
    </thead>
    <tbody>`;

  heights.forEach(row => {
    html += `<tr>
      <td class="y-cell">${esc(row.label)}</td>
      <td class="coord-cell">${renderOptions(row.front)}</td>
      <td class="coord-cell">${renderOptions(row.back)}</td>
    </tr>`;
  });

  html += '</tbody></table>';
  document.getElementById("tower-grid").innerHTML = html;
}

function initLangSelect() {
  const sel = document.getElementById('lang-select');
  if (!sel || !window.I18N) return;

  I18N.list().then(langs => {
    const active = I18N.current();
    sel.innerHTML = langs
      .map(l => `<option value="${esc(l.code)}"${l.code === active ? ' selected' : ''}>${esc(l.name)}</option>`)
      .join('');
    sel.addEventListener('change', () => I18N.set(sel.value));
  });
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
  initDarkMode();
  initLangSelect();

  const towerGrid = document.getElementById('tower-grid');
  if (towerGrid) {
    const langReady = window.I18N ? I18N.ready : Promise.resolve();
    Promise.all([
      fetch(DATA_URL + '?t=' + Date.now()).then(r => r.json()),
      langReady
    ])
      .then(([data]) => {
        towers = data.towers;
        selectFromUrl();
        const canonical = '#' + slugify(selected.name);
        if (location.hash !== canonical) {
          history.replaceState(null, '', canonical);
        }
        window.addEventListener('popstate', selectFromUrl);
      })
      .catch(err => {
        console.error('Failed to load data:', err);
        towerGrid.innerHTML =
          `<div class="no-data">${esc(t('msg.load_failed', 'Failed to load tower data'))}</div>`;
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
