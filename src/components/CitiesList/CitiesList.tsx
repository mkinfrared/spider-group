import axios, { Canceler } from "axios";
import * as React from "react";

import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

import css from "components/CitiesList/CitiesList.module.scss";
import { CitiesListState } from "components/CitiesList/CitiesList.type";

let cancel: Canceler;

class CitiesList extends React.Component<{}, CitiesListState> {
  public state: CitiesListState = {
    cities: []
  };

  public componentDidMount() {
    this.fetchCities();
  }

  private fetchCities = async () => {
    try {
      const CancelToken = axios.CancelToken;
      const response = await axios.get("/api/catalog", {
        cancelToken: new CancelToken(c => {
          cancel = c;
        })
      });
      const cities = response.data;

      this.setState({ cities });
    } catch (e) {
      this.setState(() => {
        throw e;
      });
    }
  };

  public componentWillUnmount() {
    cancel();
  }

  public render() {
    const cities = this.state.cities.map(city => (
      <Paper key={city.id}>
        <Typography variant={"h6"}>Name: {city.name}</Typography>
        <Typography variant={"h6"}>Created: {city.created}</Typography>
        <Typography variant={"h6"}>Modified: {city.modified}</Typography>
      </Paper>
    ));

    return <div className={css.citiesList}>{cities}</div>;
  }
}

export default CitiesList;
