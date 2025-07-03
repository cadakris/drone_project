import React from "react";

function AboutBlurb() {
  return (
    <section id="about">
      <div className="w-full h-auto bg-[#384454] p-6 md:p-6 pt-8 md:pt-8">
        <h1 className="text-[#317AC1] text-center mb-6 text-2xl md:text-4xl lg:text-6xl">
          Aerial Drone Solutions
        </h1>

        <div className="mb-4">
          <p className="text-white text-base sm:text-lg md:text-xl lg:text-2xl text-center px-4 sm:px-12 md:px-24">
                Our mission is simple: <i>capture the action with precision. </i>
          </p> <br/>

          <p className="text-white text-base sm:text-lg md:text-xl lg:text-2xl text-center px-4 sm:px-12 md:px-24">
            We deliver FPV drones for extreme sports and stabilized drones for inspections and mapping, bringing unique perspectives that make your projects stand out with cinematic quality.
          </p> <br/>

        </div>


      </div>
        
        

    </section>

    
  );
}


export default AboutBlurb;
