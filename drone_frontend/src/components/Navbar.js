import React from 'react'
import { useState } from 'react';
import logoNoBackground from '../images/logoNoBackground.png';
import { IoIosArrowForward } from "react-icons/io";

function Navbar() {

  const[language, setLanguage] = useState('en');

  const toggleLanguage = () => {
    setLanguage((prevLanguage) => (prevLanguage === 'en' ? 'fr' : 'en'));
  }

  return (
    <>
    <nav className="bg-[#384454] text-white">
      <div className="grid grid-cols-3 items-center w-full max-w-7xl mx-auto px-6 py-4">
        
        {/* LEFT MENU */}
        <ul className="flex justify-between items-center w-full max-w-[250px] text-base md:text-xl lg:text-2xl">
          <li className="flex items-center">
            <IoIosArrowForward className="mr-2" />
            <a href="#home" className="hover:text-gray-400">Home</a>
          </li>
          <li className="flex items-center">
            <IoIosArrowForward className="mr-2" />
            <a href="#contact" className="hover:text-gray-400">Contact</a>
          </li>
        </ul>

        {/* CENTER LOGO */}
        <div className="flex justify-center">
  <img
    src={logoNoBackground}
    alt="Logo"
    className="h-[clamp(5rem,12vw,10rem)] w-auto"
  />
</div>

        {/* RIGHT MENU + LANGUAGE BUTTON */}
        <div className="flex justify-between items-center w-full max-w-[400px] text-base md:text-xl lg:text-2xl">
          <div className="flex items-center">
            <IoIosArrowForward className="mr-2" />
            <a href="#services" className="hover:text-gray-400">Services</a>
          </div>
          <div className="flex items-center">
            <IoIosArrowForward className="mr-2" />
            <a href="#gallery" className="hover:text-gray-400">Gallery</a>
          </div>
          <button
            onClick={toggleLanguage}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            {language === 'eng' ? 'Français' : 'English'}
          </button>
        </div>

      </div>
    </nav>
  
    </>
  )
}

export default Navbar