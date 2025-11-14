import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListarSeries } from './listar-series/listar-series';




@NgModule({
  declarations: [
    ListarSeries
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ListarSeries
  ]
})
export class SeriesModule { }
