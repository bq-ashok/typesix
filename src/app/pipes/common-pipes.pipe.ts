import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'commonPipes'
})
export class CommonPipesPipe implements PipeTransform {

  transform(value: any, args: any): any {
    console.log(value, args);
    switch(args) {
      case 'USD': 
        return '$';
      case 'INR': 
         return '₹';        
    }
    // let exp = parseFloat(args);
    // return Math.pow(value, isNaN(exp) ? 1 : exp);
  }
}
