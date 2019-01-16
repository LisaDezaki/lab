import React from "react";
import cx from "classnames";
import css from "./tooltip1.module.scss";

const Tooltip1 = ({ children, className, style, tip }) => (
  <span className={css.span}>
    {children}
    <span className={cx(css.tooltip, className)} style={style}>
      <span>{tip}</span>
    </span>
  </span>
);

export default Tooltip1;
