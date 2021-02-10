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
      // demo: null,
      // menuActive: true,
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
      // console.log(`menuSelect(${newIndex})`)
      this.setState({
        previousIndex: this.state.activeIndex,
        activeIndex: newIndex
      });
    }
  }

//   selectSection = index => {
//     return () => {
      
//       let previousIndex = this.state.previousIndex;
//       let nextIndex = activeIndex;
//       let incrementing = nextIndex > previousIndex;
      
//       console.log(
//         `Moving from
// ${this.state.demo} (${previousIndex})
// ${incrementing ? 'up' : 'down'} to
// ${demo} (${nextIndex})`
//       );

//       this.setState({
//         previousIndex: this.state.activeIndex,
//         activeIndex: index
//       });

//       // this.setState({ demo, menuActive: false });
//     };
//   };

  toggleMenu = () => {
    this.setState(state => ({
      menuActive: !state.menuActive
    }));
  };

  render() {
    const { activeIndex, previousIndex } = this.state;

//     let incrementing = activeIndex > previousIndex;
//     console.log(
// `Moving from
// ${this.state.demo} (${previousIndex})
// ${incrementing ? 'up' : 'down'} to
// ${sections[activeIndex]} (${activeIndex})`
//     );

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
          // isMenuActive={activeIndex !== null}
          // onClick={this.closeMenu}
          // onMenuClick={this.toggleMenu}
        />
      </div>
    );
  }
}

export default App;
