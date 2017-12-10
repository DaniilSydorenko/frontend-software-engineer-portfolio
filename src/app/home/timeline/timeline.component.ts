import {Component, Input, HostListener} from '@angular/core';

@Component({
  selector: 'app-timeline',
  templateUrl: 'timeline.component.html',
})

export class AppTimelineComponent {
  @Input() timeline: any;

  @HostListener('window:scroll', ['$event']) onScrollEvent($event) {
    const block = document.getElementsByClassName('cd-timeline-block');

    function hideBlocks(blocks, offset) {
      for (let j = 0; j < blocks.length; j++) {
        (getElementOffset(blocks[j]).top > window.scrollY + window.innerHeight * offset) &&
        blocks[j].querySelector('.cd-timeline-img, .cd-timeline-content').classList.add('is-hidden');
      }
    }

    // To helper ?
    function getElementOffset(element) {
      const de = document.documentElement;
      const box = element.getBoundingClientRect();
      const top = box.top + window.pageYOffset - de.clientTop;
      const left = box.left + window.pageXOffset - de.clientLeft;
      return { top: top, left: left };
    }

    function showBlocks(blocks, offset) {
      for (let i = 0; i < blocks.length; i++) {
        if (getElementOffset(blocks[i]).top <= window.scrollY + window.innerHeight * offset &&
          blocks[i].querySelector('.cd-timeline-img').classList.contains('is-hidden')) {
          blocks[i].querySelector('.cd-timeline-img').classList.remove('is-hidden');
          blocks[i].querySelector('.cd-timeline-img').classList.add('bounce-in');
          blocks[i].querySelector('.cd-timeline-content').classList.remove('is-hidden');
          blocks[i].querySelector('.cd-timeline-content').classList.add('bounce-in');
        }
      }
    }

    (!window.requestAnimationFrame)
      ? setTimeout(function () {
      showBlocks(block, 0.8);
    }, 100)
      : window.requestAnimationFrame(function () {
      showBlocks(block, 0.8);
    });
  }
}
