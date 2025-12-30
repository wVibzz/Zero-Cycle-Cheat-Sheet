let currentMode = 'top';
let setup = topSetup;
let selected = setup[0];
let frontY = null;
let frontLowY = null;
let backY = null;

function setMode(mode) {
  currentMode = mode;
  setup = mode === 'top' ? topSetup : sideSetup;
  
  document.getElementById('btn-mode-top').className = `mode-btn ${mode === 'top' ? 'active' : ''}`;
  document.getElementById('btn-mode-side').className = `mode-btn ${mode === 'side' ? 'active' : ''}`;

  const currentName = selected.name;
  const found = setup.find(t => t.name === currentName);
  selected = found || setup[0];

  frontY = null;
  frontLowY = null;
  backY = null;

  renderButtons();
  renderDetails();
}

function renderCoord(c) {
  const d = c.t?.includes("d");
  const a = c.t?.includes("a");
  const b = c.t?.includes("b");
  const e = c.t?.includes("e") && !b;
  const p = c.t?.includes("p") && !b;
  
  let cls = "coord";
  if (b) cls += " coord-best";
  else if (e) cls += " coord-easy";
  else if (p) cls += " coord-popular";
  
  return `<span class="${cls}">
    <span class="coord-xz">${c.xz}</span>
    ${d ? '<span class="coord-tag">Double</span>' : ''}
    ${a ? '<span>💥</span>' : ''}
  </span>`;
}

function renderButtons() {
  const cats = { small: "small-towers", tall: "tall-towers", special: "special-towers" };
  
  Object.keys(cats).forEach(cat => {
    document.getElementById(cats[cat]).innerHTML = setup
      .filter(t => t.category === cat)
      .map(t => {
        const isSelected = selected.name === t.name;
        const activeClass = isSelected ? `${cat}-active` : '';
        return `<button onclick="selectTower('${t.name}')" class="tower-btn ${activeClass}">
          ${t.name}
          ${t.h ? `<span class="tower-height">${t.h}</span>` : ''}
        </button>`;
      }).join("");
  });
}

function renderSection(data, selectedY, side, label, labelClass) {
  if (!data) {
    return `
      <div class="section-box">
        <div class="section-header ${labelClass}">${label}</div>
        <div class="no-data">No ${label.toLowerCase()} setup available</div>
      </div>
    `;
  }

  const heights = Object.keys(data);
  if (selectedY === null || !heights.includes(String(selectedY))) {
    selectedY = heights[0];
    if (side === 'front') frontY = selectedY;
    else if (side === 'frontLow') frontLowY = selectedY;
    else backY = selectedY;
  }

  const coords = data[selectedY] || [];

  return `
    <div class="section-box">
      <div class="section-header ${labelClass}">${label}</div>
      <div class="section-content">
        <div class="y-tabs">
          ${heights.map(y => `
            <button onclick="selectY('${side}', '${y}')" class="y-tab ${String(selectedY) === String(y) ? 'active' : ''}">
              Y${y}
            </button>
          `).join("")}
        </div>
        <div class="coords-grid">
          ${coords.map(c => renderCoord(c)).join("")}
        </div>
      </div>
    </div>
  `;
}

function renderDetails() {
  document.getElementById("tower-header").innerHTML = `
    <div class="tower-title">
      <span class="tower-name">${selected.name}</span>
      ${selected.altName ? `<span class="tower-alt">(${selected.altName})</span>` : ''}
    </div>
    <div class="tower-meta">
      ${selected.h ? `<span class="meta-tag meta-height">Height: ${selected.h}</span>` : ''}
      <span class="meta-tag meta-mode">${currentMode} Setup</span>
    </div>
  `;

  let html = '';
  
  // Front section
  html += renderSection(selected.front, frontY, 'front', 'Front', 'front');
  
  // Front Low section (if exists)
  if (selected.frontLow) {
    html += renderSection(selected.frontLow, frontLowY, 'frontLow', 'Front Low Offset', 'front');
  }
  
  // Back section
  html += renderSection(selected.back, backY, 'back', 'Back', 'back');

  document.getElementById("tower-details").innerHTML = html;
}

function selectTower(name) {
  selected = setup.find(t => t.name === name);
  frontY = null;
  frontLowY = null;
  backY = null;
  renderButtons();
  renderDetails();
}

function selectY(side, y) {
  if (side === 'front') frontY = y;
  else if (side === 'frontLow') frontLowY = y;
  else backY = y;
  renderDetails();
}

// Initialize
renderButtons();
renderDetails();
