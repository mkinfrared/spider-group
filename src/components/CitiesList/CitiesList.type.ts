export interface CitiesListState {
  cities: City[];
}

export interface City {
  id: number;
  created: string;
  modified: string;
  name: string;
}
