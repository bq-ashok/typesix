import { Component, OnInit, Input } from '@angular/core';
import {Router} from '@angular/router';
import {CustomLibService } from 'custom-lib'

interface dataTypes {
  firstName : string,
  power : string,
  date : string
  email: string,
  password: string
}
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  submitted = false;
  invalidLogin = false;
  model: object = {};
  datas: object  = [];
  power : any;
  powers = ['Really Smart', 'Super Flexible', 'Super Hot', 'Weather Changer'];

  constructor(private router: Router, private customLibrary : CustomLibService) {
    this.customLibrary.getData().subscribe(datas => {
      console.log('library message called', datas);
      this.datas = datas;
    })
   }  

  onSubmit(f) {
    this.submitted = true;
    console.log(JSON.stringify(this.model), this.datas);
    this.router.navigate(['user'], { queryParams: { page: '55525' }} );
  }
  ngOnInit() {
    this.model['power'] = 'Super Hot';   
  }

  changedExtraHandler(changes) {
    console.log(changes);
  }

}
