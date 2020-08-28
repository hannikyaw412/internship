import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SongsService {

  private fileList: string[] = new Array<string>();
  private fileList$: Subject<string[]> = new Subject<string[]>();

  constructor() { }

  // getSongs() {
  //   const songLists = [
  //     {
  //       singerName: ["Wine Su Khaing Thein", " Sandi Myint Lwin", "Eaint Chit", "Ar-T", "Shwe Htoo"],
  //     }
     
  //   ]
  //   return songLists;
  // }


  public list(): Observable<string[]> {
    return this.fileList$;
  }
}
