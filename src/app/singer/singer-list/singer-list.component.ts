import { Component, OnInit } from '@angular/core';
import { SingerService } from '../singer.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-singer-list',
  templateUrl: './singer-list.component.html',
  styleUrls: ['./singer-list.component.css']
})
export class SingerListComponent implements OnInit {

  constructor() { }


  ngOnInit(): void {
  }
}
