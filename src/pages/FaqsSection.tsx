import SectionTitle from '../components/SectionTitle';
import FAQComponent from '../components/FAQComponent';
import faqData from "../api/data/faqData.json";
import ContentContainer from '../components/ContentContainer';
import SectionContainer from '../components/SectionContainer';

const FAQsSection = () => (
  <SectionContainer height="90vh" margintop="1rem" marginbottom="6rem">
    <SectionTitle title="FAQ" className="text-center text-white" />
    <div className="max-w-screen-xl mx-auto py-12 px-4 sm:px-6 lg:px-4">
      <ContentContainer>
        <FAQComponent faqs={faqData} />
      </ContentContainer>
    </div>
  </SectionContainer>
);
export default FAQsSection;
