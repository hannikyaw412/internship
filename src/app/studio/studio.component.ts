import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StudioService } from './studio.service';

@Component({
  selector: 'app-studio',
  templateUrl: './studio.component.html',
  styleUrls: ['./studio.component.css']
})
export class StudioComponent implements OnInit {

  studioLists = [];

  constructor(
    private studioService: StudioService,
    private _router: Router
  ) { }

  ngOnInit(): void {
    this.studioLists = this.studioService.getStudio();
  }

  goToCreate() {
    this._router.navigate(['studio/create']);
  }

}
