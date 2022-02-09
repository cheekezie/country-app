import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Country } from '../core/models/country';
import { Loader } from '../core/models/loader';
import { AppState } from '../core/models/state';
import { ApiService } from '../core/services/api/api.service';
import { UtilService } from '../core/services/util/util.service';

@Component({
  selector: 'app-country-details',
  templateUrl: './country-details.component.html',
  styleUrls: ['./country-details.component.scss'],
})
export class CountryDetailsComponent implements OnInit {
  loading = false;
  country: Country;
  storedData = false;
  loaderType: Loader = { type: 'detail' };
  constructor(
    private activateDroute: ActivatedRoute,
    private countryS: ApiService,
    private util: UtilService,
    private store: Store<AppState>,
  ) {}

  ngOnInit() {
    const countrySlug = this.activateDroute.snapshot.paramMap.get('slug');
    const name = countrySlug ? countrySlug.trim().replace(/-/g, ' ') : ''; // to reformat the slug
    this.store
      .select((store) => store.countryDetails)
      .subscribe((countries) => {
        if (countries.length > 0) {
          this.storedData = true;
          this.country = countries[0];
        } else {
          this.storedData = false;
          this.getCountry(name);
        }
      });
  }

  getCountry(name: string) {
    this.loading = true;
    this.countryS.getCountryByFullname(name).subscribe((res) => {
      res[0] = this.formatCountry(res[0]);
      this.country = res[0];
      this.loading = false;
    });
  }

  // To get border country if no country list exists in store
  // Some countries do not have the CIOC CODE, so filtering from store is inefficient
  searchBorderCountry(cioc: string) {
    this.loading = true;
    this.countryS.getCountryByCode(cioc).subscribe((res) => {
      res[0] = this.formatCountry(res[0]);
      this.country = res[0];
      this.loading = false;
    });
  }

  formatCountry(country: Country): Country {
    country.idd.root + country.idd && country.idd.suffixes
      ? country.idd.suffixes[0]
      : '';
    country.id = this.util.create_UUID();
    return country;
  }
}
