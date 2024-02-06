import React from 'react';
import SectionTitle from '../components/SectionTitle';
import FAQComponent from '../components/FAQComponent';
import faqdata from '../api/data/faqdata';

const FAQsSection = () => (
  <div>
    <SectionTitle
      title="FAQs"
    />
    <FAQComponent faqs={faqdata} />

  </div>
);
export default FAQsSection;
