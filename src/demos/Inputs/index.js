import React, { Component } from "react";
import { Article, Section } from "../../components";
import LineInput from "./LineInput/index.js";
import BlockInput from "./BlockInput/index.js";

class Inputs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      opinion: "",
      secret: "",
      field1: "",
      field2: "",
      field3: ""
    };
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { active } = this.props;
    const {
      name,
      opinion,
      secret,
      field1,
      field2,
      field3
    } = this.state;

    return (
      <Section id="Inputs" active={active}>
        <Article id="BlockInputs" title="Block" direction="col">
          <BlockInput
            label="1"
            name="field1"
            onChange={this.onChange}
            placeholder="I love placeholder text"
            type="text"
            value={field1}
          />
          <BlockInput
            label="2"
            name="field2"
            onChange={this.onChange}
            type="text"
            placeholder="Do you love placeholder text?"
            value={field2}
          />
          <BlockInput
            label="3"
            name="field3"
            onChange={this.onChange}
            type="password"
            placeholder="I promise I'm not storing this data"
            value={field3}
          />
        </Article>
        <Article id="LineInputs" title="Line" direction="col">
          <LineInput
            label="Name"
            name="name"
            onChange={this.onChange}
            placeholder="Hi, what's your name! ^_^"
            type="text"
            value={name}
          />
          <LineInput
            label="Opinion"
            name="opinion"
            onChange={this.onChange}
            type="text"
            placeholder="Do you like my website?"
            value={opinion}
          />
          <LineInput
            label="Secret"
            name="secret"
            onChange={this.onChange}
            placeholder="Tell me a secret."
            type="password"
            value={secret}
          />
        </Article>
      </Section>
    );
  }
}

export default Inputs;
