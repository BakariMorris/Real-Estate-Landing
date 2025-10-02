import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Phone, Mail } from 'lucide-react';

interface HeaderProps {
  onContactClick?: () => void;
}

const Header: React.FC<HeaderProps> = ({ onContactClick }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleContactClick = () => {
    if (onContactClick) {
      onContactClick();
    } else {
      // Scroll to contact section or form
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsMenuOpen(false);
  };

  const navigationItems = [
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'Market Insights', href: '#market' },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-sm shadow-lg' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto container-padding">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="flex items-center space-x-2"
          >
            <div className="w-10 h-10 bg-primary-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">R</span>
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-bold text-gray-900">RealEstate Pro</span>
              <span className="text-xs text-gray-600 hidden sm:block">Premium Properties</span>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item, index) => (
              <motion.a
                key={item.label}
                href={item.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + index * 0.1 }}
                className="text-gray-700 hover:text-primary-600 font-medium transition-colors duration-200"
                onClick={(e) => {
                  e.preventDefault();
                  const section = document.querySelector(item.href);
                  if (section) {
                    section.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                {item.label}
              </motion.a>
            ))}
          </nav>

          {/* Contact Info & CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className="flex items-center space-x-4 text-sm">
              <motion.a
                href="tel:+1234567890"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="flex items-center space-x-1 text-gray-600 hover:text-primary-600 transition-colors"
              >
                <Phone size={16} />
                <span>(123) 456-7890</span>
              </motion.a>
              <motion.a
                href="mailto:contact@realestatepro.com"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="flex items-center space-x-1 text-gray-600 hover:text-primary-600 transition-colors"
              >
                <Mail size={16} />
                <span className="hidden xl:block">contact@realestatepro.com</span>
              </motion.a>
            </div>
            <motion.button
              onClick={handleContactClick}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 }}
              className="btn-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Free Valuation
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            onClick={toggleMenu}
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            aria-label="Toggle mobile menu"
          >
            {isMenuOpen ? (
              <X size={24} className="text-gray-700" />
            ) : (
              <Menu size={24} className="text-gray-700" />
            )}
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <motion.div
          initial={false}
          animate={{ 
            height: isMenuOpen ? 'auto' : 0,
            opacity: isMenuOpen ? 1 : 0 
          }}
          transition={{ duration: 0.3 }}
          className="lg:hidden overflow-hidden bg-white rounded-lg shadow-lg mt-2"
          style={{ 
            display: isMenuOpen ? 'block' : 'none'
          }}
        >
          <div className="py-4 space-y-2">
            {navigationItems.map((item, index) => (
              <motion.a
                key={item.label}
                href={item.href}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="block px-4 py-2 text-gray-700 hover:text-primary-600 hover:bg-gray-50 transition-colors"
                onClick={(e) => {
                  e.preventDefault();
                  const section = document.querySelector(item.href);
                  if (section) {
                    section.scrollIntoView({ behavior: 'smooth' });
                  }
                  setIsMenuOpen(false);
                }}
              >
                {item.label}
              </motion.a>
            ))}
            
            <div className="border-t border-gray-200 pt-4 px-4 space-y-3">
              <a
                href="tel:+1234567890"
                className="flex items-center space-x-2 text-gray-600 hover:text-primary-600 transition-colors"
              >
                <Phone size={16} />
                <span>(123) 456-7890</span>
              </a>
              <a
                href="mailto:contact@realestatepro.com"
                className="flex items-center space-x-2 text-gray-600 hover:text-primary-600 transition-colors"
              >
                <Mail size={16} />
                <span>contact@realestatepro.com</span>
              </a>
              <button
                onClick={handleContactClick}
                className="w-full btn-primary"
              >
                Get Free Valuation
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.header>
  );
};

export default Header;