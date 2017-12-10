import { Component, Input } from '@angular/core';
import { Project } from '../../../shared/models/project';

@Component({
  selector: 'app-project-left',
  templateUrl: './project-left.component.html',
  styleUrls: ['./project-left.component.scss']
})

export class AppProjectLeftComponent {
  @Input() project: Project;
}
