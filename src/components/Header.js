import React, { useState, useEffect } from 'react';
import './Header.css';
import LogoBlack from '../img/logoblack.png';
import LogoWhite from '../img/logowhite.png';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsScrolled(true);
      } else if (currentScrollY < lastScrollY) {
        setIsScrolled(false);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleMenuClick = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''} ${menuOpen ? 'menu-open' : ''}`}>
      <div className="logo">
        <a href="/">
          <img src={menuOpen ? LogoBlack : LogoWhite} alt="Logo"/>
        </a>
      </div>
      {windowWidth > 768 ? (
        <nav className={`navigation ${isScrolled && !menuOpen ? 'hidden' : ''}`}>
          <a href="/">Accueil</a>
          <a href="/realisations">Réalisations</a>
          <a href="/contact">Contact</a>
        </nav>
      ) : (
        <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
          <a href="/">Accueil</a>
          <a href="/realisations">Réalisations</a>
          <a href="/contact">Contact</a>
        </div>
        
        
      )}
      <div className="menu-icon" onClick={handleMenuClick}>
        <div className="burger-icon">
          <span></span>
          <span className="small"></span>
          <span></span>
        </div>
        {windowWidth > 768 && <p>Menu</p>}
      </div>
    </header>
  );
};

export default Header;
