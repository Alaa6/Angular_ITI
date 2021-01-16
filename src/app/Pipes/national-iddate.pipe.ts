import { Pipe, PipeTransform, OnChanges, Input, SimpleChanges } from '@angular/core';

@Pipe({
  name: 'nationalIDDate'
})
export class NationalIDDatePipe implements PipeTransform {

 
  

  transform(value: number ,datePart?: string): string {
    
    
    var arr : string[] =['0']

    arr =  value.toString().split('') ;
    console.log(arr);
    var yearCode  : number =0 ;

    if(Number(arr[0]) == 1){
      yearCode = 18

    }
    if(Number(arr[0]) == 2){
      yearCode = 19

    }
    if (Number(arr[0]) == 3) {
      yearCode = 20
      
    }

    if(datePart =='FullDate'){
      return `${arr[5]}${arr[6]} -  ${arr[3]}${arr[4]} - ${yearCode}${arr[1]}${arr[2]} `;


    } else {
      return `Day : ${arr[5]}${arr[6]} \n Month  : ${arr[3]}${arr[4]}  \n Year : ${yearCode}${arr[1]}${arr[2]} `;


    }
    


  }

}
