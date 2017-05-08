import { Directive, ElementRef, Input, Output, EventEmitter } from '@angular/core';
import * as Hammer from 'hammerjs';

@Directive({ selector: '[swipeDetect]' })
export class SwipeDetectDirective {

    @Output("detectSwipeUp") detectSwipeUp = new EventEmitter();
    @Output("detectSwipeDown") detectSwipeDown = new EventEmitter();

    private element: ElementRef;

    constructor(el: ElementRef) {
        this.element = el;
        var hammertime = new Hammer(this.element.nativeElement);
        hammertime.get('pan').set({ direction: Hammer.DIRECTION_ALL });
        hammertime.get('swipe').set({ direction: Hammer.DIRECTION_VERTICAL });
        hammertime.on("swipeup", (ev) => {
            this.detectSwipeUp.emit();
        });
        hammertime.on("swipedown", (ev) => {
            this.detectSwipeDown.emit();
        });
    }
}