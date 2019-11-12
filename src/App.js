import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import RootRef from "@material-ui/core/RootRef";
import { Paper, TextField, Button } from "@material-ui/core";
import "./App.css";
import { searchAnime } from "./utils/main";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Trace.moe</h1>
        <h4>Trace the original anime from a screenshot.</h4>
        <PaperDropzone />
        <h2 style={{ color: "orange" }}>OR</h2>
        <div style={{ width: "500px" }}>
          <TextField
            placeholder="Input Image URL"
            variant="outlined"
            // move/change width hardcode, with matching value in PaperDropzone
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

function PaperDropzone() {
  const onDrop = useCallback(acceptedFiles => {
    searchAnime(acceptedFiles); // one file always
  });

  const { getRootProps, getInputProps } = useDropzone({ onDrop });
  const { ref, ...rootProps } = getRootProps();

  return (
    <RootRef rootRef={ref}>
      <Paper
        {...rootProps}
        elevation={7}
        className="FileUpload"
        style={{ width: "500px" }}
      >
        <input {...getInputProps()} multiple={false} />
        <p>Drag 'n' drop a file here, or click to select a file</p>
      </Paper>
    </RootRef>
  );
}

export default App;
