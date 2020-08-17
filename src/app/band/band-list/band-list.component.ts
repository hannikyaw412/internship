import { Component, OnInit } from '@angular/core';
import {BandService } from '../band.service'

@Component({
  selector: 'app-band-list',
  templateUrl: './band-list.component.html',
  styleUrls: ['./band-list.component.css']
})
export class BandListComponent implements OnInit {

  //bandLists=[];


  constructor(private bandService : BandService) { }

  ngOnInit(): void {
    //this.bandLists=this.bandService.getBand();
  }

}
