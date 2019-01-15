import React from "react";
import cx from "classnames";
import css from "./pagination2.module.scss";

const Pagination2 = ({
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

export default Pagination2;
