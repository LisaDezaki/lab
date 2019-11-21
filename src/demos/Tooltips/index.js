import React from "react";
import { Article, Section } from "../../components";
import Tooltip1 from "./Tooltip1/index.js";
import Tooltip2 from "./Tooltip2/index.js";

const Tooltips = ({ active, className, style }) => (
  <Section id="Tooltips" active={active}>
    <Article id="Tooltip_1" title="Tooltip 1">
      <p>
        Volutpat consectetur{" "}
        <Tooltip1 tip="This is a tooltip. There's extra information hidden here.">
          suspendisse
        </Tooltip1>{" "}
        cubilia imperdiet ac ullamcorper mi parturient eu nullam molestie
        faucibus ante sit congue{" "}
        <Tooltip1 tip="This is a tooltip. There's extra information hidden here.">
          condimentum
        </Tooltip1>{" "}
        nostra id.
      </p>
    </Article>
    <Article id="Tooltip_2" title="Tooltip 2">
      <p>
        Volutpat consectetur{" "}
        <Tooltip2 tip="This is a tooltip. There's extra information hidden here.">
          suspendisse
        </Tooltip2>{" "}
        cubilia imperdiet ac ullamcorper mi parturient eu nullam molestie
        faucibus ante sit congue{" "}
        <Tooltip2 tip="This is a tooltip. There's extra information hidden here.">
          condimentum
        </Tooltip2>{" "}
        nostra id.
      </p>
    </Article>
  </Section>
);

export default Tooltips;
