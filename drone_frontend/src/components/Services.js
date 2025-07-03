import React, { useState } from 'react'
import ContactModal from './ContactModal'
import { serviceData } from './GeneralMediaData'


const firstServiceImage = serviceData[0];
const secondServiceImage = serviceData[1];
const thirdServiceImage = serviceData[2];


export default function Services() {

const [showContactModal, setShowContactModal] = useState(false);

  return (
    <div className="bg-[#384454]" >
        <h1 className="text-[#317AC1] text-center mb-6 text-xl md:text-2xl lg:text-4xl">
          Our Services
        </h1>
        <div className="flex flex-wrap justify-center">
            {/* card 1 */}
            <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4 text-white">
                <div className="className="bg-white shadow-md rounded-lg overflow-hidden>
                    <img className="w-full h-48 object-cover" src={firstServiceImage.servicesImage} alt="Card 1" />
                        <div className="p-4">
                        <h2 className="text-xl text-[#E1A624] font-semibold mb-2">FPV Drone</h2>
                        <p className="text-white">For precise and immersive shots, nothing matches the stunning 4K footage captured by our FPV drones  .</p>
                    </div> 
                </div>
            </div>

            {/* card 2 */}
                    <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4">
                <div className="className="bg-white shadow-md rounded-lg overflow-hidden>
                    <img className="w-full h-48 object-cover" src={secondServiceImage.servicesImage} alt="Card 1" />
                        <div className="p-4">
                        <h2 className="text-xl text-[#E1A624] font-semibold mb-2">Surveying & Mapping</h2>
                        <p className="text-white">Accurate topographic data collection.</p>
                    </div> 
                </div>
            </div>
                    {/* card 3 */}
            <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4">
                <div className="className="bg-white shadow-md rounded-lg overflow-hidden>
                    <img className="w-full h-48 object-cover" src={thirdServiceImage.servicesImage} alt="Card 3" />
                        <div className="p-4">
                        <h2 className="text-xl text-[#E1A624] font-semibold mb-2">Full Service Production</h2>
                        <p className="text-white">Full-service production from concept to delivery — we handle every step with precision and creativity.</p>
                    </div> 
                </div>
            </div>
        </div>
                <div className="flex justify-center p-2">
          <button 
            className="w-24 md:w-28 lg:w-36 h-12 md:h-12 lg:h-16 bg-[#E1A624] drop-shadow-md rounded- text-white text-base md:text-lg lg:text-xl hover:bg-gray-400"
            onClick={(e)=>{
              e.preventDefault();
              setShowContactModal(true);
            }}
            >
            
            Get Started
          </button>
        </div>

                {/* CONTACT MODAL */}
        {showContactModal && (
          <ContactModal onClose={() => setShowContactModal(false)} />
        )}

    </div>

  )
}
