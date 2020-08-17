import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TrackComponent } from './track.component';
import { TrackCreateComponent } from './track-create/track-create.component';

const routes = [

  { path: '', component: TrackComponent },

  { path: 'create', component: TrackCreateComponent }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TrackRoutingModule { }
