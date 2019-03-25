import { Component, OnInit, Input, Output } from '@angular/core';
import {ActivatedRoute,  Router, RouterStateSnapshot} from '@angular/router';
import { UserService } from '../services/user.service';
import { getLocalePluralCase } from '@angular/common';
import { filter } from 'rxjs/operators';
import { analyzeAndValidateNgModules } from '@angular/compiler';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  @Input() data;
  @Input() index: number;
  private status : boolean;
  public response: Array<object>;
  constructor(private router: ActivatedRoute, private userService: UserService) {
    this.router.queryParams.subscribe(params => {

      console.log('params', params.page);

    });

  }

  ngOnInit() {

  }

  modalOpen(): void {
    this.getCall();
  }

  public getCall() {
    this.status=true;
     this.userService.getUser().subscribe( (data: Array<object>) => {
       this.response =  data;
       console.log(this.response);
     });
  }

}
