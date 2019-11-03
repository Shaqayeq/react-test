import React, { Component } from "react";
import LinkDirect from "./LinkDirect";

import "./navigation.css";

export default class Navigation extends Component {
  render() {
    return (
      <div className="navigation">
        <div className="floatRight">
          <div className="navigationItem">
            <LinkDirect to="about" title="about" />
          </div>
          <div className="navigationItem">
            <LinkDirect to="skill" title="skill" />
          </div>
        </div>
        <div className="floatLeft">
          <div className="navigationItem" onClick={this.props.changeClass}>
            changeTamplate
          </div>
        </div>
      </div>
    );
  }
}
