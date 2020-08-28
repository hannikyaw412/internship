import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { SongsService } from '../songs.service';

@Component({
  selector: 'app-songs-create',
  templateUrl: './songs-create.component.html',
  styleUrls: ['./songs-create.component.css']
})
export class SongsCreateComponent implements OnInit {

  addSongsForm: FormGroup;
  selectedValue = "";
  selectedStatus = "";

  singerLists = [
    { value: 1, singerName: "Wine Su Khaing Thein" },
    { value: 2, singerName: " Sandi Myint Lwin" },
    { value: 3, singerName: "Eaint Chit" },
    { value: 4, singerName: "Ar-T" },
  ];

  writerLists = [
    { value: 1, writerName: "Wai Gyi" },
    { value: 2, writerName: " Bunny Phyo" },
    { value: 3, writerName: "Eaint Chit" },
    { value: 4, writerName: "Sai Sai Kham Leng" },
  ];

  productionLists = [
    { value: 1, name: "Lucky 7" },
    { value: 2, name: "Sapal Phyu" },
    { value: 3, name: "4 Clover" },
  ];

  bandLists = [
    { value: 1, name: "Boy Band" },
    { value: 2, name: " Lipzat" },
    { value: 3, name: "72 Coder" },
  ];

  studioLists = [
    { value: 1, name: "Lucky 7" },
    { value: 2, name: "Logistics" },
    { value: 3, name: "Shun Ku" },
  ];

  songInfo = {
    title: "",
    singerName: "",
    writerName: " ",
    productionName: "",
    bandName: "",
    studioName: "",
    fileName: ""
  }

  songs() {
    this.addSongsForm = this.fb.group({
      title: ['', Validators.required],
      singerName: ['', Validators.required],
      writerName: ['', Validators.required],
      productionName: ['', Validators.required],
      bandName: ['', Validators.required],
      studioName: ['', Validators.required],
      file: ['', Validators.required]
    });

  }

  constructor(
    private fb: FormBuilder,
    private _router: Router,

  ) { }

  ngOnInit(): void {
    this.songs();
  
  }

  onFileChange(event) {
    let reader = new FileReader();
    let file = event.target.files[0];
    reader.readAsDataURL(file);
    reader.onload = function () {
      // console.log(reader.result);
      //console.log(file);
    }
  }
  onUpload() {
    console.log(this.addSongsForm.value);
   // console.log(this.songInfo);
    this.addSongsForm.reset();
    this._router.navigate(['./songs']);

  }

}


//public onFileChange(event) {
  //     const reader = new FileReader();

  //      if (event.target.files && event.target.files.length) {
  //       this.fileName = event.target.files[0].name;
  //       const [file] = event.target.files;
  //       reader.readAsDataURL(file);
  //       console.log(reader.readAsDataURL(file));
  //       console.log(file);
  //     reader.onload = () => {
  //       this.addSongsForm.patchValue({
  //         file: reader.result
  //       });
  //     };
  //   }
  // }


