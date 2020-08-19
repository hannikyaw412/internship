import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AlbumService {

  constructor() { }
  getAlbum(){
    const albumList=[
      {name : "Lucky" , type: 1 , date :"2020/4/12"},
      {name : "Eleven" , type: 2 , date :"2020/4/12"},
      {name : "Gar" , type: 1 , date :"2020/4/12"},
    ];
    return albumList;
  }
}
