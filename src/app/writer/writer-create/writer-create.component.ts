import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Validators } from '@angular/forms';
import {Router} from '@angular/router'
import { from } from 'rxjs';

@Component({
  selector: 'app-writer-create',
  templateUrl: './writer-create.component.html',
  styleUrls: ['./writer-create.component.css']
})
export class WriterCreateComponent implements OnInit {

  addWriterForm :FormGroup;
  constructor(private fb: FormBuilder , private _router :Router) { }

  writer(){
    this.addWriterForm = this.fb.group({
      name: ['', Validators.required],
      phone: ['', [Validators.required, Validators.pattern("[0-9]{11}")]],
      address: ['', Validators.required],
      gender :['', Validators.required]

    });
  }

  ngOnInit(): void {
    this.writer();
  }

  onSubmit(){
    console.log(this.addWriterForm.value);
    this.addWriterForm.reset();
    this._router.navigate(['./writer']);
  }

}
