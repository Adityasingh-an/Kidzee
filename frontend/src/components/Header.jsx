import { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import { Link, useLocation } from "react-router-dom";

export default function Header({ setShowForm }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/', hash: '#home', hybrid: true },
    { name: 'About Us', path: '/about', hash: '#about', hybrid: true },
    { name: 'Programmes', path: '/programs', hash: '#programmes', hybrid: true },
    { name: 'Notice', path: '/notice', hybrid: false },
    { name: 'Gallery', path: '/gallery', hybrid: false },
    { name: 'Video', path: '/videos', hybrid: false },
    { name: 'Facilities', path: '/facilities', hybrid: false },
    { name: 'Contact Us', path: '/contact', hash: '#contact', hybrid: true }
  ];

  return (
    <header className={`fixed w-full top-0 z-50 transition-all duration-300 shadow-lg ${isScrolled ? 'bg-primary py-1' : 'bg-primary py-2'}`}>
      
      <div className="w-full px-4 md:px-12 lg:px-20 flex justify-between items-center h-full">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group flex-shrink-0">
          <div className="h-20 flex items-center justify-center overflow-hidden transition-transform group-hover:scale-105">
            <img src="/assets/logo.jpg" alt="Kidzee Logo" className="h-full w-auto object-contain" />
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden min-[1224px]:flex gap-x-4 items-center flex-wrap justify-end flex-grow ml-2 mr-4">
          {navLinks.map((link) => (
            link.hybrid && isHomePage ? (
              <a
                key={link.name}
                href={link.hash}
                className="font-heading font-bold text-sm uppercase text-white hover:text-secondary transition"
              >
                {link.name}
              </a>
            ) : (
              <Link
                key={link.name}
                to={link.path}
                className="font-heading font-bold text-sm uppercase text-white hover:text-secondary transition"
              >
                {link.name}
              </Link>
            )
          ))}
        </nav>

        {/* ✅ DESKTOP ENROLL BUTTON */}
        <button
          onClick={() => setShowForm(true)}
          className="hidden md:inline-flex items-center justify-center bg-secondary text-primary font-bold px-6 py-2 rounded-full hover:bg-purple-900 hover:text-white transition-all uppercase text-sm shadow-md ml-auto xl:ml-0 mr-4 xl:mr-0"
        >
          Enroll Now
          <ArrowRight className="ml-2 w-5 h-5" />
        </button>

        {/* Mobile Menu Button */}
        <button
          className="min-[1223px]:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {/* ✅ MOBILE NAV */}
      <div className={`min-[1224px]:hidden absolute top-full left-0 w-full bg-primary shadow-2xl transition-all duration-300 overflow-hidden ${isMobileMenuOpen ? 'max-h-[80vh] py-4 border-t border-white/10 overflow-y-auto' : 'max-h-0 py-0'}`}>
        
        <div className="container mx-auto px-4 flex flex-col">

          {navLinks.map((link) => (
            link.hybrid && isHomePage ? (
              <a
                key={link.name}
                href={link.hash}
                className="text-white hover:text-secondary font-medium py-3 border-b border-white/10 text-sm uppercase"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ) : (
              <Link
                key={link.name}
                to={link.path}
                className="text-white hover:text-secondary font-medium py-3 border-b border-white/10 text-sm uppercase"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            )
          ))}

          {/* ✅ MOBILE ENROLL BUTTON (FIX) */}
          <button
            onClick={() => {
              setShowForm(true);
              setIsMobileMenuOpen(false);
            }}
            className="mt-4 bg-secondary text-primary font-bold px-5 py-3 rounded-full text-sm uppercase shadow-md"
          >
            Enroll Now
          </button>

        </div>
      </div>
    </header>
  );
}