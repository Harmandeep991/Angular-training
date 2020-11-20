import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css']
})
export class ProfilePageComponent implements OnInit {
  imageSrc: string;
  myForm = new FormGroup({
    name: new FormControl('',[Validators.required]),
    fileSource: new FormControl('', [Validators.required]),
    file: new FormControl('', [Validators.required])
  })
  constructor() { }
  ngOnInit(): void {
  }
  onFileChange(event) {
    const reader = new FileReader();    
    if(event.target.files && event.target.files.length) {
      const [file] = event.target.files;
      reader.readAsDataURL(file);
       reader.onload = () => {   
        this.imageSrc = reader.result as string;     
        // this.myForm.patchValue({
        //   fileSource: reader.result
        // });   
      };
   
    }
  } 

}
