import {Component, OnInit} from '@angular/core';
import { ScrollToService, ScrollToConfigOptions } from '@nicky-lenaers/ngx-scroll-to';
// import * as $ from 'jquery';
// import * as typelessPackage from 'wowjs';
// import { WOW } from 'wowjs/dist/wow';
// new WOW().init();
// import * as vide from 'vide';


@Component({
    selector: 'app-hero',
    templateUrl: 'hero.component.html',
})

export class AppHeroComponent implements OnInit {
  constructor(private _scrollToService: ScrollToService) { }

  ngOnInit() {
    /**
     * Wow init
     */
    // new WOW().init();

    /**
     * Video background
     */
    // $('#myBlock').vide({
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

  public triggerScrollTo(scrollTo) {
    const config: ScrollToConfigOptions = {
      target: scrollTo
    };
    this._scrollToService.scrollTo(config);
  }
}
