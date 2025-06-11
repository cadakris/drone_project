import React from 'react'
import WhatsApp from '../images/WhatsApp.png';
import Email2 from '../images/Email2.png';
import Instagram from '../images/Instagram.png'
import YouTube from '../images/YouTube.png'
import logoNoBackground from '../images/logoNoBackground.png';
import { IoIosArrowForward } from "react-icons/io";

function Footer() {
  return (
  <>
  <div className="w-full bg-[#384454] py-12 px-8 space-y-12 md:space-y-16 lg:space-y-24 text-white">
    {/* {LEFT-CONTACT} */}
    <div className="w-full flex flex-row items-center justify-center md:justify-start space-x-4">
      <p className="text-white text-xl md:text-2xl font-semibold">SEEN <br/> ENOUGH?</p>
      <p className="text-[#317AC1] gap-2 text-4xl lg:text-7xl">Contact Us</p>
      
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

    {/* {RIGHT-SOCIALS} */}
    <div className="w-full flex justify-center md:justify-end">
      <div className="flex flex-row items-center justify-center md:justify-end space-x-4">
         <p className="text-white text-xl md:text-2xl font-semibold text-center md:text-right">WANT <br/> MORE? </p>
        <ul className="flex space-x-6">
      <li>
        <a 
          href="https://wa.me/1234567890" 
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block"
        >
          <div className="h-12 w-12 md:h-16 md:w-16 rounded-full">
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
          <div className="h-12 w-12 md:h-16 md:w-16 overflow-hidden rounded-full">
            <img src={Email2} alt="Email link" className="h-full w-full object-cover" />
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
          <div className="h-12 w-12 md:h-16 md:w-16 overflow-hidden  rounded-full">
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
          <div className="h-12 w-12 md:h-16 md:w-16 overflow-hidden rounded-full">
            <img src={YouTube} alt="YouTube Link" className="h-full w-full object-cover" />
          </div>
        </a>
      </li>
    </ul>
      </div>
    </div>  
</div>

  </>
    
  )
}

export default Footer


