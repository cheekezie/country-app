import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-country-details',
  templateUrl: './country-details.component.html',
  styleUrls: ['./country-details.component.scss'],
})
export class CountryDetailsComponent implements OnInit {
  constructor(private activateDroute: ActivatedRoute) {}

  ngOnInit() {
    const country = this.activateDroute.snapshot.paramMap.get('slug');
    console.log(country);
  }
}
