import React, { Component } from "react";
import cx from "classnames";
import { DemoArea, Menu } from "./components";
import "./css/App.scss";

const sections = [
  "Alerts",
  "Buttons",
  "Icons",
  "Inputs",
  "Links",
  "Paginations",
  "Spinners",
  "Tooltips"
];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: null,
      previousIndex: null
    };
  }

  closeMenu = () => {
    this.setState({
      activeIndex: null
    });
  };

  menuSelect = () => {
    return (newIndex) => {
      this.setState({
        previousIndex: this.state.activeIndex,
        activeIndex: newIndex
      });
    }
  }

  toggleMenu = () => {
    this.setState(state => ({
      menuActive: !state.menuActive
    }));
  };

  render() {
    const { activeIndex, previousIndex } = this.state;

    return (
      <div className={cx("App", activeIndex !== null ? "menuActive" : null)}>
        <Menu
          activeIndex={activeIndex}
          data={sections}
          onChange={this.menuSelect()}
          previousIndex={previousIndex}
        />
        <DemoArea
          activeIndex={activeIndex}
          data={sections}
        />
      </div>
    );
  }
}

export default App;
