import DocumentsCarousel from "../components/DocumentsCarousel";
import SectionTitle from "../components/SectionTitle";
import ContentContainer from "../components/ContentContainer";
import SectionContainer from "../components/SectionContainer";

export default function DocumentSection() {
  return (
    <>
      <SectionContainer>
        <SectionTitle title="Documents" className="text-center text-white" />
        <div className="bg-gray-700 p-2">
          <ContentContainer>
            <p className=" pt-2 mb-8 text-center text-white">
              Here are some important documents for your reference and download.
            </p>
            <DocumentsCarousel />
          </ContentContainer>
        </div>
      </SectionContainer>
    </>
  );
}
