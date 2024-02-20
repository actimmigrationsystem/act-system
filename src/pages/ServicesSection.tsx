import SectionTitle from "../components/SectionTitle";
import ServiceCard from "../components/ServiceCard";
import Img1 from "../assets/services/1.jpg";
import Img3 from "../assets/services/3.jpg";
import Img4 from "../assets/services/4.jpg";
import Img2 from "../assets/services/2.jpg";
import Img5 from "../assets/services/5.jpeg";
import SectionContainer from "../components/SectionContainer";
import ContentContainer from "../components/ContentContainer";

const serviceData = [
  {
    image: Img2,
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
