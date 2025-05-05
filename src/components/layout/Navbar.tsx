
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <nav className={`fixed w-full top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-construction-black py-2 shadow-md' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <span className="text-2xl font-bold text-white mr-2">BUILD</span>
          <span className="text-2xl font-bold text-construction-red">MASTERS</span>
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/projects">Projects</NavLink>
          <NavLink to="/portfolio">Portfolio</NavLink>
          <NavLink to="/about">About Us</NavLink>
          <NavLink to="/contact" className="bg-construction-red px-6 py-2 rounded-md">Contact</NavLink>
        </div>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white focus:outline-none" 
          onClick={toggleMobileMenu}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Menu */}
      <div className={`md:hidden bg-construction-black absolute w-full transition-all duration-300 ease-in-out ${mobileMenuOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
        <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
          <MobileNavLink to="/" onClick={toggleMobileMenu}>Home</MobileNavLink>
          <MobileNavLink to="/projects" onClick={toggleMobileMenu}>Projects</MobileNavLink>
          <MobileNavLink to="/portfolio" onClick={toggleMobileMenu}>Portfolio</MobileNavLink>
          <MobileNavLink to="/about" onClick={toggleMobileMenu}>About Us</MobileNavLink>
          <MobileNavLink to="/contact" onClick={toggleMobileMenu}>Contact</MobileNavLink>
        </div>
      </div>
    </nav>
  );
};

const NavLink = ({ to, children, className = '' }) => (
  <Link
    to={to}
    className={`text-white hover:text-construction-red transition-colors duration-200 ${className}`}
  >
    {children}
  </Link>
);

const MobileNavLink = ({ to, children, onClick }) => (
  <Link
    to={to}
    className="text-white hover:text-construction-red transition-colors duration-200 py-2 block border-b border-gray-700"
    onClick={onClick}
  >
    {children}
  </Link>
);

export default Navbar;
