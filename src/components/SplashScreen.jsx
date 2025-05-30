import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import logo from "../assets/images/relogo.png";

const SplashScreen = () => {
  const [fadeOut, setFadeOut] = useState(false);
  const navigate = useNavigate(); // this gives us programmatic navigation

  useEffect(() => {
    const timeout1 = setTimeout(() => setFadeOut(true), 3000); // Start fade out at 3s
    const timeout2 = setTimeout(() => navigate('/home'), 4000); // Redirect at 4s

    return () => {
      clearTimeout(timeout1);
      clearTimeout(timeout2);
    };
  }, [navigate]);

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-black transition-opacity duration-1000 ${
        fadeOut ? 'opacity-0' : 'opacity-100'
      }`}
    >
      <img src={logo} />
      <h1 className="text-white text-4xl sm:text-6xl font-bold animate-pulse tracking-wide">
        Welcome to Digital Literacy - For All
      </h1>
      <h2 className="text-white text-4xl sm:text-6xl font-bold animate-pulse tracking-wide"> DL4ALL </h2>
      <p className="text-gray-300 text-lg mt-4 sm:mt-6 animate-fade-in delay-500">
        Empowering Communities Through Digital Innovation
      </p>
    </div>
  );
};

export default SplashScreen;
