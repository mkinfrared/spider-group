import axios from "axios";
import * as React from "react";

import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

import { CitiesListState } from "components/CitiesList/CitiesList.type";
import css from "components/CitiesList/CitiesList.module.scss";

class CitiesList extends React.Component<{}, CitiesListState> {
  public state: CitiesListState = {
    cities: []
  };

  public componentDidMount() {
    this.fetchCities();
  }

  private fetchCities = async () => {
    const response = await axios.get("/api/catalog");
    const cities = response.data;

    this.setState({ cities });
  };

  public render() {
    const cities = this.state.cities.map(city => (
      <Paper key={city.id}>
        <Typography variant={"h6"}>{city.name}</Typography>
      </Paper>
    ));

    return <div className={css.citiesList}>{cities}</div>;
  }
}

export default CitiesList;
