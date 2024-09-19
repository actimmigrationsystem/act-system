import React from "react";
import SectionTitle from "../components/SectionTitle";
import ContentContainer from "../components/ContentContainer";
import SectionContainer from "../components/SectionContainer";
import AboutContent from "../components/AboutContent";
import StartNowSection from "../components/StartNowSection";

const AboutUs = () => (
  <SectionContainer>
    <SectionTitle title="About Us" />
    <ContentContainer>
      <AboutContent children />
      <StartNowSection />

    </ContentContainer>
  </SectionContainer>
);

export default AboutUs;
