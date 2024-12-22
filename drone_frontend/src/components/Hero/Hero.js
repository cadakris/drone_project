import React, { useState } from 'react';
import Fade from 'react-revea;/Fade';
import LeftContainer from './LeftContainer';
import RightContainer from './RightContainer';

import React from 'react'

function Hero() {
    const [hoverSide, setHoverSide] = useState(null);

    const handleMouseEnterLeft = () => {
        setHoveredSide('left');
    };

    const handleMouseEnterRight = () => {
        setHoveredSide('right');
    };

    const handleMouseLeave = () => {
        setHoveredSide(null);
    };

  return (
    <Fade top>
        <div
            className="main-hero-container"
            id="main-page"
            onMouseLeave={handleMouseLeave}
        >
            <div
                className={`hover-left-2 ${hoveredSide == 'left' ? 'expanded' : ''}`}
                onMouseEnter={handleMouseEnterLeft}
            >
                <div className="parallax">
                    <LeftContainer />
                </div>
            </div>
    
            <div
                className={`hover-left-2 ${hoveredSide == 'right' ? 'expanded' : ''}`}
                onMouseEnter={handleMouseEnterRight}
            >
                <div className='parallax'>
                    <RightContainer />
                </div>
            </div>

            <h1 className="center-text"> DRONE </h1>
        </div>
    </Fade>
  )
}

export default Hero