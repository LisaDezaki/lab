import React from "react";
import { Article, Section } from "../../components";
import TickerPagination from "./TickerPagination/index.js";
import MagnifyPagination from "./MagnifyPagination/index.js";

const Paginations = ({ active, className, style }) => (
  <Section id="Paginations" active={active}>
    <Article id="MagnifyPagination" title="Magnify">
      <MagnifyPagination pages={5} />
    </Article>
    <Article id="TickerPagination" title="Ticker">
      <TickerPagination pages={5} />
    </Article>
  </Section>
);

export default Paginations;
