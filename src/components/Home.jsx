import React, { Component } from "react";

class Home extends Component {
  state = {
    user: "Muhammad Hassan",
  };
  style = {
    textAlign: "center",
    padding: "20px",
  };
  render() {
    return (
      <div className="Home">
        <h1 style={this.style}>Hello {this.state.user}</h1>
      </div>
    );
  }
}

export default Home;
