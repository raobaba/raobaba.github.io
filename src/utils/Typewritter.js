import React, { useState, useEffect } from 'react';

function TypewriterEffect({ dynamicTexts, staticText, speed }) {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');

  useEffect(() => {
    const targetText = staticText + dynamicTexts[currentTextIndex];
    let currentIndex = 0;
    const intervalId = setInterval(() => {
      if (currentIndex <= targetText.length) {
        setDisplayText(targetText.substring(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(intervalId);
        setTimeout(() => {
          setCurrentTextIndex((prevIndex) => (prevIndex + 1) % dynamicTexts.length);
        }, 1000); // Delay before switching to the next text
      }
    }, speed); // Typing speed

    return () => clearInterval(intervalId);
  }, [currentTextIndex, dynamicTexts, staticText, speed]);

  return (
    <div style={{ 
      justifyContent: 'center',
      alignItems: 'center',
      height: '10vh',
      display: 'flex',
    }}>
      <h1 style={{ 
        fontSize: '30px',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        fontWeight:'600',
        color:"red"
      }}>
        {displayText}
      </h1>
    </div>
  );
}

export default TypewriterEffect;
