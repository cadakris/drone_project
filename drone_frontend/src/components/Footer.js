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
<div className="w-full h-auto bg-[#384454] m-0 p-0 overflow-hidden">
  <div className="flex items-center justify-center space-x-10">
    <p className="text-white pr-24">SEEN <br/> ENOUGH?</p>
    <p className="text-[#317AC1] text-2xl md:text-4xl lg:text-7xl">Contact Us</p>
    <button
      className="flex items-center justify-center 
      bg-[#E1A624] bg-opacity-70 text-white 
      text-2xl md:text-3xl lg:text-4xl 
      hover:shadow-lg hover:scale-110 transition-transform duration-200 
      rounded-full 
      w-8 h-8 md:w-10 md:h-10 lg:w-16 lg:h-16 z-50"
    >
      <IoIosArrowForward />
    </button>
  </div>
  
  <div className="flex items-center justify-center space-x-10">
    <p className="text-white pr-24">WANT <br/> MORE?</p>
     <ul className="flex space-x-10">
      <li>
        <a 
          href="https://wa.me/1234567890" 
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block"
        >
          <div className="h-24 w-24 overflow-hidden flex items-center justify-center rounded-full">
            <img src={WhatsApp} alt="WhatsApp" className="h-full w-full object-cover" />
          </div>
        </a>
      </li>

      <li>
        <a
          href=""
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block"
        >
          <div className="h-20 w-20 overflow-hidden flex items-center justify-center rounded-full">
            <img src={Email} alt="Email link" className="h-full w-full object-cover" />
          </div>
        </a>
      </li>

      <li>
        <a
          href=""
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block"
        >
          <div className="h-20 w-20 overflow-hidden flex items-center justify-center rounded-full">
            <img src={Instagram} alt="Instagram link" className="h-full w-full object-cover" />
          </div>
        </a>
      </li>

            <li>
        <a
          href=""
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block"
        >
          <div className="h-20 w-20 overflow-hidden flex items-center justify-center rounded-full">
            <img src={Instagram} alt="Instagram link" className="h-full w-full object-cover" />
          </div>
        </a>
      </li>
    </ul>
  </div>
</div>

  </>
    
  )
}

export default Footer


