import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    data: { title: 'Country Listing Application | Home', animation: 'home' },
  },
  {
    path: 'login',
    component: LoginComponent,
    data: { title: 'Country Listing Application | Login', animation: 'home' },
  },
  {
    path: ':slug',
    data: {
      data: {
        title: 'Country Listing Application | Deatils',
        animation: 'details',
      },
    },
    loadChildren: () =>
      import('./country-details/country-details.module').then(
        (m) => m.CountryDetailsModule,
      ),
  },
  { path: '**', redirectTo: '/' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
