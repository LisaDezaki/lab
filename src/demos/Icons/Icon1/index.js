import React from "react";
import cx from "classnames";
import css from "./icon1.module.scss";

const Icon1 = ({ className, hoverIcon, id, of, onClick, style }) => (
  <div className={cx(css.icon, className)} style={style} onClick={onClick}>
    <i className={cx(css.iconStart, "zmdi", `zmdi-${of}`)} />
    <i className={cx(css.iconHover, "zmdi", `zmdi-${hoverIcon || of}`)} />
  </div>
);

export default Icon1;
