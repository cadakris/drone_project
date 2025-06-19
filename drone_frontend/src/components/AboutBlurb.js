import React from 'react';



function AboutBlurb() {
  return (
    <section id="about">
      <div className="w-full h-auto bg-[#384454] p-6 md:p-6 pt-28 md:pt-44">
        <h1 className="text-[#317AC1] text-center mb-6 text-2xl md:text-4xl lg:text-6xl">
          Aerial Drone Solutions
        </h1>

        <div className="mb-4">
          <p className="text-white text-base sm:text-lg md:text-xl lg:text-2xl text-center px-4 sm:px-12 md:px-24">
            Capturing the action, ensuring precision: FPV drones for extreme sports, stabilized drones for inspection and photogrammetry.
          </p>

        </div>

        <div className="flex justify-center p-2">
          <button className="w-24 md:w-28 lg:w-36 h-12 md:h-12 lg:h-16 bg-[#E1A624] drop-shadow-md rounded-md text-white text-base md:text-lg lg:text-xl hover:bg-gray-400">
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
}


export default AboutBlurb;
