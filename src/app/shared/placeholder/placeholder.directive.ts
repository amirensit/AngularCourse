import {Directive, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[app-placeholder]'
})
export class PlaceholderDirective {
  constructor(public viewContainerRef: ViewContainerRef) {

  }

}
