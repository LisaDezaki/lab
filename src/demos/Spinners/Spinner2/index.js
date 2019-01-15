import React from "react";
import cx from "classnames";
import css from "./spinner2.module.scss";

const Spinner2 = ({ className, id, style }) => (
  <div className={cx(css.spinner, className)} style={style}>
    ...
  </div>
);

export default Spinner2;
