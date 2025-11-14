import { Component, OnInit } from '@angular/core';
import { SeriesService } from '../series';
import { Serie } from '../serie';

@Component({
  selector: 'app-listar-series',
  standalone: false,
  templateUrl: './listar-series.html',
  styleUrl: './listar-series.css',
})
export class ListarSeries implements OnInit {

  series: Serie[] = [];
  promedioTemporadas: number = 0;
  serieSeleccionada: Serie | null = null;


  constructor(private seriesService: SeriesService) {}

  ngOnInit(): void {
    this.seriesService.getSeries().subscribe(data => {
      this.series = data;
      this.calcularPromedio();
    });
  }

  calcularPromedio(): void {
    if (this.series.length === 0) return;
    const total = this.series.reduce((sum, s) => sum + s.seasons, 0);
    this.promedioTemporadas = total / this.series.length;
  }

  seleccionarSerie(serie: Serie): void {
    this.serieSeleccionada = serie;
  }
}
