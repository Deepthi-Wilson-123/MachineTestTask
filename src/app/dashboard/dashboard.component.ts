import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})


export class DashboardComponent implements OnInit {
  firstname:any
  lastname:any
  email:any
  phonenumber:any
  constructor(private router:Router) { 
    this.firstname = JSON.parse(localStorage.getItem("firstname") || '')
    this.lastname = JSON.parse(localStorage.getItem("lastname") || '')
    this.email = JSON.parse(localStorage.getItem("email") || '')
    this. phonenumber = JSON.parse(localStorage.getItem("phonenumber") || '')
  }

  ngOnInit(): void {
  }
  logOut(){
    this.router.navigateByUrl("")
  }

}
