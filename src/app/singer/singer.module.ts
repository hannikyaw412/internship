import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SingerCreateComponent } from './singer-create/singer-create.component';
//import { SingerListComponent } from './singer-list/singer-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SingerService } from './singer.service';
import { SingerRoutingModule } from './singer-routing.module';
import { SingerComponent } from './singer.component';



@NgModule({
  declarations: [
    SingerCreateComponent,
   
    SingerComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SingerRoutingModule
  ],
  schemas: [
    NO_ERRORS_SCHEMA
  ],
  providers: [SingerService],

})
export class SingerModule { }
