import React from "react";
import cx from "classnames";
import css from "./input1.module.scss";

const Input1 = ({ className, id, onClick, style, type }) => (
  <div className={cx(css.field, className)} style={style} onClick={onClick}>
    <input className={css.input} type={type} />
  </div>
);

export default Input1;
