import React, { Component } from "react";
import { Link } from "react-scroll";

import DownIcon from "./DownIcon";

export default class LinkDirect extends Component {
  render() {
    return (
      <Link
        activeClass="active"
        to={this.props.to}
        spy={true}
        smooth={true}
        offset={50}
        duration={500}
      >
        {this.props.title === "downIcon" ? (
          <DownIcon icon={this.props.icon} onClick={() => console.log("")} />
        ) : (
          this.props.title
        )}
      </Link>
    );
  }
}
