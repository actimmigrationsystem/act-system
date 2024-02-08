import styled from "styled-components";
import { Link } from "react-scroll";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Img1 from "../assets/bannerimages/practice-1.jpeg";
import Img2 from "../assets/bannerimages/practice-2.jpeg";
import Img3 from "../assets/bannerimages/practice-3.jpeg";

const carouselData = [
  {
    imageSrc: Img1,
    text: "Immigration Consultants striving on affecting change in people's lives every day.",
    buttonLabel: "Learn More",
    target: "service-section",
  },
  {
    imageSrc: Img2,
    text: "Temporary and permanent residence visas",
    buttonLabel: "Learn More",
    target: "service-section",
  },
  {
    imageSrc: Img3,
    text: "Appeals and reviews in terms of the immigration act",
    buttonLabel: "Learn More",
    target: "service-section",
  },
];

const CarouselContainer = styled.div`
  width: 100%;
  height: 60vh;
  margin-bottom: 50px;
`;

const HomeCarousel = () => {
  return (
    <CarouselContainer>
      <div style={{ height: "60vh" }}>
        <Carousel autoPlay infiniteLoop>
          {carouselData.map((item, id) => (
            <div
              key={id}
              className="relative w-full"
              style={{ height: "60vh" }}
            >
              <img
                src={item.imageSrc}
                alt={item.text}
                className="w-full object-cover"
              />
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                <div className="bg-black bg-opacity-40 p-4 rounded-md">
                  <p className="max-w-lg text-4xl font-semibold leading-loose text-white">
                    {item.text}
                  </p>
                  <Link
                    to={item.target}
                    smooth={true}
                    duration={500}
                    className="mt-2 text-white px-6 py-2 rounded-full hover:bg-blue-700 cursor-pointer"
                    style={{ backgroundColor: "#0e5a97" }}
                  >
                    {item.buttonLabel}
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </CarouselContainer>
  );
};

export default HomeCarousel;
