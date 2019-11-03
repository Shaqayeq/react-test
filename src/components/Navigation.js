import React, { Component } from "react";
import LinkDirect from "./LinkDirect";

import "./navigation.css";

export default class Navigation extends Component {
  state={
    className:this.props.className
  }
  changeColorTemplate() {
    let name=this.state.className ==="firstClass" ?"secondClass":"firstClass";
    this.props.changeClass(name);
    this.setState({
      className:name
    })
  };
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
          <div className="navigationItem" onClick={this.changeColorTemplate.bind(this)}>
            changeTamplate
          </div>
        </div>
      </div>
    );
  }
}
