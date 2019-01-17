import React, { Component } from "react";
import { Menu, MenuItem } from "./components";
import {
  Alerts,
  Buttons,
  Icons,
  Inputs,
  Links,
  Paginations,
  Spinners,
  Tooltips
} from "./demos";
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

  getDemo = demoName => {
    const { demo, menuActive } = this.state;

    switch (demoName) {
      case "Alerts":
        return (
          <Alerts
            key="alerts"
            active={demo === "Alerts"}
            menuActive={menuActive}
            onClick={this.closeMenu}
          />
        );
      case "Buttons":
        return (
          <Buttons
            key="buttons"
            active={demo === "Buttons"}
            menuActive={menuActive}
            onClick={this.closeMenu}
          />
        );
      case "Icons":
        return (
          <Icons
            key="icons"
            active={demo === "Icons"}
            menuActive={menuActive}
            onClick={this.closeMenu}
          />
        );
      case "Inputs":
        return (
          <Inputs
            key="inputs"
            active={demo === "Inputs"}
            menuActive={menuActive}
            onClick={this.closeMenu}
          />
        );
      case "Links":
        return (
          <Links
            key="links"
            active={demo === "Links"}
            menuActive={menuActive}
            onClick={this.closeMenu}
          />
        );
      case "Paginations":
        return (
          <Paginations
            key="paginations"
            active={demo === "Paginations"}
            menuActive={menuActive}
            onClick={this.closeMenu}
          />
        );
      case "Spinners":
        return (
          <Spinners
            key="spinners"
            active={demo === "Spinners"}
            menuActive={menuActive}
            onClick={this.closeMenu}
          />
        );
      case "Tooltips":
        return (
          <Tooltips
            key="tooltips"
            active={demo === "Tooltips"}
            menuActive={menuActive}
            onClick={this.closeMenu}
          />
        );
      default:
        return <div />;
    }
  };

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
      <div className="App">
        <Menu
          active={menuActive}
          data={sections}
          demo={demo}
          renderItem={item => (
            <MenuItem
              key={item}
              active={demo === item}
              onClick={this.selectSection(item)}
            >
              {item}
            </MenuItem>
          )}
        />
        <i className="menuButton zmdi zmdi-menu" onClick={this.toggleMenu} />
        {sections.map(demo => this.getDemo(demo))}
      </div>
    );
  }
}

export default App;
