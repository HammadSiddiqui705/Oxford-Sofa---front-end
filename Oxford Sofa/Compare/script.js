import { sofas } from '../Data/combinedata.js';

const box1 = document.getElementById("box1");
const box2 = document.getElementById("box2");
const tableBody = document.getElementById("comparison-table");

let selectedSofas = [null, null];

renderDropdown(0);
renderDropdown(1);
updateComparisonTable();

function renderDropdown(index) {
  const box = index === 0 ? box1 : box2;
  box.innerHTML = `
    <div class="comparison-box">
      <label class="form-label fw-semibold">Select a sofa</label>
      <select class="form-select" id="select-${index}">
        <option selected disabled value="">Select a sofa</option>
        ${sofas.map((sofa, i) => `<option value="${i}">${sofa.title}</option>`).join("")}
      </select>
    </div>
  `;

  document.getElementById(`select-${index}`).addEventListener("change", (e) => {
    const sofa = sofas[e.target.value];
    selectedSofas[index] = sofa;
    renderCard(sofa, index);
    updateComparisonTable();
  });
}

function renderCard(sofa, index) {
  const box = index === 0 ? box1 : box2;
  box.innerHTML = `
    <div class="card comparison-box sofa-card">
      <img src="${sofa.imageUrl}" class="card-img-top" alt="${sofa.title}">
      <div class="card-body">
        <span class="badge bg-secondary mb-2">${sofa.brand}</span>
        <h5 class="card-title">${sofa.title}</h5>
        <p class="h5 mb-3">${sofa.price}</p>
        <button class="btn" id="remove-${index}">Remove</button>
      </div>
    </div>
  `;

  document.getElementById(`remove-${index}`).addEventListener("click", () => {
    selectedSofas[index] = null;
    renderDropdown(index);
    updateComparisonTable();
  });
}

function updateComparisonTable() {
  const fields = ['price', 'brand', 'category', 'width', 'depth', 'height', 'materials', 'colors'];

  tableBody.innerHTML = fields.map(field => `
    <tr>
      <th>${capitalize(field)}</th>
      <td class="text-center">${selectedSofas[0]?.[field] ?? '-'}</td>
      <td class="text-center">${selectedSofas[1]?.[field] ?? '-'}</td>
    </tr>
  `).join('');
}

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
