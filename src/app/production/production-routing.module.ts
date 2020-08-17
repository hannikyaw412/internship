import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes , RouterModule } from '@angular/router';
import {  ProductionCreateComponent} from './production-create/production-create.component';
import { ProductionListComponent } from './production-list/production-list.component';

const routes=[
  
  { path : 'production-create' , component : ProductionCreateComponent},
  { path : 'production-list', component : ProductionListComponent},
  { path: '', redirectTo: '/production', pathMatch: 'full' }
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,RouterModule.forChild(routes),
  ]
})
export class ProductionRoutingModule { }
