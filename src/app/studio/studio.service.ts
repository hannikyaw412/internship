import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudioService {

  constructor() { }

  getStudio(){
    const studioList=[
      { studioName : "" , address : " " , phone : " " },
      { studioName : "" , address : " " , phone : " " },
      { studioName : "" , address : " " , phone : " " },
      { studioName : "" , address : " " , phone : " " },
    ]
    return studioList;

  }
}
