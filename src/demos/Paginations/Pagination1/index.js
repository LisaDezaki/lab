import React from "react";
import cx from "classnames";
import css from "./pagination1.module.scss";

const Pagination1 = ({
  className,
  id,
  onNext,
  onPrev,
  rangeBegin,
  rangeEnd,
  style
}) => (
  <div className={cx(css.pagination, className)} style={style}>
    12345
  </div>
);

export default Pagination1;
