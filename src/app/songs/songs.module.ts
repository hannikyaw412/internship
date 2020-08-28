import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SongsCreateComponent } from './songs-create/songs-create.component';
import { SongsComponent } from './songs.component';
import { SongsService } from './songs.service'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SongsRoutingModule } from './songs-routing.module';
import { MatSelectModule } from '@angular/material/select';




@NgModule({
  declarations: [
    SongsCreateComponent,
    SongsComponent
  ],

  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SongsRoutingModule,
    MatSelectModule
  ],
  providers: [SongsService]
})
export class SongsModule { }
