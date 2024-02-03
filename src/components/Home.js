import React from 'react';
import ServiceCard from './ServiceCard';
import Container from './Container';
import Img1 from '../assets/services/5.jpeg';

const serviceData = [
  {
    image: Img1,
    title: 'Temporary and permanent residence visas, SCRA reviews and appeals',
    description: 'Temporary and permanent residence visas, SCRA reviews and appeals.',
  },
  {
    image: Img1,
    title: 'Appeals and reviews in terms of the immigration act',
    description: 'An aggrieved applicant may submit representations in the form of an appeal or review  ',
  },
  {
    image: Img1,
    title: 'Types of temporary residence visas',
    description: 'A general work visa may be issued by the Director-General to a foreigner who complies with the prescribed requirements.',
  },
  {
    image: Img1,
    title: 'Permanent residence permit applications',
    description: 'The temporary residence visa must be renewed while the permanent residence application is still pending.',
  },
];

const Home = () => (
  <Container>
    <h1>
      Consultants striving on affecting change in peoples lives every day.
      We offer immigration services
    </h1>
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
);

export default Home;
