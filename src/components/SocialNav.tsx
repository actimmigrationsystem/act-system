import { Link } from "react-scroll";
import { FaLinkedin, FaWhatsapp, FaFacebook } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import styled from "styled-components";

const SloganText = styled.div`
  font-size: 1rem;
  color: #fff;
  margin-bottom: -30px;
`;

export default function SocialNav() {
  return (
    <div className="bg-gray-700 p-2">
      <SloganText className="hidden sm:block md:block lg:block xl:block">
        Your Immigration status is important to us
      </SloganText>
      <div className="flex justify-center sm:justify-end items-center space-x-4 ml-auto">
        <a
          href="/"
          className="text-white hover:text-gray-300"
          aria-label="Phone"
          onClick={() =>
            window.open(
              "https://api.whatsapp.com/send?phone=27723876910",
              "_blank",
              "noopener noreferrer"
            )
          }
        >
          <FaWhatsapp className="h-6 w-6" />
        </a>
        <a
          href="#"
          className="text-white hover:text-gray-300"
          aria-label="Website"
          onClick={() =>
            window.open(
              "https://www.facebook.com/profile.php?id=100063622943110&ref=embed_page",
              "_blank",
              "noopener noreferrer"
            )
          }
        >
          <FaFacebook className="h-6 w-6" />
        </a>
        <a
          href="mailto:enquiries@actimmigration.co.za"
          className="text-white hover:text-gray-300"
          aria-label="Email"
          target="_blank"
        >
          <IoMdMail className="h-6 w-6" />
        </a>
        <a
          href="https://www.linkedin.com/in/act-imm"
          className="text-white hover:text-gray-300"
          aria-label="Website"
          target="_blank"
        >
          <FaLinkedin className="h-6 w-6" />
        </a>

        <Link
          to="contact-section"
          smooth={true}
          duration={500}
          target="_blank"
          style={{ backgroundColor: "#0e5a97" }}
          className="hover:bg-blue-700 text-white font-bold py-2 px-2 cursor-pointer"
        >
          Get In Touch
        </Link>
      </div>
    </div>
  );
}
