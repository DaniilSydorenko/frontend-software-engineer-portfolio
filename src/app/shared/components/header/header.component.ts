import {Component, HostListener, OnInit} from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: 'header.component.html'
})

export class HeaderComponent implements OnInit {
  state = false;
  buttonLines: Array<number> = [1, 2, 3, 4, 5, 6];
  lastScrollVal: number;

  constructor() {}

  ngOnInit() {}

  getCurrentScroll (): number {
    return window.pageYOffset || document.documentElement.scrollTop;
  }

  @HostListener('window:scroll', ['$event'])

  onScrollEvent($event) {
    const header = document.getElementsByClassName('header')[0];

    if (this.lastScrollVal < this.getCurrentScroll()) {
      header.classList.add('shrink');
    } else {
      header.classList.remove('shrink');
    }

    this.lastScrollVal = this.getCurrentScroll();
  }

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
    this.state = !this.state;

    const menuItem = <NodeListOf<Element>>document.querySelectorAll('.mobileMenu li');
    const menuContainer = <HTMLElement>document.querySelector('.responsiveMobileMenu');
    const home = <HTMLElement>document.querySelector('#home');

    this.toggleResponsiveMobileMenu(home, menuItem, menuContainer);
  }
}
