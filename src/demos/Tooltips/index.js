import React from "react";
import { Article, Section } from "../../components";
import Tooltip1 from "./Tooltip1.js";
import Tooltip2 from "./Tooltip2.js";

const Tooltips = ({ active, className, style }) => (
  <Section id="Tooltips" active={active}>
    <Article id="Tooltip_1" title="Tooltip 1">
      <p>
        Volutpat consectetur <Tooltip1>suspendisse</Tooltip1> cubilia imperdiet
        ac ullamcorper mi parturient eu nullam molestie faucibus ante sit congue{" "}
        <Tooltip1>condimentum</Tooltip1> nostra id.
      </p>
    </Article>
    <Article id="Tooltip_2" title="Tooltip 2">
      <p>
        Volutpat consectetur <Tooltip2>suspendisse</Tooltip2> cubilia imperdiet
        ac ullamcorper mi parturient eu nullam molestie faucibus ante sit congue{" "}
        <Tooltip2>condimentum</Tooltip2> nostra id.
      </p>
    </Article>
  </Section>
);

export default Tooltips;
