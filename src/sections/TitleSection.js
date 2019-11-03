import React, { Component } from "react";
import { SocialIcon } from "react-social-icons";
import { Element } from "react-scroll";

import data from "../data.json";
import Fullpage from "../components/Fullpage";
import LinkDirect from "../components/LinkDirect";

import "./TitleSection.css";

export default class TitleSection extends Component {
  state = {
    color: "white",
  };
  changeColor = color => {
    this.setState({
      color: color
    });
  };
  render() {
    return (
      <div  className={ this.props.className}>
       <Element name="home" className="element" />
        <Fullpage className="first">
          <h1
            className="title"
            onMouseOver={() => this.changeColor("yellow")}
            style={{ color: this.state.color }}
            onMouseLeave={() => this.changeColor("white")}
          >
            {data.title}
          </h1>
          <div>
            <h2>{data.subtitle}</h2>
          </div>
          <div className="icons-wrapper">
            {Object.keys(data.links).map(key => {
              return (
                <div className="icon">
                  <SocialIcon url={data.links[key]} />
                </div>
              );
            })}
          </div>
        </Fullpage>
        <LinkDirect to="about" title="downIcon" icon={data.icons.down}/>
        <Element name="about" className="element" />
      </div>
    );
  }
}
