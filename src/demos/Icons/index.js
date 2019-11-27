import React from "react";
import { Article, Section } from "../../components";
import ExpandIcon from "./ExpandIcon/index.js";
import TickIcon from "./TickIcon/index.js";

const Icons = ({ active, className, style }) => (
  <Section id="Icons" active={active}>
    <Article id="ExpandIcons" title="Expand">
      <ExpandIcon of="star" hoverIcon="star-outline" />
      <ExpandIcon of="bookmark" hoverIcon="bookmark-outline" />
      <ExpandIcon of="favorite" hoverIcon="favorite-outline" />
    </Article>
    <Article id="TickIcons" title="Tick">
      <TickIcon of="home" />
      <TickIcon of="navigation" />
      <TickIcon of="pin" />
      <TickIcon of="cutlery" />
    </Article>
  </Section>
);

export default Icons;
