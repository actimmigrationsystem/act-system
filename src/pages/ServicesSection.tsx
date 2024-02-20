import SectionTitle from "../components/SectionTitle";
import ServiceCard from "../components/ServiceCard";
import Img1 from "../assets/services/1.jpg";
import Img3 from "../assets/services/3.jpg";
import Img4 from "../assets/services/4.jpg";
import Img2 from "../assets/services/2.jpg";
import SectionContainer from "../components/SectionContainer";
import ContentContainer from "../components/ContentContainer";

const serviceData = [
  {
    image: Img2,
    title: "Temporary and permanent residence visas, SCRA reviews and appeals",
    description:
      "Temporary and permanent residence visas, SCRA reviews and appeals.",
  },
  {
    image: Img1,
    title: "Appeals and reviews in terms of the immigration act",
    description:
      "An aggrieved applicant may submit representations in the form of an appeal or review  ",
  },
  {
    image: Img4,
    title: "Types of temporary residence visas",
    description:
      "A general work visa may be issued by the Director-General to a foreigner who complies with the prescribed requirements.",
  },
  {
    image: Img3,
    title: "Permanent residence permit applications",
    description:
      "The temporary residence visa must be renewed while the permanent residence application is still pending.",
  },
];

const ServicesSection = () => (
  <SectionContainer>
    <SectionTitle title="Services" />
    <ContentContainer>
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 px-8">
        {serviceData.map((service, index) => (
          <ServiceCard
            key={index}
            image={service.image}
            title={service.title}
            description={service.description}
          />
        ))}
      </div>
    </ContentContainer>
  </SectionContainer>
);

export default ServicesSection;
