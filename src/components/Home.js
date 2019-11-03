import React, { Component } from "react";

import TitleSection from "../sections/TitleSection";
import AboutSection from "../sections/AboutSection";
import SkillSection from "../sections/SkillSection";
import Navigation from "./Navigation";

import "../App.css";

export default class Home extends Component {
  state = {
    className: "firstClass"
  };
  changeClass = () => {
    let name = this.state.className === "firstClass" ? "secondClass" : "firstClass";
    this.setState({
      className: name
    });
  }
  render() {
    return (
      <div>
        {/* <StickyContainer>
             <Sticky>{({ style }) => }</Sticky> */}
        <Navigation changeClass={this.changeClass} />
        <TitleSection className={this.state.className} />
        <AboutSection />
        <SkillSection />
        {/*  </StickyContainer> */}
      </div>
    );
  }
}
