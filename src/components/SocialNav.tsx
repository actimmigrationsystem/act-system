import { FaLinkedin, FaWhatsapp, FaInstagram } from 'react-icons/fa';
import { IoMdMail } from 'react-icons/io';
import styled from 'styled-components';

const SloganText = styled.div`
  font-size: 1rem;
  color: #fff;
  margin-bottom: -30px;
`;
export default function SocialNav() {
  return (
    <div className="bg-gray-700 p-2">
      <SloganText className="hidden sm:block md:block lg:block xl:block">Your Immigration status is important to us</SloganText>
      <div className="flex items-center justify-end space-x-4 ml-auto">
        <a href="/" className="text-white hover:text-gray-300" aria-label="Website">
          <FaLinkedin className="h-6 w-6" />
        </a>
        <a href="/" className="text-white hover:text-gray-300" aria-label="Email">
          <IoMdMail className="h-6 w-6" />
        </a>
        <a href="/" className="text-white hover:text-gray-300" aria-label="Phone">
          <FaWhatsapp className="h-6 w-6" />
        </a>
        <a href="/" className="text-white hover:text-gray-300" aria-label="Phone">
          <FaInstagram className="h-6 w-6" />
        </a>
        <a
          href="/contact"
          style={{ backgroundColor: '#0e5a97' }}
          className="hover:bg-blue-700 text-white font-bold py-2 px-2"

        >
          Get In Touch
        </a>
      </div>
    </div>

  );
}
