import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import {Router} from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  submitted = false;
  invalidLogin = false;
  model: object = {};
  datas: object  = [];
  power : any;
  powers = ['Really Smart', 'Super Flexible',
            'Super Hot', 'Weather Changer'];
  constructor(private router: Router) {
    this.datas = [
      { name: 'John', age: 30, car: null },
      { name: 'ashok', age: 30, car: null },
      { name: 'kumar', age: 20, car: 'bmw' }
    ];
    // this.power = 'Super Hot' ;
   }

  onSubmit(f) {
    this.submitted = true;
    console.log(JSON.stringify(this.model), this.datas);
    this.router.navigate(['user'], { queryParams: { page: '55525' }} );
  }
  ngOnInit() {
    console.log('init methods get called');
  }

  changedExtraHandler(changes) {
    console.log(changes);
}

ngDoCheck() {
  console.log('ng do check called');
}

}
