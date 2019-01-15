import React from "react";
import { Article, Section } from "../../components";
import Alert1 from "./Alert1/index.js";
import Alert2 from "./Alert2/index.js";

const Alerts = ({ active, className, style }) => (
  <Section id="Alerts" active={active}>
    <Article id="Alert_1" title="Corner Alert">
      <Alert1 label="Click me" />
    </Article>
    <Article id="Alert_2" title="Footer Alert">
      <Alert2 label="Click me" />
    </Article>
  </Section>
);

export default Alerts;
