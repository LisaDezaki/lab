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
  activeIndex,
  data
}) => (
  <div
    className={cx(
      css.demoArea,
      activeIndex === null ? css.hide : null,
    )}
  >
    <div className={css.activeDemo}>
      <Alerts active={data[activeIndex] === "Alerts"} />
      <Buttons active={data[activeIndex] === "Buttons"} />
      <Icons active={data[activeIndex] === "Icons"} />
      <Inputs active={data[activeIndex] === "Inputs"} />
      <Links active={data[activeIndex] === "Links"} />
      <Paginations active={data[activeIndex] === "Paginations"} />
      <Spinners active={data[activeIndex] === "Spinners"} />
      <Tooltips active={data[activeIndex] === "Tooltips"} />
    </div>
  </div>
);

export default DemoArea;
