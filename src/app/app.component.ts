import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { COURSES } from './data/data';
import { Course } from './model/course';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  courses = COURSES;
  a:number=1;
  b:number=1;
  c!:number;
  textinput:string = "This is a text which is there in component and I passed this value as a template input to child and used it to populate template value";
  output:string="";


  @ViewChild('divinputs', {read:ElementRef})
  divinputs!:ElementRef;

  componentCalled(course:Course) {
    alert("Component Called - " + course.title + course.description);
  }

  calculate(valuea: string, valueb:string) {
    this.c = parseInt(valuea) * parseInt(valueb);
    console.log(this.divinputs);
  }

  changeText(value:string) {
    this.output = value;
  }

  checkElement() {
    alert(this.divinputs.nativeElement.aval.value);
    
  }

  emitToComponent(event:string) {
    console.log(event);
  }

}


