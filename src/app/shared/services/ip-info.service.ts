import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { getFreeGeoIpUrl } from '../constants/index';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class IpInfoService {

  constructor(private _http: HttpClient) { }

  public getVisitorData(): Observable<any> {
    return this._http.get(getFreeGeoIpUrl())
      .map(data => data);
  }
}
