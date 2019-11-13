import React from "react";
import "./Results.css";

class Results extends React.Component {
  render() {
    return (
      <div className="Main">
        <header className="Main-header">
          {this.props.location.state
            ? this.props.location.state.results.docs.map((item, index) => {
                return (
                  <div id="result">
                    {/* This is bad. First result would have an h2. 
                    Unable to chain map & h2 otherwise right now though*/}
                    {index === 0 ? <h2>Trace.moe results</h2> : ""}
                    <li key={index + 1}>
                      Guess #{index + 1}: {item.title_english} - EP:{" "}
                      {item.episode} -{" "}
                      <a href={item.imagepreview}>Image Preview</a> -{" "}
                      <a href={item.videopreview}>Video Preview</a> -{" "}
                      <a href={item.naturalvideopreview}>
                        Natural Video Preview
                      </a>
                    </li>
                  </div>
                );
              })
            : "No results"}
        </header>
      </div>
    );
  }
}

export default Results;
