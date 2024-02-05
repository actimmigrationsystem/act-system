import React from 'react';

import Container from './Container';
import HomeCarousel from './HomeCarousel';
import AboutUs from './AboutUsSection';
import ServicesSection from './ServicesSection';

const Home = () => (
  <>
    <HomeCarousel />
    <Container>
      <ServicesSection />
      <AboutUs />
    </Container>
  </>
);

export default Home;
