import React from "react";
import cx from "classnames";
import css from "./button1.module.scss";

const Button1 = ({
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

export default Button1;
