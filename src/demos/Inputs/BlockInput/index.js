import React from "react";
import cx from "classnames";
import css from "./blockinput.module.scss";

const BlockInput = ({
  className,
  id,
  label,
  name,
  onChange,
  placeholder,
  style,
  type,
  value
}) => (
  <label
    className={cx(css.field, value.length > 0 ? css.hasValue : null, className)}
    style={style}
  >
    <input
      className={css.input}
      name={name}
      onChange={onChange}
      placeholder={placeholder}
      type={type}
      value={value}
    />
    {label && <span className={css.label}>{label}</span>}
  </label>
);

export default BlockInput;
