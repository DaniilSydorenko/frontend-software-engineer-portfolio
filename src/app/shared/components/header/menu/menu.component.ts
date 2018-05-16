import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ScrollToService, ScrollToConfigOptions } from '@nicky-lenaers/ngx-scroll-to';

@Component({
  selector: 'app-menu',
  templateUrl: 'menu.component.html',
})

export class MenuComponent {
  @Input() state: any;
  @Output() stateEmitter = new EventEmitter();

  constructor(private _scrollToService: ScrollToService) { }

  public triggerScrollTo(scrollTo) {
    const config: ScrollToConfigOptions = {
      target: scrollTo
    };
    this._scrollToService.scrollTo(config);
  }
}
