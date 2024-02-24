import SectionTitle from "../components/SectionTitle";
import FAQComponent from "../components/FAQComponent";
import { Typography } from "@material-tailwind/react";
import { FAQ_DATA } from "../api/constants/index";
import ContentContainer from "../components/ContentContainer";
import SectionContainer from "../components/SectionContainer";
import ArticleComponent from "../components/ArticleComponent";
import { Link } from "react-scroll";
 import { Button } from "@material-tailwind/react";

const FAQsSection = () => (
  <SectionContainer>
    <SectionTitle title="FAQ" className="text-center text-white" />
    <ContentContainer>
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 px-12">
        <FAQComponent faqs={FAQ_DATA} />
        <div className="relative">
          <Typography
            placeholder=""
            variant="h3"
            className="flex items-center justify-center"
          >
            Check Out Some our FAQs
          </Typography>
          <div className="flex items-center justify-center">
            <ArticleComponent
              paragraph2="If you have any other questions, feel free to contact us."
              heading={""}
              lead={""}
              subheading={""}
              subheading2={""}
              paragraph={""}
              imageSrc={""}
            />
          </div>

          <div className="flex justify-center">
            <Link
              to="contact-section"
              smooth={true}
              duration={500}
              style={{ display: "inline-block" }}
            >
              <Button
                 placeholder={"Start Now"}
                  children="Start Now"
                style={{ backgroundColor: "#0e5a97" }}
                className="hover:bg-blue-900 text-white font-bold py-2 px-4 rounded cursor-pointer"
              />
            </Link>
          </div>
          <div className="absolute bottom-0 right-0 z-[-1] w-full h-full">
            <svg
              width="100%"
              height="100%"
              viewBox="0 0 1440 886"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-full"
            >
              <path
                opacity="0.5"
                d="M193.307 -273.321L1480.87 1014.24L1121.85 1373.26C1121.85 1373.26 731.745 983.231 478.513 729.927C225.976 477.317 -165.714 85.6993 -165.714 85.6993L193.307 -273.321Z"
                fill="url(#paint0_linear)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear"
                  x1="1308.65"
                  y1="1142.58"
                  x2="602.827"
                  y2="-418.681"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#0e5a97" stopOpacity="0.36" />
                  <stop offset="1" stopColor="#2393cb" stopOpacity="0" />
                  <stop offset="1" stopColor="#F5F2FD" stopOpacity="0.096144" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>
      </div>
    </ContentContainer>
  </SectionContainer>
);

export default FAQsSection;
