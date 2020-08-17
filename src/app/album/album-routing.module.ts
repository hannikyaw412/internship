import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlbumCreateComponent } from './album-create/album-create.component';
import { AlbumListComponent } from './album-list/album-list.component';
import { Routes , RouterModule } from '@angular/router';

const routes=[
  { path: '', redirectTo: '/album', pathMatch: 'full' },
  {path : 'album-create' , component : AlbumCreateComponent},
  { path : 'album-list', component : AlbumListComponent}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,RouterModule.forChild(routes)
  ]
})
export class AlbumRoutingModule { }
