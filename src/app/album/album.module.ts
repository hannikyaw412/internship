import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlbumCreateComponent } from './album-create/album-create.component';
import { AlbumListComponent } from './album-list/album-list.component';



@NgModule({
  declarations: [AlbumCreateComponent, AlbumListComponent],
  imports: [
    CommonModule
  ]
})
export class AlbumModule { }
