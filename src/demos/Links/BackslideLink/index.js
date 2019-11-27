import React from "react";
import cx from "classnames";
import css from "./backslidelink.module.scss";

const BackslideLink = ({ children, className, to, id, onClick, style, type }) => (
  <a
    className={cx(css.link, className)}
    data-text={children}
    href={to || "#"}
    onClick={onClick}
    style={style}
  >
    {children}
  </a>
);

export default BackslideLink;
