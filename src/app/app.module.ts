import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {DxChartModule, DxCheckBoxModule, DxDataGridModule, DxSelectBoxModule} from 'devextreme-angular';

@NgModule({
  imports: [
    BrowserModule,
    DxDataGridModule,
    DxSelectBoxModule,
    DxCheckBoxModule,
    DxChartModule
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);
