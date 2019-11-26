import React from "react";
import cx from "classnames";
import css from "./spinner3.module.scss";

const Spinner3 = ({ className, colors, id, number, style }) => {
  let array = new Array(number);
  for (let i = 0; i < array.length; i++) {
    array[i] = i + 1;
  }

  return (
    <div
      className={cx(
        css.spinner,
        className
      )}
      data-n={number || 1}
      style={style}
    >
      {array.map(n => (
        <div
          className={css.spinner_n}
          key={n}
          style={ colors ? { borderColor: colors[n % colors.length] } : null }
        />
      ))}
    </div>
  );
};

export default Spinner3;
