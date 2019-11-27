import React from "react";
import { Article, Section } from "../../components";
import Icon1 from "./Icon1/index.js";
import Icon2 from "./Icon2/index.js";

const Icons = ({ active, className, style }) => (
  <Section id="Icons" active={active}>
    <Article id="Icon_1" title="Highlight">
      <Icon1 of="star" hoverIcon="star-outline" />
      <Icon1 of="bookmark" hoverIcon="bookmark-outline" />
      <Icon1 of="favorite" hoverIcon="favorite-outline" />
    </Article>
    <Article id="Icon_2" title="Tick">
      <Icon2 of="home" />
      <Icon2 of="navigation" />
      <Icon2 of="pin" />
      <Icon2 of="cutlery" />
    </Article>
  </Section>
);

export default Icons;
