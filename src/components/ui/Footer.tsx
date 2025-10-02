import React from 'react';
import { motion } from 'framer-motion';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Facebook, 
  Instagram, 
  Twitter, 
  Linkedin,
  Home,
  Award,
  Users,
  Star
} from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const contactInfo = {
    phone: '(123) 456-7890',
    email: 'contact@realestatepro.com',
    address: '123 Main Street, Downtown, City, State 12345',
  };

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
  ];

  const quickLinks = [
    { label: 'Buy Properties', href: '#buy' },
    { label: 'Sell Properties', href: '#sell' },
    { label: 'Property Valuation', href: '#valuation' },
    { label: 'Market Analysis', href: '#market' },
    { label: 'Investment Opportunities', href: '#investment' },
  ];

  const services = [
    { label: 'Residential Sales', href: '#residential' },
    { label: 'Commercial Properties', href: '#commercial' },
    { label: 'Property Management', href: '#management' },
    { label: 'Real Estate Consulting', href: '#consulting' },
    { label: 'First Time Buyers', href: '#buyers' },
  ];

  const achievements = [
    { icon: Home, number: '500+', label: 'Properties Sold' },
    { icon: Users, number: '1000+', label: 'Happy Clients' },
    { icon: Award, number: '15+', label: 'Years Experience' },
    { icon: Star, number: '4.9', label: 'Average Rating' },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto container-padding section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-primary-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">R</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold">RealEstate Pro</span>
                <span className="text-sm text-gray-400">Premium Properties</span>
              </div>
            </div>
            
            <p className="text-gray-300 text-sm leading-relaxed">
              Your trusted partner in real estate. We provide exceptional service, 
              expert guidance, and personalized solutions for all your property needs.
            </p>

            {/* Achievements */}
            <div className="grid grid-cols-2 gap-4">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={achievement.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="flex items-center justify-center mb-1">
                    <achievement.icon size={16} className="text-primary-400 mr-1" />
                    <span className="text-lg font-bold text-white">{achievement.number}</span>
                  </div>
                  <span className="text-xs text-gray-400">{achievement.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-lg font-semibold text-white">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <motion.li
                  key={link.label}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  viewport={{ once: true }}
                >
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-primary-400 text-sm transition-colors duration-200 flex items-center group"
                  >
                    <span className="w-1 h-1 bg-primary-400 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {link.label}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-lg font-semibold text-white">Our Services</h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <motion.li
                  key={service.label}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  viewport={{ once: true }}
                >
                  <a
                    href={service.href}
                    className="text-gray-300 hover:text-primary-400 text-sm transition-colors duration-200 flex items-center group"
                  >
                    <span className="w-1 h-1 bg-primary-400 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {service.label}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-lg font-semibold text-white">Contact Us</h3>
            <div className="space-y-4">
              <motion.a
                href={`tel:${contactInfo.phone}`}
                whileHover={{ x: 5 }}
                className="flex items-center space-x-3 text-gray-300 hover:text-primary-400 transition-colors duration-200 group"
              >
                <Phone size={18} className="text-primary-400 group-hover:scale-110 transition-transform" />
                <span className="text-sm">{contactInfo.phone}</span>
              </motion.a>
              
              <motion.a
                href={`mailto:${contactInfo.email}`}
                whileHover={{ x: 5 }}
                className="flex items-center space-x-3 text-gray-300 hover:text-primary-400 transition-colors duration-200 group"
              >
                <Mail size={18} className="text-primary-400 group-hover:scale-110 transition-transform" />
                <span className="text-sm">{contactInfo.email}</span>
              </motion.a>
              
              <motion.div
                whileHover={{ x: 5 }}
                className="flex items-start space-x-3 text-gray-300 group"
              >
                <MapPin size={18} className="text-primary-400 mt-0.5 group-hover:scale-110 transition-transform" />
                <span className="text-sm leading-relaxed">{contactInfo.address}</span>
              </motion.div>
            </div>

            {/* Social Links */}
            <div className="space-y-4">
              <h4 className="text-md font-medium text-white">Follow Us</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    whileHover={{ scale: 1.1, y: -2 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="w-10 h-10 bg-gray-800 hover:bg-primary-600 rounded-lg flex items-center justify-center transition-colors duration-200 group"
                    aria-label={social.label}
                  >
                    <social.icon size={18} className="text-gray-400 group-hover:text-white transition-colors" />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Bar */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="border-t border-gray-800"
      >
        <div className="container mx-auto container-padding py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-gray-400 text-center md:text-left">
              <p>&copy; {currentYear} RealEstate Pro. All rights reserved.</p>
            </div>
            
            <div className="flex flex-wrap justify-center md:justify-end space-x-6 text-sm">
              <a href="#privacy" className="text-gray-400 hover:text-primary-400 transition-colors">
                Privacy Policy
              </a>
              <a href="#terms" className="text-gray-400 hover:text-primary-400 transition-colors">
                Terms of Service
              </a>
              <a href="#cookies" className="text-gray-400 hover:text-primary-400 transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;