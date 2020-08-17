import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TrackRoutingModule } from './track-routing.module';
import { TrackComponent } from './track.component';
import { TrackCreateComponent } from './track-create/track-create.component';


@NgModule({
  declarations: [TrackComponent, TrackCreateComponent],
  imports: [
    CommonModule,
    TrackRoutingModule
  ]
})
export class TrackModule { }
