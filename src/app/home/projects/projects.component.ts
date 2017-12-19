import { Component, Input, HostListener, OnInit } from '@angular/core';

@Component({
    selector: 'app-projects',
    templateUrl: 'projects.component.html',
})

export class AppProjectsComponent implements OnInit {
  @Input() projects: any;

  projectSections: any = document.getElementsByClassName('section-content');

  constructor() {}

  ngOnInit() {
    // const projectBgSide: Element = document.querySelector('.bg-side');

    // if (window.innerWidth < 768) {
    //   projectBgSide.addEventListener('click', function () {
    //     console.log('BG');
    //     const curImgFix = this.projectBgSide.getElementsByClassName('img-fix');
    //     if (curImgFix[0].classList.contains('active')) {
    //       curImgFix[0].classList.remove('active');
    //     } else {
    //       curImgFix[0].classList.remove('active');
    //       curImgFix[0].classList.add('active');
    //     }
    //   });
    // }
  }

  getCurrentScroll (): number {
    return window.pageYOffset || document.documentElement.scrollTop;
  }

  getSectionOffsets (): number[] {
    const offsets = [];
    for (let i = 0; i < this.projectSections.length; i++) {
      this.projectSections[i].setAttribute('data-offset', `${this.projectSections[i].offsetTop}`);
      offsets.push(this.projectSections[i].offsetTop);
    }
    return offsets;
  }

  getClosestValue (offsets: number[], currentScroll: number): number {
    if (currentScroll < offsets[1]) {
      return offsets[0];
    } else if (currentScroll >= offsets[offsets.length - 1]) {
      return offsets[offsets.length - 1];
    } else {
      for (let i = 0; i <= offsets.length - 1; i++) {
        if (offsets[i] >= currentScroll) {
          return offsets[i - 1];
        }
      }
    }
  }

  removeActiveClasesInSections (sections: HTMLCollectionOf<Element>): void {
    for (let i = 0; i < sections.length; i++) {
      sections[i].classList.remove('active');
    }
  }

  @HostListener('window:scroll', ['$event'])

  onScrollEvent($event) {
    const projectSections = document.getElementsByClassName('section-content');
    const scrollFromTop = window.scrollY;

    if (window.matchMedia('(min-width: 767px)').matches) {
      const firstOffset = this.getSectionOffsets()[0];
      const startValue = this.getClosestValue(this.getSectionOffsets(), this.getCurrentScroll());
      const currentContentSection = document.querySelector(`[data-offset='${startValue}']`);
      const descriptionBlock = <HTMLElement>currentContentSection.querySelector('.project-description');
      const textContentHeight = descriptionBlock.querySelector('.text-center').clientHeight;
      const section = <HTMLElement>projectSections[0];
      const stopValue = startValue + (section.offsetHeight - textContentHeight);

      if (scrollFromTop < firstOffset) {
        this.removeActiveClasesInSections(projectSections);
      }

      if (scrollFromTop >= startValue) {
        descriptionBlock.style.alignItems = 'flex-start';
        descriptionBlock.style.alignContent = 'flex-start';
        if (!projectSections[0].classList.contains('active')) {
          this.removeActiveClasesInSections(projectSections);
          currentContentSection.classList.add('active');
        } else {
          if (!currentContentSection.classList.contains('active')) {
            this.removeActiveClasesInSections(projectSections);
            currentContentSection.classList.add('active');
          }
        }
      }

      if (scrollFromTop >= stopValue) {
        if (currentContentSection.classList.contains('active')) {
          currentContentSection.classList.remove('active');
          descriptionBlock.style.alignItems = 'flex-end';
          descriptionBlock.style.alignContent = 'flex-end';
        }
      }
    }
  }
}
