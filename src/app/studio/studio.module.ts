import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudioCreateComponent } from './studio-create/studio-create.component';
import { StudioListComponent } from './studio-list/studio-list.component';
import { StudioComponent } from './studio.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StudioService} from './studio.service'
import { StudioRoutingModule } from './studio-routing.module';


@NgModule({
  declarations: [
    StudioCreateComponent,
    StudioListComponent,
    StudioComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    StudioRoutingModule
  ],
  providers: [StudioService]
})
export class StudioModule { }
