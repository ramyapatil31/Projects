import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {}
 
  registerPage(){
    this.router.navigate(['/register']);
  }
  
  forgotPage(){
    this.router.navigate(['/forgot-password']);
  }
  doLogin(){
    this.router.navigate(['/dashboard']);
  }
}
