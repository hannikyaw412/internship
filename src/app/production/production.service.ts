import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductionService {

  constructor() { }

  getProduction(){
    const productionList=[
      {productionName : "Ni Ni Khin Zaw" , phone :"09761275382" , address :"(21)Q, Yangon Tsp"  },
      {productionName : "Eaint Chit" , phone :"09761275382" , address :"Tha Mine" },
      {productionName : "Wai La" , phone :"09761275382" , address :"(53)Street, Yangon" },
      {productionName : "Shwe Htoo" , phone :"09761275382" , address :"Mayangone Tsp"  },
      {productionName : "Bunny Phyo" , phone :"09761275382" , address :"(23)Street , Yangon" },
      {productionName : "Mi Sandi" , phone :"09761275382" , address :"(2)Q, Yangon"  }
    ];
    return productionList;
 

  
}
}
