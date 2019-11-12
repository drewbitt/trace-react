import React from "react";
import { useDropzone } from "react-dropzone";
import RootRef from "@material-ui/core/RootRef";
import { Paper } from "@material-ui/core";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Trace.moe</h1>
        <h4>Trace the original anime from a screenshot.</h4>

        <PaperDropzone />
      </header>
    </div>
  );
}

function PaperDropzone() {
  const { getRootProps, getInputProps } = useDropzone();
  const { ref, ...rootProps } = getRootProps();

  return (
    <RootRef rootRef={ref}>
      <Paper {...rootProps} elevation="7" className="FileUpload">
        <input {...getInputProps()} />
        <p>Drag 'n' drop some files here, or click to select files</p>
      </Paper>
    </RootRef>
  );
}

export default App;
