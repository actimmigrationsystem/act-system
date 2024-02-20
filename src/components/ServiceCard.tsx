import PropTypes from "prop-types";
import { Button } from "@material-tailwind/react";

interface ServiceCardProps {
  image: string;
  title: string;
  description: string;
}

const ServiceCard = ({ image, title, description }: ServiceCardProps) => (
  <div className="max-w-sm mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-md transform transition duration-500 ease-in-out hover:scale-105 cursor-pointer">
    <div>
      <div>
        <img
          className="h-48 w-full object-cover"
          src={image}
          alt="Service Image"
        />
      </div>
      <div className="p-8 mb-12">
        <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
          {title}
        </div>
        <p className="mt-2 text-slate-500">{description}</p>
      </div>
    </div>
    <div className="absolute bottom-4 left-4">
      <Button
        placeholder={"Learn More"}
        size="sm"
        variant="text"
        style={{ backgroundColor: "#0e5a97" }}
        className="flex items-center rounded-lg hover:bg-blue-800 py-3 px-6 text-center font-sans text-xs font-bold uppercase text-white shadow-md shadow-gray-300/10 transition-all hover:shadow-lg hover:shadow-blue-400/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
      >
        <span className="mr-2">Learn More</span>
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
    </div>
  </div>
);

ServiceCard.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default ServiceCard;
