import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome To <br />
        My Personal Portfolio
      </SectionTitle>
      <SectionText>
        <b style={{ color: "#ffffff" }}>Master</b> in Computer Engineering,
        mainly research Data Science and Machine Learning.{" "}
        <b style={{ color: "#ffffff" }}>11+ years</b> of work experience in
        Machine Learning, Deep Learning, Forecasting, Data Lake, Recommendation,
        Knowledge Graph, Big Data Architecture.
      </SectionText>
      <Button onClick={() => (window.location = "#about")}>Learn More</Button>
    </LeftSection>
  </Section>
);

export default Hero;
