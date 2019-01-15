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
      section: null
    };
  }

  getDemo = demoName => {
    switch (demoName) {
      case "Alerts":
        return <Alerts active={this.state.section === "Alerts"} />;
      case "Buttons":
        return <Buttons active={this.state.section === "Buttons"} />;
      case "Icons":
        return <Icons active={this.state.section === "Icons"} />;
      case "Inputs":
        return <Inputs active={this.state.section === "Inputs"} />;
      case "Links":
        return <Links active={this.state.section === "Links"} />;
      case "Paginations":
        return <Paginations active={this.state.section === "Paginations"} />;
      case "Spinners":
        return <Spinners active={this.state.section === "Spinners"} />;
      case "Tooltips":
        return <Tooltips active={this.state.section === "Tooltips"} />;
      default:
        return <div />;
    }
  };

  selectSection = section => {
    return () => {
      this.setState({ section });
    };
  };

  render() {
    return (
      <div className="App">
        <Menu
          collapse={this.state.section}
          data={sections}
          renderItem={item => (
            <MenuItem
              key={item}
              active={this.state.section === item}
              onClick={this.selectSection(item)}
            >
              {item}
            </MenuItem>
          )}
        />
        {sections.map(demo => this.getDemo(demo))}
      </div>
    );
  }
}

export default App;
