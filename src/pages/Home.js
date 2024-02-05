import React from 'react';
import { Element } from 'react-scroll';
import Container from '../components/ContentContainer';
import HomeCarousel from '../components/HomeCarousel';
import ServicesSection from './ServicesSection';
import ContactUsSection from './ContactUsSection';
import DocumentSection from './DocumentSection';
import FAQSection from './FaqsSection';
import AboutUs from './AboutUsSection';

const Home = () => (
  <div>
    <Element name="home-section">
      <HomeCarousel />
    </Element>
    <Container>
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
    </Container>
  </div>
);

export default Home;
