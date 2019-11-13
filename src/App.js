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
        <PaperDropzone {...props} />
        <h2 style={{ color: "orange" }}>OR</h2>
        <URLForm {...props} />
        <LoadingSpinnerComponent />
        <a
        href="https://github.com/soruly/trace.moe"
        style={{ fontSize: "15px", paddingTop: '2em'}}
      >
        https://github.com/soruly/trace.moe
      </a>
      </header>
    </div>
  );
}

export default App;
