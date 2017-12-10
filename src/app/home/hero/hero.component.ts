import {Component, AfterContentInit, ElementRef} from '@angular/core';
import * as vide from 'vide';

@Component({
    selector: 'app-hero',
    templateUrl: 'hero.component.html',
})

export class AppHeroComponent implements AfterContentInit {

  calendarElement: any;

  constructor(private elementRef: ElementRef) {}

  // ngAfterViewInit() {
  //   this.calendarElement = jQuery(this.elementRef.nativeElement);
  //   this.calendarElement.fullCalendar({});
  // }


  ngAfterContentInit() {
    // this.calendarElement = jQuery(this.elementRef.nativeElement);
    // this.calendarElement.fullCalendar({});

    // (<any>$("div.printArea")).printArea();

    // (<any>$('#myBlock')).vide({
    //   mp4: 'assets/video/MP4/Aloha-Mundo.mp4',
    //   webm: 'assets/video/WEBM/Aloha-Mundo.webm',
    //   poster: 'assets/img/snapshot/Aloha-Mundo.jpg'
    // }, {
    //   volume: 1,
    //   playbackRate: 1,
    //   muted: true,
    //   loop: true,
    //   autoplay: true,
    //   position: '0% 50%', // Similar to the CSS `background-position` property.
    //   posterType: 'detect', // Poster image type. "detect" — auto-detection; "none" — no poster; "jpg", "png", "gif",... - extensions.
    //   resizing: true, // Auto-resizing, read: https://github.com/VodkaBears/Vide#resizing
    //   bgColor: 'transparent', // Allow custom background-color for Vide div,
    //   className: '' // Add custom CSS class to Vide div
    // });
  }

}
