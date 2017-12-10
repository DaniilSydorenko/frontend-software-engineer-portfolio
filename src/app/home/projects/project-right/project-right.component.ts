import { Component, Input } from '@angular/core';
import { Project } from '../../../shared/models/project';

@Component({
    selector: 'app-project-right',
    templateUrl: 'project-right.component.html',
})

export class AppProjectRightComponent {
    @Input() project: Project;
}
