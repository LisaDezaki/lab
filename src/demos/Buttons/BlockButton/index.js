import React from "react";
import cx from "classnames";
import css from "./blockbutton.module.scss";

const BlockButton = ({
  active,
  children,
  className,
  direction,
  id,
  label,
  onClick,
  style
}) => (
  <div className={css.perspective}>
    <button
      className={cx(css.button, className)}
      data-dir={direction}
      style={style}
    >
      <span className={css.label}>{label}</span>
      <span className={css["label-hover"]}>{label}</span>
    </button>
  </div>
);

export default BlockButton;
