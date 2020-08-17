import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WriterService {

  constructor() { }
  getWriter() {
    const writerList = [
      { writerName: " ", phone: "09761275382", address: "(21)Q, Yangon Tsp", gender: "Female" },
      { writerName: " ", phone: "09761275382", address: "Tha Mine", gender: "Female" },
      { writerName: " ", phone: "09761275382", address: "(53)Street, Yangon", gender: "Male" },
      { writerName: " ", phone: "09761275382", address: "Mayangone Tsp", gender: "Male" },
      { writerName: " ", phone: "09761275382", address: "(23)Street , Yangon", gender: "Male" },
      { writerName: " ", phone: "09761275382", address: "(2)Q, Yangon", gender: "Female" }
    ];
    return writerList;
  }
}
