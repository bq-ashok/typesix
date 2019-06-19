import { Component, OnInit } from '@angular/core';
import {CustomLibService} from './custom-lib.service';
interface dataTypes {
  id: number,
  email :  string,
  first_name : string,
  last_name : string,
  avatar : string
}
@Component({
  selector: 'lib-custom-lib',
  template: `
    <p>
      custom-lib works!
    </p>
  `,
  styles: []
})
export class CustomLibComponent implements OnInit {
  public values: dataTypes[];

  constructor(private libService : CustomLibService) { }

  ngOnInit() {
    this.libService.getData().subscribe( (response : Array<Object>) =>{
      this.values = response['data'];
      console.log('values of library', this.values.toString())
    } )
  }

}
