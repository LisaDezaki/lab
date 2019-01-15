import React from "react";
import cx from "classnames";
import css from "./spinner1.module.scss";

const Spinner1 = ({ className, id, style }) => (
  <div className={cx(css.spinner, className)} style={style}>
    ...
  </div>
);

export default Spinner1;
