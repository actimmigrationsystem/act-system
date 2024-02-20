import SectionTitle from "../components/SectionTitle";
import ContactCard from "../components/ContactCard";
import MapComponent from "../components/MapComponent";
import ContentContainer from "../components/ContentContainer";
import SectionContainer from "../components/SectionContainer";
import { Typography } from "@material-tailwind/react";

const ContactUsSection = () => {
  return (
    <SectionContainer>
      <SectionTitle title="Contact Us" className="text-center text-white" />
      <Typography variant="h3" placeholder="" className="text-center text-gray-600 mb-6">
        We would love to hear from you
      </Typography>
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
