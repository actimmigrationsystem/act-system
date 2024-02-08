import React from 'react';
import SectionTitle from '../components/SectionTitle';
import FAQComponent from '../components/FAQComponent';
import faqdata from '../api/data/faqdata';
import ContentContainer from '../components/ContentContainer';
import SectionContainer from '../components/SectionContainer';

const FAQsSection = () => (
  <div style={{ backgroundColor: '#FEFEFE' }}>
    <SectionContainer height="90vh" marginTop="12px" marginBottom="30px">
      <SectionTitle
        title="FAQ"
        className="text-center text-white"
      />
      <div className="max-w-screen-xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <ContentContainer>
          <FAQComponent faqs={faqdata} />
        </ContentContainer>
      </div>
    </SectionContainer>
  </div>
);
export default FAQsSection;
