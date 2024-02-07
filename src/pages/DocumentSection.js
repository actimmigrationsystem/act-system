import React from 'react';
import SectionTitle from '../components/SectionTitle';
import SectionContainer from '../components/SectionContainer';
import PdfDisplay from '../components/PdfDisplay';

const DocumentSection = () => (
  <SectionContainer
    height="90vh"
    marginTop="12px"
    marginBottom="30px"
    style={{
      display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
    }}
  >
    <SectionTitle
      title="Documents"
      className="text-center text-white"
    />
    <PdfDisplay />
  </SectionContainer>
);
export default DocumentSection;
