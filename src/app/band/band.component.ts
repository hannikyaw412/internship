import { Component, OnInit } from '@angular/core';
import { BandService } from './band.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-band',
  templateUrl: './band.component.html',
  styleUrls: ['./band.component.css']
})
export class BandComponent implements OnInit {

  bandLists = [];


  constructor(
    private bandService: BandService,
    private _router : Router
    ) { }

  ngOnInit(): void {
    this.bandLists = this.bandService.getBand();

  }

  goToCreate() {
    this._router.navigate(['band/create']);
  }


}
