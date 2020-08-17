import { Component, OnInit } from '@angular/core';
import { WriterService} from '../writer.service';

@Component({
  selector: 'app-writer-list',
  templateUrl: './writer-list.component.html',
  styleUrls: ['./writer-list.component.css']
})
export class WriterListComponent implements OnInit {

  //writerLists=[];
  constructor() { }

  ngOnInit(): void {
   // this.writerLists=this.writerService.getWriter();
  }
  

}
