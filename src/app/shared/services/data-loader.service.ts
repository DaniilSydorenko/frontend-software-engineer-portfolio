import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Settings } from '../constants/index';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class DataLoaderService {

  constructor(private _http: HttpClient) { }

  public getPortfolioData(section: string = null): Observable<any> {
    return this._http.get(Settings.API_ENDPOINT + section)
      .map(data => (section) ? data[section] : data);
  }
}
