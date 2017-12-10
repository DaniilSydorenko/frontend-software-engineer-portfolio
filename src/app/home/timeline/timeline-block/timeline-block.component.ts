import {Component, Input} from '@angular/core';
import {TimelineBlock} from '../../../shared/models/timeline-block';

@Component({
    selector: 'app-timeline-block',
    templateUrl: 'timeline-block.component.html',
})

export class AppTimelineBlockComponent {
    @Input() timelineBlock: TimelineBlock;
}
