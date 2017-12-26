import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { getApiEndpoint } from '../constants/index';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class DataLoaderService {

  constructor(private _http: HttpClient) { }

  public getPortfolioData(section?: string): Observable<any> {
    return this._http.get(getApiEndpoint(section))
      .map(data => (section) ? data[section] : data);
  }
}
