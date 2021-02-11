import React, { Component } from "react";
import cx from "classnames";
import css from "./stretchpagination.module.scss";

class StretchPagination extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activePage: 1,
      prevPage: null,
    };
  }

  onPrev = () => {
    if (this.state.activePage > 1) {
      this.setState(state => ({
        activePage: state.activePage - 1,
        prevPage: this.state.activePage
      }));
    }
  };

  onNext = () => {
    if (this.state.activePage < this.props.pages) {
      this.setState(state => ({
        activePage: state.activePage + 1,
        prevPage: this.state.activePage
      }));
    }
  };

  selectPage = n => {
    return () => {
      this.setState({
        activePage: n,
        prevPage: this.state.activePage
      });
    };
  };

  render() {
    const { activePage, prevPage } = this.state;

    let array = new Array(this.props.pages);
    for (let i = 0; i < array.length; i++) {
      array[i] = i + 1;
    }

    let itemSize = 100 / array.length;
    let left  = itemSize * array.indexOf(activePage);
    let right = itemSize * (array.length - array.indexOf(activePage)) - itemSize
    let indicatorStyle = {
      left: `${left}%`,
      right: `${right}%`,
    };
    let indicatorLabelStyle = {
      transform: `translateX(-${left}%)`
    };

    if (activePage-1 <= prevPage-1 ) {
      indicatorStyle.transition = "left 0.2s cubic-bezier(0,0,0.2,1), right 0.2s cubic-bezier(0,0,0.2,1) 0.1s";
      indicatorLabelStyle.transition = "transform 0.2s cubic-bezier(0,0,0.2,1)";
    } else {
      indicatorStyle.transition = "right 0.2s cubic-bezier(0,0,0.2,1), left 0.2s cubic-bezier(0,0,0.2,1) 0.1s";
      indicatorLabelStyle.transition = "transform 0.2s cubic-bezier(0,0,0.2,1) 0.1s";
    }

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
          <div className={css.indicator} style={indicatorStyle}>
            <ul className={css.indicatorList} style={indicatorLabelStyle}>
              {array.map(n => (
                <li key={n} className={cx(css.page, css.indicatorItem)}>
                  {n}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <i
          className={cx(css.prev, "zmdi zmdi-arrow-right")}
          onClick={this.onNext}
        />
      </div>
    );
  }
}

export default StretchPagination;