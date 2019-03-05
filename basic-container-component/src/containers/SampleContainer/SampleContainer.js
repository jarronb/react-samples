import React, { Component } from "react";
import SampleComponent from "../../components/SampleComponent/SampleComponent";
import "./SampleContainer.css";

class SampleContainer extends Component {
  btnOnClick = event => {
    this.props.getPosts();
  };

  render() {
    return (
      <div className="SampleContainer">
        <h1>I am a container</h1>
        <SampleComponent />
      </div>
    );
  }
}

export default SampleContainer;
