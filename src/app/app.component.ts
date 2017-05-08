import { Component, ViewChild, AfterViewInit, ElementRef, HostListener } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {

  @ViewChild('section0') section0: ElementRef;
  @ViewChild('section1') section1: ElementRef;
  @ViewChild('section2') section2: ElementRef;
  @ViewChild('section3') section3: ElementRef;

  public title: string;
  public currentSection: HTMLElement;
  public sectionNumber: number;
  public sections: ElementRef[];
  public lockScroll: boolean;

  constructor() {
    this.title = 'hay world !!';
    this.sectionNumber = 0;
    this.lockScroll = false;
  }

  ngAfterViewInit(): void {
    this.currentSection = this.section0.nativeElement;
    this.sections = [this.section0, this.section1, this.section2, this.section3];
    this.scrollToSection(this.sectionNumber);
  }

  public goto(number: number) {
    if (number !== this.sectionNumber) {
      this.currentSection = this.sections[number].nativeElement;
      this.sectionNumber = number;
      this.scrollToSection(number);
    }
  }

  @HostListener('document:keydown', ['$event'])
  onKeyUp(ev:KeyboardEvent) {
    if (ev.key === 'ArrowUp') {
      ev.preventDefault();
      this.goPrevious();
    }
    if (ev.key === 'ArrowDown') {
      ev.preventDefault();
      this.goNext();
    }
  }

  public handleSwipeDown() {
    this.goPrevious();
  }

  public handleSwipeUp() {
    this.goNext();
  }

  public goPrevious() {
    if (this.sectionNumber > 0 && !this.lockScroll) {
      this.lockScroll = true;
      this.goto(this.sectionNumber - 1);
      this.lockScroll = false;
    }
  }

  public goNext() {
    if (this.sectionNumber < this.sections.length-1 && !this.lockScroll) {
      this.lockScroll = true;
      this.goto(this.sectionNumber + 1);
      this.lockScroll = false;
    }
  }

  public scrollToSection(number: number) {
    $('html, body').animate({
        scrollTop: $(this.sections[number].nativeElement).offset().top
    }, 1000);
  }
}
