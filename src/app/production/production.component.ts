import { Component, OnInit } from '@angular/core';
import { ProductionService } from './production.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-production',
  templateUrl: './production.component.html',
  styleUrls: ['./production.component.css']
})
export class ProductionComponent implements OnInit {

  constructor(
    private productionService : ProductionService,
    private _router : Router
  ) { }

  productionLists=[];

  ngOnInit(): void {
    this.productionLists=this.productionService.getProduction();
  }

  goToCreate(){
      this._router.navigate(['production/create']);
  }

}
