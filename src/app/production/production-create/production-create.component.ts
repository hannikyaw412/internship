import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder , Validators} from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-production-create',
  templateUrl: './production-create.component.html',
  styleUrls: ['./production-create.component.css']
})
export class ProductionCreateComponent implements OnInit {

  createProductionForm :FormGroup;

  constructor(
    private fb: FormBuilder,
    private _routeer :Router
    
    ) { }

  createProduction(){
    this.createProductionForm=this.fb.group({

      name: ['', Validators.required],
      phone: ['', [Validators.required, Validators.pattern("[0-9]{11}")]],
      address: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.createProduction();
  }
  onCreate(){
    console.log(this.createProductionForm.value);
    this.createProductionForm.reset();
    this._routeer.navigate(['./production']);

  }

}
