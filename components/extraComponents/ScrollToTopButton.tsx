"use client";

import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Εμφάνιση του κουμπιού όταν ο χρήστης σκρολάρει προς τα κάτω
  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Προσθήκη event listener για το scroll
  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  // Ομαλή κύλιση προς την κορυφή
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-8 right-8 z-50 bg-[#5D9DCD] text-white rounded-full p-3 shadow-lg hover:bg-[#094875] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#094875] transition-all duration-300 ease-in-out transform hover:-translate-y-1 ${isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
      aria-label="Go to top"
    >
      <FontAwesomeIcon icon={faArrowUp} className="h-6 w-6" />
    </button>
  );
};

export default ScrollToTopButton;
