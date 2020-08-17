import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WriterListComponent } from './writer-list/writer-list.component';
import { WriterCreateComponent } from './writer-create/writer-create.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { WriterService } from './writer.service';
import { WriterComponent } from './writer.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { WriterRoutingModule } from './writer-routing.module';


@NgModule({
  declarations: [
    WriterListComponent,
    WriterCreateComponent,
    WriterComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    WriterRoutingModule
  ],
  schemas: [
    NO_ERRORS_SCHEMA
  ],
  providers: [WriterService]
})
export class WriterModule { }
