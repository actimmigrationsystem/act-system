import SectionTitle from "../components/SectionTitle";
import ContactCard from "../components/ContactCard";
import MapComponent from "../components/MapComponent";
import ContentContainer from "../components/ContentContainer";
import SectionContainer from "../components/SectionContainer";

const ContactUsSection = () => (
  <SectionContainer marginTop="auto" marginBottom="-20px" height="80vh">
    <SectionTitle title="Contact Us" className="text-center text-white" />
    <div className="max-w-screen-xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <ContentContainer>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 md:space-y-0 space-y-6 w-full">
          <div className="md:-mb-6">
            <ContactCard />
          </div>
          <div className="md:-mt-6">
            <MapComponent />
          </div>
        </div>
      </ContentContainer>
    </div>
  </SectionContainer>
);

export default ContactUsSection;
