import React, { ReactNode, createElement } from "react";
import { FaGavel, FaUserGraduate, FaRegLightbulb } from "react-icons/fa";
import ArticleComponent from "./ArticleComponent";

interface AboutPromptProps {
  children: ReactNode;
}

const aboutcontent = [
  {
    icon: FaGavel,
    title: "Who we are",
    content:
      "We are a team of legal practitioners and consultants, specializing in Immigration and Labour-Related matters.",
  },
  {
    icon: FaUserGraduate,
    title: "Our Director",
    content:
      "As a practicing attorney for over a decade, and graduating from the Nelson Mandela Metropolitan University, our Director is an Immigration Law specialist who has changed thousands of lives in the labour and immigration avenue",
  },
  {
    icon: FaRegLightbulb,
    title: "Our Mission",
    content:
      "Our mission is to help every client with an immigration or labour-related issue efficiently, while yielding nothing but satisfaction for our clients. We use our legal background, and innate grit, to fight for the rights of our clients. Contact us, book an appointment, and prepare for your life to be changed.",
  },
];

const AboutContent = ({ children }: AboutPromptProps) => (
  <>
    <div className="flex flex-wrap text-center justify-center">
      <div className="w-full lg:w-6/12 px-4">
        <div className="text-lg leading-relaxed mt-4 mb-4 text-gray-500">
          {children}
        </div>
      </div>
    </div>
    <div className="flex flex-wrap mt-12 justify-center gap-16">
      {aboutcontent.map(({ icon, title, content }, index) => (
        <div
          key={index}
          className="w-full lg:w-3/12 px-4 text-center flex flex-col items-center"
        >
          <div
            className="text-gray-900 p-3 shadow-lg rounded-full bg-white inline-flex items-center justify-center"
            style={{ color: "#0e5a97" }}
          >
            {createElement(icon, { className: "text-xl" })}
          </div>
          <ArticleComponent
            key={index}
            heading={title}
            paragraph={content}
            lead=""
            subheading=""
            subheading2=""
            paragraph2=""
            imageSrc=""
          />
        </div>
      ))}
    </div>
  </>
);

export default AboutContent;
