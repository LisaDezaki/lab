import React from "react";
import cx from "classnames";
import css from "./revealbutton.module.scss";

const RevealButton = ({
  active,
  children,
  className,
  direction,
  id,
  label,
  onClick,
  style
}) => (
  <button
    className={cx(css.button, css[`dir--${direction}`], className)}
    data-dir={direction}
    data-label={label}
    style={style}
    onClick={onClick}
  >
    <span className={css.label}>{label}</span>
  </button>
);

export default RevealButton;
