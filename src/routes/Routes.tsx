import * as React from "react";
import { Route, Switch } from "react-router-dom";

import CitiesList from "components/CitiesList";
import { LINKS } from "components/Navigation/Navigation.type";
import PagesList from "components/PagesList";

const Routes = () => (
  <Switch>
    <Route path={LINKS.HOME} exact component={CitiesList} />
    <Route path={LINKS.PAGES} exact component={PagesList} />
  </Switch>
);

export default Routes;
