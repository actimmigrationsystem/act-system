import React from "react";
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
    text: "Appeals and reviews in terms of the Immigration Act",
    buttonLabel: "Learn More",
    target: "service-section",
  },
];

const HomeCarousel = () => {
  return (
    <div className="w-full h-[50vh] sm:h-[65vh] mb-12 sm:mb-16">
      <Carousel autoPlay infiniteLoop showThumbs={false}>
        {carouselData.map((item, id) => (
          <div key={id} className="relative w-full h-[45vh] sm:h-[60vh]">
            <img
              src={item.imageSrc}
              alt={item.text}
              className="w-full h-full object-cover"
            />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
              <div className="bg-black bg-opacity-40 p-4 rounded-md">
                <p className="mb-8 max-w-lg text-l lg:text-4xl md:text-4xl sm:text-l font-semibold leading-loose text-white">
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
  );
};

export default HomeCarousel;
