import React, { Component } from "react";
import cx from "classnames";
import { Logo } from "..";
import css from "./menu.module.scss";

class Menu extends Component {
  
  render() {
    const { activeIndex, className, data, onChange, previousIndex } = this.props;

    let itemSize = 100 / data.length;
    let activeIndexAdjusted = activeIndex !== null ? activeIndex : data.length;
    let indicatorStyles = {
      top: `${itemSize * activeIndexAdjusted}%`,
      bottom: `${itemSize * (data.length - activeIndexAdjusted) - itemSize}%`,
    };
    let indicatorLabelStyles = {
      transform: `translateY(-${(itemSize * activeIndexAdjusted) * data.length}%)`,
    };

    if (previousIndex === null || activeIndex <= previousIndex) {
      indicatorStyles.transition = "top 0.2s cubic-bezier(0,0,0.2,1), bottom 0.2s cubic-bezier(0,0,0.2,1) 0.1s";
      indicatorLabelStyles.transition = "transform 0.2s cubic-bezier(0,0,0.2,1)";
    } else {
      indicatorStyles.transition = "bottom 0.2s cubic-bezier(0,0,0.2,1), top 0.2s cubic-bezier(0,0,0.2,1) 0.1s";
      indicatorLabelStyles.transition = "transform 0.2s cubic-bezier(0,0,0.2,1) 0.1s";
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
            {data.map((item, index) => (
              <li key={index} className={cx(css.menuItem, className)} style={indicatorLabelStyles}>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default Menu;
