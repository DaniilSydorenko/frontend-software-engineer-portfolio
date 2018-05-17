import { Injectable } from '@angular/core';

@Injectable()
export class MenuService {
  public toggleResponsiveMobileMenu(menuItem: NodeListOf<Element>, menuContainer: HTMLElement) {
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
}
