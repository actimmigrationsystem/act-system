/* eslint-disable jsx-a11y/img-redundant-alt */
import { Carousel } from '@material-tailwind/react';
import Img1 from '../assets/bannerimages/practice-1.jpg';
import Img2 from '../assets/bannerimages/practice-2.jpeg';
import Img3 from '../assets/bannerimages/practice-3.jpeg';

const carouselData = [
  {
    imageSrc: Img1,
    text: 'Consultants striving on affecting change in people\'s lives every day. We offer immigration services.',
  },
  {
    imageSrc: Img2,
    text: 'Temporary and permanent residence visas, SCRA reviews and appeals.',
  },
  {
    imageSrc: Img3,
    text: 'Temporary and permanent residence visas, SCRA reviews and appeals.',
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
            <p className="max-w-lg text-4xl font-semibold leading-loose text-gray-200 dark:text-white">
              {item.text}
            </p>
          </div>
        </div>
      ))}
    </Carousel>
  </div>
);

export default HomeCarousel;
