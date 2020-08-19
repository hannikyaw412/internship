import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ProductionCreateComponent } from './production-create/production-create.component';
import { ProductionComponent } from './production.component';

const routes = [
  { path: '', component: ProductionComponent },
  { path: 'create', component: ProductionCreateComponent },
  { path: '', redirectTo: '/production', pathMatch: 'full' }
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class ProductionRoutingModule { }
