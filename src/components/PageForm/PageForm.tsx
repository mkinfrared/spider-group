import * as React from "react";
import axios from "axios";

import Button from "@material-ui/core/Button";
import Checkbox from "@material-ui/core/Checkbox";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Typography from "@material-ui/core/Typography";

import {
  PageFormProps,
  PageFormState
} from "components/PageForm/PageForm.type";

import css from "components/PageForm/PageForm.module.scss";

class PageForm extends React.Component<PageFormProps, PageFormState> {
  public state: PageFormState = {
    active: false,
    city: "",
    text: "",
    title: ""
  };

  private handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    type allowedKeys = "city" | "text" | "title";
    const { name, value } = e.target;

    this.setState({ [name]: value } as Pick<PageFormState, allowedKeys>);
  };

  private handleCheckboxChange = () => {
    this.setState(prevState => ({
      active: !prevState.active
    }));
  };

  private handleClick = async () => {
    await axios.post("/api/page", this.state);

    this.props.close();
  };

  public render() {
    const { text, active, title, city } = this.state;
    return (
      <div className={css.pageForm}>
        <Typography variant="h3">Add Page</Typography>
        <FormControlLabel
          control={
            <Checkbox
              checked={active}
              onChange={this.handleCheckboxChange}
              value={active}
            />
          }
          label="Active"
        />
        <TextField
          label="Name"
          value={text}
          name="text"
          onChange={this.handleChange}
          margin="normal"
        />
        <TextField
          label="Name"
          value={title}
          name="title"
          onChange={this.handleChange}
          margin="normal"
        />
        <TextField
          label="Name"
          value={city}
          name="city"
          onChange={this.handleChange}
          margin="normal"
        />
        <Button onClick={this.handleClick}>Add</Button>
      </div>
    );
  }
}

export default PageForm;
