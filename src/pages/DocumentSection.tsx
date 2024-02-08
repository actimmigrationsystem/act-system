import DocumentsCarousel from '../components/DocumentsCarousel';
import SectionTitle from '../components/SectionTitle';
import ContentContainer from '../components/ContentContainer';
import SectionContainer from '../components/SectionContainer';

export default function DocumentSection() {
  return (
    <SectionContainer height="90vh" marginTop="12px" marginBottom="30px">
      <SectionTitle
        title="Documents"
        className="text-center text-white"
      />
      <div style={{ backgroundColor: '#E1E1E1' }}>
        <div className="max-w-screen-xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <ContentContainer>
           <DocumentsCarousel />
          </ContentContainer>
        </div>
      </div>
    </SectionContainer>
  );
}
