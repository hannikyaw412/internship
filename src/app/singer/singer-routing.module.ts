import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SingerCreateComponent } from './singer-create/singer-create.component';
import { SingerListComponent } from './singer-list/singer-list.component';
import { Routes, RouterModule } from '@angular/router';
import { SingerComponent } from './singer.component';

const routescreate = [
  { path: '', component: SingerComponent },
  // { path: '', redirectTo: 'list', pathMatch: 'full' },
  { path: 'create', component: SingerCreateComponent },
  // { path: 'singer/list', component: SingerListComponent },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routescreate)
  ]
})
export class SingerRoutingModule { }

