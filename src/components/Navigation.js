import React, { Component } from "react";

import data from "../data.json";
import LinkDirect from "./LinkDirect";

import "./navigation.css";

export default class Navigation extends Component {
  render() {
    var changeColorTemplate=function() {
      data.sections[0].className = data.sections[0].className ==="firstClass" ?"secondClass":"firstClass";
    };
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
          <div className="navigationItem" onClick={() => changeColorTemplate()}>
            changeTamplate
          </div>
        </div>
      </div>
    );
  }
}
