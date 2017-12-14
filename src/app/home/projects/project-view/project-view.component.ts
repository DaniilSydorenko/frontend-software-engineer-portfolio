import {Component, Input} from '@angular/core';
import {Project} from '../../../shared/models/project';

@Component({
  selector: 'app-project-view',
  templateUrl: 'project-view.component.html',
})

export class AppProjectViewComponent {
  @Input() project: Project;

  linkText: string;

  constructor() {
    this.linkText = 'Visit a website';
  }
}
