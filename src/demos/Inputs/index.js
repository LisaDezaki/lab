import React from "react";
import { Article, Section } from "../../components";
import Input1 from "./Input1.js";
import Input2 from "./Input2.js";

const Inputs = ({ active, className, style }) => (
  <Section id="Inputs" active={active}>
    <Article id="Input_1" title="Input 1">
      <Input1 type="text" />
      <Input1 type="email" />
      <Input1 type="password" />
    </Article>
    <Article id="Input_2" title="Input 2">
      <Input2 type="text" />
      <Input2 type="email" />
      <Input2 type="password" />
    </Article>
  </Section>
);

export default Inputs;
