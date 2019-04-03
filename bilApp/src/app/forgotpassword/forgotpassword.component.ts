import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.scss'],
})
export class ForgotpasswordComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {}

  forgotPage(){
    this.router.navigate(['/forgot-password']);
  }

  back(){
    this.router.navigate(['/login']);
  }
}
