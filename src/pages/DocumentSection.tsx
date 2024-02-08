import DocumentsCarousel from '../components/DocumentsCarousel';
import SectionTitle from '../components/SectionTitle';
import ContentContainer from '../components/ContentContainer';
import SectionContainer from '../components/SectionContainer';

export default function DocumentSection() {
  return (
    <SectionContainer height="70vh" marginTop="15px" marginBottom="40px">
      <SectionTitle title="Documents" className="text-center text-white" />
      <div className="bg-gray-700 p-2">
        <div className="max-w-screen-xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <ContentContainer>
            <DocumentsCarousel />
          </ContentContainer>
        </div>
      </div>
    </SectionContainer>
  );
}
