// export interface State {
//     readonly countries: Array<Country>;
// }

import { Country } from './country';

export interface AppState {
  readonly countryList: Country[];
  readonly countryDetails: Country[];
}
