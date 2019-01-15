import React from "react";
import { Article, Section } from "../../components";
import Spinner1 from "./Spinner1.js";
import Spinner2 from "./Spinner2.js";

const Spinners = ({ active, className, style }) => (
  <Section id="Spinners" active={active}>
    <Article id="Spinner_1" title="Spinner 1">
      <Spinner1 />
    </Article>
    <Article id="Spinner_2" title="Spinner 2">
      <Spinner2 />
    </Article>
  </Section>
);

export default Spinners;
