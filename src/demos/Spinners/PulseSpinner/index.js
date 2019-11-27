import React from "react";
import cx from "classnames";
import css from "./pulsespinner.module.scss";

const PulseSpinner = ({ className, number, reverse, speed, style }) => {
  let array = new Array(number);
  for (let i = 0; i < array.length; i++) {
    array[i] = i + 1;
  }

  return (
    <div
      className={cx(css.spinner, reverse ? css.reverse : null, className)}
      data-speed={speed}
      style={style}
    >
      {array.map(n => (
        <div
          className={css.spinner_n}
          key={n}
          style={{
            animationDuration: `${number / 2}s`,
            animationDelay: `${n * number * 0.1}s`
          }}
        />
      ))}
    </div>
  );
};

export default PulseSpinner;
