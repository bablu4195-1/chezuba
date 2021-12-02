import { Pipe, PipeTransform } from '@angular/core';
import { Datahub } from './main.model';

@Pipe({
  name: 'magic'
})
export class MagicPipe implements PipeTransform {

  names: Datahub[] = []
  transform(names: any[], value: number) {
     return value ? names.filter(item => {
       if(item.id % value === 0){
         return item.id 
        }
        else if(item.id % 3 === 0  && item.id % 5 === 0){
          return item.id;
        }
       }): names;
  }

}
