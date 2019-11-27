import React from "react";
import { Article, Section } from "../../components";
import Spinner1 from "./Spinner1/index.js";
import Spinner2 from "./Spinner2/index.js";
import Spinner3 from "./Spinner3/index.js";

const Spinners = ({ active, className, style }) => (
  <Section id="Spinners" active={active}>
    <Article id="Spinner_1" title="Spin">
      <Spinner1 number={2} type="cut" />
      <Spinner1 number={3} type="cut" reverse />
      <Spinner1 number={4} type="cut" />
    </Article>
    <Article id="Spinner_2" title="Pulse">
      <Spinner2 />
      <Spinner2 reverse />
    </Article>
    <Article id="Spinner_3" title="Atomic">
      <Spinner3 number={3} />
      <Spinner3 number={5} />
      <Spinner3 number={9} />
    </Article>
  </Section>
);

export default Spinners;
