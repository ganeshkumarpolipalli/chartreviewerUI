import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuerybuilderComponent } from './querybuilder/querybuilder.component';
import {  BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import {DataTableModule} from "angular-6-datatable";
import { ChartDataTableComponent } from './chart-data-table/chart-data-table.component';


@NgModule({
  declarations: [
    AppComponent,
    QuerybuilderComponent,
    ChartDataTableComponent
  ],
  imports: [
    BrowserModule,
    DataTableModule,
    AppRoutingModule,
    BsDatepickerModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
