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
  <div className="bg-[#384454] text-white flex flex-col md:flex-row md:items-center">
    {/* {LEFT-CONTACT} */}
    <div className="flex items-center justify-center gap-x-2">
      <p className="text-white pr-12">SEEN <br/> ENOUGH?</p>
      <p className="text-[#317AC1] gap-2 text-2xl md:text-4xl lg:text-7xl">Contact Us</p>
      
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
    <div className="flex flex-col space-y-4 items-end mt-8 md:mt-0">

    </div>


  </div>
{/* <div className="w-full h-auto bg-[#384454] mt-0 pt-8 pb-4 overflow-hidden">
  <div className="flex space-x-10">
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
  
  <div className="flex items-center justify-center space-y-10 pb-8 space-x-12">
    <p className="text-white pr-24">WANT <br/> MORE?</p>
     <ul className="flex space-x-16">
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
</div> */}

  </>
    
  )
}

export default Footer


