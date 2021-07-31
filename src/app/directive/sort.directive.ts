import { Directive, Input, ElementRef, Renderer2, HostListener } from '@angular/core';
import { Sort } from '../util/sort';

@Directive({
  selector: '[appSort]'
})
export class SortDirective {

  @Input() appSort: Array<any>;
  
  constructor(private renderer:Renderer2, private target:ElementRef) { }

  @HostListener("click")
  sortData(){
    const sort = new Sort();
    const element = this.target.nativeElement;
    const order = element.getAttribute("data-order");
    const type = element.getAttribute("data-type");
    const property = element.getAttribute("data-name");

    if(order === "desc"){
      this.appSort.sort(sort.startSort(property, order, type));
      element.setAttribute("data-order", "asc");
    }else{
      this.appSort.sort(sort.startSort(property, order, type));
      element.setAttribute("data-order", "desc");
    }
  }
}
