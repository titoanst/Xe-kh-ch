import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Car, ChevronDown } from 'lucide-react';
import { HOTLINE } from '../constants';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isHomePage = location.pathname === '/';

  // Standard Travel Website Structure
  const navLinks = [
    { name: 'Trang chủ', href: '/' },
    { 
        name: 'Điểm đến', 
        href: '#',
        dropdown: [
            { name: 'Sóc Trăng', href: '/diem-den/soc-trang' },
            { name: 'Cần Thơ', href: '#' },
            { name: 'Bạc Liêu', href: '#' },
            { name: 'Cà Mau', href: '#' },
            { name: 'An Giang', href: '#' },
        ]
    },
    { name: 'Ẩm thực', href: '#' },
    { 
      name: 'Lịch trình', 
      href: '#',
      dropdown: [
        { name: 'Tour 1 Ngày', href: '#' },
        { name: 'Tour 2N1Đ', href: '#' },
        { name: 'Tour Cao Cấp', href: '#' },
      ]
    },
    { name: 'Blog', href: '/blog' },
    { name: 'Liên hệ', href: '/lien-he' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled || !isHomePage ? 'bg-primary-900 shadow-md py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          <div className={`p-2 rounded border border-gold ${isScrolled || !isHomePage ? 'bg-gold text-primary-900' : 'bg-transparent text-gold'}`}>
            <Car size={24} strokeWidth={1.5} />
          </div>
          <div className="flex flex-col">
            <span className={`font-serif font-bold text-xl md:text-2xl tracking-wide leading-none ${isScrolled || !isHomePage ? 'text-white' : 'text-white'}`}>
                TI TOÀN
            </span>
            <span className="text-[10px] uppercase tracking-[0.2em] text-gold font-medium">Luxury Travel</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <div key={link.name} className="relative group">
                {link.dropdown ? (
                    <button className={`flex items-center gap-1 text-sm uppercase tracking-widest font-medium transition-colors hover:text-gold ${isScrolled || !isHomePage ? 'text-white' : 'text-white/90'}`}>
                        {link.name} <ChevronDown size={14} />
                    </button>
                ) : (
                    <Link 
                    to={link.href}
                    className={`text-sm uppercase tracking-widest font-medium transition-colors hover:text-gold ${
                        isScrolled || !isHomePage ? 'text-white' : 'text-white/90'
                    }`}
                    >
                    {link.name}
                    </Link>
                )}
                
                {/* Dropdown Menu */}
                {link.dropdown && (
                    <div className="absolute top-full left-0 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                        <div className="bg-white rounded-lg shadow-xl py-2 min-w-[200px] border-t-2 border-gold">
                            {link.dropdown.map(item => (
                                <Link 
                                    key={item.name} 
                                    to={item.href}
                                    className="block px-6 py-3 text-slate-800 hover:bg-primary-50 hover:text-gold font-serif text-base transition-colors border-b border-gray-50 last:border-0"
                                >
                                    {item.name}
                                </Link>
                            ))}
                        </div>
                    </div>
                )}
            </div>
          ))}
          <a 
            href="#booking" 
            className="bg-gold hover:bg-gold-hover text-primary-900 font-bold py-3 px-6 rounded-full shadow-lg transition-all uppercase tracking-wider text-xs md:text-sm hover:-translate-y-1"
          >
            Đặt lịch trình
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className={`lg:hidden p-2 ${isScrolled || !isHomePage ? 'text-white' : 'text-white'}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-primary-900 shadow-xl border-t border-primary-800 h-screen overflow-y-auto">
          <div className="flex flex-col p-6 gap-6 pb-32">
            {navLinks.map((link) => (
              <div key={link.name}>
                  {link.dropdown ? (
                       <div className="space-y-4">
                           <div className="text-lg font-serif text-gold border-b border-primary-800 pb-2">{link.name}</div>
                           <div className="pl-4 space-y-3 border-l border-primary-700 ml-2">
                               {link.dropdown.map(item => (
                                   <Link 
                                     key={item.name}
                                     to={item.href}
                                     className="block text-white hover:text-gold py-1"
                                     onClick={() => setIsMobileMenuOpen(false)}
                                   >
                                       {item.name}
                                   </Link>
                               ))}
                           </div>
                       </div>
                  ) : (
                    <Link 
                        to={link.href}
                        className="text-lg font-serif text-white hover:text-gold border-b border-primary-800 pb-2 block"
                        onClick={() => setIsMobileMenuOpen(false)}
                    >
                        {link.name}
                    </Link>
                  )}
              </div>
            ))}
            <a 
              href={`tel:${HOTLINE.replace(/\./g, '')}`} 
              className="bg-gold text-primary-900 font-bold py-4 rounded-lg text-center shadow-md uppercase tracking-wider mt-4"
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