import { Component, OnInit } from '@angular/core';
import { SingerService } from './singer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-singer',
  templateUrl: './singer.component.html',
  styleUrls: ['./singer.component.css']
})
export class SingerComponent implements OnInit {

  constructor(
    private singerService: SingerService,
    private _router: Router
  ) { }

  singerLists = [];
  ngOnInit(): void {
    this.singerLists = this.singerService.getSinger();
  }

  goToCreate() {
    this._router.navigate(['singer/create']);
  }
}
