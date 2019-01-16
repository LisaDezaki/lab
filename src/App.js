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
      demo: null
    };
  }

  getDemo = demoName => {
    switch (demoName) {
      case "Alerts":
        return <Alerts key="alerts" active={this.state.demo === "Alerts"} />;
      case "Buttons":
        return <Buttons key="buttons" active={this.state.demo === "Buttons"} />;
      case "Icons":
        return <Icons key="icons" active={this.state.demo === "Icons"} />;
      case "Inputs":
        return <Inputs key="inputs" active={this.state.demo === "Inputs"} />;
      case "Links":
        return <Links key="links" active={this.state.demo === "Links"} />;
      case "Paginations":
        return (
          <Paginations
            key="paginations"
            active={this.state.demo === "Paginations"}
          />
        );
      case "Spinners":
        return (
          <Spinners key="spinners" active={this.state.demo === "Spinners"} />
        );
      case "Tooltips":
        return (
          <Tooltips key="tooltips" active={this.state.demo === "Tooltips"} />
        );
      default:
        return <div />;
    }
  };

  selectSection = demo => {
    return () => {
      this.setState({ demo });
    };
  };

  render() {
    return (
      <div className="App">
        <Menu
          collapse={this.state.demo}
          data={sections}
          renderItem={item => (
            <MenuItem
              key={item}
              active={this.state.demo === item}
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
