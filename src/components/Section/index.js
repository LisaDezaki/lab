import React from "react";
import cx from "classnames";
import css from "./section.module.scss";

const Section = ({ active, className, children, id, style }) => (
  <section
    id={id}
    className={cx(css.section, active ? css.active : null, className)}
    style={style}
  >
    {children}
  </section>
);

export default Section;
