export interface Country {
  name: Name;
  idd: {
    root: string;
    suffixes: string[];
  };
  capital: string[];
  altSpellings: ['BA', 'Bosnia-Herzegovina', 'Босна и Херцеговина'];
  region: string;
  subregion: string;
  languages: Object;
  currencies: Object;
  latlng: number[];
  dialoCode?: string;
  landlocked: boolean;
  borders: string[];
  area: number;
  demonyms: {
    eng: Demonym;
    fra: Demonym;
  };
  flag: string;
  maps: {
    googleMaps: string;
    openStreetMaps: string;
  };
  population: number;
  gini: {
    '2011': 33;
  };
  fifa: string;
  car: {
    signs: string[];
    side: string;
  };
  timezones: string[];
  continents: string[];
  flags: Imgaes;
  coatOfArms: Imgaes;
  startOfWeek: string;
  capitalInfo: {
    latlng: number[];
  };
  postalCode: {
    format: string;
    regex: string;
  };
}

export interface Name {
  common: string;
  official: string;
  nativeName: {
    bos: {
      official: string;
      common: string;
    };
    hrv: {
      official: string;
      common: string;
    };
    srp: {
      official: string;
      common: string;
    };
  };
}

export interface Demonym {
  f: string;
  m: string;
}

export interface Imgaes {
  png: string;
  svg: string;
}
