import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SongsCreateComponent } from './songs-create/songs-create.component';
//import { SongsListComponent } from './songs-list/songs-list.component';
import { SongsComponent } from './songs.component';



@NgModule({
  declarations: [
    SongsCreateComponent,
   // SongsListComponent,
    SongsComponent
  ],

  imports: [
    CommonModule
  ]
})
export class SongsModule { }
