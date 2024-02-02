import React from 'react';
import { FaLinkedin, FaWhatsapp, FaInstagram } from 'react-icons/fa';
import { IoMdMail } from 'react-icons/io';

export default function SocialNav() {
  return (
    <div className="bg-gray-700 p-4">
      <div className="flex items-center justify-center space-x-4">
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
      </div>
    </div>
  );
}
