import React from "react";
import cx from "classnames";
import { Logo } from "..";
import css from "./menu.module.scss";

const Menu = ({ active, className, data, demo, renderItem, style }) => (
  <div
    className={cx(css.menu, demo === null ? css.fullScreen : null, className)}
  >
    <div className={css.menuHead}>
      <Logo size={54} />
    </div>
    <ul className={cx(css.menuList, className)} style={style}>
      {data.map(item => renderItem(item))}
    </ul>
  </div>
);

export default Menu;
