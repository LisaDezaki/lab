import React from "react";
import cx from "classnames";
import css from "./spinner2.module.scss";

const Spinner2 = ({ className, reverse, speed, style }) => (
  <div
    className={cx(css.spinner, reverse ? css.reverse : null, className)}
    data-speed={speed}
    style={style}
  />
);

export default Spinner2;
