import React from "react";
import cx from "classnames";
import css from "./shouttooltip.module.scss";

const ShoutTooltip = ({ children, className, style, tip }) => (
  <span className={css.span}>
    {children}
    <span className={cx(css.tooltip, className)} style={style}>
      <span>{tip}</span>
    </span>
  </span>
);

export default ShoutTooltip;
