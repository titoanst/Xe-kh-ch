import React, { useState, useEffect } from 'react';
import { Menu, X, Car } from 'lucide-react';
import { APP_NAME, HOTLINE } from '../constants';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Trang chủ', href: '#hero' },
    { name: 'Cẩm nang', href: '#guide' },
    { name: 'Xe 4 chỗ', href: '#vehicles' },
    { name: 'Xe 7 chỗ', href: '#vehicles' },
    { name: 'Bảng giá', href: '#pricing' },
    { name: 'Liên hệ', href: '#contact-map' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-3' : 'bg-white/95 backdrop-blur-sm py-4 shadow-sm'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="bg-primary-600 text-white p-2.5 rounded-xl shadow-md group-hover:bg-primary-700 transition-colors">
            <Car size={26} strokeWidth={2.5} />
          </div>
          <span className="font-heading font-bold text-xl md:text-2xl text-primary-900 group-hover:text-primary-700 transition-colors">
            {APP_NAME}
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="font-medium text-slate-700 hover:text-primary-600 transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a 
            href={`tel:${HOTLINE.replace(/\./g, '')}`} 
            className="bg-accent hover:bg-accent-hover text-white font-heading font-bold py-2 px-6 rounded-full shadow-lg transform hover:scale-105 transition-all"
          >
            Gọi {HOTLINE}
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-2 text-primary-800 bg-gray-50 rounded-lg"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-xl border-t border-gray-100">
          <div className="flex flex-col p-4 gap-4">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className="text-lg font-medium text-slate-700 py-2 border-b border-gray-100"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a 
              href={`tel:${HOTLINE.replace(/\./g, '')}`} 
              className="bg-accent text-white font-bold py-3 rounded-lg text-center shadow-md"
            >
              Gọi ngay {HOTLINE}
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;