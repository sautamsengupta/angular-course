import { AfterContentInit, Component, ContentChild, ElementRef, EventEmitter, Input, OnInit, Output, TemplateRef } from '@angular/core';
import { Course } from '../model/course';

@Component({
  selector: 'app-coursecard',
  templateUrl: './coursecard.component.html',
  styleUrls: ['./coursecard.component.css']
})
export class CoursecardComponent implements OnInit, AfterContentInit {

  constructor() { }

  ngAfterContentInit(): void {
    
  }

  @Input()
  course!: Course;

  @Output()
  emitCourseToComponent = new EventEmitter<string>();

  @ContentChild('contentprojection')
  contentprojection!:ElementRef;

  @Input()
  calculateTemplate!:TemplateRef<any>;

  @Input()
  textValue!:string;

  ngOnInit(): void {
  }

  tryMe() {
    this.emitCourseToComponent.emit();
  }

  checkClass() {
    return {
      "beginner": this.course.category == "BEGINNER",
      
    };
  }

  addStyle(){
    return {
      "background-image": "url('"+this.course.icon+"')",
      "no-repeat":"no-repeat"
    };
  }
}
