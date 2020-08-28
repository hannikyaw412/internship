import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SingerCreateComponent } from './singer-create/singer-create.component';
import { Routes, RouterModule } from '@angular/router';
import { SingerComponent } from './singer.component';

const routescreate = [
  { path: '', component: SingerComponent },

  { path: 'create', component: SingerCreateComponent },

];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routescreate)
  ]
})
export class SingerRoutingModule { }

