import React from 'react'
import WhatsApp from '../images/WhatsApp.png';
import Email from '../images/Email.png';
import Instagram from '../images/Instagram.png'
import { HiOutlineMail } from "react-icons/hi";

function Footer() {
  return (
  <>
    <div className="flex items-stretch h-60">
      <div className="w-1/3 bg-gray-400 flex items-center justify-end pr-10">
        <p className=" text-white text-right">
          Seen <br/>Enough?

        </p>
      </div>

      <div className="w-2/3 bg-gray-400 flex flex-col items-center justify-center text-3xl">
        <p>Get in touch!</p><br/>
          <ul className="flex space-x-4">
            <li>
              <img src={WhatsApp} alt="WhatsApp Logo" className="h-16 w-16 object-contain round-full"/>
            </li>
            <li>
              <img src={Email} alt="Email Logo" className="h-16 w-16 object-contain round-full"/>
            </li>
              <img src={Instagram} alt="Instagram Logo" className="h-16 w-16 object-contain round-full"/>
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


