import React from "react";
import cx from "classnames";
import {
  Alerts,
  Buttons,
  Icons,
  Inputs,
  Links,
  Paginations,
  Spinners,
  Tooltips
} from "../../demos";
import css from "./demoArea.module.scss";

const DemoArea = ({
  activeDemo,
  className,
  isMenuActive,
  onMenuClick,
  style
}) => (
  <div
    className={cx(
      css.demoArea,
      activeDemo === null ? css.hide : null,
      className
    )}
    style={style}
  >
    <i
      className={cx(
        css.menuButton,
        isMenuActive ? css.menuActive : null,
        `zmdi zmdi-${isMenuActive ? "arrow-left" : "menu"}`
      )}
      onClick={onMenuClick}
    />
    <Alerts active={activeDemo === "Alerts"} />
    <Buttons active={activeDemo === "Buttons"} />
    <Icons active={activeDemo === "Icons"} />
    <Inputs active={activeDemo === "Inputs"} />
    <Links active={activeDemo === "Links"} />
    <Paginations active={activeDemo === "Paginations"} />
    <Spinners active={activeDemo === "Spinners"} />
    <Tooltips active={activeDemo === "Tooltips"} />
  </div>
);

export default DemoArea;
