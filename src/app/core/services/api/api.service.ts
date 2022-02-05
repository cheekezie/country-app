import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Country } from '../../models/country';
import { RequestService } from '../request/request.service';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  baseUrl = environment.url;
  constructor(private http: HttpClient, private reqS: RequestService) {}

  public getCountries(): Observable<Country[]> {
    return this.reqS.get(this.baseUrl + 'all');
  }

  public getCountryByFullname(name: string): Observable<Country[]> {
    const params = new HttpParams({
      fromObject: {
        fullText: true,
      },
    });
    return this.reqS.get(this.baseUrl + 'name/' + name, params);
  }

  public getCountryByRegion(region: string): Observable<Country[]> {
    return this.reqS.get(this.baseUrl + 'region/' + region);
  }
  public getCountryByCode(code: string): Observable<Country[]> {
    return this.reqS.get(this.baseUrl + 'alpha/' + code);
  }

  public getCountryByCodes(code: string): Observable<Country[]> {
    const params = new HttpParams({
      fromObject: {
        codes: code,
      },
    });
    return this.reqS.get(this.baseUrl + 'alpha', params);
  }
}
