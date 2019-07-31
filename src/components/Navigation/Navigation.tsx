import * as React from "react";
import { Link } from "react-router-dom";

import Paper from "@material-ui/core/Paper";
import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";

import { LINKS, NavigationState } from "components/Navigation/Navigation.type";

class Navigation extends React.Component<{}, NavigationState> {
  public state = {
    value: LINKS.HOME
  };

  private handleChange = (e: React.ChangeEvent<{}>, newValue: string) => {
    this.setState({ value: newValue });
  };

  public render() {
    const { value } = this.state;

    return (
      <Paper>
        <Tabs
          value={value}
          onChange={this.handleChange}
          indicatorColor="primary"
          textColor="primary"
          centered
        >
          <Tab
            label="Item One"
            component={Link}
            to={LINKS.HOME}
            value={LINKS.HOME}
          />
          <Tab
            label="Item Two"
            component={Link}
            to={LINKS.PAGES}
            value={LINKS.PAGES}
          />
        </Tabs>
      </Paper>
    );
  }
}

export default Navigation;
