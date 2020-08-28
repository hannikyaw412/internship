import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrandCreateComponent } from './brand-create/brand-create.component';
import { Routes, RouterModule } from '@angular/router';
import { BandComponent } from './band.component';


const routes = [
  { path: '', component : BandComponent},

  { path: 'create', component: BrandCreateComponent },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class BandRoutingModule { }
