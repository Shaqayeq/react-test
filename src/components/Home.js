import React, { Component } from "react";

import TitleSection from "../sections/TitleSection";
import AboutSection from "../sections/AboutSection";
import SkillSection from "../sections/SkillSection";
import Navigation from "./Navigation";

import "../App.css";

export default class Home extends Component {
  constructor() {
    super();

    this.state = {
      className: "firstClass"
    };
  }
  changeClass(className){
    this.setState({
      className: className
    });
  };
  render() {
    return (
      <div>
        {/* <StickyContainer>
             <Sticky>{({ style }) => }</Sticky> */}
        <Navigation
          className={this.state.className}
          changeClass={this.changeClass.bind(this)}
        />
        <TitleSection className={this.state.className} />
        <AboutSection />
        <SkillSection />
        {/*  </StickyContainer> */}
      </div>
    );
  }
}
