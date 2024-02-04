import React from 'react';
import ServiceCard from './ServiceCard';
import Container from './Container';
import Img1 from '../assets/services/1.jpeg';
import Img3 from '../assets/services/3.jpeg';
import Img4 from '../assets/services/4.jpeg';
import Img5 from '../assets/services/5.jpeg';
import HomeCarousel from './HomeCarousel';

const serviceData = [
  {
    image: Img5,
    title: 'Temporary and permanent residence visas, SCRA reviews and appeals',
    description: 'Temporary and permanent residence visas, SCRA reviews and appeals.',
  },
  {
    image: Img1,
    title: 'Appeals and reviews in terms of the immigration act',
    description: 'An aggrieved applicant may submit representations in the form of an appeal or review  ',
  },
  {
    image: Img4,
    title: 'Types of temporary residence visas',
    description: 'A general work visa may be issued by the Director-General to a foreigner who complies with the prescribed requirements.',
  },
  {
    image: Img3,
    title: 'Permanent residence permit applications',
    description: 'The temporary residence visa must be renewed while the permanent residence application is still pending.',
  },
];

const Home = () => (
  <>
    <HomeCarousel />
    <Container>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-2">
        {serviceData.map((service) => (
          <ServiceCard
            key={service.title}
            image={service.image}
            title={service.title}
            description={service.description}
          />
        ))}
      </div>
    </Container>
  </>
);

export default Home;
