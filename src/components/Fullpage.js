import React, { Component } from "react";
import "./fullpage.css";

export default class Fullpage extends Component {
  render() {
    const { children } = this.props;
    return (
      <div
        className={`fullpage ${this.props.className}`}
      >
        {children}
      </div>
    );
  }
}
