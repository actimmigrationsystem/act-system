import SectionTitle from "../components/SectionTitle";
import ServiceCard from "../components/ServiceCard";
import Img1 from "../assets/services/1.jpg";
import Img3 from "../assets/services/3.jpg";
import Img6 from "../assets/services/6.png";
import Img5 from "../assets/services/5.jpeg";
import Img7 from "../assets/services/7.png";
import SectionContainer from "../components/SectionContainer";
import ContentContainer from "../components/ContentContainer";
import { Link } from "react-router-dom";
import React from "react";

const serviceData = [
  {
    image: Img6,
    title: "Temporary and permanent residence visas",
    description:
      "We offer assistance with temporary and permanent residence visa applications as well as SCRA reviews and appeals.",
  },
  {
    image: Img5,
    title: "SCRA reviews and appeals",
    description:
      "Our SCRA reviews and appeals services are designed to help you efficiently navigate the process while ensuring that your rights are protected.",
  },
  {
    image: Img1,
    title: "Appeals and reviews in terms of the immigration act",
    description:
      "We provide comprehensive support for appeals and reviews under the Immigration Act.",
  },
  {
    image: Img7,
    title: "Types of temporary residence visas",
    description:
      "Our team is experienced in handling various types of temporary residence visas, including general work visas.",
  },
  {
    image: Img3,
    title: "Permanent residence permit applications",
    description:
      "We offer assistance with permanent residence permit applications, ensuring that your  visa is renewed.",
  },
];

const ServicesSection = () => (
  <SectionContainer>
    <SectionTitle title="Services" />
    <ContentContainer>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 px-8 gap-16">
        {serviceData.map((service, index) => (
          <div key={index}>
            <Link to={`/services/${service.title}`}>
              <ServiceCard
                image={service.image}
                title={service.title}
                description={
                  service.description.length > 113
                    ? service.description.substring(0, 113) + "..."
                    : service.description
                }
                serviceTitle={service.title}
              />
            </Link>
          </div>
        ))}
      </div>
    </ContentContainer>
  </SectionContainer>
);

export default ServicesSection;
