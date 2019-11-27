import React from "react";
import cx from "classnames";
import css from "./particlespinner.module.scss";

const ParticleSpinner = ({ className, colors, id, number, style }) => {
  let array = new Array(number);
  for (let i = 0; i < array.length; i++) {
    array[i] = i + 1;
  }

  let getStyles = (n) => {
    let styleObj = {}
    let offsetX = Math.floor((Math.random() * 25)) + '%';
    let offsetY = (Math.floor(Math.random() * 25)) + '%';
    let rotation = (Math.floor(Math.random() * 360)) + 'deg';
    if (colors) {
      styleObj.borderColor = colors[n % colors.length]
    }
    styleObj.top = offsetY;
    styleObj.right = offsetX;
    styleObj.bottom = offsetY;
    styleObj.left = offsetX;
    styleObj.transform = `rotate(${rotation})`;
    styleObj.animation = `spin ${Math.random() + n}s linear infinite`;
    if (n % 2 === 0) { styleObj.animation += ' reverse'; }
    return styleObj;
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
          style={ getStyles(n) }
        />
      ))}
    </div>
  );
};

export default ParticleSpinner;
