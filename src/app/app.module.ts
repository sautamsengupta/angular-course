import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CoursecardComponent } from './coursecard/coursecard.component';
import { HighlightedDirective } from './directive/highlighted.directive';

@NgModule({
  declarations: [
    AppComponent,
    CoursecardComponent,
    HighlightedDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
