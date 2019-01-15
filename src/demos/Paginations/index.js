import React from "react";
import { Article, Section } from "../../components";
import Pagination1 from "./Pagination1.js";
import Pagination2 from "./Pagination2.js";

const Paginations = ({ active, className, style }) => (
  <Section id="Paginations" active={active}>
    <Article id="Pagination_1" title="Pagination 1">
      <Pagination1 />
    </Article>
    <Article id="Pagination_2" title="Pagination 2">
      <Pagination2 />
    </Article>
  </Section>
);

export default Paginations;
