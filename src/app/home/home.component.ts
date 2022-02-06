import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import * as _ from 'lodash';
import { debounceTime } from 'rxjs';
import { Country } from '../core/models/country';
import { ApiService } from '../core/services/api/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  countries: Country[] = [];
  shodwDropdown = false;
  loading = false;
  searchControl: FormControl = new FormControl('');
  regions: string[] = [
    'All',
    'Africa',
    'Americas',
    'Asia',
    'Europe',
    'Oceania',
  ];
  constructor(private countryS: ApiService, private router: Router) {
    //
  }

  ngOnInit(): void {
    this.listenToKeySearch();
    this.getCountries();
  }

  listenToKeySearch() {
    this.searchControl.valueChanges
      .pipe(debounceTime(500))
      .subscribe((data) => console.log(data));
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

  searchByRegion(region: string) {
    console.log(region);
    this.shodwDropdown = false;
  }
  openDetail(name: string) {
    const slug = name.trim().toLowerCase().replace(/\s+/g, '-'); // remove white space from country name and replace with '-';
    this.router.navigate(['/', slug]);
  }
}
