import { ReactNode } from "react";
import { FaMedal, FaPoll, FaLightbulb } from "react-icons/fa";
import ArticleComponent from "../components/ArticleComponent";

interface AboutPromptProps {
  children: ReactNode;
}

const AboutPrompt = ({ children }: AboutPromptProps) => (
  <>
  <div className="flex flex-wrap text-center justify-center">
      <div className="w-full lg:w-6/12 px-4">
        <div className="text-lg leading-relaxed mt-4 mb-4 text-gray-500">
          {children}
        </div>
      </div>
    </div>
    <div className="flex flex-wrap mt-12 justify-center gap-8">
      <div className="w-full lg:w-3/12 px-4 text-center flex flex-col items-center">
        {" "}
        <div className="text-gray-900 p-3 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
          <FaMedal className="text-xl" />
        </div>
        <ArticleComponent
          heading="Who we are"
          lead=""
          subheading=""
          paragraph="We are a team of legal practitioners and consultants, specialising in Immigration and Labour-Related matters."
          subheading2={""}
          paragraph2={""}
          imageSrc={""}
        />
      </div>
      <div className="w-full lg:w-3/12 px-4 text-center flex flex-col items-center">
        {" "}
        <div className="text-gray-900 p-3 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
          <FaPoll className="text-xl" />
        </div>
        <ArticleComponent
          heading="Our Director"
          paragraph="As a practicing attorney for over a decade, and graduating from the Nelson Mandela Metropolitan University, our Director is an Immigration Law specialist who has changed thousands of lives in the labour and immigration avenue"
          lead=""
          subheading=""
          subheading2={""}
          paragraph2={""}
          imageSrc={""}
        />
      </div>
      <div className="w-full lg:w-3/12 px-4 text-center flex flex-col items-center">
        {" "}
        <div className="text-gray-900 p-3 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
          <FaLightbulb className="text-xl" />
        </div>
        <ArticleComponent
          heading="Our Mission"
          paragraph="Our mission is to help every client with an immigration or labour-related issue efficiently, while yielding nothing but satisfaction for our clients. We use our legal background, and innate grit, to fight for the rights of our clients. Contact us, book an appointment, and prepare for your life to be changed."
          lead=""
          subheading=""
          subheading2={""}
          paragraph2={""}
          imageSrc={""}
        />
      </div>
    </div>
    </>
);

export default AboutPrompt;
