import React from "react";
import cx from "classnames";
import { Logo } from "..";
import css from "./menu.module.scss";

const Menu = ({ active, className, data, demo, renderItem, style }) => (
  <div
    className={cx(css.menu, demo === null ? css.fullScreen : null, className)}
  >
      <Logo size={40} />
      <h1 className={cx(css.title)}>CSS<strong>Lab</strong></h1>
    <ul className={cx(css.menuList, className)} style={style}>
      {data.map(item => renderItem(item))}
    </ul>
  </div>
);

export default Menu;
