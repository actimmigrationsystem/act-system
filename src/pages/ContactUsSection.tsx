import SectionTitle from "../components/SectionTitle";
import MapComponent from "../components/MapComponent";
import ContentContainer from "../components/ContentContainer";
import SectionContainer from "../components/SectionContainer";
import ContactContentStart from "../components/contactsection/ContactContentStart";
import ContactContentEnd from "../components/contactsection/ContactContentEnd";

const ContactUsSection = () => {

  return (
    <SectionContainer>
      <SectionTitle title="Contact Us" className="text-center text-white" />
       <ContentContainer>
        <div className="-mx-4 flex flex-wrap lg:justify-between">
         <ContactContentStart />
          <ContactContentEnd />
        </div>
        <MapComponent />
      </ContentContainer>
    </SectionContainer>
  );
};

export default ContactUsSection;



