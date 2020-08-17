import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder , Validators} from '@angular/forms';
import { ProductionService } from '../production.service';

@Component({
  selector: 'app-production-list',
  templateUrl: './production-list.component.html',
  styleUrls: ['./production-list.component.css']
})
export class ProductionListComponent implements OnInit {

    productionLists =[];
  constructor(private productionService : ProductionService) { }

  ngOnInit(): void {
    this.productionLists=this.productionService.getProduction();
  }

}
