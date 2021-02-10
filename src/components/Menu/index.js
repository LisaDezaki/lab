import React, { Component } from "react";
import cx from "classnames";
import { Logo } from "..";
import css from "./menu.module.scss";

class Menu extends Component {
  
  render() {
    const { activeIndex, className, data, onChange, previousIndex } = this.props;

    let itemSize = 100 / data.length;
    let activeIndexAdjusted = activeIndex !== null ? activeIndex : -1;
    let indicatorStyles = {
      top: `${itemSize * activeIndexAdjusted}%`,
      bottom: `${itemSize * (data.length - activeIndexAdjusted) - itemSize}%`,
      justifyContent: "center",
      transition: "none"
    };

    if (activeIndex <= previousIndex ) {
      indicatorStyles.justifyContent = "flex-start";
      indicatorStyles.transition = "top 0.2s cubic-bezier(0,0,0.2,1), bottom 0.2s cubic-bezier(0,0,0.2,1) 0.1s";
    } else {
      indicatorStyles.justifyContent = "flex-end";
      indicatorStyles.transition = "bottom 0.2s cubic-bezier(0,0,0.2,1), top 0.2s cubic-bezier(0,0,0.2,1) 0.1s";
    }

    return (
      <div
        className={cx(css.menu, activeIndex === null ? css.fullScreen : null, className)}
      >
        <Logo size={40} />
        <h1 className={cx(css.title)}>
          <span>CSS</span>
          <strong>Lab</strong>
        </h1>
        <div className={css.menuListContainer}>
          <ul className={cx(css.menuList, className)}>
            {data.map((item, index) => (
              <li
                key={index}
                className={cx(css.menuItem, activeIndex === index ? css.active : null, className)}
                onClick={() => onChange(index)}
              >
                {item}
            </li>
            ))}
          </ul>
          <ul className={cx(css.menuActiveIndicator, className)} style={indicatorStyles}>
            <li className={cx(css.menuItem, className)}>
              {data[activeIndex]}
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Menu;
