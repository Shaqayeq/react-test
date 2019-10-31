import React, { Component } from "react";

import data from "../data.json";
import Fullpage from "../components/Fullpage";
import SkillCard from "../components/SkillCard";
import LinkDirect from "../components/LinkDirect";

import "./SkillSection.css";

export default class SkillSection extends Component {
  render() {
    return (
      <div>
        <Fullpage className="third">
          <h3>{data.sections[1].title}</h3>
          <div className="cards-wrapper">
            {data.sections[1].items.map(skill => {
              return <SkillCard skill={skill} />;
            })}
          </div>
        </Fullpage>
        <LinkDirect to="home" title="downIcon" icon={data.icons.up} />
      </div>
    );
  }
}
