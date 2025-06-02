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
<nav className="bg-[#384454] text-white">
  <div className="grid grid-cols-3 items-center w-full max-w-7xl mx-auto py-4">
    
    {/* LEFT MENU */}
    <div className="flex justify-center">
      <ul className="flex items-center space-x-8 sm:space-x-8 md:space-x-16 lg:space-x-20 text-base md:text-xl lg:text-2xl">
        <li className="flex items-center sm:gap-0 md:gap-1 lg:gap-2">
          <IoIosArrowForward/>
          <a href="#home" className="hover:text-gray-400">Home</a>
        </li>
        <li className="flex items-center sm:gap-0 md:gap-1 lg:gap-2">
          <IoIosArrowForward/>
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
      <ul className="flex items-center space-x-3 sm:space-x-8 md:space-x-16 lg:space-x-20 text-base md:text-xl lg:text-2xl">
        <li className="flex items-center sm:gap-0 md:gap-1 lg:gap-2">
          <IoIosArrowForward/>
          <a href="#services" className="hover:text-gray-400">Services</a>
        </li>
        <li className="flex items-center sm:gap-0 md:gap-1 lg:gap-2">
          <IoIosArrowForward/>
          <a href="#gallery" className="hover:text-gray-400">Gallery</a>
        </li>
      </ul>
    </div>

  </div>
</nav>
  

  )
}

export default Navbar