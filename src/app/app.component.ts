import { Component } from '@angular/core';
import { COURSES } from './data/data';
import { Course } from './model/course';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  courses = COURSES;

  componentCalled(course:Course) {
    alert("Component Called - " + course.title + course.description);
  }

}


