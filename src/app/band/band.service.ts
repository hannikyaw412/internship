import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BandService {

  constructor() { }

  getBand(){
      const bandList=[
        {bandName : "Ni Ni Khin Zaw" , groupMember :"4" , phone :"09761275382" , address :"(21)Q, Yangon Tsp" , gender: "Female" },
        {singrerName : "Eaint Chit" ,groupMember :"5" , phone :"09761275382" , address :"Tha Mine", gender :"Female" },
        {singrerName : "Wai La" , groupMember :"7" ,phone :"09761275382" , address :"(53)Street, Yangon" , gender: "Male" },
        {singrerName : "Shwe Htoo" , groupMember :"4" ,phone :"09761275382" , address :"Mayangone Tsp" , gender: "Male" },
        {singrerName : "Bunny Phyo" , groupMember :"6" ,phone :"09761275382" , address :"(23)Street , Yangon" , gender: "Male" },
        {singrerName : "Mi Sandi" , groupMember:"5" , phone :"09761275382" , address :"(2)Q, Yangon" , gender: "Female" }
      ];
      return bandList;
    }
    
  }

