import React from 'react'
import { useState } from 'react';
import logo from '../images/logo.jpg'

function Navbar() {

  const[language, setLanguage] = useState('en');

  const toggleLanguage = () => {
    setLanguage((prevLanguage) => (prevLanguage === 'en' ? 'fr' : 'en'));
  }

  return (
    <>
      <nav className="text-black px-4 py-3 flex justify-between items-center p-4">
        <div className="flex items-center">
          <img src={logo} alt="logo" className="h-10 w-auto" />
        </div>

        <ul className="flex flex-col space-y-4">
          <li>
            <a href="about" className="hover:text-gray-600">Home</a>
          </li> 

          <li>
            <a href="contact" className="hover:text-gray-600">Contact</a>
          </li> 

          <li>
            <a href="gallery" className="hover:text-gray-600">Gallery</a>
          </li>

        </ul>

        <div>
          <button
            onClick = {toggleLanguage}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            {language === 'eng' ? 'Francais' : 'English'}
          </button>
        </div>

      </nav>
    </>
  )
}

export default Navbar