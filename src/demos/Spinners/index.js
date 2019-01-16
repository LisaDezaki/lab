import React from "react";
import { Article, Section } from "../../components";
import Spinner1 from "./Spinner1/index.js";
import Spinner2 from "./Spinner2/index.js";

const Spinners = ({ active, className, style }) => (
  <Section id="Spinners" active={active}>
    <Article id="Spinner_1" title="Spinner 1">
      <Spinner1 number={1} type="circle" />
      <Spinner1 number={2} type="cut" reverse />
      <Spinner1 number={3} type="synapse" />
    </Article>
    <Article id="Spinner_2" title="Pulse">
      <Spinner2 />
      <Spinner2 reverse />
    </Article>
  </Section>
);

export default Spinners;
