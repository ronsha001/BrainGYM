import React, { Component } from "react";
import "./category.css";

class Candidate extends React.Component {
  render() {
    return (
      <div className="category">
        <h1>{this.props.categoryName}</h1>
        <div className="imgContainer">
          <img src={this.props.categoryIMG} alt='category img'></img>
        </div>
      </div>
    );
  }
}

Candidate.defaultProps = {
  
};

export default Candidate;
