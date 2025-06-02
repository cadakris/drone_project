import { useState } from 'react';
import { IoIosArrowForward, IoIosMenu } from "react-icons/io"; // Hamburger Icon
import logoNoBackground from '../images/logoNoBackground.png'; // Your logo image

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#384454] text-white fixed top-0 left-0 w-full z-50">
      {/* Desktop Navbar */}
      <div className="hidden md:grid grid-cols-3 items-center w-full max-w-7xl mx-auto py-4">
        {/* LEFT MENU */}
        <div className="flex justify-center">
          <ul className="flex items-center space-x-8 md:space-x-16 lg:space-x-20 text-base md:text-xl lg:text-2xl">
            <li className="flex items-center gap-2">
              <IoIosArrowForward />
              <a href="#home" className="hover:text-gray-400">Home</a>
            </li>
            <li className="flex items-center gap-2">
              <IoIosArrowForward />
              <a href="#contact" className="hover:text-gray-400">Contact</a>
            </li>
          </ul>
        </div>

        {/* CENTER LOGO */}
        <div className="flex justify-center">
          <img
            src={logoNoBackground}
            alt="Logo"
            className="h-[clamp(5rem,12vw,10rem)] w-auto"
          />
        </div>

        {/* RIGHT MENU */}
        <div className="flex justify-center">
          <ul className="flex items-center space-x-8 md:space-x-16 lg:space-x-20 text-base md:text-xl lg:text-2xl">
            <li className="flex items-center gap-2">
              <IoIosArrowForward />
              <a href="#services" className="hover:text-gray-400">Services</a>
            </li>
            <li className="flex items-center gap-2">
              <IoIosArrowForward />
              <a href="#gallery" className="hover:text-gray-400">Gallery</a>
            </li>
          </ul>
        </div>
      </div>

      {/* Mobile Navbar */}
      <div className="flex justify-between items-center md:hidden p-4 relative">
        {/* Centered Logo */}
        <img
          src={logoNoBackground}
          alt="Logo"
          className="h-12 w-auto absolute left-1/2 transform -translate-x-1/2"
        />
        
        {/* Hamburger Toggle */}
        <button onClick={() => setIsOpen(!isOpen)} className="ml-auto z-50">
          {isOpen 
            ? <span className="text-4xl">–</span> 
            : <IoIosMenu size={30} />
          }
        </button>
      </div>

      {/* Mobile Full Screen Menu */}
      {isOpen && (
        <div className="fixed inset-0 bg-[#384454] flex flex-col justify-center items-center space-y-8 text-2xl z-40">
          <ul className="flex flex-col items-center space-y-8">
            <li className="flex items-center gap-2">
              <IoIosArrowForward />
              <a href="#home" className="hover:text-gray-400 text-2xl">Home</a>
            </li>
            <li className="flex items-center gap-2">
              <IoIosArrowForward />
              <a href="#contact" className="hover:text-gray-400 text-2xl">Contact</a>
            </li>
            <li className="flex items-center gap-2">
              <IoIosArrowForward />
              <a href="#services" className="hover:text-gray-400 text-2xl">Services</a>
            </li>
            <li className="flex items-center gap-2">
              <IoIosArrowForward />
              <a href="#gallery" className="hover:text-gray-400 text-2xl">Gallery</a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
