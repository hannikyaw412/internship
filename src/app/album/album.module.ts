import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlbumCreateComponent } from './album-create/album-create.component';
import { AlbumComponent } from './album.component';
import { AlbumRoutingModule } from './album-routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AlbumService } from './album.service';
//import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';


@NgModule({
  declarations: [
    AlbumCreateComponent,
    AlbumComponent],
  imports: [
    CommonModule,
    AlbumRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule

  ],
  providers: [AlbumService],
})
export class AlbumModule { }
