import logo from "../assets/logo.png";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";

const NavBar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      {/* Logo Section */}
      <div className="flex flex-shrink-0 items-center">
        <img className="mx-2" src={logo} alt="logo" style={{ height: "90px", width: "auto" }} />
      </div>

      {/* Social Media Icons Section */}
      <div className="flex m-8 gap-4 items-center justify-center">
        <a 
          href="https://www.linkedin.com/in/tanisha-panesar-44a3701b1/" 
          target="_blank" 
          rel="noopener noreferrer" 
          aria-label="LinkedIn"
        >
          <FaLinkedin size={32} className="text-blue-600 hover:text-blue-800 transition-colors" />
        </a>

        <a 
          href="https://github.com/Tanisha2174" 
          target="_blank" 
          rel="noopener noreferrer" 
          aria-label="GitHub"
        >
          <FaGithub size={32} className="text-gray-800 hover:text-gray-600 transition-colors" />
        </a>

        <a 
          href="https://www.instagram.com/_simplytanisha/profilecard/?igsh=MWIwcGYzY2xneTN4aA==" 
          target="_blank" 
          rel="noopener noreferrer" 
          aria-label="Instagram"
        >
          <FaInstagram size={32} className="text-pink-500 hover:text-pink-700 transition-colors" />
        </a>
      </div>
    </nav>
  );
};

export default NavBar;




