import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UtilService {
  baseUrl = environment.url;
  constructor() {
    //
  }

  private themeSubject = new BehaviorSubject<boolean>(true);
  theme = this.themeSubject.asObservable();

  setTheme(theme: boolean) {
    this.themeSubject.next(theme);
  }
}
