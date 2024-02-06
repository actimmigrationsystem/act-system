/* eslint-disable no-unused-expressions */
import React from 'react';
import SectionTitle from '../components/SectionTitle';
import ContactForm from '../components/ContactCard';
import MapComponent from '../components/MapComponent';

const ContactView = () => (
  <div className="flex flex-col items-center">
    <SectionTitle title="Contact Us" />
    <div className="w-full max-w-screen-xl flex flex-col md:flex-row items-center justify-center gap-8">
      <ContactForm />
      <MapComponent />

    </div>
  </div>
);
export default ContactView;
