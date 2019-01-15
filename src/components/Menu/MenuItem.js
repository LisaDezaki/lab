import React from "react";
import cx from "classnames";
import css from "./menu.module.scss";

const MenuItem = ({ active, children, className, id, onClick, style }) => (
  <li
    className={cx(css.menuItem, active ? css.active : null, className)}
    style={style}
    onClick={onClick}
  >
    {children}
  </li>
);

export default MenuItem;
