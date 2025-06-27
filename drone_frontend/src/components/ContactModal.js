import React, { useEffect } from 'react';
import WhatsApp from '../images/WhatsApp.png';
import Email2 from '../images/Email2.png';
import Instagram from '../images/Instagram.png'
import YouTube from '../images/YouTube.png'
import { IoIosArrowForward } from "react-icons/io";

function ContactModal({ onClose }) {

    useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Background Layer */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm sm:block hidden" />

      {/* MOBILE: Fullscreen White Form */}
      <div className="sm:hidden relative z-50 w-full h-full bg-[#384454] flex flex-col p-6">
        {/* Close Button */}
        <button
          className="absolute top-4 right-4 text-3xl font-bold text-white"
          onClick={onClose}
        >
          &times;
        </button>

        <h2 className="text-[#317AC1] text-center text-3xl font-semibold mt-16 mb-4">Tell Us About Your Project!</h2>

        <form className="flex flex-col gap-6 flex-1">
          <input
            type="text"
            placeholder="Your Name"
            className="p-3 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
          <input
            type="email"
            placeholder="Your Email"
            className="p-3 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
          <textarea
            placeholder="Your Message"
            rows={6}
            className="p-3 border border-gray-300 rounded-sm resize-none focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          ></textarea>
          <button
            type="submit"
            className="bg-white text-black py-3 px-6 rounded-sm hover:bg-gray-400 transition mt-auto"
          >
            Send Message
          </button>
        </form>
      </div>

      {/* DESKTOP: Centered Modal */}
      <div className="hidden sm:flex relative z-50 w-full max-w-md bg-white/95 rounded-sm p-8 shadow-2xl">
        {/* Close Button */}
        <button
          className="absolute top-4 right-4 text-3xl font-bold text-black"
          onClick={onClose}
        >
          &times;
        </button>

        <div className="w-full">
          <h2 className="text-[#317AC1] text-center text-2xl font-semibold mb-4">Tell Us About Your Project!</h2>
          <form className="flex flex-col gap-7">
            <input
              type="text"
              placeholder="Your Name"
              className="p-3 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              className="p-3 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
            <textarea
              placeholder="Your Message"
              rows={5}
              className="p-3 border border-gray-300 rounded-sm resize-none focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            ></textarea>
            <button
              type="submit"
              className="bg-[#384454] text-white py-3 px-6 rounded-sm hover:bg-[#2e3a4b] transition"
            >
              Send Message
            </button>
                    <div className="flex justify-center gap-6 mt-6 text-xl text-[#384454">
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
        </div>
          </form>
        </div>

        {/* SOCIAL MEDIA LINKS */}
      </div>
    </div>
  );
}

export default ContactModal;
