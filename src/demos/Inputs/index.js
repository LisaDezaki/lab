import React, { Component } from "react";
import { Article, Section } from "../../components";
import Input1 from "./Input1/index.js";
import Input2 from "./Input2/index.js";

class Inputs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username1: "",
      email1: "",
      password1: "",
      username2: "",
      email2: "",
      password2: ""
    };
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { active, menuActive, onClick } = this.props;
    const {
      username1,
      email1,
      password1,
      username2,
      email2,
      password2
    } = this.state;

    return (
      <Section
        id="Inputs"
        active={active}
        menuActive={menuActive}
        onClick={onClick}
      >
        <Article id="Input_1" title="Input 1" direction="col">
          <Input1
            label="Username"
            name="username1"
            onChange={this.onChange}
            type="text"
            value={username1}
          />
          <Input1
            label="Email"
            name="email1"
            onChange={this.onChange}
            type="email"
            placeholder="user@email.com"
            value={email1}
          />
          <Input1
            label="Password"
            name="password1"
            onChange={this.onChange}
            type="password"
            value={password1}
          />
        </Article>
        <Article id="Input_2" title="Input 2" direction="col">
          <Input2
            label="Username"
            name="username2"
            onChange={this.onChange}
            type="text"
            value={username2}
          />
          <Input2
            label="Email"
            name="email2"
            onChange={this.onChange}
            type="email"
            placeholder="user@email.com"
            value={email2}
          />
          <Input2
            label="Password"
            name="password2"
            onChange={this.onChange}
            type="password"
            value={password2}
          />
        </Article>
      </Section>
    );
  }
}

export default Inputs;
