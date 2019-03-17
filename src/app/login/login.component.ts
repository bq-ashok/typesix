import { Component, OnInit, Input } from '@angular/core';
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
  datas:  object  = [];
  constructor(private router: Router) {
    this.datas = [
      { "name":"John", "age":30, "car":null },
      { "name":"ashok", "age":30, "car":null },
      { "name":"kumar", "age":20, "car":"bmw" }
    ];
   }

  onSubmit(f) {
    this.submitted = true;
    console.log(JSON.stringify(this.model), this.datas);
    this.router.navigate(['user'], { state: this.datas});
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
