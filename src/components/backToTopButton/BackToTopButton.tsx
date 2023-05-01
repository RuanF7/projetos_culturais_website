import { Button } from '@mui/material';
import React, { useEffect, useState } from 'react'
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';

function BackToTopButton() {
  const [backToTopButton, setBackToTopButton] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 100) {
        setBackToTopButton(true);
      } else {
        setBackToTopButton(false);
      }
    });
  }, []);

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };


  return (
    <>
      {backToTopButton && (
        <ArrowCircleUpIcon 
        sx={{
          position: 'fixed', 
          bottom: 250,
          right: 10,
          height: 30,
          width: 30,
          color: 'warning.main',
          cursor: 'pointer',                   
        }}
        onClick={scrollUp}
        />        
      )}
    </>
  )
}

export default BackToTopButton