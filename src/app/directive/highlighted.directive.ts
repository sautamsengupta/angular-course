import { Directive, EventEmitter, HostBinding, HostListener, Output } from '@angular/core';

@Directive({
  selector: '[highlighted]'
})
export class HighlightedDirective {

  constructor() {
    console.log("Directive created")
   }

   @HostBinding('className')
   get cssClass() {
    return "highlighted";
   }

   @HostListener('mouseover', ['$event'])
   MouseOver($event: any) {
    console.log($event)
    this.eventEmit.emit("this is my custom event");
   }

   @Output()
   eventEmit = new EventEmitter();

}
