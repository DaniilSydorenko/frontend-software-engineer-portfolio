import { Component, OnInit, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-preloader',
  templateUrl: './preloader.component.html',
  styleUrls: ['./preloader.component.scss']
})
export class PreloaderComponent implements OnInit {

  constructor(private el: ElementRef) { }

  runPreloader() {
    setTimeout(() => {
      this.el.nativeElement.querySelector('.preloader-dots').classList.add('hide');
    }, 3000);
  }

  ngOnInit() {
    this.runPreloader();
  }
}
