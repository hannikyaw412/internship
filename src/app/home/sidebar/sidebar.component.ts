import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

    constructor(private fb: FormBuilder, private _router: Router) { }

  ngOnInit(): void {
  }

}
