import axios from "axios";
import * as React from "react";
import { RouteComponentProps, withRouter } from "react-router";

import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

import { PageMatchParams, PageState } from "components/Page/Page.type";

class Page extends React.Component<
  RouteComponentProps<PageMatchParams>,
  PageState
> {
  public state: PageState = {};

  public componentDidMount() {
    this.fetchPage();
  }

  private fetchPage = async () => {
    const { match } = this.props;
    const response = await axios.get("/api/page/detail/" + match.params.id);

    this.setState({ ...response.data });
  };

  public render() {
    const { title, text, created } = this.state;
    return (
      <div>
        <Paper>
          <Typography variant="h6">Title: {title}</Typography>
          <Typography variant="h6">Text: {text}</Typography>
          <Typography variant="h6">Created: {created}</Typography>
        </Paper>
      </div>
    );
  }
}

export default withRouter(Page);
