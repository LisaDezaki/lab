import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
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

  menuSelect = () => {
    return (newIndex) => {
      window.history.replaceState(null, sections[newIndex], `/${sections[newIndex].toLowerCase()}`);
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

    let urlIndex = sections.map(i => i.toLowerCase()).indexOf(window.location.pathname.substring(1));
    if (urlIndex === -1) { urlIndex = null; }

    return (

      <Router>
        <div className={cx("App", activeIndex !== null || urlIndex !== -1 ? "menuActive" : null)}>
          <Route path="/">
            <Menu
              activeIndex={activeIndex || urlIndex}
              data={sections}
              onChange={this.menuSelect()}
              previousIndex={previousIndex}
            />
            <DemoArea
              activeIndex={activeIndex || urlIndex}
              data={sections}
            />
          </Route>
        </div>
      </Router>
    );
  }
}

export default App;
