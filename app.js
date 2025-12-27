let selected = towers[0];

function renderCoord(c, normalY) {
  const d = c.t?.includes("d");
  const a = c.t?.includes("a");
  const b = c.t?.includes("b");
  const e = c.t?.includes("e") && !b;
  const p = c.t?.includes("p") && !b;
  
  let cls = "coord coord-default";
  if (b) cls = "coord coord-best";
  else if (e) cls = "coord coord-easy";
  else if (p) cls = "coord coord-popular";
  
  const displayY = c.y || (normalY ? `Y${normalY}` : "");
  
  return `<span class="${cls}">
    ${displayY ? `<span class="coord-y">${displayY}</span>` : ""}
    <span class="coord-xz">${c.xz}</span>
    ${d ? `<span class="coord-double">(Double)</span>` : ""}
    ${a ? `<span>💥</span>` : ""}
  </span>`;
}

function renderButtons() {
  const cats = { small: "small-towers", tall: "tall-towers", special: "special-towers" };
  const colors = { small: "btn-small", tall: "btn-tall", special: "btn-special" };
  
  Object.keys(cats).forEach(cat => {
    document.getElementById(cats[cat]).innerHTML = towers
      .filter(t => t.category === cat)
      .map(t => {
        const isSelected = selected.name === t.name;
        return `<button onclick="selectTower('${t.name}')" class="btn ${isSelected ? colors[cat] : 'btn-default'}">
          ${t.name}${t.h ? ` <span>(${t.h})</span>` : ""}
        </button>`;
      }).join("");
  });
}

function renderDetails() {
  // Header
  document.getElementById("tower-header").innerHTML = `
    <span class="tower-name">${selected.name}</span>
    ${selected.altName ? `<span class="tower-alt">(${selected.altName})</span>` : ""}
    ${selected.h ? `<span class="tower-height">Height: ${selected.h}</span>` : ""}
  `;
  
  document.getElementById("tower-normaly").innerHTML = selected.normalY 
    ? `<span class="normal-y">Normal Y: <span>${selected.normalY}</span></span>` 
    : "";

  // Front low offset
  let frontLowHtml = "";
  if (selected.frontLow) {
    frontLowHtml = `
      <div class="divider">
        <div class="divider-label">Low Offset:</div>
        <div class="row">
          <span class="row-label">Y:</span>
          <span class="row-value yellow">${selected.frontLow.y.join(", ")}</span>
        </div>
        <div class="row">
          <span class="row-label">Coords:</span>
          <span class="row-value cyan">${selected.frontLow.xz}</span>
        </div>
      </div>
    `;
  }

  // Back section
  let backHtml = selected.back 
    ? `
      <div class="row">
        <span class="row-label">Y Heights:</span>
        <span class="row-value yellow">${selected.back.y.join(", ")}</span>
      </div>
      <div class="row">
        <span class="row-label">Coords:</span>
        <span class="row-value cyan">${selected.back.xz}</span>
        ${selected.back.note ? `<span class="row-note">(${selected.back.note})</span>` : ""}
      </div>
    `
    : `<div class="no-back">No back setup</div>`;

  // Alternatives
  let altsHtml = "";
  if (selected.alts?.length) {
    altsHtml = `
      <div class="alts-section">
        <div class="alts-label">Alternative Setups</div>
        <div class="alts">
          ${selected.alts.map(c => renderCoord(c, selected.normalY)).join("")}
        </div>
      </div>
    `;
  }

  // Combine all
  document.getElementById("tower-details").innerHTML = `
    <div class="grid">
      <div class="box">
        <div class="box-label front">Front</div>
        <div class="row">
          <span class="row-label">Y Heights:</span>
          <span class="row-value yellow">${selected.front.y.join(", ")}</span>
        </div>
        <div class="row">
          <span class="row-label">Coords:</span>
          <span class="row-value cyan">${selected.front.xz}</span>
        </div>
        ${frontLowHtml}
      </div>
      <div class="box">
        <div class="box-label back">Back</div>
        ${backHtml}
      </div>
    </div>
    ${altsHtml}
  `;
}

function selectTower(name) {
  selected = towers.find(t => t.name === name);
  renderButtons();
  renderDetails();
}

// Initialize
renderButtons();
renderDetails();
