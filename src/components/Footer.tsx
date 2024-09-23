import styled from "styled-components";
import { Link } from "react-scroll";
import { FaLinkedin, FaWhatsapp, FaFacebook } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import Logo from "./Logo";

const FooterSlogan = styled.div`
  font-size: 12px;
  color: #fff;
  margin-top: 30px;
`;

const CustomFooter = () => (
  <div className="flex flex-col min-h-screen">
    <footer style={{ backgroundColor: "#0e5a97" }} className="bg-white mt-auto">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <Logo color="#fff" />
            <FooterSlogan className="text-white">
              Consultants striving on affecting change in peoples lives
              everyday. We offer immigration services
            </FooterSlogan>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
              <h2 className="mb-6 text-sm font-semibold text-white uppercase dark:text-white">
                Resources
              </h2>
              <ul className="text-gray-200 dark:text-gray-200 font-medium">
                <li className="mb-4">
                  <Link
                    to="service-section"
                    smooth={true}
                    className="cursor-pointer"
                  >
                    Services
                  </Link>
                </li>
                <li>
                  <Link
                    to="about-section"
                    smooth={true}
                    className="cursor-pointer"
                  >
                    About Us
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-white uppercase dark:text-white">
                Help
              </h2>
              <ul className="text-gray-200 dark:text-gray-200 font-medium">
                <li className="mb-4">
                  <Link
                    to="faq-section"
                    smooth={true}
                    className="cursor-pointer"
                  >
                    FAQs
                  </Link>
                </li>
                <li>
                  <a
                    href="https://www.facebook.com/profile.php?id=100063622943110&ref=embed_page"
                    className="hover:underline"
                  >
                    Facebook
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-white uppercase dark:text-white">
                Legal
              </h2>
              <ul className="text-gray-200 dark:text-gray-200 font-medium">
                <li className="mb-4">
                  <a href="/privacy-policy" className="hover:underline">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="/privacy-policy" className="hover:underline">
                    Terms &amp; Conditions
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-200 lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-white sm:text-center dark:text-gray-200">
            © 2024{" "}
            <a href="/" className="hover:underline">
              ACT IMMIGRATION AND LABOUR CONSULTANTS
            </a>
            . All Rights Reserved.
          </span>
          <div className="flex mt-4 sm:justify-center sm:mt-0">
            <button
              type="button"
              className="text-white hover:text-gray-900 dark:hover:text-white ms-5"
            >
              <a
                href="https://api.whatsapp.com/send?phone=27723876910"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaWhatsapp className="w-4 h-4 text-white" />
                <span className="sr-only">Whatsapp</span>
              </a>
            </button>
            <button
              type="button"
              className="text-white hover:text-gray-900 dark:hover:text-white ms-5"
            >
              <a
                href="mailto:enquiries@actimmigration.co.za"
                target="_blank"
                rel="noopener noreferrer"
              >
                <IoMdMail className="w-4 h-4 text-white" />
                <span className="sr-only">Email</span>
              </a>
            </button>
            <button
              type="button"
              className="text-white hover:text-gray-900 dark:hover:text-white ms-5"
            >
              <a
                href="https://www.facebook.com/profile.php?id=100063622943110&ref=embed_page"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook className="w-4 h-4 text-white" />
                <span className="sr-only">Facebook</span>
              </a>
            </button>

            <button
              type="button"
              className="text-white hover:text-gray-900 dark:hover:text-white ms-5"
            >
              <a
                href="https://www.facebook.com/profile.php?id=100063622943110&ref=embed_page"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin className="w-4 h-4 text-white" />
                <span className="sr-only">Facebook</span>
              </a>
            </button>
          </div>
        </div>
      </div>
    </footer>
  </div>
);

export default CustomFooter;
