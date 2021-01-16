import { Directive  ,ElementRef ,HostListener, SimpleChanges,  } from '@angular/core';

@Directive({
  selector: '[appInputFormat]'
})
export class InputFormatDirective  {






  constructor(private el: ElementRef) { 
    
  }

  


  @HostListener('blur') onBlur() {
    this.format()

    
  }
 
  private format() {
    let val =  this.el.nativeElement.value ;
    if (this.el.nativeElement.value.length == 16){
      this.el.nativeElement.style.backgroundColor = 'gray' 
      this.el.nativeElement.value = val.substring(0,4) +"-"+ val.substring(4,8) +"-"+  val.substring(8,12)  +"-" +    val.substring(12,16) ;
    

    }
    else {
      this.el.nativeElement.style.backgroundColor = 'red' 
    }
  }

}
