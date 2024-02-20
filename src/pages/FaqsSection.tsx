import SectionTitle from '../components/SectionTitle';
import FAQComponent from '../components/FAQComponent';
import {
  Typography,
} from "@material-tailwind/react";
import faqData from "../api/data/faqData.json";
import ContentContainer from '../components/ContentContainer';
import SectionContainer from '../components/SectionContainer';
import ArticleComponent from '../components/ArticleComponent';

const FAQsSection = () => (
  <SectionContainer>
    <SectionTitle title="FAQ" className="text-center text-white" />
    <ContentContainer>
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 px-12">
        <FAQComponent faqs={faqData} />
        <div>
          <Typography placeholder="" variant="h3">
            Check Out Some our FAQs
          </Typography>
          <ArticleComponent
            paragraph2=" If you have any other questions, feel free to contact us." heading={''} lead={''} subheading={''} subheading2={''} paragraph={''} imageSrc={''} />
        </div>
      </div>
    </ContentContainer>
  </SectionContainer>
);
export default FAQsSection;
