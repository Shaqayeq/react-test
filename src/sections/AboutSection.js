import React, { Component } from "react";
import { Element } from "react-scroll";

import data from "../data.json";
import Fullpage from "../components/Fullpage";
import LinkDirect from "../components/LinkDirect";

import "./AboutSection.css";

export default class AboutSection extends Component {
  render() {
    return (
      <div>
        <Fullpage className="second">
          <h3>{data.sections[0].title}</h3>
          <div className="paragraphs">
            {data.sections[0].items.map(p => {
              return <p>{p.content}</p>;
            })}
          </div>
        </Fullpage>
        <LinkDirect to="skill" title="downIcon" icon={data.icons.down}/>
        <Element name="skill" className="element" />
      </div>
    );
  }
}
