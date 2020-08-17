import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudioCreateComponent } from './studio-create/studio-create.component';
import { StudioListComponent } from './studio-list/studio-list.component';
import { Routes ,RouterModule } from '@angular/router';

const routes=[
  { path: '', redirectTo: '/studio', pathMatch: 'full' },
  {path : 'studio-create' , component : StudioCreateComponent},
  { path : 'studio-list', component : StudioListComponent}
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule, RouterModule.forChild(routes)
  ]
})
export class StudioRoutingModule { }
