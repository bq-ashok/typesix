import { Component, OnInit, Input } from '@angular/core';
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
      custom-lib works! and data passing from parent application 
    </p>
    <div class="row"> {{data | json}}</div>
  `,
  styles: []
})
export class CustomLibComponent implements OnInit {
  public datas: dataTypes[];
  @Input() data : dataTypes[];

  constructor(private libService : CustomLibService) { }

  ngOnInit() {
    // this.libService.getData().subscribe(datas => {
    //       console.log('from library', datas);
    //       this.datas = datas["data"];
    //     })
  }

}
