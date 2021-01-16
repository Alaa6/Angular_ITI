import { Directive ,ElementRef  ,HostListener ,Input ,OnChanges} from '@angular/core';

@Directive({
  selector: '[appShadow]'
})
export class ShadowDirective implements OnChanges {

  @Input() BGColor : string | undefined;

  constructor( private el: ElementRef) {
    el.nativeElement.style.boxShadow = "5px 5px 5px #aaaaaa";
    el.nativeElement.style.margin = "10px";
  

   } 

   ngOnChanges(): void {
   
     
    this.el.nativeElement.style.backgroundColor = this.BGColor
   

   
  }

   @HostListener('mouseenter') onMouseEnter() {
    this.shadow(10)

    
  }
  
  @HostListener('mouseleave') onMouseLeave() {
    this.shadow(5)
  }
  

  private shadow(n :number) {
    this.el.nativeElement.style.boxShadow = `${n}px ${n}px 5px #aaaaaa`;
  }

}
