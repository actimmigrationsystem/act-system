import React from 'react';
import SectionTitle from '../components/SectionTitle';
import SectionContainer from '../components/SectionContainer';
import PdfDislay from '../components/PdfDisplay';

export default function DocumentSection() {
  return (
    <SectionContainer height="90vh" marginTop="12px" marginBottom="30px">
      <SectionTitle
        title="Documents"
        className="text-center text-white"
      />
      <PdfDislay />
    </SectionContainer>
  );
}
