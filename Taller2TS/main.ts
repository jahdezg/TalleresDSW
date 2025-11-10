import { series } from "./data.js";

const tbody = document.getElementById("seriesBody") as HTMLElement;
const temporadas = document.getElementById("temporadas") as HTMLElement;
const serieCard = document.getElementById("serieCard") as HTMLElement;

series.forEach(serie => {
  const tr = document.createElement("tr");

  tr.innerHTML = `
    <td>${serie["id"]}</td>
    <td><a href="#" class="serie-link" data-id="${serie["id"]}">${serie["name"]}</a></td>
    <td>${serie["channel"]}</td>
    <td>${serie["seasons"]}</td>
  `;

  tbody.appendChild(tr);
});

const totalSeasons = series.reduce((sum, serie) => sum + serie["seasons"], 0);
const average = totalSeasons / series.length;
temporadas.textContent = `Seasons average: ${average.toFixed(2)}`;

tbody.addEventListener("click", (event) => {
  const target = event.target as HTMLElement;
  if (target.classList.contains("serie-link")) {
    event.preventDefault();
    const id = Number(target.getAttribute("data-id"));
    const serie = series.find(s => s["id"] === id);
    if (serie) {
      mostrarCard(serie);
    }
  }
});

function mostrarCard(serie: any): void {
  serieCard.innerHTML = `
    <div class="card" style="width: 20rem;">
      <img src="${serie["image"]}" class="card-img-top" alt="${serie["name"]}">
      <div class="card-body">
        <h5 class="card-title">${serie["name"]}</h5>
        <p class="card-text">${serie["description"]}</p>
        <a href="${serie["link"]}" target="_blank" class="btn btn-primary">More info</a>
      </div>
    </div>
  `;
}
