import React from "react";
import cx from "classnames";
import css from "./input1.module.scss";

const Input1 = ({
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

export default Input1;
