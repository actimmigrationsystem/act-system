/* eslint-disable jsx-a11y/img-redundant-alt */
import { Carousel } from '@material-tailwind/react';
import Img1 from '../assets/bannerimages/practice-1.jpeg';
import Img2 from '../assets/bannerimages/practice-2.jpeg';
import Img3 from '../assets/bannerimages/practice-3.jpeg';

const carouselData = [
  {
    imageSrc: Img1,
    text: 'Immigration Consultants striving on affecting change in people\'s lives every day.',
    buttonLabel: 'Learn More',
    buttonLink: '/learn-more',
  },
  {
    imageSrc: Img2,
    text: 'Temporary and permanent residence visas',
    buttonLabel: 'Learn More',
    buttonLink: '/learn-more',
  },
  {
    imageSrc: Img3,
    text: 'Appeals and reviews in terms of the immigration act',
    buttonLabel: 'Learn More',
    buttonLink: '/learn-more',
  },
  {
    imageSrc: Img3,
    text: 'Applications for certification as Refugee indefinite to the standing Committee',
    buttonLabel: 'Learn More',
    buttonLink: '/learn-more',
  },
  {
    imageSrc: Img3,
    text: 'Exclusions and Exemptions from Temporary Residence or Permanent Residence',
    buttonLabel: 'Learn More',
    buttonLink: '/learn-more',
  },
  {
    imageSrc: Img3,
    text: 'Exclusions and Exemptions from Temporary Residence or Permanent Residence',
    buttonLabel: 'Learn More',
    buttonLink: '/learn-more',
  },
  {
    imageSrc: Img3,
    text: 'Temporary Residence Visa Applications and Renewals',
    buttonLabel: 'Learn More',
    buttonLink: '/learn-more',
  },

];

const HomeCarousel = () => (
  <div>
    <Carousel className="relative h-56 overflow-hidden rounded-lg md:h-96" autoplay>
      {carouselData.map((item) => (
        <div key={item.id} className="relative h-full w-full">
          <img
            src={item.imageSrc}
            alt={item.text}
            className="h-full w-full object-cover"
          />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
            <div className="bg-black bg-opacity-40 p-4 rounded-md">
              <p className="max-w-lg text-4xl font-semibold leading-loose text-white">
                {item.text}
              </p>
              <button type="button" style={{ backgroundColor: '#0e5a97' }} className="mt-2 text-white px-6 py-2 rounded-full hover:bg-blue-700">
                {item.buttonLabel}
              </button>
            </div>
          </div>
        </div>
      ))}
    </Carousel>
  </div>
);

export default HomeCarousel;
