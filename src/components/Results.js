import React from "react";

class Results extends React.Component {

  render() {

    return this.props.location.state.results ? this.props.location.state.results.docs.map(item => {
      return <li>{item.title_english} - EP: {item.episode} - {item.imagepreview}</li>
    }): <h1>No results</h1>;
  }
}

export default Results;
