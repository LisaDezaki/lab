import React from "react";
import cx from "classnames";
import { Logo } from "..";
import css from "./menu.module.scss";

const Menu = ({ className, collapse, data, renderItem, style }) => (
  <div className={cx(css.menu, collapse ? css.collapse : null, className)}>
    <div className={css.menuHead}>
      <Logo size={54} />
    </div>
    <ul
      className={cx(css.menuList, collapse ? css.collapse : null, className)}
      style={style}
    >
      {data.map(item => renderItem(item))}
    </ul>
  </div>
);

export default Menu;
