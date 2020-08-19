import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlbumCreateComponent } from './album-create/album-create.component';
import { AlbumListComponent } from './album-list/album-list.component';
import { Routes, RouterModule } from '@angular/router';
import { AlbumComponent } from './album.component';

const routes = [
  { path: '', component: AlbumComponent },
  
  { path: 'create', component: AlbumCreateComponent },

]

@NgModule({
  declarations: [],
  imports: [
    CommonModule, 
    RouterModule.forChild(routes)
  ]
})
export class AlbumRoutingModule { }
