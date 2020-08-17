import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudioCreateComponent } from './studio-create/studio-create.component';
import { StudioListComponent } from './studio-list/studio-list.component';
import { StudioComponent } from './studio.component';



@NgModule({
  declarations: [StudioCreateComponent, StudioListComponent, StudioComponent],
  imports: [
    CommonModule
  ]
})
export class StudioModule { }
