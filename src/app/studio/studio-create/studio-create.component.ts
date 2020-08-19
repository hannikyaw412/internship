import { Component, OnInit } from '@angular/core';
import { FormBuilder , FormGroup, FormControl, NgForm, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { from } from 'rxjs';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-studio-create',
  templateUrl: './studio-create.component.html',
  styleUrls: ['./studio-create.component.css']
})
export class StudioCreateComponent implements OnInit {
 
  addStudioForm : FormGroup; 

  constructor(
    private fb: FormBuilder , 
    private _router :Router
    ) { }

  ngOnInit(): void {
    this.studio();
  }

  studio(){
    this.addStudioForm = this.fb.group({
      name: ['', Validators.required],
      phone: ['', [Validators.required, Validators.pattern("[0-9]{11}")]],
      address: ['', Validators.required],
      gender :['', Validators.required]

    });

}

createStudio(){
  console.log(this.addStudioForm.value);
  this.addStudioForm.reset();
  this._router.navigate(['./sudio']);
}
}
