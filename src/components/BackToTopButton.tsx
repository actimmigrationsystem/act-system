import React, { useState, useEffect } from 'react';
import { scroller } from 'react-scroll';
import { Button } from 'flowbite-react';

const BackToTopButton = () => {
  const [showButton, setShowButton] = useState(false);

  const handleScroll = () => {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  const backToTop = () => {
    scroller.scrollTo('home-section', {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      {showButton && (
        <>
          <Button
            label="Back to top"
            id="backToTopButton"
            type="button"
            onClick={backToTop}
            className="fixed bottom-4 right-4 p-3 text-white font-medium text-xs leading-tight rounded-full shadow-md hover:bg-blue-700 hover:shadow-lg bg-gray-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
            style={{ backgroundColor: '#0e5a97', width: '40px', height: '40px' }}
          >
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              className="w-4 h-4"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
            >
              <path
                fill="currentColor"
                d="M34.9 289.5l-22.2-22.2c-9.4-9.4-9.4-24.6 0-33.9L207 39c9.4-9.4 24.6-9.4 33.9 0l194.3 194.3c9.4 9.4 9.4 24.6 0 33.9L413 289.4c-9.5 9.5-25 9.3-34.3-.4L264 168.6V456c0 13.3-10.7 24-24 24h-32c-13.3 0-24-10.7-24-24V168.6L69.2 289.1c-9.3 9.8-24.8 10-34.3.4z"
              />
            </svg>
          </Button>
        </>
      )}
    </>
  );
};

export default BackToTopButton;
