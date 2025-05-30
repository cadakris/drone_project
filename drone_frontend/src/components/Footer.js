import React from 'react'
import WhatsApp from '../images/WhatsApp.png';
import Email from '../images/Email.png';
import Instagram from '../images/Instagram.png'
// import { HiOutlineMail } from "react-icons/hi";
import { IoIosArrowForward } from "react-icons/io";
import logoNoBackground from '../images/logoNoBackground.png';

function Footer() {
  return (
  <>
<div className="flex items-stretch h-60">
  {/* Left Side */}
  <div className="w-1/3 bg-blue-900 flex items-center justify-start pl-24">
    <p className="text-white text-xl pl-20">
      SEEN <br />
      ENOUGH?
    </p>
  </div>

  {/* Right Side */}
  <div className="w-2/3 bg-blue-900 flex items-center justify-center pr-5">
    {/* Use flex-row to align text + button horizontally */}
    <div className="flex items-center space-x-10">
      <p className="text-white text-7xl">Contact Us</p>
      <button
        className="flex items-center justify-center bg-black bg-opacity-70 text-white text-3xl hover:shadow-lg hover:scale-110 transition-transform duration-200 rounded-full h-16 w-16 z-50"
      >
        <IoIosArrowForward />
      </button>
    </div>
  </div>
</div>

<div className="flex bg-black">
  <div className="w-1/2 flex h-48 bg-black justify-center items-center">
    <img src={logoNoBackground} alt="Matt's Logo" className="w-auto h-40 filter invert"></img>
  </div>

  <div className="w-1/2 ml-[-35px] flex h-48 bg-black justify-center items-center">
  <ul className="flex space-x-3">
    {/* WhatsApp */}
    <li>
      <a 
        href="https://wa.me/1234567890" 
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block"
      >
        <div className="h-24 w-24 p-0.5 overflow-hidden flex items-center justify-center rounded-full">
          <img src={WhatsApp} alt="WhatsApp" className="h-full w-full object-cover" />
        </div>
      </a>
    </li>

    {/* Email */}
    <li>
      <a
        href=""
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block"
      >
        <div className="h-20 w-20 p-2.5 overflow-hidden flex items-center justify-center rounded-full">
          <img src={Email} alt="Email link" className="h-full w-full object-cover" />
        </div>
      </a>
    </li>

    {/* Instagram */}
    <li>
      <a
        href=""
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block"
      >
        <div className="h-20 w-20 p-0.5 overflow-hidden flex items-center justify-center rounded-full">
          <img src={Instagram} alt="Instagram link" className="h-full w-full object-cover" />
        </div>
      </a>
    </li>
  </ul>
</div>
</div>

    
    {/* <div>
      <ul className="w-1/2 flex flex-col justify-center items-end pr-4 space-y-4">
          <li>
            <img src={WhatsApp} alt="WhatsApp Logo" className="max-h-16 w-auto"/>
          </li>
            <HiOutlineMail className="h-12 w-auto text-white"/>
          <li>

          </li>

        </ul>
      <ul className="w-1/2 flex flex-col justify-center text-white space-y-4">
            <li>
              <p className="text-2xl">WhatsApp</p>
            </li>
            <li>
              <p className="text-2xl">Email</p>
            </li>

      </ul>

    </div> */}


  </>




  /* <div className="w-1/3 flex justify-end">
    <img src={WhatsApp} alt="WhatsApp Logo" className="h-5"/>
    </div>
  <div className="w-1/3 text-left text-white">WhatsApp</div> */



    
  )
}

export default Footer


