import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { JqueryDatatableComponent } from './component/jquery-datatable/jquery-datatable.component';
import { AngularDatatableComponent } from './component/angular-datatable/angular-datatable.component';

const routes: Routes = [
  {path:'jquery-datatable', component:JqueryDatatableComponent},
  {path:'angular-datatable', component:AngularDatatableComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
