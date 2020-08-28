import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { SongsService } from './songs.service';
import { SingerService } from '../singer/singer.service';


@Component({
  selector: 'app-songs',
  templateUrl: './songs.component.html',
  styleUrls: ['./songs.component.css']
})
export class SongsComponent implements OnInit {

  songLists = [];


  constructor(
    private _router: Router,
    private songService: SongsService,
  ) { }

  ngOnInit(): void {
    //this.songLists=this.songService.list();

  }
  goToCreate() {
    this._router.navigate(['/songs/create']);
  }

}
