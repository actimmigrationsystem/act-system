import SectionTitle from '../components/SectionTitle';
import FAQComponent from '../components/FAQComponent';
import faqData from "../api/data/faqData.json";
import ContentContainer from '../components/ContentContainer';
import SectionContainer from '../components/SectionContainer';

const FAQsSection = () => (
  <SectionContainer height="auto" marginTop="12px" marginBottom="-12px">
    <div style={{ backgroundColor: "#FEFEFE" }}>
      <SectionTitle title="FAQ" className="text-center text-white" />
      <div className="max-w-screen-xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <ContentContainer>
          <FAQComponent faqs={faqData} />
        </ContentContainer>
      </div>
    </div>
  </SectionContainer>
);
export default FAQsSection;
