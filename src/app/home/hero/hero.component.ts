import {Component, OnInit} from '@angular/core';
import { ScrollToService, ScrollToConfigOptions } from '@nicky-lenaers/ngx-scroll-to';

@Component({
    selector: 'app-hero',
    templateUrl: 'hero.component.html',
})

export class AppHeroComponent implements OnInit {
  constructor(private _scrollToService: ScrollToService) { }

  ngOnInit() { }

  public triggerScrollTo(scrollTo) {
    const config: ScrollToConfigOptions = {
      target: scrollTo
    };
    this._scrollToService.scrollTo(config);
  }
}
