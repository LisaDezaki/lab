import React from "react";
import cx from "classnames";
import css from "./slidelink.module.scss";

const SlideLink = ({ children, className, to, id, onClick, style, type }) => (
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

export default SlideLink;
