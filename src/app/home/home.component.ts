import {Component} from '@angular/core';
import {Headers, Http, Response} from '@angular/http';

@Component({
  selector: 'app-home',
  templateUrl: 'home.component.html',
})

export class HomeComponent {
  constructor(private http: Http) {
    this.getPublicDeals();
  }

  url: any = 'assets/app.json';
  projects: any;
  skills: any;
  timeline: any;

  test(event: any) {
    console.log(event.state);
  }

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
