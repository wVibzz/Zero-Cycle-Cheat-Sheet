let currentMode = 'top';
let setup = topSetup;
let selected = setup[0];

function setMode(mode) {
  currentMode = mode;
  setup = mode === 'top' ? topSetup : sideSetup;
  
  document.getElementById('btn-mode-top').className = `mode-btn ${mode === 'top' ? 'active' : ''}`;
  document.getElementById('btn-mode-side').className = `mode-btn ${mode === 'side' ? 'active' : ''}`;
  
  const found = setup.find(t => t.name === selected.name);
  selected = found || setup[0];
  
  renderButtons();
  renderGrid();
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

function selectTower(name) {
  selected = setup.find(t => t.name === name);
  renderButtons();
  renderGrid();
}

function renderCoords(coords) {
  if (!coords || coords.length === 0) {
    return '<span class="empty-cell">—</span>';
  }
  return coords.map(c => {
    const doubleTag = c.t?.includes('d') ? ' (Double)' : '';
    return `<span class="coord-chip">${c.xz}${doubleTag}</span>`;
  }).join('');
}

function renderGrid() {
  // Render header
  document.getElementById("tower-header").innerHTML = `
    <span class="tower-name">${selected.name}</span>
    ${selected.altName ? `<span class="tower-alt">(${selected.altName})</span>` : ''}
    ${selected.h ? `<span class="meta-tag meta-height">H: ${selected.h}</span>` : ''}
    <span class="meta-tag meta-mode">${currentMode}</span>
  `;

  // Collect all unique Y values from front, frontLow, and back
  const allYs = new Set();
  if (selected.front) Object.keys(selected.front).forEach(y => allYs.add(y));
  if (selected.frontLow) Object.keys(selected.frontLow).forEach(y => allYs.add(y));
  if (selected.back) Object.keys(selected.back).forEach(y => allYs.add(y));
  
  const sortedYs = Array.from(allYs).sort((a, b) => Number(a) - Number(b));
  const hasFrontLow = !!selected.frontLow;

  if (sortedYs.length === 0) {
    document.getElementById("tower-grid").innerHTML = '<div class="no-data">No coordinate data available</div>';
    return;
  }

  // Build table
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

  sortedYs.forEach(y => {
    const frontCoords = selected.front?.[y];
    const frontLowCoords = selected.frontLow?.[y];
    const backCoords = selected.back?.[y];
    
    html += `<tr>
      <td class="y-cell">Y${y}</td>
      <td class="coord-cell">${renderCoords(frontCoords)}</td>
      ${hasFrontLow ? `<td class="coord-cell">${renderCoords(frontLowCoords)}</td>` : ''}
      <td class="coord-cell">${renderCoords(backCoords)}</td>
    </tr>`;
  });

  html += '</tbody></table>';
  document.getElementById("tower-grid").innerHTML = html;
}

// Initialize
renderButtons();
renderGrid();
