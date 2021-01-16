import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'creditFromat'
})
export class CreditFromatPipe implements PipeTransform {

  transform(value: number): string {
    if(value.toString().length == 16){
      return `${value.toString().substring(0 ,4)} - ${value.toString().substring(4 ,8)} -  ${value.toString().substring(8 ,12)} -  ${value.toString().substring(12 ,16)}  ` ;


    } else {
      return ''
    }
   
  }

}
