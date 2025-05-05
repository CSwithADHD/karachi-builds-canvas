
import React from 'react';
import { Phone, Mail, MapPin, Linkedin, Image } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-construction-black text-white pt-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-6">
              <span className="text-white">BUILD</span>
              <span className="text-construction-red">MASTERS</span>
            </h3>
            <p className="mb-6 text-gray-300">
              Building Karachi's future with excellence and innovation. Quality construction services for commercial and residential projects.
            </p>
            <div className="flex space-x-4">
              <SocialIcon icon={<Linkedin size={20} />} />
              <SocialIcon icon={<Phone size={20} />} />
              <SocialIcon icon={<Mail size={20} />} />
              <SocialIcon icon={<Image size={20} />} />
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-semibold mb-6 border-l-4 border-construction-red pl-4">Quick Links</h4>
            <ul className="space-y-3">
              <FooterLink to="/">Home</FooterLink>
              <FooterLink to="/projects">Projects</FooterLink>
              <FooterLink to="/portfolio">Portfolio</FooterLink>
              <FooterLink to="/about">About Us</FooterLink>
              <FooterLink to="/contact">Contact</FooterLink>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-semibold mb-6 border-l-4 border-construction-red pl-4">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin size={20} className="text-construction-red mr-3 mt-1 flex-shrink-0" />
                <span>123 Construction Avenue, DHA Phase 8, Karachi, Pakistan</span>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="text-construction-red mr-3 flex-shrink-0" />
                <span>+92 321 1234567</span>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="text-construction-red mr-3 flex-shrink-0" />
                <span>info@buildmasters.pk</span>
              </li>
            </ul>
          </div>
          
        </div>
        
        {/* Copyright */}
        <div className="border-t border-gray-800 mt-12 py-6 text-center text-gray-400">
          <p>&copy; {currentYear} BuildMasters Construction Company. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

const SocialIcon = ({ icon }) => (
  <a 
    href="#" 
    className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-construction-red transition-colors duration-300"
  >
    {icon}
  </a>
);

const FooterLink = ({ to, children }) => (
  <li>
    <Link 
      to={to} 
      className="text-gray-300 hover:text-construction-red transition-colors duration-200"
    >
      {children}
    </Link>
  </li>
);

export default Footer;
