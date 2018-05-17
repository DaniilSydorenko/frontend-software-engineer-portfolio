import {Component, ElementRef, HostListener, Renderer2, AfterViewInit} from '@angular/core';
import { ScrollToService, ScrollToConfigOptions } from '@nicky-lenaers/ngx-scroll-to';
import { MenuService } from '../../services/menu.service';

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

  constructor(
    private _scrollToService: ScrollToService,
    private _menuService: MenuService,
    private el: ElementRef,
    private renderer: Renderer2
  ) { }

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

  toggleMenu() {
    const menuItem = <NodeListOf<Element>>document.querySelectorAll('.mobileMenu li');
    const menuContainer = <HTMLElement>document.querySelector('.responsiveMobileMenu');
    this.state = !this.state;
    this._menuService.toggleResponsiveMobileMenu(menuItem, menuContainer);
  }
}
