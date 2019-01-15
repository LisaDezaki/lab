import React from "react";
import { Article, Section } from "../../components";
import Link1 from "./Link1.js";
import Link2 from "./Link2.js";

const Links = ({ active, className, style }) => (
  <Section id="Links" active={active}>
    <Article id="Link_1" title="Link 1">
      <p>
        Volutpat consectetur <Link1>suspendisse</Link1> cubilia imperdiet ac
        ullamcorper mi parturient eu nullam molestie faucibus ante sit congue{" "}
        <Link1>condimentum</Link1> nostra id.
      </p>
    </Article>
    <Article id="Link_2" title="Link 2">
      <p>
        Volutpat consectetur <Link2>suspendisse</Link2> cubilia imperdiet ac
        ullamcorper mi parturient eu nullam molestie faucibus ante sit congue{" "}
        <Link2>condimentum</Link2> nostra id.
      </p>
    </Article>
  </Section>
);

export default Links;
