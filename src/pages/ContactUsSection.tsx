import styled from "styled-components";
import SectionTitle from "../components/SectionTitle";
import ContactCard from "../components/ContactCard";
import MapComponent from "../components/MapComponent";
import ContentContainer from "../components/ContentContainer";


interface StyledContactContainerProps {
  height: string;
  margintop: string;
  marginbottom: string;
  width: string;
}

const StyledContactContainer = styled.div<StyledContactContainerProps>`
  height: ${(props) => props.height};
  margin-top: ${(props) => props.margintop};
  margin-bottom: ${(props) => props.marginbottom};
  width: ${(props) => props.width};

  @media only screen and (min-width: 775px) {
    height: 40vh;
  }
`;


const ContactUsSection = () => {
  return (
    <section className="w-full">
      <StyledContactContainer
        margintop="auto"
        marginbottom="0"
        height="auto"
        width="auto"
      >
        <SectionTitle title="Contact Us" className="text-center text-white" />
        <div className="max-w-screen-xl mx-auto py-8 px-12 sm:px-12 lg:px-8 mb-4">
          <ContentContainer>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 md:space-y-0 space-y-6 w-full">
              <div className="md:-mt-6 sm:-mt-6">
                <ContactCard />
              </div>
              <div className="md:-mt-6 sm:-mt-6">
                <MapComponent />
              </div>
            </div>
          </ContentContainer>
        </div>
      </StyledContactContainer>
    </section>
  );
};

export default ContactUsSection;
