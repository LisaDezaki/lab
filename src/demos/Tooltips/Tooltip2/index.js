import React from "react";
import cx from "classnames";
import css from "./tooltip2.module.scss";

const Tooltip2 = ({ children, className, style, tip }) => (
  <span className={css.span}>
    {children}
    <span
      className={cx(css.tooltip, className)}
      data-text={children}
      style={style}
    >
      <span>{tip}</span>
    </span>
  </span>
);

export default Tooltip2;
