import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { 
  ArrowRight, 
  MapPin, 
  Phone, 
  Star, 
  TrendingUp, 
  Shield,
  CheckCircle,
  Loader2 
} from 'lucide-react';
import { leadCaptureSchema, type LeadCaptureFormData } from '../../lib/validation';

const Hero: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset
  } = useForm<LeadCaptureFormData>({
    resolver: zodResolver(leadCaptureSchema),
    mode: 'onChange',
  });

  const onSubmit = async (data: LeadCaptureFormData) => {
    setIsSubmitting(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Here you would typically send the data to your backend
      console.log('Form submitted:', data);
      
      setSubmitSuccess(true);
      reset();
      
      // Reset success state after 5 seconds
      setTimeout(() => setSubmitSuccess(false), 5000);
      
    } catch (error) {
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const trustIndicators = [
    { icon: Star, label: '4.9/5 Rating', value: '500+ Reviews' },
    { icon: TrendingUp, label: '$50M+', value: 'Properties Sold' },
    { icon: Shield, label: '15+ Years', value: 'Experience' },
  ];

  const propertyTypeOptions = [
    { value: 'buy', label: 'Buy a Property' },
    { value: 'sell', label: 'Sell My Property' },
    { value: 'valuation', label: 'Get Free Valuation' },
    { value: 'consultation', label: 'Schedule Consultation' },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-50 via-white to-blue-50">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-secondary-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-20 w-72 h-72 bg-accent-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="container mx-auto container-padding relative z-10 pt-20 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Location Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg"
            >
              <MapPin size={16} className="text-primary-600" />
              <span className="text-sm font-medium text-gray-700">Serving Greater Metropolitan Area</span>
            </motion.div>

            {/* Main Headline */}
            <div className="space-y-4">
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
              >
                <span className="text-gray-900">Find Your</span>
                <br />
                <span className="text-gradient">Dream Home</span>
                <br />
                <span className="text-gray-900">Today</span>
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-lg"
              >
                Expert guidance, personalized service, and proven results. 
                Let us help you navigate the real estate market with confidence.
              </motion.p>
            </div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="grid grid-cols-3 gap-6"
            >
              {trustIndicators.map((indicator, index) => {
                const IconComponent = indicator.icon;
                return (
                  <motion.div
                    key={indicator.label}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.6 + index * 0.1 }}
                    className="text-center"
                  >
                    <div className="flex items-center justify-center mb-2">
                      <IconComponent size={20} className="text-primary-600 mr-1" />
                      <span className="text-lg font-bold text-gray-900">{indicator.value}</span>
                    </div>
                    <span className="text-sm text-gray-600">{indicator.label}</span>
                  </motion.div>
                );
              })}
            </motion.div>

            {/* CTA Buttons for larger screens */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="hidden lg:flex items-center space-x-4"
            >
              <button
                onClick={() => {
                  const form = document.getElementById('lead-form');
                  if (form) {
                    form.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="btn-primary flex items-center space-x-2 group"
              >
                <span>Get Started</span>
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
              
              <a
                href="tel:+1234567890"
                className="btn-secondary flex items-center space-x-2"
              >
                <Phone size={18} />
                <span>Call Now</span>
              </a>
            </motion.div>
          </motion.div>

          {/* Right Column - Lead Capture Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="bg-white rounded-2xl shadow-2xl p-8 relative z-10">
              {submitSuccess ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-8 space-y-4"
                >
                  <CheckCircle size={48} className="text-green-500 mx-auto" />
                  <h3 className="text-2xl font-bold text-gray-900">Thank You!</h3>
                  <p className="text-gray-600">
                    We've received your information and will contact you within 1 hour during business hours.
                  </p>
                </motion.div>
              ) : (
                <>
                  <div className="text-center mb-6">
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">
                      Get Your Free Property Analysis
                    </h2>
                    <p className="text-gray-600">
                      Discover your property's current market value in under 2 minutes
                    </p>
                  </div>

                  <form id="lead-form" onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    {/* Name Field */}
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        {...register('name')}
                        type="text"
                        id="name"
                        placeholder="Enter your full name"
                        className={`input-field ${errors.name ? 'error-input' : ''}`}
                      />
                      {errors.name && (
                        <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
                      )}
                    </div>

                    {/* Email Field */}
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        {...register('email')}
                        type="email"
                        id="email"
                        placeholder="Enter your email address"
                        className={`input-field ${errors.email ? 'error-input' : ''}`}
                      />
                      {errors.email && (
                        <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
                      )}
                    </div>

                    {/* Phone Field */}
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number *
                      </label>
                      <input
                        {...register('phone')}
                        type="tel"
                        id="phone"
                        placeholder="(123) 456-7890"
                        className={`input-field ${errors.phone ? 'error-input' : ''}`}
                      />
                      {errors.phone && (
                        <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>
                      )}
                    </div>

                    {/* Property Type Field */}
                    <div>
                      <label htmlFor="propertyType" className="block text-sm font-medium text-gray-700 mb-2">
                        I'm Interested In *
                      </label>
                      <select
                        {...register('propertyType')}
                        id="propertyType"
                        className={`input-field ${errors.propertyType ? 'error-input' : ''}`}
                      >
                        <option value="">Select an option</option>
                        {propertyTypeOptions.map((option) => (
                          <option key={option.value} value={option.value}>
                            {option.label}
                          </option>
                        ))}
                      </select>
                      {errors.propertyType && (
                        <p className="mt-1 text-sm text-red-600">{errors.propertyType.message}</p>
                      )}
                    </div>

                    {/* Optional Message Field */}
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                        Additional Information (Optional)
                      </label>
                      <textarea
                        {...register('message')}
                        id="message"
                        rows={3}
                        placeholder="Tell us more about your needs..."
                        className={`input-field resize-none ${errors.message ? 'error-input' : ''}`}
                      />
                      {errors.message && (
                        <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>
                      )}
                    </div>

                    {/* Submit Button */}
                    <motion.button
                      type="submit"
                      disabled={isSubmitting || !isValid}
                      whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className={`w-full py-4 px-6 rounded-lg font-semibold text-white transition-all duration-200 flex items-center justify-center space-x-2 ${
                        isSubmitting || !isValid
                          ? 'bg-gray-400 cursor-not-allowed'
                          : 'bg-primary-600 hover:bg-primary-700 shadow-lg hover:shadow-xl'
                      }`}
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 size={20} className="animate-spin" />
                          <span>Submitting...</span>
                        </>
                      ) : (
                        <>
                          <span>Get My Free Analysis</span>
                          <ArrowRight size={20} />
                        </>
                      )}
                    </motion.button>

                    {/* Privacy Note */}
                    <p className="text-xs text-gray-500 text-center">
                      We respect your privacy. Your information is secure and will never be shared.
                    </p>
                  </form>
                </>
              )}
            </div>

            {/* Form Background Decoration */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary-100 rounded-full -z-10"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-secondary-100 rounded-full -z-10"></div>
          </motion.div>
        </div>

        {/* Mobile CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className="lg:hidden flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 mt-12"
        >
          <button
            onClick={() => {
              const form = document.getElementById('lead-form');
              if (form) {
                form.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="btn-primary w-full sm:w-auto flex items-center justify-center space-x-2 group"
          >
            <span>Get Started</span>
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </button>
          
          <a
            href="tel:+1234567890"
            className="btn-secondary w-full sm:w-auto flex items-center justify-center space-x-2"
          >
            <Phone size={18} />
            <span>Call Now</span>
          </a>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-gray-400 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;