import React from "react";
import { FaWhatsapp, FaLinkedin, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer bg-indigo-900 text-white p-6">
      <div className="container mx-auto text-center">
        <p className="mb-2">&copy; 2024 Post App. All rights reserved.</p>
        <div className="flex justify-center space-x-4">
          <a
            href="https://api.whatsapp.com/send?phone=+923081844802"
            className="text-white hover:text-green-400 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/mefidah"
            className="text-white hover:text-blue-400 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin size={24} />
          </a>
          <a
            href="https://www.instagram.com/fidahussainfd?igsh=ZzFiOGxzbjZpOXhn"
            className="text-white hover:text-pink-400 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
