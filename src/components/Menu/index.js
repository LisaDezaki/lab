import React from "react";
import cx from "classnames";
import { Logo } from "..";
import css from "./menu.module.scss";

const Menu = ({
  active,
  className,
  // collapse,
  data,
  demo,
  noneSelected,
  renderItem,
  style
}) => (
  <div
    className={cx(
      css.menu,
      active ? css.active : null,
      demo ? css.demoSelected : null,
      noneSelected ? css.noneSelected : null,
      className
    )}
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
