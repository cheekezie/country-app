import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Country } from '../core/models/country';
import { Loader } from '../core/models/loader';
import { ApiService } from '../core/services/api/api.service';

@Component({
  selector: 'app-country-details',
  templateUrl: './country-details.component.html',
  styleUrls: ['./country-details.component.scss'],
})
export class CountryDetailsComponent implements OnInit {
  loading = false;
  country: Country;
  loaderType: Loader = { type: 'detail' };
  constructor(
    private activateDroute: ActivatedRoute,
    private countryS: ApiService,
  ) {}

  ngOnInit() {
    const country = this.activateDroute.snapshot.paramMap.get('slug');
    const name = country ? country.trim().replace(/-/g, ' ') : ''; // to reformat the slug
    this.getCountry(name);
  }

  getCountry(name: string) {
    this.loading = true;
    this.countryS.getCountryByFullname(name).subscribe((res) => {
      res[0].dialoCode = res[0].idd.root + res[0].idd.suffixes[0];
      this.country = res[0];
      this.loading = false;
    });
  }
}
