import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms'
import { FormBuilder } from '@angular/forms'
import { Validators } from '@angular/forms'
import { Match } from './ConfirmedPassword'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';

  profileForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.profileForm = this.formBuilder.group({
      FirstName: ['',Validators.required],
      LastName: ['',Validators.required],
      Password:['', [Validators.required, Validators.minLength(8), Validators.maxLength(15)]],
      ConfirmPassword:['', Validators.required],
      Email:['', [Validators.required,Validators.email]],
      PhoneNo:['', [Validators.required, Validators.pattern("[0-9]{10}")]],
     Street: ['',Validators.required],
        Area:['',Validators.required],
        City: ['',Validators.required],
        State: ['',Validators.required],
        pincode: ['', [Validators.required, Validators.pattern("[0-9]{6}")]],
        Country: ['',Validators.required]
    },{ 
        validator:Match('Password','ConfirmPassword')
      })
  }

  // convenience getter for easy access to form fields
  get f() { return this.profileForm.controls; }

  onSubmit() {
      this.submitted = true;
      console.log(this.profileForm.value)

      // stop here if form is invalid
      if (this.profileForm.invalid) {
          return;
      }

  }

  onReset() {
      this.submitted = false;
      this.profileForm.reset();
  }
}
