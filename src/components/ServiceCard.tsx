// ServiceCard.jsx
import PropTypes from 'prop-types';
import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from '@material-tailwind/react';

interface ServiceCardProps {
  image: string;
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  image,
  title,
  description,
}) => (
  <div className="w-full flex flex-col sm:flex-row transition-transform duration-300 ease-in-out transform hover:scale-105">
    <Card
      placeholder="Card"
      className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-200 dark:border-gray-200 relative overflow-hidden cursor-pointer overflow-y-auto"
    >
      <CardBody placeholder="Cardbody" className="p-2">
        <img className="rounded-t-lg" src={image} alt="" />
        <a href="/">
          <Typography
            placeholder="Typography"
            className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white text-center"
          >
            {title}
          </Typography>
        </a>
        <p className="mb-3 font-normal text-base  text-gray-700 dark:text-gray-400">
          {description}
        </p>
      </CardBody>
      <CardFooter placeholder="CardFooter" className="pt-0">
        <a href="/" className="inline-block">
          <Button
            placeholder={"Button"}
            size="sm"
            variant="text"
            className="flex items-center gap-2"
          >
            Learn More
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-4 w-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
              />
            </svg>
          </Button>
        </a>
      </CardFooter>
    </Card>
  </div>
);

ServiceCard.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default ServiceCard;
