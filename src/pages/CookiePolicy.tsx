import { Link } from "react-scroll";
import { useNavigate } from "react-router-dom";
import SectionContainer from "../components/SectionContainer";
import { useMediaQuery } from "react-responsive";
import { FaCookie, FaQuestionCircle } from "react-icons/fa";
import { PiStrategy } from "react-icons/pi";
import { MdBlock } from "react-icons/md";
import { BiSolidCategoryAlt } from "react-icons/bi";
import { FaRepeat } from "react-icons/fa6";
import { MdEditNote } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import { Button } from "flowbite-react";
import { FaHome } from "react-icons/fa";

const CookiePolicy = () => {
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
                  to="intro"
                  spy={true}
                  smooth={true}
                  duration={500}
                  className="block px-4 py-2 mb-2 rounded-md bg-gray-300 hover:bg-gray-400 transition duration-300"
                  activeStyle={{ backgroundColor: "#0369a1", color: "white" }}
                >
                  {isDesktopOrLaptop ? "Intro" : <FaCookie />}
                </Link>
              </li>
              <li>
                <Link
                  activeClass="active"
                  to="what-is-cookie"
                  spy={true}
                  smooth={true}
                  duration={500}
                  className="block px-4 py-2 mb-2 rounded-md bg-gray-300 hover:bg-gray-400 transition duration-300"
                  activeStyle={{ backgroundColor: "#0369a1", color: "white" }}
                >
                  {isDesktopOrLaptop ? (
                    "What is a cookie?"
                  ) : (
                    <FaQuestionCircle />
                  )}
                </Link>
              </li>
              <li>
                <Link
                  activeClass="active"
                  to="why-use-cookies"
                  spy={true}
                  smooth={true}
                  duration={500}
                  className="block px-4 py-2 mb-2 rounded-md bg-gray-300 hover:bg-gray-400 transition duration-300"
                  activeStyle={{ backgroundColor: "#0369a1", color: "white" }}
                >
                  {isDesktopOrLaptop ? (
                    "Why does ActImmigration use cookies?"
                  ) : (
                    <PiStrategy />
                  )}
                </Link>
              </li>
              <li>
                <Link
                  activeClass="active"
                  to="disable-cookies"
                  spy={true}
                  smooth={true}
                  duration={500}
                  className="block px-4 py-2 mb-2 rounded-md bg-gray-300 hover:bg-gray-400 transition duration-300"
                  activeStyle={{ backgroundColor: "#0369a1", color: "white" }}
                >
                  {isDesktopOrLaptop ? "How to disable cookies?" : <MdBlock />}
                </Link>
              </li>
              <li>
                <Link
                  activeClass="active"
                  to="types-of-cookies"
                  spy={true}
                  smooth={true}
                  duration={500}
                  className="block px-4 py-2 mb-2 rounded-md bg-gray-300 hover:bg-gray-400 transition duration-300"
                  activeStyle={{ backgroundColor: "#0369a1", color: "white" }}
                >
                  {isDesktopOrLaptop ? (
                    "Types of cookies ActImmigration uses"
                  ) : (
                    <BiSolidCategoryAlt />
                  )}
                </Link>
              </li>
              <li>
                <Link
                  activeClass="active"
                  to="cookies-change"
                  spy={true}
                  smooth={true}
                  duration={500}
                  className="block px-4 py-2 mb-2 rounded-md bg-gray-300 hover:bg-gray-400 transition duration-300"
                  activeStyle={{ backgroundColor: "#0369a1", color: "white" }}
                >
                  {isDesktopOrLaptop ? (
                    "Cookies subject to change"
                  ) : (
                    <FaRepeat />
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
            Cookie Policy
          </h2>
          <div
            style={{ width: "80%", marginLeft: "20%" }}
            className="space-y-4"
          >
            <h2
              id="intro"
              className="bg-gradient-to-r from-sky-700 to-sky-300 text-white py-2 px-4 rounded-md"
            >
              Cookie Policy
            </h2>
            <p>
              In the spirit of transparency, this Cookie Policy (“Policy”)
              provides detailed information about why, how, and when
              ActImmigration uses cookies on our Site, Software, and/or
              Services, as defined in our Terms of Service.
            </p>

            <h3
              id="what-is-cookie"
              className="bg-gradient-to-r from-sky-700 to-sky-300 text-white py-2 px-4 rounded-md"
            >
              What is a cookie?
            </h3>
            <p>
              A cookie is a small text file that is placed on your hard drive by
              a web page server. Cookies contain information that can later be
              read by a web server in the domain that issued the cookie to you.
              Some of the cookies will only be used if you use certain features
              or select certain preferences, and some cookies are essential to
              the Site, Software, and/or Services, and will always be used. Web
              beacons, tags, and scripts may be used in the Site or in emails to
              help us deliver cookies and count visits, understand usage and
              campaign effectiveness, and determine whether an email has been
              opened and acted upon. We may receive reports based on the use of
              these technologies by our service/analytics providers (for
              example, Google Analytics) on an individual and aggregated basis.
            </p>

            <h3
              id="why-use-cookies"
              className="bg-gradient-to-r from-sky-700 to-sky-300 text-white py-2 px-4 rounded-md"
            >
              Why does ActImmigration use cookies?
            </h3>
            <p>
              ActImmigration uses cookies to ensure everyone who uses the Site,
              Software, and/or Services has the best possible experience. For
              example, when you use our Site, we may place a number of cookies
              in your browser. We use these cookies to enable us to hold session
              information as you navigate from page to page within the Site,
              improve your experience, and track and analyze usage and other
              statistical information. If you elect not to activate the cookie
              or to later disable cookies, you may still visit our Site, and use
              our Software or Services, but your ability to use some features or
              areas of those offerings may be limited.
            </p>

            <h3
              id="disable-cookies"
              className="bg-gradient-to-r from-sky-700 to-sky-300 text-white py-2 px-4 rounded-md"
            >
              How to disable cookies
            </h3>
            <p>
              You can generally activate or later deactivate the use of cookies
              through a functionality built into your web browser. To learn more
              about how to control cookie settings through your browser:
              <ul>
                <li>
                  Click here to learn more about managing cookie settings in
                  Mozilla Firefox;
                </li>
                <li>
                  Click here to learn more about managing cookie settings in
                  Google Chrome;
                </li>
                <li>
                  Click here to learn more about managing cookie settings in
                  Microsoft Internet Explorer;
                </li>
                <li>
                  Click here to learn more about managing cookie settings in
                  Safari;
                </li>
                <li>
                  Click here to learn more about managing cookie settings in
                  Microsoft Edge.
                </li>
              </ul>
              If you want to learn more about cookies or how to control,
              disable, or delete them, please visit www.allaboutcookies.org for
              detailed guidance.
            </p>

            <h3
              id="types-of-cookies"
              className="bg-gradient-to-r from-sky-700 to-sky-300 text-white py-2 px-4 rounded-md"
            >
              Types of cookies ActImmigration uses
            </h3>
            <p>
              Many jurisdictions require or recommend that website operators
              inform users/visitors as to the nature of cookies they utilize
              and, in certain circumstances, obtain the consent of their users
              to the placement of certain cookies. Each cookie used by
              ActImmigration falls within one of the following categories:
              <ul>
                <li>Essential cookies</li>
                <li>Analytics cookies</li>
                <li>Functionality or preference cookies</li>
                <li>Targeting or advertising cookies</li>
                <li>Social media cookies</li>
              </ul>
            </p>

            <h3
              id="cookies-change"
              className="bg-gradient-to-r from-sky-700 to-sky-300 text-white py-2 px-4 rounded-md"
            >
              Cookies subject to change
            </h3>
            <p>
              The content of this Policy is for your general information and use
              only. You acknowledge that this information may contain
              inaccuracies or errors and is subject to change, and we expressly
              exclude liability for any such inaccuracies or errors to the
              fullest extent permitted by law.
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
              <a href="mailto:enquiry@actImmigration.com">here</a> or by
              e-mailing:{" "}
              <a href="mailto:enquiry@actImmigration.com">
                support@ActImmigration.com
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

export default CookiePolicy;
