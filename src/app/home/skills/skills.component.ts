import {Component, Input} from '@angular/core';

@Component({
    selector: 'app-skills',
    templateUrl: 'skills.component.html',
})

export class AppSkillsComponent {
    @Input() skills: any;
}
