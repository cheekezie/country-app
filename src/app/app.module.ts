import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule, Title } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { NgxPaginationModule } from 'ngx-pagination';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomPipeModule } from './custom-pipe/custom-pipe.module';
import { HomeComponent } from './home/home.component';
import { SharedModule } from './shared/shared.module';
import {
  addCountryReducer,
  countryDetailsReducer,
} from './store/reducers/country.reducer';
@NgModule({
  declarations: [AppComponent, HomeComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    SharedModule,
    StoreModule.forRoot({
      countryList: addCountryReducer,
      countryDetails: countryDetailsReducer,
    }),
    NgxPaginationModule,
    CustomPipeModule,
  ],
  providers: [
    // {
    //   provide: HTTP_INTERCEPTORS,
    //   multi: true
    // },
    Title,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
