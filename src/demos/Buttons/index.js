import React from "react";
import { Article, Section } from "../../components";
import Button1 from "./Button1.js";
import Button2 from "./Button2.js";

const Buttons = ({ active, className, style }) => (
  <Section id="Buttons" active={active}>
    <Article id="Button_1" title="Button 1">
      <Button1 label="Earth" />
      <Button1 label="Wind" />
      <Button1 label="Water" />
      <Button1 label="Fire" />
    </Article>
    <Article id="Button_2" title="Button 2">
      <Button2 label="John" />
      <Button2 label="Paul" />
      <Button2 label="George" />
      <Button2 label="Ringo" />
    </Article>
  </Section>
);

export default Buttons;
