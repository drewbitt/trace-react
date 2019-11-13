import React from "react";
import { Button, TextField, Paper } from "@material-ui/core";
import { searchAnimeWithURL } from "./../utils/main";
import { trackPromise } from "react-promise-tracker";

class URLForm extends React.Component {
  submit = event => {
    event.preventDefault();
    const urlString = event.target[0].value;
    trackPromise(
      searchAnimeWithURL(urlString).then(res => {
        console.log(res);
        this.props.props.history.push("/results", { results: res });
      })
    );
  };

  render() {
    return (
      <Paper component="form" style={{ width: "500px" }} onSubmit={this.submit}>
          <TextField
            placeholder="Input Image URL"
            variant="outlined"
            // TODO: move/change width hardcode, with matching value in PaperDropzone
            style={{ background: "white", width: "82.5%" }}
            name="imageURL"
          ></TextField>
          <Button
            variant="outlined"
            color="secondary"
            type="submit"
            style={{ paddingTop: "15px", paddingBottom: "15px" }}
          >
            Submit
          </Button>
      </Paper>
    );
  }
}

export default URLForm;
