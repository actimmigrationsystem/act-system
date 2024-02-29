import { useParams } from "react-router-dom";
import Img1 from "../assets/services/1.jpg";
import Img3 from "../assets/services/3.jpg";
import Img4 from "../assets/services/4.jpg";
import Img6 from "../assets/services/6.png";
import Img5 from "../assets/services/5.jpeg";

interface Service {
  title: string;
  image: string;
  description: string;
}

const serviceData: Service[] = [
  {
    image: Img6,
    title: "Temporary and permanent residence visas",
    description:
      "We specialize in assisting individuals with temporary and permanent residence visa applications, as well as SCRA reviews and appeals.",
  },
  {
    image: Img5,
    title: "SCRA reviews and appeals",
    description:
      "Our SCRA reviews and appeals services are designed to help you navigate the process efficiently, ensuring that your rights are protected.",
  },
  {
    image: Img1,
    title: "Appeals and reviews in terms of the immigration act",
    description:
      "We provide comprehensive support for appeals and reviews under the Immigration Act, guiding you through the process with expert advice.",
  },
  {
    image: Img4,
    title: "Types of temporary residence visas",
    description:
      "Our team is experienced in handling various types of temporary residence visas, including general work visas, ensuring that you meet all requirements.",
  },
  {
    image: Img3,
    title: "Permanent residence permit applications",
    description:
      "We offer assistance with permanent residence permit applications, ensuring that your temporary residence visa is renewed while your application is pending.",
  },
];


const ServiceDetails = () => {
  const { serviceTitle } = useParams<{ serviceTitle: string }>();

  if (!serviceTitle) {
    return <div>No service selected</div>;
  }

  // Find the service with the matching title
const service = serviceData.find((service) => service.title === serviceTitle);


  if (!service) {
    return <div>Service not found</div>;
  }

  // Render the service details
  return (
    <div className="flex flex-col">
      <div
        className="h-80 bg-cover bg-center relative"
        style={{ backgroundImage: `url(${service.image})`, opacity: 0.7 }}
      >
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <h2 className="text-white text-3xl font-bold absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center w-full">
          {service.title}
        </h2>
      </div>
      <div className="p-8">
        <p className="text-lg">{service.description}</p>
      </div>
    </div>
  );
};

export default ServiceDetails;

