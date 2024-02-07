import React from 'react';
import SectionTitle from '../components/SectionTitle';
import ContactForm from '../components/ContactCard';
import MapComponent from '../components/MapComponent';
import ContentContainer from '../components/ContentContainer';
import SectionContainer from '../components/SectionContainer';

const ContactUsSection = () => (
  <div style={{ backgroundColor: '#2393CB00' }}>
    <SectionContainer height="90vh" marginTop="90px" marginBottom="20px">
      <SectionTitle
        title="Contact Us"
        className="text-center text-white"
      />
      <div className="max-w-screen-xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <ContentContainer>
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-2">
            <ContactForm />
            <MapComponent />
          </div>
        </ContentContainer>
      </div>
    </SectionContainer>
  </div>
);

export default ContactUsSection;
