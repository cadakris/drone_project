import React from "react";

function AboutBlurb() {
  return (
    <section id="about">
      <div className="w-full h-auto bg-[#384454] p-6 pt-8">
        <h1 className="text-[#317AC1] text-center mb-6 text-2xl md:text-4xl lg:text-6xl">
          Aerial Drone Solutions
        </h1>

        <div className="mb-4 mx-auto max-w-screen-lg px-4">
          <p className="text-white text-base sm:text-lg md:text-xl lg:text-2xl text-center">
            Our mission is simple: <i>capture the action with precision.</i>
          </p>
          <br />
          <p className="text-white text-base sm:text-lg md:text-xl lg:text-2xl text-center">
            We deliver FPV drones for extreme sports and stabilized drones for inspections and mapping, bringing unique perspectives that make your projects stand out with cinematic quality.
          </p>
        </div>
      </div>
    </section>
    
  );
}


export default AboutBlurb;
