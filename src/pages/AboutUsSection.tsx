import SectionTitle from "../components/SectionTitle";
import ContentContainer from "../components/ContentContainer";
import SectionContainer from "../components/SectionContainer";
import AboutContent from "../components/AboutContent";

const AboutUs = () => (
  <SectionContainer>
    <SectionTitle title="About Us" />
    <ContentContainer>
      <AboutContent children />
    </ContentContainer>
  </SectionContainer>
);

export default AboutUs;
