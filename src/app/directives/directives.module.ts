import { NgModule } from '@angular/core';
import { SwipeDetectDirective } from './swipe-detect.directive';

@NgModule({
  declarations: [
    SwipeDetectDirective
  ],
  exports: [
      SwipeDetectDirective
  ]
})
export class DirectivesModule { }
