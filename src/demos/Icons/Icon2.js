import React from "react";
import cx from "classnames";
import css from "./icon2.module.scss";

const Icon2 = ({ className, id, of, onClick, style }) => (
  <div className={cx(css.icon, className)} style={style} onClick={onClick}>
    <i className={cx("zmdi", `zmdi-${of}`)} />
  </div>
);

export default Icon2;
