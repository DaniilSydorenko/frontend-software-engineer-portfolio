import {Component, ElementRef, HostListener, Renderer2, AfterViewInit} from '@angular/core';
import { ScrollToService, ScrollToConfigOptions } from '@nicky-lenaers/ngx-scroll-to';

@Component({
    selector: 'app-header',
    templateUrl: 'header.component.html',
    styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements AfterViewInit {
  state = false;
  buttonLines: Array<number> = [1, 2, 3, 4, 5, 6];
  lastScrollVal: number;
  header: HTMLElement;

  constructor(private _scrollToService: ScrollToService, private el: ElementRef, private renderer: Renderer2) { }

  ngAfterViewInit() {
    this.header = this.el.nativeElement.children[0];
  }

  public triggerScrollTo(scrollTo) { // TODO to helper ?
    const config: ScrollToConfigOptions = {
      target: scrollTo
    };
    this._scrollToService.scrollTo(config);
  }

  public getCurrentScroll (): number { // TODO to helper ?
    return window.pageYOffset || document.documentElement.scrollTop;
  }

  @HostListener('window:scroll', ['$event'])
  onScrollEvent() {
    if (this.lastScrollVal < this.getCurrentScroll()) {
      this.renderer.addClass(this.header, 'shrink');
    } else {
      this.renderer.removeClass(this.header, 'shrink');
    }
    this.lastScrollVal = this.getCurrentScroll();
  }

  toggleResponsiveMobileMenu(menuItem: NodeListOf<Element>, menuContainer: HTMLElement) {
    if (menuContainer.classList.contains('display')) {
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
    const menuItem = <NodeListOf<Element>>document.querySelectorAll('.mobileMenu li');
    const menuContainer = <HTMLElement>document.querySelector('.responsiveMobileMenu');
    this.state = !this.state;
    this.toggleResponsiveMobileMenu(menuItem, menuContainer);
  }
}
