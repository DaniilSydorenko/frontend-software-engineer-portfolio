import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Settings } from '../constants/index';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class DataLoaderService {

  constructor(private _http: Http) { }

  public getPortfolioData(section: string = null): Observable<any> {
    return this._http.get(Settings.API_ENDPOINT)
      .map(data => {
        let res = data.json();
        if (section) {
          res = res[section];
        }
        return res;
      });
  }
}
