import { Component, OnInit } from '@angular/core';
import { Country } from '../core/models/country';
import { ApiService } from '../core/services/api/api.service';
import * as _ from 'lodash';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  countries: Country[] = [];
  shodwDropdown = false;
  loading = false;
  constructor(private countryS: ApiService) {
    //
  }

  ngOnInit(): void {
    this.getCountries();
  }

  getCountries() {
    this.loading = true;
    this.countryS.getCountries().subscribe((res) => {
      this.countries = _.orderBy(res.slice(0, 20), ['name.official'], ['asc']);
      this.loading = false;
    });
  }

  // Used to loop through the shimmer for a number of times
  numSequence(n: number): Array<number> {
    return Array(n);
  }
}
