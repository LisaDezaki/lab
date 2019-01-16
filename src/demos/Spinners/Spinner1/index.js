import React from "react";
import cx from "classnames";
import css from "./spinner1.module.scss";

const Spinner1 = ({ className, id, number, reverse, style, type }) => {
  let array = new Array(number);
  for (let i = 0; i < array.length; i++) {
    array[i] = i + 1;
  }

  return (
    <div
      className={cx(
        css.spinner,
        css[`type--${type || "bar"}`],
        reverse ? css.reverse : null,
        className
      )}
      data-n={number || 1}
      style={style}
    >
      {array.map(n => (
        <div className={css.spinner_n} key={n} />
      ))}
    </div>
  );
};

export default Spinner1;
