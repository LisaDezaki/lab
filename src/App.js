import React, { Component } from "react";
import cx from "classnames";
import { DemoArea, Menu, MenuItem } from "./components";
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
      demo: null,
      menuActive: true
    };
  }

  closeMenu = () => {
    this.setState({ menuActive: false });
  };

  selectSection = demo => {
    return () => {
      this.setState({ demo, menuActive: false });
    };
  };

  toggleMenu = () => {
    this.setState(state => ({ menuActive: !state.menuActive }));
  };

  render() {
    const { demo, menuActive } = this.state;

    return (
      <div className={cx("App", menuActive ? "menuActive" : null)}>
        <Menu
          active={menuActive}
          data={sections}
          demo={demo}
          renderItem={item => (
            <MenuItem
              key={item}
              active={demo === item}
              label={item}
              onClick={this.selectSection(item)}
            />
          )}
        />
        <DemoArea
          activeDemo={demo}
          isMenuActive={menuActive}
          onMenuClick={this.toggleMenu}
        />
      </div>
    );
  }
}

export default App;
