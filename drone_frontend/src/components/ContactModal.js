import React, { useEffect } from 'react';
import WhatsApp from '../images/WhatsApp.png';
import Email2 from '../images/Email2.png';
import Instagram from '../images/Instagram.png';
import YouTube from '../images/YouTube.png';

import { FaWhatsapp, FaEnvelope, FaInstagram, FaYoutube } from 'react-icons/fa';

function ContactModal({ onClose }) {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto">
      {/* Background Layer */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm sm:block hidden" />

      {/* MOBILE: Fullscreen stacked modal */}
      <div className="sm:hidden relative z-50 w-full h-full bg-[#384454] flex flex-col p-6 overflow-y-auto">
        {/* Close Button */}
        <button
          className="absolute top-4 right-4 text-3xl font-bold text-white"
          onClick={onClose}
        >
          &times;
        </button>

        {/* Contacts info */}
        <h2 className="text-white text-center text-3xl font-semibold mt-16 mb-6">
          Contact Info
        </h2>

        <div className="flex flex-col gap-4 text-white">
          <div className="flex items-start gap-4">
            <span className="text-2xl">📍</span>
            <div>
              <p className="font-bold uppercase">Location</p>
              <p>Brest, France</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <span className="text-2xl">📧</span>
            <div>
              <p className="font-bold uppercase">Email</p>
              <p>drone@gmail.com</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <span className="text-2xl">📞</span>
            <div>
              <p className="font-bold uppercase">Phone</p>
              <p>Coming Soon</p>
            </div>
          </div>
        </div>

        {/* Message Form */}
        <h2 className="text-[#317AC1] text-center text-3xl font-semibold mt-10 mb-4">
          Tell Us About Your Project!
        </h2>

        <form className="flex flex-col gap-6 flex-1 text-black">
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

        {/* Social Links */}
        <div className="flex justify-center gap-4 mt-8">
              <a 
                href="https://wa.me/13474523910" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block"
              >
                <FaWhatsapp className="text-[#E1A624] text-opacity-70 w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20
                hover:shadow-lg hover:scale-110 transition-transform duration-200"
                />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="inline-block">
                <FaEnvelope className="text-[#E1A624] text-opacity-70 w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20
                hover:shadow-lg hover:scale-110 transition-transform duration-200"/>
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="inline-block
              hover:shadow-lg hover:scale-110 transition-transform duration-200" >
                <FaInstagram className="text-[#E1A624] text-opacity-70 w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20
                hover:shadow-lg hover:scale-110 transition-transform duration-200" />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="inline-block">
                <FaYoutube className="text-[#E1A624] text-opacity-70 w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20
                hover:shadow-lg hover:scale-110 transition-transform duration-200"/>
              </a>
        </div>
      </div>

      {/* DESKTOP: Two-column modal */}
      <div className="hidden sm:flex relative z-50 w-full max-w-3xl bg-white/95 rounded-sm p-8 shadow-2xl gap-8">
        {/* Close Button */}
        <button
          className="absolute top-4 right-4 text-3xl font-bold text-black"
          onClick={onClose}
        >
          &times;
        </button>

        {/* Left column: Form */}
        <div className="w-1/2">
          <h2 className="text-[#317AC1] text-2xl font-semibold mb-4 text-center">
            Tell Us About Your Project!
          </h2>
          <form className="flex flex-col gap-7 text-black">
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
          </form>
        </div>

        {/* Right column: Contact details */}
        <div className="w-1/2 ml- flex flex-col justify-center gap-6 text-[#384454]">
          <h2 className="text-2xl font-bold mb-2">Contacts</h2>

          <div className="flex items-start gap-4">
            <span className="text-2xl">📍</span>
            <div>
              <p className="font-bold uppercase">Location</p>
              <p>Brest, France</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <span className="text-2xl">📧</span>
            <div>
              <p className="font-bold uppercase">Email</p>
              <p>drone@gmail.com</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <span className="text-2xl">📞</span>
            <div>
              <p className="font-bold uppercase">Phone</p>
              <p>Coming Soon</p>
            </div>
          </div>

          <div className="flex justify-start gap-4 mt-4">
              <a 
                href="https://wa.me/13474523910" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block"
              >
                <FaWhatsapp className="text-[#E1A624] text-opacity-70 w-12 h-12 md:w-16 
                 hover:scale-110 transition-transform duration-200"
                />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="inline-block">
                <FaEnvelope className="text-[#E1A624] text-opacity-70 w-12 h-12 md:w-16
                 hover:scale-110 transition-transform duration-200"/>
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="inline-block
               hover:scale-110 transition-transform duration-200" >
                <FaInstagram className="text-[#E1A624] text-opacity-70 w-12 h-12 md:w-16
                 hover:scale-110 transition-transform duration-200" />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="inline-block">
                <FaYoutube className="text-[#E1A624] text-opacity-70 w-12 h-12 md:w-16
                 hover:scale-110 transition-transform duration-200"/>
              </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactModal;