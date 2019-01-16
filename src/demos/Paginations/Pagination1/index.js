import React, { Component } from "react";
import cx from "classnames";
import css from "./pagination1.module.scss";

class Pagination1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activePage: 1
    };
  }

  onPrev = () => {
    if (this.state.activePage > 1) {
      this.setState(state => ({ activePage: state.activePage - 1 }));
    }
  };

  onNext = () => {
    if (this.state.activePage < this.props.pages) {
      this.setState(state => ({ activePage: state.activePage + 1 }));
    }
  };

  selectPage = n => {
    return () => {
      this.setState({ activePage: n });
    };
  };

  render() {
    let array = new Array(this.props.pages);
    for (let i = 0; i < array.length; i++) {
      array[i] = i + 1;
    }

    let indicatorOffsetX = (this.state.activePage - 1) * 100 + "%";
    let indicatorOffsetY =
      "-" + (100 / this.props.pages) * (this.state.activePage - 1) + "%";

    return (
      <div
        className={cx(css.pagination, this.props.className)}
        style={this.props.style}
      >
        <i
          className={cx(css.prev, "zmdi zmdi-arrow-left")}
          onClick={this.onPrev}
        />
        <div className={css.pages}>
          <ul className={css.pageList}>
            {array.map(n => (
              <li
                key={n}
                className={cx(
                  css.page,
                  this.state.active === n ? css.active : null
                )}
                onClick={this.selectPage(n)}
              >
                {n}
              </li>
            ))}
          </ul>
          <ul
            className={css.indicatorList}
            style={{
              transform: `translate(${indicatorOffsetX}, ${indicatorOffsetY})`
            }}
          >
            {array.map(n => (
              <li key={n} className={cx(css.page, css.indicatorItem)}>
                {n}
              </li>
            ))}
          </ul>
        </div>
        <i
          className={cx(css.prev, "zmdi zmdi-arrow-right")}
          onClick={this.onNext}
        />
      </div>
    );
  }
}

export default Pagination1;
