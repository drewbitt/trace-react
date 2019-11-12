import React from "react";
import { TextField, Button } from "@material-ui/core";
import "./App.css";
import PaperDropzone from "./components/PaperDropzone";

function App(props) {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Trace.moe</h1>
        <h4>Trace the original anime from a screenshot.</h4>
        <PaperDropzone props={props} />
        <h2 style={{ color: "orange" }}>OR</h2>
        <div style={{ width: "500px" }}>
          <TextField
            placeholder="Input Image URL"
            variant="outlined"
            // TODO: move/change width hardcode, with matching value in PaperDropzone
            style={{ background: "white", width: "80%" }}
            name="imageUrl"
          ></TextField>
          <Button variant="outlined" color="secondary">
            Submit
          </Button>
        </div>
      </header>
    </div>
  );
}

export default App;
