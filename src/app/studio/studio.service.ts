import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudioService {

  constructor() { }

  getStudio(){
    const studioList=[
      { studioName : "Lucky 7" , address : "(21)Q, Yangon Tsp" , phone : " 09978715536" },
      { studioName : "New Star" , address : "(53)Street, Yangon" , phone : "09763211872" },
      { studioName : "Logistic" , address : "Mayangone Tsp,Yaungon" , phone : " 09342876296" },
      { studioName : "Shan Ku" , address : "(23)Street , Yangon" , phone : " 09876915022" },
    ]
    return studioList;

  }
}
