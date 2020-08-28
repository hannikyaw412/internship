import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudioCreateComponent } from './studio-create/studio-create.component';
import { StudioComponent } from './studio.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StudioService} from './studio.service'
import { StudioRoutingModule } from './studio-routing.module';


@NgModule({
  declarations: [
    StudioCreateComponent,
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
