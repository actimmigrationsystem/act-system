import { Link } from "react-scroll";
import SectionContainer from "../components/SectionContainer";
import { useMediaQuery } from "react-responsive";
import { FaCookie, FaQuestionCircle } from "react-icons/fa";
import { PiStrategy } from "react-icons/pi";
import { MdBlock } from "react-icons/md";
import { MdEditNote } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import { Button } from "flowbite-react";
import { FaHome } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const PrivacyPolicy = () => {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-device-width: 1224px)",
  });
  const navigate = useNavigate();

  const returnToHome = () => {
    navigate("/");
  };

  return (
    <SectionContainer>
      <div className="flex">
        <div className="fixed w-1/5 bg-gray-200 p-4 top-40 bottom-0 overflow-y-auto h-50">
          <nav className="shadow">
            <ul className="list-none cursor-pointer">
              <li>
                <Link
                  activeClass="active"
                  to="introduction"
                  spy={true}
                  smooth={true}
                  duration={500}
                  className="block px-4 py-2 mb-2 rounded-md bg-gray-300 hover:bg-gray-400 transition duration-300"
                  activeStyle={{ backgroundColor: "#0369a1", color: "white" }}
                >
                  {isDesktopOrLaptop ? "Introduction" : <FaCookie />}
                </Link>
              </li>
              <li>
                <Link
                  activeClass="active"
                  to="interpretations-definitions"
                  spy={true}
                  smooth={true}
                  duration={500}
                  className="block px-4 py-2 mb-2 rounded-md bg-gray-300 hover:bg-gray-400 transition duration-300"
                  activeStyle={{ backgroundColor: "#0369a1", color: "white" }}
                >
                  {isDesktopOrLaptop ? (
                    "Interpretation and Definitions"
                  ) : (
                    <FaQuestionCircle />
                  )}
                </Link>
              </li>
              <li>
                <Link
                  activeClass="active"
                  to="types-of-data"
                  spy={true}
                  smooth={true}
                  duration={500}
                  className="block px-4 py-2 mb-2 rounded-md bg-gray-300 hover:bg-gray-400 transition duration-300"
                  activeStyle={{ backgroundColor: "#0369a1", color: "white" }}
                >
                  {isDesktopOrLaptop ? (
                    "Types of Data Collected"
                  ) : (
                    <PiStrategy />
                  )}
                </Link>
              </li>
              <li>
                <Link
                  activeClass="active"
                  to="use-of-personal-data"
                  spy={true}
                  smooth={true}
                  duration={500}
                  className="block px-4 py-2 mb-2 rounded-md bg-gray-300 hover:bg-gray-400 transition duration-300"
                  activeStyle={{ backgroundColor: "#0369a1", color: "white" }}
                >
                  {isDesktopOrLaptop ? (
                    "Use of Your Personal Data"
                  ) : (
                    <MdBlock />
                  )}
                </Link>
              </li>
              <li>
                <Link
                  activeClass="active"
                  to="updating-policy"
                  spy={true}
                  smooth={true}
                  duration={500}
                  className="block px-4 py-2 mb-2 rounded-md bg-gray-300 hover:bg-gray-400 transition duration-300"
                  activeStyle={{ backgroundColor: "#0369a1", color: "white" }}
                >
                  {isDesktopOrLaptop ? "Updating this Policy" : <MdEditNote />}
                </Link>
              </li>
              <li>
                <Link
                  activeClass="active"
                  to="contact-us"
                  spy={true}
                  smooth={true}
                  duration={500}
                  className="block px-4 py-2 mb-2 rounded-md bg-gray-300 hover:bg-gray-400 transition duration-300"
                  activeStyle={{ backgroundColor: "#0369a1", color: "white" }}
                >
                  {isDesktopOrLaptop ? "Contact us" : <MdEmail />}
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        <div className="flex-1 p-8 ml-64 space-y-4">
          <h2 className="bg-gradient-to-r from-sky-700 to-sky-300 text-white py-2 px-4 rounded-md">
            Privacy Policy
          </h2>
          <div
            style={{ width: "80%", marginLeft: "20%" }}
            className="space-y-4"
          >
            <h2
              id="introduction"
              className="bg-gradient-to-r from-sky-700 to-sky-300 text-white py-2 px-4 rounded-md"
            >
              Introduction
            </h2>
            <p>
              This Privacy Policy describes Our policies and procedures on the
              collection, use and disclosure of Your information when You use
              the Service and tells You about Your privacy rights and how the
              law protects YoWe use Your Personal data to provide and improve
              the Service. By using the Service, You agree to the collection and
              use of information in accordance with this Privacy Policy
            </p>

            <h3
              id="interpretations-definitions"
              className="bg-gradient-to-r from-sky-700 to-sky-300 text-white py-2 px-4 rounded-md"
            >
              Interpretation and Definitions
            </h3>
            <p>
              The words of which the initial letter is capitalized have meanings
              defined under the following conditions. The following definitions
              shall have the same meaning regardless of whether they appear in
              singular or in plural.,For the purposes of this Privacy
              Policy:,Account means a unique account created for You to access
              our Service or parts of our Service.,Affiliate means an entity
              that controls, is controlled by or is under common control with a
              party, where control means ownership of 50% or more of the shares,
              equity interest or other securities entitled to vote for election
              of directors or other managing authority. Company (referred to as
              either the Company, We, Us or Our in this Agreement) refers to ACT
              Immigration And Labour Consultants, 255 Caledon Street Central
              Kariega, Eastern Cape South Africa., Cookies are small files that
              are placed on Your computer, mobile device or any other device by
              a website, containing the details of Your browsing history on that
              website among its many uses, Country refers to: South Africa,
              Device means any device that can access the Service such as a
              computer, a cellphone or a digital tablet., Personal Data is any
              information that relates to an identified or identifiable
              individual. Service refers to the Website., Service Provider means
              any natural or legal person who processes the data on behalf of
              the Company. It refers to third-party companies or individuals
              employed by the Company to facilitate the Service, to provide the
              Service on behalf of the Company, to perform services related to
              the Service or to assist the Company in analyzing how the Service
              is used.,Usage Data refers to data collected automatically, either
              generated by the use of the Service or from the Service
              infrastructure itself (for example, the duration of a page
              visit)., Website refers to ACTImmigration, accessible from
              https://www.actimmigration.co.za/,You means the individual
              accessing or using the Service, or the company, or other legal
              entity on behalf of which such individual is accessing or using
              the Service, as applicable.,
            </p>

            <h3
              id="types-of-data"
              className="bg-gradient-to-r from-sky-700 to-sky-300 text-white py-2 px-4 rounded-md"
            >
              Types of Data Collected
            </h3>
            <p>
              "Personal Data", "While using Our Service, We may ask You to
              provide Us with certain personally identifiable information that
              can be used to contact or identify You. Personally identifiable
              information may include, but is not limited to:", "Email address",
              "First name and last name", "Phone number", "Address, State,
              Province, ZIP/Postal code, City", "Usage Data", "Usage Data is
              collected automatically when using the Service.", "Usage Data may
              include information such as Your Device's Internet Protocol
              address (e.g. IP address), browser type, browser version, the
              pages of our Service that You visit, the time and date of Your
              visit, the time spent on those pages, unique device identifiers
              and other diagnostic data.", "When You access the Service by or
              through a mobile device, We may collect certain information
              automatically, including, but not limited to, the type of mobile
              device You use, Your mobile device unique ID, the IP address of
              Your mobile device, Your mobile operating system, the type of
              mobile Internet browser You use, unique device identifiers and
              other diagnostic data.", "We may also collect information that
              Your browser sends whenever You visit our Service or when You
              access the Service by or through a mobile device.",
            </p>

            <h3
              id="use-of-personal-data"
              className="bg-gradient-to-r from-sky-700 to-sky-300 text-white py-2 px-4 rounded-md"
            >
              Use of your Personal Data
            </h3>
            <p>
              "The Company may use Personal Data for the following purposes:",
              "To contact You: To contact You by email, telephone calls, SMS, or
              other equivalent forms of electronic communication, such as a
              mobile application's push notifications regarding updates or
              informative communications related to the functionalities,
              services , including the security updates, when necessary or
              reasonable for their implementation.", "To manage Your requests:
              To attend and manage Your requests to Us.", "- With other legal
              professionals or entities involved in Your legal matters, such as
              co-counsel, expert witnesses, and other entities involved in Your
              legal matters.", "- With Your consent or as required by law.",
            </p>
            <h3
              id="updating-policy"
              className="bg-gradient-to-r from-sky-700 to-sky-300 text-white py-2 px-4 rounded-md"
            >
              Updating this Policy
            </h3>
            <p>
              If there are any material changes to this Policy, you will be
              notified by the posting of a prominent notice on our Site prior to
              the change becoming effective. We encourage you to periodically
              review this page for the latest information on the Policy. Your
              continued use of the Site, Software, and/or Services constitutes
              your agreement to be bound by such changes to this Policy. Your
              only remedy, if you do not accept the terms of this Policy, is to
              discontinue use of and access to the Site, Software, and/or
              Services.
            </p>

            <h3
              id="contact-us"
              className="bg-gradient-to-r from-sky-700 to-sky-300 text-white py-2 px-4 rounded-md"
            >
              Contact us
            </h3>
            <p>
              If you have any questions regarding this Policy or how
              ActImmigration uses cookies, you may contact us by submitting a
              help desk request{" "}
              <a href="https://support@actimmigration.com">here</a> or by
              e-mailing:{" "}
              <a href="mailto:support@ActImmigration.com">
                support@actimmigration.com
              </a>
              .
            </p>
          </div>
        </div>
        <Button
          onClick={returnToHome}
          className="fixed bottom-16 right-4 p-3 text-white font-medium text-xs leading-tight rounded-full shadow-md hover:bg-blue-700 hover:shadow-lg bg-gray-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
          style={{
            backgroundColor: "#0e5a97",
            width: "40px",
            height: "40px",
          }}
        >
          <FaHome className="w-4 h-4" />
        </Button>
      </div>
    </SectionContainer>
  );
};

export default PrivacyPolicy;
