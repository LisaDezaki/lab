import React from "react";
import cx from "classnames";
import css from "./definitiontooltip.module.scss";

const DefinitionTooltip = ({ children, className, style, tip }) => (
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

export default DefinitionTooltip;
