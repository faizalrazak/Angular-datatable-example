import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataTableModule } from "angular-6-datatable";
import { JqueryDatatableComponent } from './component/jquery-datatable/jquery-datatable.component';
import { AngularDatatableComponent } from './component/angular-datatable/angular-datatable.component';

@NgModule({
  declarations: [
    AppComponent,
    JqueryDatatableComponent,
    AngularDatatableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DataTableModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
