import { Component, OnInit } from '@angular/core';
import { SingerService } from '../singer.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-singer-list',
  templateUrl: './singer-list.component.html',
  styleUrls: ['./singer-list.component.css']
})
export class SingerListComponent implements OnInit {

  constructor(
    private singerService: SingerService,
    private _router: Router
  ) { }

  //   singerLists = [];
  ngOnInit(): void {

    //     this.singerLists = this.singerService.getSinger();

    //   }
    //   goTo() {
    //     console.log("component change");
    //     this._router.navigate(['/singer-create']);
  }
}
