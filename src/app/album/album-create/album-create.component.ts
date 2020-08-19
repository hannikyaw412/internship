import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

interface Album {
  value: number;
  viewValue: string;
}

@Component({
  selector: 'app-album-create',
  templateUrl: './album-create.component.html',
  styleUrls: ['./album-create.component.css']
})



export class AlbumCreateComponent implements OnInit {

  addAlbumForm: FormGroup;
  selectedValue = "";

  constructor(
    private fb: FormBuilder,
    private _router: Router
  ) { }

  album() {
    this.addAlbumForm = this.fb.group({
      title: ['', Validators.required],
      type: ['', Validators.required],
      date: ['', Validators.required]
      
    });
  }

  albumCreate() {
    console.log(this.addAlbumForm.value);
    this.addAlbumForm.reset();
    this._router.navigate(['./album']);


  }

  ngOnInit(): void {
    this.album();
  }


  albums: Album[] = [
    { value: 1, viewValue: "single Album" },
    { value: 2, viewValue: "Multi Album" }

  ];

}
