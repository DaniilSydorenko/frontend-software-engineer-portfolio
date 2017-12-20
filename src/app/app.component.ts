import { Component } from '@angular/core';
import { Angulartics2GoogleAnalytics } from 'angulartics2/ga';

// TODO change JSON structure
// TODO CONSTANTS, exmp: url
// TODO clicks not a DOM but angular
// TODO Interfaces, type control

@Component({
    selector: 'app-portfolio',
    templateUrl: './app.component.html'
})

export class AppComponent {
  constructor(angulartics2GoogleAnalytics: Angulartics2GoogleAnalytics) {}
}
