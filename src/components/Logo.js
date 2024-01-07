import './Logo.css';
import Logo1 from '../RodasaL.PNG'

import React, { useState, useEffect } from 'react';


const LogoR = () => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`navbar ${isSticky ? 'sticky' : ''}`}>
      <div className="logo">
        <img src={Logo1} alt="Logo RodasaL" />
      </div>
     
    </header>
  );
};


  export default LogoR;