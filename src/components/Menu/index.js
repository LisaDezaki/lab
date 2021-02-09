import React, { Component } from "react";
import cx from "classnames";
import { Logo } from "..";
import css from "./menu.module.scss";




class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startPercent: null,
      endPercent: null,
    };
  }

  setActiveIndex = (newIndex) => {
    this.setState({ startPercent: newIndex });
  };

  render() {
    const { className, data, demo, renderItem, style } = this.props;

    let currentItem  = data.indexOf(demo);
    let startPercent = 100 / data.length * currentItem;
    let endPercent   = 100 / data.length + startPercent;

    return (
      <div
        className={cx(css.menu, demo === null ? css.fullScreen : null, className)}
      >
        <Logo size={40} />
        <h1 className={cx(css.title)}>
          <span>CSS</span>
          <strong>Lab</strong>
        </h1>
        <div className={css.menuListContainer}>
          <ul className={cx(css.menuList, className)} style={style}>
            {data.map(item => renderItem(item))}
          </ul>
          <ul className={cx(css.menuActiveIndicator, className)} style={{ 'clipPath': `polygon(0 ${startPercent}%, 100% ${startPercent}%, 100% ${endPercent}%, 0 ${endPercent}%)` }}>
            {data.map(item => renderItem(item))}
          </ul>
        </div>
      </div>
    );
  }
}

export default Menu;
