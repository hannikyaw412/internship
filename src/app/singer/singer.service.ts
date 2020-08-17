import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SingerService {

  constructor() { }
  getSinger(){
    const singerList=[
      {singrerName : "Ni Ni Khin Zaw" , phone :"09761275382" , address :"(21)Q, Yangon Tsp" , gender: "Female" },
      {singrerName : "Eaint Chit" , phone :"09761275382" , address :"Tha Mine", gender :"Female" },
      {singrerName : "Wai La" , phone :"09761275382" , address :"(53)Street, Yangon" , gender: "Male" },
      {singrerName : "Shwe Htoo" , phone :"09761275382" , address :"Mayangone Tsp" , gender: "Male" },
      {singrerName : "Bunny Phyo" , phone :"09761275382" , address :"(23)Street , Yangon" , gender: "Male" },
      {singrerName : "Mi Sandi" , phone :"09761275382" , address :"(2)Q, Yangon" , gender: "Female" }
    ];
    return singerList;
  }
}
