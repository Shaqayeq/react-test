import React from "react";

import TitleSection from "./sections/TitleSection";
import AboutSection from "./sections/AboutSection";
import SkillSection from "./sections/SkillSection";
import Navigation from "./components/Navigation";

import "./App.css";

export default function App() {
  return (
    <div>
      {/* <StickyContainer>
         <Sticky>{({ style }) => }</Sticky> */}
      <Navigation />
      <TitleSection />
      <AboutSection />
      <SkillSection />
      {/*  </StickyContainer> */}
    </div>
  );
}
