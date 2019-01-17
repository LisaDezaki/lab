import React from "react";
import cx from "classnames";
import css from "./section.module.scss";

const Section = ({
  active,
  className,
  children,
  id,
  menuActive,
  onClick,
  style
}) => (
  <section
    id={id}
    className={cx(
      css.section,
      active ? css.active : null,
      menuActive ? css.menuActive : null,
      className
    )}
    onClick={onClick}
    style={style}
  >
    {children}
  </section>
);

export default Section;
