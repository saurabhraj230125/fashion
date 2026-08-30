"use client";

import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`} id="main-nav">
      <div className="nav-container">
        <div className="logo">
          <span className="logo-text">FASHION BOUTIQUE</span>
          <span className="logo-subtext">SAT</span>
        </div>
        <div className="nav-links">
          <Link href="#about" className="nav-link">О нас</Link>
          <Link href="#collection" className="nav-link">Коллекция</Link>
          <Link href="#location" className="nav-link">Контакты</Link>
        </div>
        <a href="https://wa.me/77712832333" target="_blank" rel="noopener noreferrer" className="btn-primary sm-hidden">
          Заказать
        </a>
      </div>
    </nav>
  );
}
