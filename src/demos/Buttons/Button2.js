import React from "react";
import cx from "classnames";
import css from "./button2.module.scss";

const Button2 = ({
  active,
  children,
  className,
  id,
  label,
  onClick,
  style
}) => (
  <div className={cx(css.button, className)} style={style} onClick={onClick}>
    <button>{label}</button>
  </div>
);

export default Button2;
