import SectionTitle from "../components/SectionTitle";
import ContactCard from "../components/ContactCard";
import MapComponent from "../components/MapComponent";
import ContentContainer from "../components/ContentContainer";
import SectionContainer from "../components/SectionContainer";

const ContactUsSection = () => {
  return (
    <SectionContainer height="50vh" margintop="2rem" marginbottom="1rem">
      <SectionTitle title="Contact Us" className="text-center text-white" />
      <div className="max-w-screen-xl mx-auto py-2 px-12 sm:px-12 lg:px-8 mb-4">
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
    </SectionContainer>
  );
};

export default ContactUsSection;
