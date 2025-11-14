import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { App } from './app';
import { SeriesModule } from './series/series-module';

@NgModule({
  declarations: [
    App
  ],
  imports: [
    BrowserModule,
    SeriesModule,
    HttpClientModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }
