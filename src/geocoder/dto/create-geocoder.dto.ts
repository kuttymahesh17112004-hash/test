export class CreateGeocoderDto {
    latitude: number;
  longitude: number;
  country: string;
//   countryCode?: string;
  state: string;
  district: string;   // state_district map
  county: string;
  village: string;
  city: string;
  road: string;
  postcode: string;
}
