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
    <div>Hero</div>
  )
}

export default Hero