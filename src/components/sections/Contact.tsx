import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send,
  CheckCircle,
  AlertCircle,
  Calendar,
  MessageSquare,
  Home,
  Star,
  Award,
  Users,
  Building,
  Navigation
} from 'lucide-react';
import { contactFormSchema, type ContactFormData } from '../../lib/validation';

const Contact: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema)
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      console.log('Contact form data:', data);
      setSubmitStatus('success');
      reset();
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Call Direct',
      value: '(555) 123-4567',
      description: 'Available 7 days a week',
      action: 'tel:+15551234567',
      color: 'bg-primary-500'
    },
    {
      icon: Mail,
      title: 'Email',
      value: 'jane@realestatepro.com',
      description: 'Quick response guaranteed',
      action: 'mailto:jane@realestatepro.com',
      color: 'bg-secondary-500'
    },
    {
      icon: MessageSquare,
      title: 'Text Message',
      value: '(555) 123-4567',
      description: 'Fast response via SMS',
      action: 'sms:+15551234567',
      color: 'bg-accent-500'
    },
    {
      icon: Calendar,
      title: 'Schedule Meeting',
      value: 'Book Consultation',
      description: 'Free 30-minute consultation',
      action: '#schedule',
      color: 'bg-green-500'
    }
  ];

  const officeInfo = {
    address: '123 Main Street, Suite 200',
    city: 'Metropolitan City, ST 12345',
    hours: [
      { day: 'Monday - Friday', time: '8:00 AM - 7:00 PM' },
      { day: 'Saturday', time: '9:00 AM - 6:00 PM' },
      { day: 'Sunday', time: '10:00 AM - 4:00 PM' }
    ],
    parking: 'Free parking available',
    accessibility: 'Wheelchair accessible'
  };

  const achievements = [
    { icon: Star, value: '4.9/5', label: 'Client Rating' },
    { icon: Home, value: '500+', label: 'Homes Sold' },
    { icon: Users, value: '1000+', label: 'Happy Clients' },
    { icon: Award, value: '15+', label: 'Years Experience' }
  ];

  return (
    <section id="contact" className="section-padding bg-gradient-to-br from-gray-50 to-white">
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
            Let's <span className="text-gradient">Connect</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to start your real estate journey? Contact me today for a free consultation 
            and personalized market analysis.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-16">
          
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Send Me a Message</h3>
              <p className="text-gray-600 mb-6">
                Fill out the form below and I'll get back to you within 24 hours with a 
                personalized response and market insights.
              </p>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                    First Name *
                  </label>
                  <input
                    {...register('firstName')}
                    type="text"
                    id="firstName"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                    placeholder="John"
                  />
                  {errors.firstName && (
                    <p className="mt-1 text-sm text-red-600 flex items-center">
                      <AlertCircle size={16} className="mr-1" />
                      {errors.firstName.message}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                    Last Name *
                  </label>
                  <input
                    {...register('lastName')}
                    type="text"
                    id="lastName"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                    placeholder="Doe"
                  />
                  {errors.lastName && (
                    <p className="mt-1 text-sm text-red-600 flex items-center">
                      <AlertCircle size={16} className="mr-1" />
                      {errors.lastName.message}
                    </p>
                  )}
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  {...register('email')}
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                  placeholder="john@example.com"
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-600 flex items-center">
                    <AlertCircle size={16} className="mr-1" />
                    {errors.email.message}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number
                </label>
                <input
                  {...register('phone')}
                  type="tel"
                  id="phone"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                  placeholder="(555) 123-4567"
                />
                {errors.phone && (
                  <p className="mt-1 text-sm text-red-600 flex items-center">
                    <AlertCircle size={16} className="mr-1" />
                    {errors.phone.message}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="propertyType" className="block text-sm font-medium text-gray-700 mb-2">
                  I'm Interested In *
                </label>
                <select
                  {...register('propertyType')}
                  id="propertyType"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                >
                  <option value="">Select your interest...</option>
                  <option value="buying">Buying a Home</option>
                  <option value="selling">Selling a Home</option>
                  <option value="investing">Investment Properties</option>
                  <option value="consultation">Market Consultation</option>
                  <option value="other">Other</option>
                </select>
                {errors.propertyType && (
                  <p className="mt-1 text-sm text-red-600 flex items-center">
                    <AlertCircle size={16} className="mr-1" />
                    {errors.propertyType.message}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  {...register('message')}
                  id="message"
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors resize-none"
                  placeholder="Tell me about your real estate goals, timeline, or any questions you have..."
                />
                {errors.message && (
                  <p className="mt-1 text-sm text-red-600 flex items-center">
                    <AlertCircle size={16} className="mr-1" />
                    {errors.message.message}
                  </p>
                )}
              </div>

              {submitStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="p-4 bg-green-50 border border-green-200 rounded-lg"
                >
                  <div className="flex items-center text-green-800">
                    <CheckCircle size={20} className="mr-2" />
                    <span className="font-medium">Message sent successfully! I'll be in touch within 24 hours.</span>
                  </div>
                </motion.div>
              )}

              {submitStatus === 'error' && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="p-4 bg-red-50 border border-red-200 rounded-lg"
                >
                  <div className="flex items-center text-red-800">
                    <AlertCircle size={20} className="mr-2" />
                    <span className="font-medium">There was an error sending your message. Please try again.</span>
                  </div>
                </motion.div>
              )}

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-primary-600 hover:bg-primary-700 text-white font-semibold py-4 px-6 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <Send size={18} />
                    <span>Send Message</span>
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={info.title}
                    href={info.action}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.03, y: -2 }}
                    className="block p-4 bg-white rounded-xl border border-gray-200 hover:shadow-lg transition-all duration-300"
                  >
                    <div className={`w-10 h-10 ${info.color} rounded-lg mb-3 flex items-center justify-center`}>
                      <info.icon size={20} className="text-white" />
                    </div>
                    <h4 className="font-semibold text-gray-900 mb-1">{info.title}</h4>
                    <p className="text-primary-600 font-medium mb-1">{info.value}</p>
                    <p className="text-sm text-gray-500">{info.description}</p>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Office Information */}
            <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
              <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                <Building size={24} className="text-primary-600 mr-2" />
                Office Location
              </h4>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin size={20} className="text-gray-500 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-gray-900">{officeInfo.address}</p>
                    <p className="text-gray-600">{officeInfo.city}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Clock size={20} className="text-gray-500 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-gray-900 mb-2">Office Hours</p>
                    {officeInfo.hours.map((hour, index) => (
                      <p key={index} className="text-sm text-gray-600">
                        <span className="font-medium">{hour.day}:</span> {hour.time}
                      </p>
                    ))}
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Navigation size={20} className="text-gray-500 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-sm text-gray-600">{officeInfo.parking}</p>
                    <p className="text-sm text-gray-600">{officeInfo.accessibility}</p>
                  </div>
                </div>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full mt-6 bg-gray-100 hover:bg-gray-200 text-gray-900 font-medium py-3 px-4 rounded-lg transition-colors flex items-center justify-center space-x-2"
              >
                <MapPin size={18} />
                <span>Get Directions</span>
              </motion.button>
            </div>

            {/* Quick Stats */}
            <div className="bg-gradient-to-r from-primary-50 to-secondary-50 rounded-2xl p-6">
              <h4 className="text-lg font-bold text-gray-900 mb-4">Why Choose Me</h4>
              <div className="grid grid-cols-2 gap-4">
                {achievements.map((achievement, index) => (
                  <motion.div
                    key={achievement.label}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="text-center"
                  >
                    <div className="w-12 h-12 bg-white rounded-xl mx-auto mb-2 flex items-center justify-center shadow-sm">
                      <achievement.icon size={24} className="text-primary-600" />
                    </div>
                    <p className="text-2xl font-bold text-gray-900">{achievement.value}</p>
                    <p className="text-sm text-gray-600">{achievement.label}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Map Placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-gray-200 rounded-2xl h-64 md:h-80 flex items-center justify-center"
        >
          <div className="text-center">
            <MapPin size={48} className="text-gray-500 mx-auto mb-4" />
            <h4 className="text-xl font-semibold text-gray-700 mb-2">Interactive Map</h4>
            <p className="text-gray-500">Office location and service areas</p>
            <p className="text-sm text-gray-400 mt-2">Map integration coming soon</p>
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16 p-8 bg-gradient-to-r from-primary-600 to-secondary-600 rounded-2xl text-white"
        >
          <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
          <p className="text-primary-100 mb-6 max-w-2xl mx-auto">
            Don't wait for the perfect moment. In real estate, timing is everything. 
            Contact me today and let's discuss how I can help you achieve your goals.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
            <motion.a
              href="tel:+15551234567"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-primary-600 hover:bg-gray-100 font-semibold py-3 px-6 rounded-lg transition-colors flex items-center space-x-2"
            >
              <Phone size={18} />
              <span>Call Now</span>
            </motion.a>
            
            <motion.button
              onClick={() => {
                const heroForm = document.getElementById('lead-form');
                if (heroForm) {
                  heroForm.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary-600 font-semibold py-3 px-6 rounded-lg transition-colors flex items-center space-x-2"
            >
              <Calendar size={18} />
              <span>Schedule Meeting</span>
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;