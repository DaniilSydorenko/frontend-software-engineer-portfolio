import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.component.html',
})

export class HomeComponent implements OnInit {
  loading: boolean;

  constructor() {
    this.loading = true;
  }

  ngOnInit() {
    setTimeout(() => {
      this.loading = false;
    }, 4000);
  }
}
