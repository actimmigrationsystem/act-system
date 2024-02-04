/* eslint-disable jsx-a11y/img-redundant-alt */
// ServiceCard.jsx
import PropTypes from 'prop-types';
import { Card, Button } from 'flowbite-react';

const ServiceCard = ({ image, title, description }) => (
  <div className="p-8 mt-3 pt-4">
    <Card className="mt-6 mb-6 w-96">
      <div className="relative h-56">
        <img
          className="w-full h-full object-cover"
          src={image}
          alt="card image"
        />
      </div>
      <div className="p-4">
        <h5 className="text-2xl font-bold mb-2 text-gray-900">{title}</h5>
        <p className="text-gray-700 dark:text-gray-900">{description}</p>
      </div>
      <div className="pt-0">
        <Button>Read More</Button>
      </div>
    </Card>
  </div>
);

ServiceCard.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default ServiceCard;
