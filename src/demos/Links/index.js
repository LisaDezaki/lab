import React from "react";
import { Article, Section } from "../../components";
import Link1 from "./Link1/index.js";
import Link2 from "./Link2/index.js";

const Links = ({ active, className, style }) => (
  <Section id="Links" active={active}>
    <Article id="Link_1" title="Pop Up">
      <p>
        The <Link1 to="https://en.wikipedia.org/wiki/Aesthetic%E2%80%93usability_effect">aesthetic–usability
        effect</Link1> describes a paradox that people perceive more aesthetic designs as much more intuitive
        than those considered to be less aesthetically pleasing.
      </p>
    </Article>
    <Article id="Link_2" title="Backslide">
      <p>
        Volutpat consectetur <Link2>suspendisse</Link2> cubilia imperdiet ac
        ullamcorper mi parturient eu nullam molestie faucibus ante sit congue{" "}
        <Link2>condimentum</Link2> nostra id.
      </p>
    </Article>
  </Section>
);

export default Links;
