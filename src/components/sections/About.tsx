import React from 'react';
import { motion } from 'framer-motion';
import { 
  Award, 
  MapPin, 
  TrendingUp, 
  Users, 
  Star, 
  CheckCircle, 
  Phone, 
  Mail, 
  Calendar,
  Home,
  Target,
  Handshake
} from 'lucide-react';

const About: React.FC = () => {
  const achievements = [
    { 
      icon: Home, 
      number: '500+', 
      label: 'Properties Sold',
      description: 'Successfully closed transactions worth over $50M'
    },
    { 
      icon: Users, 
      number: '1000+', 
      label: 'Happy Clients',
      description: 'Satisfied buyers and sellers across the metro area'
    },
    { 
      icon: Award, 
      number: '15+', 
      label: 'Years Experience',
      description: 'Navigating all market conditions with expertise'
    },
    { 
      icon: Star, 
      number: '4.9/5', 
      label: 'Client Rating',
      description: 'Consistently rated among top agents'
    },
  ];

  const certifications = [
    'Certified Residential Specialist (CRS)',
    'Accredited Buyer\'s Representative (ABR)',
    'Graduate, REALTOR® Institute (GRI)',
    'Senior Real Estate Specialist (SRES)',
    'Real Estate Negotiation Expert (RENE)',
    'Luxury Home Marketing Specialist',
  ];

  const services = [
    {
      icon: Target,
      title: 'Buyer Representation',
      description: 'Expert guidance through every step of the home buying process, from search to closing.',
      features: ['Market Analysis', 'Negotiation', 'Inspection Support', 'Closing Coordination']
    },
    {
      icon: TrendingUp,
      title: 'Seller Services',
      description: 'Comprehensive marketing strategy to maximize your property\'s value and minimize time on market.',
      features: ['Pricing Strategy', 'Professional Photography', 'Marketing Campaign', 'Negotiation']
    },
    {
      icon: Handshake,
      title: 'Investment Consultation',
      description: 'Strategic advice for real estate investors looking to build wealth through property.',
      features: ['Market Research', 'ROI Analysis', 'Portfolio Strategy', 'Investment Opportunities']
    },
  ];

  const marketExpertise = [
    'Downtown Metropolitan Area',
    'Suburban Family Communities',
    'Luxury Properties ($500K+)',
    'First-Time Homebuyers',
    'Investment Properties',
    'Commercial Real Estate',
  ];

  return (
    <section id="about" className="section-padding bg-white">
      <div className="container mx-auto container-padding">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            About <span className="text-gradient">Your Agent</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            With over 15 years of experience in the local market, I provide expert guidance 
            and personalized service to help you achieve your real estate goals.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          
          {/* Agent Photo and Bio */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Professional Photo */}
            <div className="relative">
              <div className="w-80 h-96 mx-auto lg:mx-0 bg-gradient-to-br from-primary-100 to-secondary-100 rounded-2xl shadow-2xl overflow-hidden">
                <img 
                  src="https://avatar-placeholder.iran.liara.run/female?username=jane-smith"
                  alt="Jane Smith - Real Estate Professional"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-accent-200 rounded-full opacity-60"></div>
              <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-primary-200 rounded-full opacity-60"></div>
            </div>
          </motion.div>

          {/* Bio Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-bold text-gray-900">Jane Smith</h3>
            <p className="text-lg text-primary-600 font-semibold">Senior Real Estate Advisor</p>
            
            <div className="prose prose-lg text-gray-600">
              <p>
                Welcome! I'm Jane Smith, a dedicated real estate professional with over 15 years 
                of experience helping families find their perfect homes in the Greater Metropolitan Area. 
                My passion for real estate stems from the joy of helping people achieve their dreams 
                of homeownership.
              </p>
              
              <p>
                Throughout my career, I've had the privilege of assisting over 1,000 clients in 
                buying and selling properties worth more than $50 million. My approach is simple: 
                listen to your needs, provide expert market insights, and work tirelessly to 
                achieve your goals.
              </p>
              
              <p>
                Whether you're a first-time homebuyer, looking to upgrade, or considering an 
                investment property, I bring the experience, market knowledge, and negotiation 
                skills necessary to ensure your success in today's competitive market.
              </p>
            </div>

            {/* Quick Contact */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <motion.a
                href="tel:+1234567890"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center space-x-2 bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-lg transition-colors"
              >
                <Phone size={18} />
                <span>Call Direct</span>
              </motion.a>
              
              <motion.a
                href="mailto:jane@realestatepro.com"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center space-x-2 bg-white hover:bg-gray-50 text-primary-600 border border-primary-600 px-6 py-3 rounded-lg transition-colors"
              >
                <Mail size={18} />
                <span>Send Email</span>
              </motion.a>
            </div>
          </motion.div>
        </div>

        {/* Achievements Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20"
        >
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center p-6 bg-white rounded-2xl shadow-card border border-gray-100"
            >
              <div className="w-16 h-16 bg-primary-100 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                <achievement.icon size={32} className="text-primary-600" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">{achievement.number}</h3>
              <h4 className="text-lg font-semibold text-gray-700 mb-2">{achievement.label}</h4>
              <p className="text-sm text-gray-600">{achievement.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Services Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            How I Can Help You
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 rounded-2xl p-8 hover:shadow-card transition-shadow duration-300"
              >
                <div className="w-14 h-14 bg-primary-600 rounded-xl mb-6 flex items-center justify-center">
                  <service.icon size={28} className="text-white" />
                </div>
                
                <h4 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h4>
                <p className="text-gray-600 mb-6">{service.description}</p>
                
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center space-x-2 text-sm text-gray-600">
                      <CheckCircle size={16} className="text-green-500 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Credentials and Expertise */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-gray-900">Professional Certifications</h3>
            <div className="space-y-3">
              {certifications.map((cert, index) => (
                <motion.div
                  key={cert}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center space-x-3 p-3 bg-white rounded-lg border border-gray-200"
                >
                  <Award size={20} className="text-primary-600 flex-shrink-0" />
                  <span className="text-gray-700 font-medium">{cert}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Market Expertise */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-gray-900">Market Expertise</h3>
            <div className="space-y-3">
              {marketExpertise.map((area, index) => (
                <motion.div
                  key={area}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center space-x-3 p-3 bg-white rounded-lg border border-gray-200"
                >
                  <MapPin size={20} className="text-secondary-600 flex-shrink-0" />
                  <span className="text-gray-700 font-medium">{area}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16 p-8 bg-gradient-to-r from-primary-50 to-secondary-50 rounded-2xl"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Ready to Start Your Real Estate Journey?
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Let's discuss your goals and create a personalized strategy to help you succeed 
            in today's market. Schedule a free consultation today.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
            <motion.button
              onClick={() => {
                const heroForm = document.getElementById('lead-form');
                if (heroForm) {
                  heroForm.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary flex items-center space-x-2"
            >
              <Calendar size={18} />
              <span>Schedule Consultation</span>
            </motion.button>
            
            <motion.a
              href="tel:+1234567890"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-secondary flex items-center space-x-2"
            >
              <Phone size={18} />
              <span>Call Now</span>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;