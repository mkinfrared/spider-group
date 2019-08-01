import { City } from "components/CitiesList/CitiesList.type";

export interface PagesListState {
  next: null | string;
  previous: null | string;
  results: Result[];
  modalOpen: boolean;
}

export interface Result {
  id: number;
  city: City;
  created: string;
  modified: string;
  title: string;
  text: string;
  active: boolean;
}
