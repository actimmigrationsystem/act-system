import PropTypes from 'prop-types';
import { Card } from 'flowbite-react';

const ServiceCard = ({ image, title, description }) => (
  <Card className="max-w-fit text-gray-900 rounded-lg shadow overflow-hidden">
    <img
      className="w-full h-48 object-cover object-center"
      src={image}
      alt={title}
    />
    <div className="p-4 flex flex-col items-center justify-center h-full">
      <h5 className="text-1xl font-bold tracking-tight text-gray-900">{title}</h5>
      <p className="font-normal text-gray-700 dark:text-gray-900">{description}</p>
    </div>
  </Card>
);

ServiceCard.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default ServiceCard;
