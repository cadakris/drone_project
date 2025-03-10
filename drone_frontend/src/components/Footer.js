import React from 'react'
import WhatsApp from '../images/WhatsApp.png'
import { HiOutlineMail } from "react-icons/hi";

function Footer() {
  return (
<div className="flex items-stretch h-60">
  <div className="w-1/3 bg-blue-900 flex items-center justify-end pr-10">
    <p className=" text-white text-right">
      Seen Enough?<br/><br/>
      <p className=" underline text-3xl">
      Contact Us
      </p>
    </p>
  </div>

  <div className="w-2/3 bg-blue-900 flex">
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
  </div>
  

</div>



  /* <div className="w-1/3 flex justify-end">
    <img src={WhatsApp} alt="WhatsApp Logo" className="h-5"/>
    </div>
  <div className="w-1/3 text-left text-white">WhatsApp</div> */

    
  )
}

export default Footer