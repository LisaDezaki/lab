import React from "react";
import cx from "classnames";
import css from "./alert1.module.scss";

const Alert1 = ({ active, children, className, id, label, onClick, style }) => (
  <div className={cx(css.alert, className)} style={style} onClick={onClick}>
    <button>{label}</button>
  </div>
);

export default Alert1;
