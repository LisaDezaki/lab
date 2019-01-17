import React from "react";
import { Article, Section } from "../../components";
import Button1 from "./Button1/index.js";
import Button2 from "./Button2/index.js";

const Buttons = ({ active, className, style }) => (
  <Section id="Buttons" active={active}>
    <Article id="Button_1" title="Block Button">
      <Button1 label="Earth" direction="up" />
      <Button1 label="Wind" direction="right" />
      <Button1 label="Water" direction="down" />
      <Button1 label="Fire" direction="left" />
    </Article>
    <Article id="Button_2" title="Slider Button">
      <Button2 label="John" direction="up" />
      <Button2 label="Paul" direction="right" />
      <Button2 label="George" direction="down" />
      <Button2 label="Ringo" direction="left" />
    </Article>
  </Section>
);

export default Buttons;
