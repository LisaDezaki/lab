import React from "react";
import cx from "classnames";
import css from "./targeticon.module.scss";

const TargetIcon = ({ className, hoverIcon, id, of, onClick, style }) => (
  <div className={cx(css.iconWrapper, className)} style={style} onClick={onClick}>
    <i className={cx(css.icon, "zmdi", `zmdi-${of}`)} />
    <div className={css.iconHoverEffect}>
      <div className={css.iconReticule}></div>
      <div className={css.iconSpinner}></div>
    </div>
  </div>
);

export default TargetIcon;
