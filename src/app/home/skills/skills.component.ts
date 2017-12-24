import { Component, OnInit } from '@angular/core';
import { Skill } from '../../shared/models/skill';
import { DataLoaderService } from '../../shared/services/data-loader.service';

@Component({
    selector: 'app-skills',
    templateUrl: 'skills.component.html',
})

export class AppSkillsComponent implements OnInit {
  skills: Array<Skill>;

  constructor(private _dataLoaderService: DataLoaderService) { }

  ngOnInit() {
    this._dataLoaderService.getPortfolioData('skills')
      .subscribe(data => this.skills = data);
  }
}
