export interface CitiesListState {
  cities: City[];
}

interface City {
  id: number;
  created: string;
  modified: string;
  name: string;
}
