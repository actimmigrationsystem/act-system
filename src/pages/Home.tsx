import { Element } from 'react-scroll';
import HomeCarousel from '../components/HomeCarousel';
import ServicesSection from './ServicesSection';
import ContactUsSection from './ContactUsSection';
import DocumentSection from './DocumentSection';
import FAQSection from './FaqsSection';
import AboutUs from './AboutUsSection';
import BackToTopButton from '../components/BackToTopButton';

const Home = () => (
  <>
    <Element name="home-section">
      <HomeCarousel />
    </Element>
    <Element name="service-section">
      <ServicesSection />
    </Element>
    <Element name="about-section">
      <AboutUs />
    </Element>
    <Element name="document-section">
      <DocumentSection />
    </Element>
    <Element name="faq-section">
      <FAQSection />
    </Element>
    <Element name="contact-section">
      <ContactUsSection />
    </Element>
    <BackToTopButton />
  </>
);

export default Home;
