import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  submitted: boolean = false;
  invalidLogin: boolean = false;
  model: object = {};
  constructor(private router: Router) { }

  onSubmit(f) {
    this.submitted = true;
    console.log(JSON.stringify(this.model), this.model);
    // if (this.loginForm.invalid) {
    //   return;
    // }
    // console.log(this);
    // if(this.loginForm.controls.email.value == 'dhiraj@gmail.com' && this.loginForm.controls.password.value == 'password') {
    //     this.router.navigate(['list-user']);
    // }else {
    //   this.invalidLogin = true;
    // }
  }

  ngOnInit() {
  }

}
