import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlbumCreateComponent } from './album-create/album-create.component';
import { AlbumListComponent } from './album-list/album-list.component';
import { AlbumComponent } from './album.component';
import { AlbumRoutingModule } from './album-routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AlbumService } from './album.service';
//import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSelectModule} from '@angular/material/select'; 


@NgModule({
  declarations: [
    AlbumCreateComponent,
    AlbumListComponent,
    AlbumComponent],
  imports: [
    CommonModule,
    AlbumRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatSelectModule

  ],
  providers : [AlbumService],
})
export class AlbumModule { }
