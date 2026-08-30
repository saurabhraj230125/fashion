"use client";

import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function Hero() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="hero" id="home">
      <div 
        className="hero-bg" 
        style={{ 
          backgroundImage: "url('/assets/hero_bg.jpg')",
          transform: `translateY(${scrollY * 0.3}px) scale(1.05)`
        }}
      ></div>
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <h1 className="hero-title">Изысканный стиль. <br/>Безупречное качество.</h1>
        <p className="hero-subtitle">Женская одежда премиум-класса прямиком из Турции. <br/>Ваш идеальный образ начинается здесь.</p>
        <div className="hero-actions">
          <a href="https://wa.me/77712832333" target="_blank" rel="noopener noreferrer" className="btn-primary hero-btn">Связаться в WhatsApp</a>
          <Link href="#collection" className="btn-secondary hero-btn">Смотреть коллекции</Link>
        </div>
      </div>
    </header>
  );
}
