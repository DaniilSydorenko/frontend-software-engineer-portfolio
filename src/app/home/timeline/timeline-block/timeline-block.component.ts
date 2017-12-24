import { Component, Input, OnInit, HostListener } from '@angular/core';
import { TimelineBlock } from '../../../shared/models/timeline-block';

@Component({
    selector: 'app-timeline-block',
    templateUrl: 'timeline-block.component.html',
})

export class AppTimelineBlockComponent implements OnInit {
  @Input()
  timelineBlock: TimelineBlock;

  toggleBlock = true;
  showMore: boolean;

  constructor() { }

  ngOnInit() {
    this.showMore = window.matchMedia('(max-width: 767px)').matches;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.showMore = event.target.innerWidth <= 767;
  }
}
