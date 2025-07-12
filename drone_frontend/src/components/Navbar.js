import { useState } from 'react';
import { IoIosArrowForward, IoIosMenu } from "react-icons/io";
import logoNoBackground from '../images/logoNoBackground.png';
import ContactModal from './ContactModal';
import { useTranslation } from 'react-i18next';

function Navbar({ scrollToSection, navbarRef, fpvRef, servicesRef, aboutRef }) {
  const [isOpen, setIsOpen] = useState(false);
  const [showContactModal, setShowContactModal] = useState(false);
  const { i18n } = useTranslation();

  const scrollToTop = () => {
    const navBarHeight = navbarRef.current?.getBoundingClientRect().height || 0;

    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'fr' : 'en';
    i18n.changeLanguage(newLang);
  };

  return (
    <nav className="bg-[#384454] text-white fixed top-0 left-0 w-full z-50" ref={navbarRef}>
      
      {/* Top-Right Language Toggle */}
<div className="hidden md:block absolute top-3 right-6 z-50">
  <button
    onClick={toggleLanguage}
    className="text-sm px-2 py-1 border border-white rounded hover:bg-white hover:text-[#384454] transition"
  >
    {i18n.language === 'en' ? 'FR / EN' : 'EN / FR'}
  </button>
</div>

      {/* Desktop Navbar */}
      <div className="hidden md:grid grid-cols-3 items-center w-full max-w-7xl mx-auto py-2">

        {/* LEFT COLUMN */}
        <div className="flex justify-center">
          <ul className="flex items-center space-x-8 md:space-x-12 lg:space-x-16 text-base md:text-xl lg:text-2xl">
            <li className="flex items-center gap-2 hover:text-gray-400">
              <IoIosArrowForward />
              <button onClick={() => scrollToSection(aboutRef)}>About</button>
            </li>
            <li className="flex items-center gap-2 hover:text-gray-400">
              <IoIosArrowForward />
              <button onClick={() => scrollToSection(fpvRef)}>Gallery</button>
            </li>
          </ul>
        </div>

        {/* CENTER COLUMN */}
        <div className="flex justify-center">
          <img
            src={logoNoBackground}
            alt="Logo"
            className="h-[clamp(5rem,11vw,9rem)] w-auto cursor-pointer"
            onClick={scrollToTop}
          />
        </div>

        {/* RIGHT COLUMN */}
        <div className="flex justify-center">
          <ul className="flex items-center space-x-8 md:space-x-12 lg:space-x-16 text-base md:text-xl lg:text-2xl">
            <li className="flex items-center gap-2 hover:text-gray-400">
              <IoIosArrowForward />
              <button onClick={() => scrollToSection(servicesRef)}>Services</button>
            </li>
            <li className="flex items-center gap-2 hover:text-gray-400">
              <IoIosArrowForward />
              <button onClick={() => setShowContactModal(true)}>Contact</button>
            </li>
          </ul>
        </div>
      </div>

      {/* Mobile Navbar */}
<div className="flex justify-between items-center md:hidden p-4 relative">
  <button
    onClick={toggleLanguage}
    className="text-xs px-2 py-1 border border-white rounded hover:bg-white hover:text-[#384454] transition"
  >
    {i18n.language === 'en' ? 'FR / EN' : 'EN / FR'}
  </button>

  {!isOpen && (
    <button onClick={() => setIsOpen(true)} className="z-50">
      <IoIosMenu size={28} />
    </button>
  )}
</div>


      {/* Mobile Full Screen Menu */}
      {isOpen && (
        <div className="fixed inset-0 bg-[#384454] flex flex-col items-center pt-4 text-2xl z-40">
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-4 right-4 text-4xl z-50"
          >
            &ndash;
          </button>

          <img
            src={logoNoBackground}
            alt="Logo"
            className="h-16 w-auto mb-8 mt-4"
          />

          <ul className="flex flex-col items-center space-y-8 mt-4">
            <li className="flex items-center gap-2">
              <IoIosArrowForward />
              <button onClick={() => { setIsOpen(false); scrollToSection(aboutRef); }}>About</button>
            </li>
            <li className="flex items-center gap-2">
              <IoIosArrowForward />
              <button onClick={() => { setIsOpen(false); scrollToSection(fpvRef); }}>Gallery</button>
            </li>
            <li className="flex items-center gap-2">
              <IoIosArrowForward />
              <button onClick={() => { setIsOpen(false); scrollToSection(servicesRef); }}>Services</button>
            </li>
            <li className="flex items-center gap-2">
              <IoIosArrowForward />
              <button onClick={() => { setIsOpen(false); setShowContactModal(true); }}>Contact</button>
            </li>
          </ul>
        </div>
      )}

      {/* Contact Modal */}
      {showContactModal && (
        <ContactModal onClose={() => setShowContactModal(false)} />
      )}
    </nav>
  );
}

export default Navbar;
