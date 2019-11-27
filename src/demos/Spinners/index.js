import React from "react";
import { Article, Section } from "../../components";
import ParticleSpinner from "./ParticleSpinner/index.js";
import PulseSpinner from "./PulseSpinner/index.js";
import WheelSpinner from "./WheelSpinner/index.js";

const Spinners = ({ active, className, style }) => (
  <Section id="Spinners" active={active}>
    <Article id="ParticleSpinner" title="Particle">
      <ParticleSpinner number={3} />
      <ParticleSpinner number={5} />
      <ParticleSpinner number={9} />
    </Article>
    <Article id="PulseSpinner" title="Pulse">
      <PulseSpinner number={2} />
      <PulseSpinner number={3} reverse />
      <PulseSpinner number={7} />
    </Article>
    <Article id="WheelSpinner" title="Wheel">
      <WheelSpinner number={2} type="cut" />
      <WheelSpinner number={3} type="cut" reverse />
      <WheelSpinner number={4} type="cut" />
    </Article>
  </Section>
);

export default Spinners;
