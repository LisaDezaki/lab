import React from "react";
import { Article, Section } from "../../components";
import CornerAlert from "./CornerAlert/index.js";
import ToastAlert from "./ToastAlert/index.js";

const Alerts = ({ active, className, style }) => (
  <Section id="Alerts" active={active}>
    <Article id="CornerAlert" title="Corner">
      <CornerAlert buttonLabel="Click me" autoDismiss={10000} />
    </Article>
    <Article id="ToastAlert" title="Toast">
      <ToastAlert buttonLabel="Click me" autoDismiss={10000} />
    </Article>
  </Section>
);

export default Alerts;
