import React, { useState } from 'react'
import WhatsApp from '../images/WhatsApp.png';
import Email2 from '../images/Email2.png';
import Instagram from '../images/Instagram.png'
import YouTube from '../images/YouTube.png'
import logoNoBackground from '../images/logoNoBackground.png';
import { IoIosArrowForward } from "react-icons/io";
import ContactModal from './ContactModal'

import { FaWhatsapp, FaEnvelope, FaInstagram, FaYoutube } from 'react-icons/fa';

function Footer() {

const [showContactModal, setShowContactModal] = useState(false);

  return (
    <>
          <div className="w-full bg-[#384454] py-12 px-8 text-white space-y-12 text-center">
        {/* LEFT - CONTACT SECTION */}
        <div className="flex flex-col items-center space-y-4">
          <p className="text-xl md:text-2xl font-semibold">SEEN ENOUGH?</p>
          <div className="flex items-center space-x-4">
            <p className="text-[#317AC1] text-4xl md:text-5xl lg:text-6xl">Contact Us</p>
            <button
              className="flex items-center justify-center 
              bg-[#E1A624] bg-opacity-70 text-white 
              text-2xl md:text-3xl lg:text-4xl 
              hover:shadow-lg hover:scale-110 transition-transform duration-200 
              rounded-full 
              w-10 h-10 md:w-14 md:h-14 lg:w-16 lg:h-16"
              onClick={(e) => {
                e.preventDefault();
                setShowContactModal(true);
              }}
            >
              <IoIosArrowForward />
            </button>
          </div>
        </div>

        {/* RIGHT - SOCIALS SECTION */}
        <div className="flex flex-col items-center space-y-6">
          <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4">
            <p className="text-xl md:text-2xl font-semibold">WANT MORE?</p>
            <p className="text-[#317AC1] text-3xl md:text-4xl lg:text-5xl">Stay Connected</p>
          </div>

          <ul className="flex justify-center space-x-6">
            <li>
              <a 
                href="https://wa.me/13474523910" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block"
              >
                <FaWhatsapp className="text-[#E1A624] w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20
                hover:shadow-lg hover:scale-110 transition-transform duration-200"
                />
              </a>
            </li>
            <li>
              <a href="#" target="_blank" rel="noopener noreferrer" className="inline-block">
                <FaEnvelope className="text-[#E1A624] w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20
                hover:shadow-lg hover:scale-110 transition-transform duration-200
                " 
                />
              </a>
            </li>
            <li>
              <a href="#" target="_blank" rel="noopener noreferrer" className="inline-block
              hover:shadow-lg hover:scale-110 transition-transform duration-200
              ">
                <FaInstagram className="text-[#E1A624] w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20
                hover:shadow-lg hover:scale-110 transition-transform duration-200
                " />
              </a>
            </li>
            <li>
              <a href="#" target="_blank" rel="noopener noreferrer" className="inline-block">
                <FaYoutube className="text-[#E1A624] w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20
                hover:shadow-lg hover:scale-110 transition-transform duration-200"
                />
              </a>
            </li>
          </ul>
        </div>

        {/* CONTACT MODAL */}
        {showContactModal && <ContactModal onClose={() => setShowContactModal(false)} />}
      </div>

    </>
    
  )
}

export default Footer


