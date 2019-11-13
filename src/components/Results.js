import React from "react";

class Results extends React.Component {

  render() {

    return this.props.location.state.results ? this.props.location.state.results.docs.map((item, index) => {
      return <li>Guess #{index+1}: {item.title_english} - EP: {item.episode} - <a href={item.imagepreview}>Image Preview</a> - <a href={item.videopreview}>Video Preview</a> - <a href={item.naturalvideopreview}>Nautral Video Preview</a></li>
    }): <h1>No results</h1>;
  }
}

export default Results;
