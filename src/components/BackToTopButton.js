import React from 'react';
import {useEffect, useState} from 'react';

function BackToTopButton () {
  
  const [backToTopButton, setBackToTopButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if(window.scrollY > 100) {
        setBackToTopButton(true);
      } else {
        setBackToTopButton(false);
      }
    })
  }, []); 

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  }

  return (
    <>
      {backToTopButton && (
        <button onClick={scrollUp} style={{
          position: 'fixed',
          bottom: '50px',
          right: '50px',
          height: '30px',
          width: '40px',
          fontSize: '20px',
          backgroundColor: 'rgba(198, 177, 198)',
          borderRadius: '10px'
        }}>^</button>
      )}
    </>
  );
};

export default BackToTopButton;