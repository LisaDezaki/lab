import React from "react";
import cx from "classnames";
import css from "./alert2.module.scss";

const Alert2 = ({ active, children, className, id, label, onClick, style }) => (
  <div className={cx(css.alert, className)} style={style} onClick={onClick}>
    <button>{label}</button>
  </div>
);

export default Alert2;
