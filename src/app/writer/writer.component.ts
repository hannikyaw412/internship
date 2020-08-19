import { Component, OnInit } from '@angular/core';
import { WriterService } from './writer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-writer',
  templateUrl: './writer.component.html',
  styleUrls: ['./writer.component.css']
})
export class WriterComponent implements OnInit {

  writerLists = [];
  constructor(
    private writerService: WriterService,
    private _router: Router
    ) { }

  ngOnInit(): void {
    
    this.writerLists = this.writerService.getWriter();
  }

  goToCreate() {
    this._router.navigate(['writer/create']);
  }

}
