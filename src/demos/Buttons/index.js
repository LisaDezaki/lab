import React from "react";
import { Article, Section } from "../../components";
import BlockButton from "./BlockButton/index.js";
import RevealButton from "./RevealButton/index.js";

const Buttons = ({ active, className, style }) => (
  <Section id="Buttons" active={active}>
    <Article id="BlockButtons" title="Blocked">
      <BlockButton label="Blinky" direction="up" />
      <BlockButton label="Pinky" direction="right" />
      <BlockButton label="Inky" direction="down" />
      <BlockButton label="Clyde" direction="left" />
    </Article>
    <Article id="RevealButtons" title="Reveal">
      <RevealButton label="Chloe" direction="up" />
      <RevealButton label="Max" direction="right" />
      <RevealButton label="Rachel" direction="down" />
      <RevealButton label="Kate" direction="left" />
    </Article>
  </Section>
);

export default Buttons;
