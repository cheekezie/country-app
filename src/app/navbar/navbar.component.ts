import { Component } from '@angular/core';
import { UtilService } from '../core/services/util/util.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
})
export class NavbarComponent {
  darkTheme = false;
  constructor(private util: UtilService) {
    //
  }
  toggleTheme() {
    this.darkTheme = !this.darkTheme;
    this.util.setTheme(this.darkTheme);
  }
}
