import React from "react";
import { Article, Section } from "../../components";
import Pagination1 from "./Pagination1/index.js";
import Pagination2 from "./Pagination2/index.js";

const Paginations = ({ active, className, style }) => (
  <Section id="Paginations" active={active}>
    <Article id="Pagination_1" title="Ticker">
      <Pagination1 pages={5} />
    </Article>
    <Article id="Pagination_2" title="Magnify">
      <Pagination2 pages={5} />
    </Article>
  </Section>
);

export default Paginations;
