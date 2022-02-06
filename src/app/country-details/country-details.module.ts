import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountryDetailsComponent } from './country-details.component';
import { CountryDetailsRoutingModule } from './country-details-routing.module';

@NgModule({
  declarations: [CountryDetailsComponent],
  imports: [CommonModule, CountryDetailsRoutingModule],
})
export class CountryDetailsModule {}
