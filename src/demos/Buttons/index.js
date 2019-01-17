import React from "react";
import { Article, Section } from "../../components";
import Button1 from "./Button1/index.js";
import Button2 from "./Button2/index.js";

const Buttons = ({ active, className, style }) => (
  <Section id="Buttons" active={active}>
    <Article id="Button_1" title="Block Button">
      <Button1 label="Earth" />
      <Button1 label="Wind" />
      <Button1 label="Water" />
      <Button1 label="Fire" />
    </Article>
    <Article id="Button_2" title="Slider Button">
      <Button2 label="John" direction="down" />
      <Button2 label="Paul" direction="left" />
      <Button2 label="George" direction="up" />
      <Button2 label="Ringo" direction="right" />
    </Article>
  </Section>
);

export default Buttons;
