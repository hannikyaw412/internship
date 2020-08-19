import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlbumService} from './album.service'

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit {

  constructor(
    private albumService: AlbumService,
    private _router: Router
  ) { }
    albumLists=[];
  ngOnInit(): void {
    this.albumLists=this.albumService.getAlbum();
  }
  goToCreate(){
    this._router.navigate(['album/create']);
  }

}
