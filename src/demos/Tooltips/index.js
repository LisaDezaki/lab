import React from "react";
import { Article, Section } from "../../components";
import Tooltip1 from "./Tooltip1/index.js";
import Tooltip2 from "./Tooltip2/index.js";

const Tooltips = ({ active, className, style }) => (
  <Section id="Tooltips" active={active}>
    <Article id="Tooltip_1" title="Tip">
      <p>
        The main winding was of the normal <Tooltip1 tip="The type after lotus-o-gamma">lotus-o-delta</Tooltip1> type
        placed in <Tooltip1 tip="Semi-boloid slots that are panendermic">panendermic semi-boloid slots</Tooltip1> of
        the stator, every seventh conductor being connected by
        a <Tooltip1 tip="A non-reversible version of the reversible tremie pipe">non-reversible tremie pipe</Tooltip1> to
        the <Tooltip1 tip="The spring involved in the differential girdle">differential girdle spring</Tooltip1> on the “up” end of the grammeters.
      </p>
    </Article>
    <Article id="Tooltip_2" title="Definitions">
      <p>
        The turbo-encabulator has now reached a high level of development, and it’s being successfully used in the
        operation of <Tooltip2 tip="The best kind of trunnions.">novertrunnions</Tooltip2>. Moreover, whenever
        a <Tooltip2 tip="A standard skor motion but with additional forescence.">forescent skor motion</Tooltip2> is required,
        it may also be employed in conjunction with a <Tooltip2 tip="A dingle arm with drawn reciprocation.">drawn reciprocation
        dingle arm</Tooltip2>, to reduce <Tooltip2 tip="Repleneration of sinusoids">sinusoidal repleneration</Tooltip2>.
      </p>
    </Article>
  </Section>
);

export default Tooltips;
