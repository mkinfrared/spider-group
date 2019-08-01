import { Modal } from "@material-ui/core";
import axios, { Canceler } from "axios";
import { LINKS } from "components/Navigation/Navigation.type";
import PageForm from "components/PageForm";
import * as React from "react";

import Button from "@material-ui/core/Button";
import Fab from "@material-ui/core/Fab";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import AddIcon from "@material-ui/icons/Add";

import { PagesListState } from "components/PagesList/PagesList.type";

import css from "components/PagesList/PagesList.module.scss";
import { Link } from "react-router-dom";

let cancel: Canceler;

class PagesList extends React.Component<{}, PagesListState> {
  public state: PagesListState = {
    next: null,
    previous: null,
    results: [],
    modalOpen: false
  };

  public componentDidMount() {
    this.fetchNextPages();
  }

  private fetchNextPages = async () => {
    try {
      const { next } = this.state;
      const { CancelToken } = axios;
      let url = "/api/page";

      if (next) {
        // For handling CORS in development
        url = next.replace(process.env.REACT_APP_BASE_URL!, "");
      }

      const response = await axios.get(url, {
        cancelToken: new CancelToken(c => {
          cancel = c;
        })
      });
      const nextState = response.data;

      this.setState({ ...nextState });
    } catch (e) {
      this.setState(() => {
        throw e;
      });
    }
  };

  private fetchPrevPages = async () => {
    try {
      const { previous } = this.state;
      const { CancelToken } = axios;

      if (!previous) {
        return;
      }

      // For handling CORS in development
      const url = previous.replace(process.env.REACT_APP_BASE_URL!, "");

      const response = await axios.get(url, {
        cancelToken: new CancelToken(c => {
          cancel = c;
        })
      });
      const nextState = response.data;

      this.setState({ ...nextState });
    } catch (e) {
      this.setState(() => {
        throw e;
      });
    }
  };

  public componentWillUnmount() {
    cancel();
  }

  private closeModal = () => {
    this.setState({ modalOpen: false });
  };

  private openModal = () => {
    this.setState({ modalOpen: true });
  };

  public render() {
    const { previous, next, modalOpen } = this.state;

    const results = this.state.results.map(result => (
      <Link key={result.id} to={`${LINKS.PAGES}/${result.id}`}>
        <Paper>
          <Typography variant={"h6"}>Title: {result.title}</Typography>
          <Typography variant={"h6"}>Text: {result.text}</Typography>
          <Typography variant={"h6"}>Active: {`${result.active}`}</Typography>
          <Typography variant={"h6"}>Created: {result.created}</Typography>
          <Typography variant={"h6"}>Modified: {result.modified}</Typography>
          <Typography variant={"h6"}>City Name: {result.city.name}</Typography>
        </Paper>
      </Link>
    ));

    return (
      <div className={css.pagesList}>
        <div className={css.results}>{results}</div>
        <div className={css.buttons}>
          {previous && <Button onClick={this.fetchPrevPages}>Previous</Button>}
          {next && <Button onClick={this.fetchNextPages}>Next</Button>}
        </div>
        <Fab onClick={this.openModal}>
          <AddIcon />
        </Fab>
        <Modal className={css.modal} open={modalOpen} onClose={this.closeModal}>
          <Paper>
            <PageForm close={this.closeModal} />
          </Paper>
        </Modal>
      </div>
    );
  }
}

export default PagesList;
