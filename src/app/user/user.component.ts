import { Component, OnInit, Input, Output } from '@angular/core';
import { Router} from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  // values : [];
  @Input() data;
  @Input() index: number;
  // data : [];
  constructor(private router : Router) { 
    const navigation = this.router.getCurrentNavigation();
    console.log(this, navigation.extras.state ? navigation.extras.state : "data not found")
    this.data =  navigation.extras.state;

  }

  ngOnInit() {
  }

}
