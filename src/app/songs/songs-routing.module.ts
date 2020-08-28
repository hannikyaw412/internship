import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SongsCreateComponent } from './songs-create/songs-create.component';
import { Routes, RouterModule } from '@angular/router';
import { SongsComponent } from './songs.component';

const routes = [
  { path: '', component: SongsComponent },
  { path: 'create', component: SongsCreateComponent },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class SongsRoutingModule { }
