import SectionTitle from "../components/SectionTitle";
import ContentContainer from "../components/ContentContainer";
import SectionContainer from "../components/SectionContainer";
import AboutPrompt from "../components/AboutPrompt";

const AboutUs = () => (
  <SectionContainer>
    <SectionTitle title="About Us" />
    <ContentContainer>
      <AboutPrompt children />
    </ContentContainer>
  </SectionContainer>
);

export default AboutUs;
