import SectionTitle from "../components/SectionTitle";
import ServiceCard from "../components/ServiceCard";
import SectionContainer from "../components/SectionContainer";
import ContentContainer from "../components/ContentContainer";
import { Link } from "react-router-dom";
import { serviceData } from "../api/constants";


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
