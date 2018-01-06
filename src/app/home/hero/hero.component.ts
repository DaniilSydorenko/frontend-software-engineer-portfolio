import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ScrollToService, ScrollToConfigOptions } from '@nicky-lenaers/ngx-scroll-to';
import { TranslateService } from '@ngx-translate/core';
import { IpInfoService } from '../../shared/services/ip-info.service';
import { VisitorData } from '../../shared/models/visitor-data';
// import * as $ from 'jquery';
// import * as vide from 'vide';
// import * as typelessPackage from 'wowjs';
import { WOW } from 'wowjs/dist/wow';

@Component({
    selector: 'app-hero',
    templateUrl: 'hero.component.html',
})

export class AppHeroComponent implements OnInit, AfterViewInit {
  param = { value: 'world' };
  visitorData: Array<VisitorData>;

  constructor(private _scrollToService: ScrollToService, private _ipInfoService: IpInfoService, translate: TranslateService) {
    translate.setDefaultLang('us');

    _ipInfoService.getVisitorData()
      .subscribe(data => {
        const countryLang = data.country_code.toLowerCase();
        translate.use(countryLang);
      });
  }

  ngOnInit() { }

  ngAfterViewInit() {
    new WOW().init();
  }

  public triggerScrollTo(scrollTo) {
    const config: ScrollToConfigOptions = {
      target: scrollTo
    };

    this._scrollToService.scrollTo(config);
  }
}
