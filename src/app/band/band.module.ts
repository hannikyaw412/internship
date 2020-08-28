import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrandCreateComponent } from './brand-create/brand-create.component';
import { BandService } from './band.service';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BandComponent } from './band.component';
import { BandRoutingModule } from './band-routing.module';



@NgModule({
  declarations: [
    BrandCreateComponent,
    BandComponent
  ],

  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    BandRoutingModule
  ],

  providers: [BandService]
})

export class BandModule { }
