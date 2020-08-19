import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductionCreateComponent } from './production-create/production-create.component';
import { ProductionListComponent } from './production-list/production-list.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ProductionService } from './production.service';
import { ProductionComponent } from './production.component';
import { ProductionRoutingModule } from './production-routing.module'
import { FormsModule} from '@angular/forms'


@NgModule({ 
  declarations: [
    ProductionCreateComponent,
    ProductionListComponent,
    ProductionComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    ProductionRoutingModule

  ],
  providers :[ProductionService]
})
export class ProductionModule { }
