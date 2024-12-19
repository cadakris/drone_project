import React from 'react'
import logo from '../images/logo.jpg'

function Navbar() {
  return (
    <>
      <nav className="text-black px-4 py-3 flex justify-between items-center p-4">
        <div className="flex items-center">
          <img src={logo} alt="logo" className="h-10 w-auto" />

        </div>

        <ul className="flex space-x-6">
          <li>
            <a href="about" className="hover:text-gray-600">Home</a>
            <a href="contact" className="hover:text-gray-600">Contact</a>
            <a href="gallery" className="hover:text-gray-600">Gallery</a>
          </li>
        </ul>

        <div>

        </div>

      </nav>
    </>
  )
}

export default Navbar