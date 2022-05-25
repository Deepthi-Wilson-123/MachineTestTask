import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css']
})
export class RegistrationFormComponent implements OnInit {
  date:any
  
  registerForm = this.fb.group({
    firstname: ['', [Validators.required, Validators.pattern('[A-Za-z ]*')]],
    lastname: ['', [Validators.required, Validators.pattern('[A-Za-z ]*')]],
    email: ['', [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
    phonenumber: ['', [Validators.required, Validators.pattern('^((\\+91-?)|0)?[0-9]{10}$')]]

  })


  constructor(private router: Router, private fb: FormBuilder) {this.date = new Date() }

  ngOnInit(): void {
  }
  register() {
    if (this.registerForm.valid) {
      var firstname = this.registerForm.value.firstname
      var lastname = this.registerForm.value.lastname
      var email = this.registerForm.value.email
      var phonenumber = this.registerForm.value.phonenumber
      localStorage.setItem('firstname', JSON.stringify(firstname))
      localStorage.setItem('lastname', JSON.stringify(lastname))
      localStorage.setItem('email', JSON.stringify(email))
      localStorage.setItem('phonenumber', JSON.stringify(phonenumber))
      this.router.navigateByUrl("dashboard")
    } else {
      alert("Invalid Form")
    }
  }

}
