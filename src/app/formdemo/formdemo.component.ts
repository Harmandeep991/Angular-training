import { Component, OnInit } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
@Component({
  selector: 'app-formdemo',
  templateUrl: './formdemo.component.html',
  styleUrls: ['./formdemo.component.css']
})
export class FormdemoComponent implements OnInit {
  signupForm: FormGroup;
  constructor(private fb: FormBuilder) {
    this.createForm();
  }
  createForm() {
    this.signupForm = this.fb.group({
       name: ['', Validators.required ],
       email: ['', [Validators.required,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")] ],
       password: ['', Validators.required],
       country: ['', Validators.required ],
       state: ['', Validators.required ],
       city: ['', Validators.required ],

    });
  }
  
  get Email(){
    return this.signupForm.get('email')
    } 

  submitForm() {
   if (this.signupForm.valid){
    alert("thank you ! your form is submitted successfully")
    console.log(this.signupForm.value);
   }else{
   alert("please fill all the details")
   }

}
  resetValues() {
   this.signupForm.setValue({
    name:'',
    email:'',
    password:'',
    country:'',
    state:'',
    city:'',
    
  })
}
  ngOnInit(): void {
  }
}
