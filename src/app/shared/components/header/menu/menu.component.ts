import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ScrollToService, ScrollToConfigOptions } from '@nicky-lenaers/ngx-scroll-to';
import { MenuService } from '../../../services/menu.service';

@Component({
  selector: 'app-menu',
  templateUrl: 'menu.component.html',
  styleUrls: ['menu.component.scss']
})

export class MenuComponent {
  @Input() state: any;
  @Output() stateEmitter = new EventEmitter();

  constructor(
    private _scrollToService: ScrollToService,
    private _menuService: MenuService
  ) { }

  toggleMenu() {
    const menuItem = <NodeListOf<Element>>document.querySelectorAll('.mobileMenu li');
    const menuContainer = <HTMLElement>document.querySelector('.responsiveMobileMenu');
    this.stateEmitter.emit({ state: this.state = !this.state });
    this._menuService.toggleResponsiveMobileMenu(menuItem, menuContainer);
  }

  public triggerScrollTo(scrollTo) {
    const config: ScrollToConfigOptions = {
      target: scrollTo
    };
    this._scrollToService.scrollTo(config);
    this.toggleMenu();
  }
}
