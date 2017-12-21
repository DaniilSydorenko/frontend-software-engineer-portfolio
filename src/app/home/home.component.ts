import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { TimelineBlock } from '../shared/models/timeline-block';

@Component({
  selector: 'app-home',
  templateUrl: 'home.component.html',
})

export class HomeComponent {
  constructor(private http: Http) {
    this.getPublicDeals();
  }

  url: any = 'assets/app.json'; // TODO move to const
  projects: any;
  skills: any;
  timeline: TimelineBlock;

  getPublicDeals(): void {
    this.http
      .get(this.url)
      .subscribe(response => {
        const data = response.json();
        this.projects = data['projects'];
        this.skills = data['skills'];
        this.timeline = data['timeline'];
      });
  }
}
