import React, { useState } from "react";
import ContactModal from "./ContactModal";
import { serviceData } from "./GeneralMediaData";
import { CheckCircle } from "lucide-react"; // Or swap with any icon you use

export default function Services({servicesRef}) {
  const [showContactModal, setShowContactModal] = useState(false);

  return (
    <div className="bg-[#384454]" ref={servicesRef}>
      {/* Mobile: Hero image + list */}
      <div className="block md:hidden">
        <div className="relative w-full h-60">
          <img
            src={serviceData[0].servicesImage} 
            alt="Our Services"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <h1 className="text-white text-2xl font-bold">Our Services</h1>
          </div>
        </div>

        <ul className="flex flex-col gap-4 p-6 pt-6">
          {serviceData.map((service, index) => (
            <li key={index} className="flex items-start gap-4">
              <CheckCircle className="text-[#E1A624] w-6 h-6 flex-shrink-0" />
              <div>
                <h2 className="text-white text-lg font-semibold">
                  {service.title}
                </h2>
                <p className="text-white text-sm">{service.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Desktop: Grid cards */}
      <div className="hidden md:flex flex-wrap justify-center gap-4">
        {serviceData.map((service, index) => (
          <div
            key={index}
            className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4 text-white"
          >
            <div className="bg-white shadow-md overflow-hidden">
              <img
                className="w-full h-48 object-cover"
                src={service.servicesImage}
                alt={service.title}
              />
              <div className="p-4 bg-[#384454] h-60 flex flex-col">
                <h2 className="text-xl text-[#E1A624] font-semibold mb-2">
                  {service.title}
                </h2>
                <p className="text-white text-sm md:text-lg">
                  {service.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center p-4 pb-8">
        <button
          className="w-36 h-12 bg-[#E1A624] drop-shadow-md rounded text-white text-base md:text-lg hover:bg-gray-400"
          onClick={(e) => {
            e.preventDefault();
            setShowContactModal(true);
          }}
        >
          Get Started
        </button>
      </div>

      {/* Contact Modal */}
      {showContactModal && (
        <ContactModal onClose={() => setShowContactModal(false)} />
      )}
    </div>
  );
}
