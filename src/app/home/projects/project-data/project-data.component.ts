import { Component, Input } from '@angular/core';
import { Project } from '../../../shared/models/project';

@Component({
    selector: 'app-project-data',
    templateUrl: 'project-data.component.html',
})

export class AppProjectDataComponent {
    @Input() project: Project;
}
