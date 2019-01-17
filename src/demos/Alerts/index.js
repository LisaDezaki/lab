import React from "react";
import { Article, Section } from "../../components";
import Alert1 from "./Alert1/index.js";
import Alert2 from "./Alert2/index.js";

const Alerts = ({ active, className, menuActive, onClick, style }) => (
  <Section
    id="Alerts"
    active={active}
    menuActive={menuActive}
    onClick={onClick}
  >
    <Article id="Alert_1" title="Corner Alert">
      <Alert1 buttonLabel="Click me" autoDismiss={10000} />
    </Article>
    <Article id="Alert_2" title="Footer Alert">
      <Alert2 buttonLabel="Click me" autoDismiss={10000} />
    </Article>
  </Section>
);

export default Alerts;
