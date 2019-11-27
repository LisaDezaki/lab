import React from "react";
import { Article, Section } from "../../components";
import ShoutTooltip from "./ShoutTooltip/index.js";
import DefinitionTooltip from "./DefinitionTooltip/index.js";

const Tooltips = ({ active, className, style }) => (
  <Section id="Tooltips" active={active}>
    <Article id="ShoutTooltips" title="Shout">
      <p>
        The main winding was of the normal <ShoutTooltip tip="The type after lotus-o-gamma">lotus-o-delta</ShoutTooltip> type
        placed in <ShoutTooltip tip="Semi-boloid slots that are panendermic">panendermic semi-boloid slots</ShoutTooltip> of
        the stator, every seventh conductor being connected by
        a <ShoutTooltip tip="A non-reversible version of the reversible tremie pipe">non-reversible tremie pipe</ShoutTooltip> to
        the <ShoutTooltip tip="The spring involved in the differential girdle">differential girdle spring</ShoutTooltip> on the “up” end of the grammeters.
      </p>
    </Article>
    <Article id="DefinitionTooltips" title="Definition">
      <p>
        The turbo-encabulator has now reached a high level of development, and it’s being successfully used in the
        operation of <DefinitionTooltip tip="The best kind of trunnions.">novertrunnions</DefinitionTooltip>. Moreover, whenever
        a <DefinitionTooltip tip="A standard skor motion but with additional forescence.">forescent skor motion</DefinitionTooltip> is required,
        it may also be employed in conjunction with a <DefinitionTooltip tip="A dingle arm with drawn reciprocation.">drawn reciprocation
        dingle arm</DefinitionTooltip>, to reduce <DefinitionTooltip tip="Repleneration of sinusoids">sinusoidal repleneration</DefinitionTooltip>.
      </p>
    </Article>
  </Section>
);

export default Tooltips;
