import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterText'
})
export class FilterTextPipe implements PipeTransform {

  transform(items : any[], searchText: string): any {
    if(!items) return [];
    if(!searchText) return items;   
    // return items.filter( it => { it.login.toLowerCase().includes(searchText) }); // list filtes    
    let filteredItems = [];
    searchText = searchText.toLocaleLowerCase();
    console.log('searchText', searchText);
    items.forEach(item => {
        if (item.login.toLowerCase().includes(searchText)) {
          filteredItems.push(item);
        }
    })
    return filteredItems;
 

  }

}


// https://www.reddit.com/r/Angular2/comments/7iycy8/filtering_an_array_of_objects/
