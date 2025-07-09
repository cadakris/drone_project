import { useState } from 'react';
import { IoIosArrowForward, IoIosMenu } from "react-icons/io"; // Hamburger Icon
import logoNoBackground from '../images/logoNoBackground.png'; // Your logo image
import ContactModal from './ContactModal'

function Navbar({scrollToSection, navbarRef, fpvRef, servicesRef, aboutRef}) {
  const [isOpen, setIsOpen] = useState(false);
  const [showContactModal, setShowContactModal] = useState(false);

  const scrollToTop = () => {
    const navBarHeight = navbarRef.current?.getBoundingClientRect().height || 0;

    window.scrollTo({
      top:0,
      behavior: 'smooth',
    })
  }


  return (
    <nav className="bg-[#384454] text-white fixed top-0 left-0 w-full z-50" ref={navbarRef}>
      {/* Desktop Navbar */}
      <div className="hidden md:grid grid-cols-3 items-center w-full max-w-7xl mx-auto py-2">

        {/* LEFT COLUMN */}
        <div className="flex justify-center">
          <ul className="flex items-center space-x-8 md:space-x-16 lg:space-x-20 text-base md:text-xl lg:text-2xl">
            <li className="flex items-center gap-2 hover:text-gray-400">
              <IoIosArrowForward />
              <button
                onClick={() => {
                  scrollToSection(aboutRef);
                }}
              >
                About
              </button>
            </li>
            <li className="flex items-center gap-2 hover:text-gray-400">
              <IoIosArrowForward />
              <button
                  onClick={() => {
                  scrollToSection(fpvRef)
                }}
              >
                Gallery
              </button>
            </li>
          </ul>
        </div>

        {/* CENTER COLUMN */}
        <div className="flex justify-center">
          <img
            src={logoNoBackground}
            alt="Logo"
            className="h-[clamp(5rem,11vw,9rem)] w-auto"
            onClick={scrollToTop}
          />
        </div>

        {/* RIGHT COLUMN */}
        <div className="flex justify-center">
          <ul className="flex items-center space-x-8 md:space-x-16 lg:space-x-20 text-base md:text-xl lg:text-2xl">
            <li className="flex items-center gap-2 hover:text-gray-400">
              <IoIosArrowForward />
              <button
                onClick={() => {
                  scrollToSection(servicesRef)
                }}
              >
                Services
              </button>
            </li>
            <li className="flex items-center gap-2 hover:text-gray-400">
              <IoIosArrowForward />
              <a href="#contact" 
                 onClick ={() =>{
                  setShowContactModal(true)
                 }}
                 >Contact</a>
            </li>
          </ul>
        </div>
      </div>

      {/* Mobile Navbar */}
      <div className="flex justify-between items-center md:hidden p-6 relative mb-2">

        
        {/* Hamburger Toggle */}
{!isOpen && (
  <button onClick={() => setIsOpen(true)} className="ml-auto z-50">
    <IoIosMenu size={30} />
  </button>
)}
      </div>

      {/* Mobile Full Screen Menu */}
{isOpen && (
  <div className="fixed inset-0 bg-[#384454] flex flex-col items-center pt-4 text-2xl z-40">
    {/* Close button in top right, independent of logo */}
    <button
      onClick={() => setIsOpen(false)}
      className="absolute top-4 right-4 text-4xl z-50"
    >
      &ndash;
    </button>

    {/* Centered logo */}
    <img
      src={logoNoBackground}
      alt="Logo"
      className="h-16 w-auto mb-8 mt-4"
    />

    {/* Navigation links */}
    <ul className="flex flex-col items-center space-y-8 mt-4">
      <li className="flex items-center gap-2">
        <IoIosArrowForward />
        <button
          onClick={() => { 
            setIsOpen(false);
            scrollToSection(aboutRef);
          }}
       >
        About
        </button>
      </li>
      <li className="flex items-center gap-2">
        <IoIosArrowForward />
        <button
          onClick={() => {
            setIsOpen(false);
            scrollToSection(fpvRef)
          }}
        >
          Gallery
        </button>
      </li>
      <li className="flex items-center gap-2">
        <IoIosArrowForward />
        <button
          onClick={() => {
            setIsOpen(false);
            scrollToSection(servicesRef)
          }}
        >
          Services
        </button>
      </li>
      <li className="flex items-center gap-2">
        <IoIosArrowForward />
        <button
          href="#contact"
          className="text-2xl"
          onClick={() => {
            setIsOpen(false);
            setShowContactModal(true);
          }}
        >Contact</button>
      </li>
    </ul>
  </div>
)}

              {/* CONTACT MODAL */}
        {showContactModal && (
          <ContactModal onClose={() => setShowContactModal(false)} />
        )}
    </nav>
  );
}

export default Navbar;
