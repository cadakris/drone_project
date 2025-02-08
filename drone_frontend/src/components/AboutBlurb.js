import React from 'react';



function AboutBlurb() {
  return (
    <>
      <div className="relative w-full h-auto bg-blue-900 p-6 md:p-10">
        {/* Heading */}
        <h1 className="text-white text-2xl md:text-4xl mb-4 pb-5">
          Matt's Drone Services: Capturing the World from a New Perspective
        </h1>

        {/* Paragraph */}
        <div className="relative">
          <p className="text-white text-left md:text-right md:pl-[260px]">
            Our drones provide breathtaking aerial views and precise data collection to help you see the bigger picture. Whether you're documenting special moments, surveying land, or showcasing your business, we deliver innovative solutions tailored to your needs, with a commitment to quality, creativity, and environmental consciousness.
          </p>
        </div>
      </div>
    </>
  );
}

export default AboutBlurb;
