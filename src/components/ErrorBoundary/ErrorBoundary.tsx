import * as React from "react";
import { Link } from "react-router-dom";

import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import { ErrorBoundaryState } from "components/ErrorBoundary/ErrorBoundary.type";

const initialState: ErrorBoundaryState = {
  hasError: false,
  error: null,
  info: null
};

class ErrorBoundary extends React.Component<{}, ErrorBoundaryState> {
  public state = initialState;

  public componentDidCatch(error: Error, info: React.ErrorInfo) {
    this.setState({ hasError: true, error, info });
  }

  private handleClick = () => {
    this.setState({ ...initialState });
  };

  public render() {
    if (this.state.hasError) {
      return (
        <div className="ErrorBoundary">
          <Typography variant={"h3"}>{this.state.error!.name}</Typography>
          <Typography variant={"h4"}>{this.state.error!.message}</Typography>
          <Typography variant={"h5"}>
            {this.state.info!.componentStack}
          </Typography>
          <Button component={Link} to="/" onClick={this.handleClick}>
            To Main Page
          </Button>
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
