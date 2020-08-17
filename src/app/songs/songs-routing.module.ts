import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SongsCreateComponent } from './songs-create/songs-create.component';
//import { SongsListComponent } from './songs-list/songs-list.component';
import { Routes, RouterModule } from '@angular/router';

const routes=[
  { path: '', redirectTo: '/songs', pathMatch: 'full' },
  {path : 'songs-create' , component : SongsCreateComponent},
 // { path : 'songs-list', component : SongsListComponent}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,RouterModule.forChild(routes)
  ]
})
export class SongsRoutingModule { }
