import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-brand-create',
  templateUrl: './brand-create.component.html',
  styleUrls: ['./brand-create.component.css']
})
export class BrandCreateComponent implements OnInit {

  bandCreateForm : FormGroup;

  constructor(private fb : FormBuilder, private  _router : Router) { }

  bandCreate(){
    this.bandCreateForm=this.fb.group({

      name :['' , Validators.required],
      groupMember :['', Validators.required],
      phone: ['', [Validators.required, Validators.pattern("[0-9]{11}")]],
      address: ['', Validators.required]

    });
  }

  createBand(){
    console.log(this.bandCreateForm.value);
    this.bandCreateForm.reset();
    this._router.navigate(['./band']);
  }

  ngOnInit(): void {
    this.bandCreate();
  }

}
