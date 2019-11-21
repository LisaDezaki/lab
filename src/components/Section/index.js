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
    <h4 className={css.moresoon}>More coming soon...</h4>
  </section>
);

export default Section;
