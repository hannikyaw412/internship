import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WriterCreateComponent } from './writer-create/writer-create.component';
import { Routes, RouterModule } from '@angular/router';
import { WriterComponent } from './writer.component';

const routes = [

  { path: '', component: WriterComponent },
  // { path: '', redirectTo: 'list', pathMatch: 'full' },

  { path: 'create', component: WriterCreateComponent }
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class WriterRoutingModule { }
