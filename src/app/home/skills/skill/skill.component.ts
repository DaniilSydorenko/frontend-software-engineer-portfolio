import {Component, Input} from '@angular/core';
import {Skill} from '../../../shared/models/skill';

@Component({
    selector: 'app-skill',
    templateUrl: 'skill.component.html',
})

export class AppSkillComponent {
    @Input() skill: Skill;
}
