import * as React from "react";
import { Link, RouteComponentProps, withRouter } from "react-router-dom";

import Paper from "@material-ui/core/Paper";
import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";

import { LINKS, NavigationState } from "components/Navigation/Navigation.type";

class Navigation extends React.Component<RouteComponentProps, NavigationState> {
  public state = {
    value: this.props.location.pathname
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
            label="Cities"
            component={Link}
            to={LINKS.HOME}
            value={LINKS.HOME}
          />
          <Tab
            label="Pages"
            component={Link}
            to={LINKS.PAGES}
            value={LINKS.PAGES}
          />
        </Tabs>
      </Paper>
    );
  }
}

export default withRouter(Navigation);
