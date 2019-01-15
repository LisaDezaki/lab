import React from "react";
import cx from "classnames";
import css from "./link1.module.scss";

const Link1 = ({ children, className, to, id, onClick, style, type }) => (
  <a
    className={cx(css.link, className)}
    href={to || "#"}
    onClick={onClick}
    style={style}
  >
    {children}
  </a>
);

export default Link1;
