import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-singer-create',
  templateUrl: './singer-create.component.html',
  styleUrls: ['./singer-create.component.css']
})
export class SingerCreateComponent implements OnInit {

  addSingerForm: FormGroup;

  constructor(private fb: FormBuilder, private _router: Router) {

  }

  singer() { 

    this.addSingerForm = this.fb.group({
      name: ['', Validators.required],
      phone: ['', [Validators.required, Validators.pattern("[0-9]{11}")]],
      address: ['', Validators.required],
      gender :['', Validators.required]

    });
  }


  singerCreate() {
    console.log(this.addSingerForm.value);
    this.addSingerForm.reset();
    this._router.navigate(['./singer']);
  }

  
  

  ngOnInit(): void {

    this.singer();
    
  }

}
