import { series } from "./data.js";
const tbody = document.getElementById("seriesBody");
const temporadas = document.getElementById("temporadas");
series.forEach(serie => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
    <td>${serie["id"]}</td>
    <td><a href="${serie["link"]}" target="_blank">${serie["name"]}</a></td>
    <td>${serie["channel"]}</td>
    <td>${serie["seasons"]}</td>
  `;
    tbody.appendChild(tr);
});
const totalSeasons = series.reduce((sum, serie) => sum + serie["seasons"], 0);
const average = totalSeasons / series.length;
temporadas.textContent = `Seasons average: ${average.toFixed(2)}`;
