import React from "react";
import "./App.css";
import PaperDropzone from "./components/PaperDropzone";
import LoadingSpinnerComponent from "./components/Spinner";
import URLForm from "./components/URLForm";

function App(props) {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Trace.moe</h1>
        <h4>Trace the original anime from a screenshot.</h4>
        <PaperDropzone props={props} />
        <h2 style={{ color: "orange" }}>OR</h2>
        <URLForm props={props}/>
        <LoadingSpinnerComponent />
      </header>
    </div>
  );
}

export default App;
