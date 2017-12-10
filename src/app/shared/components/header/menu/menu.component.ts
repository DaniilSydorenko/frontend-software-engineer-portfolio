import {Component, Input, AfterContentInit, Injectable, Output, EventEmitter} from '@angular/core';
import { ScrollToService, ScrollToConfigOptions } from '@nicky-lenaers/ngx-scroll-to';

@Component({
  selector: 'app-menu',
  templateUrl: 'menu.component.html',
})

export class MenuComponent {
  @Input() state: any;

  @Output()
  stateEmitter = new EventEmitter();

  constructor(private _scrollToService: ScrollToService) { }

  toggleResponsiveMobileMenu(home: HTMLElement, menuItem: NodeListOf<Element>, menuContainer: HTMLElement) {
    if (home.classList.contains('display')) {
      setTimeout(function () {

        setTimeout(function () {
          menuItem[4].classList.remove('fade');
          setTimeout(function () {
            menuItem[3].classList.remove('fade');
            setTimeout(function () {
              menuItem[2].classList.remove('fade');
              setTimeout(function () {
                menuItem[1].classList.remove('fade');
                setTimeout(function () {
                  menuItem[0].classList.remove('fade');
                }, 20);
              }, 50);
            }, 80);
          }, 110);
        }, 130);
        setTimeout(function () {
          menuContainer.classList.remove('display');
          setTimeout(function () {
            menuContainer.classList.remove('flex');
          }, 500);
        }, 500);

      }, 50);
    } else {
      setTimeout(function () {
        menuContainer.classList.add('flex');

        setTimeout(function () {
          menuContainer.classList.add('display');
          setTimeout(function () {
          }, 500);
        }, 50);

        setTimeout(function () {
          menuItem[0].classList.add('fade');
          setTimeout(function () {
            menuItem[1].classList.add('fade');
            setTimeout(function () {
              menuItem[2].classList.add('fade');
              setTimeout(function () {
                menuItem[3].classList.add('fade');
                setTimeout(function () {
                  menuItem[4].classList.add('fade');
                }, 330);
              }, 280);
            }, 230);
          }, 170);
        }, 110);

      }, 50);
    }
  }

  toggleMenu() {
    this.stateEmitter.emit({ state: this.state = !this.state });

    const menuItem = <NodeListOf<Element>>document.querySelectorAll('.mobileMenu li');
    const menuContainer = <HTMLElement>document.querySelector('.responsiveMobileMenu');
    const home = <HTMLElement>document.querySelector('#home');

    this.toggleResponsiveMobileMenu(home, menuItem, menuContainer);
  }

  public triggerScrollTo(scrollTo) {
    const config: ScrollToConfigOptions = {
      target: scrollTo
    };
    this._scrollToService.scrollTo(config);
    this.toggleMenu();
  }
}
