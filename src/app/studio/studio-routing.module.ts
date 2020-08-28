import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudioCreateComponent } from './studio-create/studio-create.component';
import { Routes, RouterModule } from '@angular/router';
import { StudioComponent } from './studio.component';

const routes = [
  { path: '', component: StudioComponent },
  { path: 'create', component: StudioCreateComponent },

];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class StudioRoutingModule { }
