import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Star, 
  Quote, 
  ChevronLeft, 
  ChevronRight, 
  MapPin, 
  Calendar, 
  TrendingUp, 
  Award, 
  Users, 
  CheckCircle,
  Heart,
  Home,
  DollarSign
} from 'lucide-react';

const Testimonials: React.FC = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const testimonials = [
    {
      id: 1,
      name: "Sarah & Michael Johnson",
      location: "Downtown Metro",
      propertyType: "First Home Purchase",
      rating: 5,
      date: "March 2024",
      result: "Saved $15,000 under asking price",
      avatar: "SJ",
      avatarBg: "bg-gradient-to-br from-pink-400 to-purple-500",
      testimonial: "Jane made our first home buying experience absolutely seamless. She was incredibly patient with all our questions and helped us navigate the competitive market. Her negotiation skills saved us $15,000 off the asking price! We couldn't have asked for a better agent.",
      details: {
        timeframe: "Found perfect home in 3 weeks",
        savings: "$15,000 under asking",
        experience: "First-time buyers"
      }
    },
    {
      id: 2,
      name: "Robert Chen",
      location: "Suburban Heights",
      propertyType: "Luxury Home Sale",
      rating: 5,
      date: "February 2024",
      result: "Sold 20% above market value",
      avatar: "RC",
      avatarBg: "bg-gradient-to-br from-blue-400 to-cyan-500",
      testimonial: "Outstanding service from start to finish! Jane's marketing strategy and professional photography showcased our home beautifully. We received multiple offers within the first week and sold for 20% above our initial asking price. Her expertise in the luxury market is unmatched.",
      details: {
        timeframe: "Sold in 8 days",
        premium: "20% above asking",
        experience: "Luxury market expert"
      }
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      location: "Investment District",
      propertyType: "Investment Property",
      rating: 5,
      date: "January 2024",
      result: "12% ROI within first year",
      avatar: "ER",
      avatarBg: "bg-gradient-to-br from-green-400 to-emerald-500",
      testimonial: "Jane's investment expertise helped me build a profitable rental portfolio. She identified high-potential properties and provided detailed ROI analysis for each option. The property she recommended is already generating 12% annual returns. I'm definitely working with her for future investments.",
      details: {
        timeframe: "Portfolio of 3 properties",
        returns: "12% annual ROI",
        experience: "Investment specialist"
      }
    },
    {
      id: 4,
      name: "David & Lisa Thompson",
      location: "Family Suburbs",
      propertyType: "Family Home Upgrade",
      rating: 5,
      date: "December 2023",
      result: "Perfect home for growing family",
      avatar: "DT",
      avatarBg: "bg-gradient-to-br from-orange-400 to-red-500",
      testimonial: "With our family growing, we needed more space but weren't sure we could afford it. Jane showed us creative financing options and found us the perfect home within our budget. Her attention to our family's needs and timeline was exceptional.",
      details: {
        timeframe: "Moved in before holidays",
        achievement: "Stayed within budget",
        experience: "Family-focused service"
      }
    },
    {
      id: 5,
      name: "Jennifer Martinez",
      location: "Urban Lofts",
      propertyType: "Condo Purchase",
      rating: 5,
      date: "November 2023",
      result: "Found dream condo in perfect location",
      avatar: "JM",
      avatarBg: "bg-gradient-to-br from-indigo-400 to-purple-500",
      testimonial: "As a busy professional, I needed someone who could handle everything efficiently. Jane understood my lifestyle needs and found me a stunning condo with amazing city views. The entire process was smooth and stress-free. I love my new home!",
      details: {
        timeframe: "Closed in 3 weeks",
        achievement: "Perfect location match",
        experience: "Professional lifestyle focus"
      }
    },
    {
      id: 6,
      name: "Mark & Carol Williams",
      location: "Retirement Community",
      propertyType: "Downsizing",
      rating: 5,
      date: "October 2023",
      result: "Smooth transition to retirement home",
      avatar: "MW",
      avatarBg: "bg-gradient-to-br from-teal-400 to-blue-500",
      testimonial: "After 30 years in our family home, downsizing felt overwhelming. Jane made the transition so much easier. She helped us sell our large home quickly and found us a perfect retirement community. Her patience and understanding meant everything to us.",
      details: {
        timeframe: "Seamless transition",
        achievement: "Found perfect retirement home",
        experience: "Senior-focused expertise"
      }
    }
  ];

  const stats = [
    { icon: Users, number: "98%", label: "Client Satisfaction", color: "text-green-600" },
    { icon: Star, number: "4.9/5", label: "Average Rating", color: "text-yellow-500" },
    { icon: TrendingUp, number: "15%", label: "Above Market Sales", color: "text-blue-600" },
    { icon: Award, number: "50+", label: "5-Star Reviews", color: "text-purple-600" }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const timer = setInterval(() => {
      nextTestimonial();
    }, 5000);

    return () => clearInterval(timer);
  }, [isAutoPlaying, currentTestimonial]);

  const current = testimonials[currentTestimonial];

  return (
    <section id="testimonials" className="section-padding bg-gradient-to-br from-gray-50 to-white">
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
            Client <span className="text-gradient">Success Stories</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our clients say about their 
            real estate experience with us.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {stats.map((stat, index) => {
            const StatIcon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6 bg-white rounded-2xl shadow-card"
              >
                <StatIcon size={32} className={`${stat.color} mx-auto mb-2`} />
                <div className="text-2xl font-bold text-gray-900 mb-1">{stat.number}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Main Testimonial Carousel */}
        <div className="relative mb-16">
          <div 
            className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 relative overflow-hidden"
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
          >
            {/* Quote Icon */}
            <div className="absolute top-6 right-6 opacity-10">
              <Quote size={80} className="text-primary-600" />
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={current.id}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className="relative z-10"
              >
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
                  
                  {/* Client Info */}
                  <div className="text-center lg:text-left">
                    {/* Avatar */}
                    <div className={`w-24 h-24 ${current.avatarBg} rounded-full mx-auto lg:mx-0 mb-4 flex items-center justify-center text-white text-2xl font-bold shadow-lg`}>
                      {current.avatar}
                    </div>
                    
                    {/* Client Details */}
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{current.name}</h3>
                    
                    <div className="space-y-2 text-sm text-gray-600 mb-4">
                      <div className="flex items-center justify-center lg:justify-start space-x-2">
                        <MapPin size={16} className="text-primary-600" />
                        <span>{current.location}</span>
                      </div>
                      <div className="flex items-center justify-center lg:justify-start space-x-2">
                        <Calendar size={16} className="text-primary-600" />
                        <span>{current.date}</span>
                      </div>
                      <div className="flex items-center justify-center lg:justify-start space-x-2">
                        <Home size={16} className="text-primary-600" />
                        <span>{current.propertyType}</span>
                      </div>
                    </div>

                    {/* Rating */}
                    <div className="flex items-center justify-center lg:justify-start space-x-1 mb-4">
                      {[...Array(current.rating)].map((_, i) => (
                        <Star key={i} size={18} className="text-yellow-400 fill-current" />
                      ))}
                    </div>

                    {/* Result Badge */}
                    <div className="inline-flex items-center space-x-2 bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium">
                      <TrendingUp size={16} />
                      <span>{current.result}</span>
                    </div>
                  </div>

                  {/* Testimonial Content */}
                  <div className="lg:col-span-2">
                    <blockquote className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6 italic">
                      "{current.testimonial}"
                    </blockquote>

                    {/* Details Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {Object.entries(current.details).map(([key, value]) => (
                        <div key={key} className="flex items-center space-x-2 p-3 bg-gray-50 rounded-lg">
                          <CheckCircle size={16} className="text-green-500 flex-shrink-0" />
                          <span className="text-sm text-gray-700">{value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Buttons */}
            <div className="absolute top-1/2 -translate-y-1/2 left-4 right-4 flex justify-between pointer-events-none">
              <motion.button
                onClick={prevTestimonial}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="w-12 h-12 bg-white hover:bg-gray-50 rounded-full shadow-lg flex items-center justify-center pointer-events-auto transition-colors"
              >
                <ChevronLeft size={24} className="text-gray-600" />
              </motion.button>
              
              <motion.button
                onClick={nextTestimonial}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="w-12 h-12 bg-white hover:bg-gray-50 rounded-full shadow-lg flex items-center justify-center pointer-events-auto transition-colors"
              >
                <ChevronRight size={24} className="text-gray-600" />
              </motion.button>
            </div>
          </div>

          {/* Testimonial Indicators */}
          <div className="flex justify-center space-x-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentTestimonial 
                    ? 'bg-primary-600 scale-125' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>

        {/* All Testimonials Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            More Happy Clients
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.slice(0, 6).map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-2xl shadow-card hover:shadow-xl transition-shadow duration-300"
              >
                {/* Client Header */}
                <div className="flex items-center space-x-4 mb-4">
                  <div className={`w-12 h-12 ${testimonial.avatarBg} rounded-full flex items-center justify-center text-white font-bold`}>
                    {testimonial.avatar}
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                    <div className="flex items-center space-x-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} size={14} className="text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>
                </div>

                {/* Testimonial Text */}
                <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-4">
                  "{testimonial.testimonial}"
                </p>

                {/* Result */}
                <div className="flex items-center space-x-2 text-sm">
                  <DollarSign size={16} className="text-green-500" />
                  <span className="text-green-700 font-medium">{testimonial.result}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center bg-gradient-to-r from-primary-600 to-secondary-600 rounded-3xl p-12 text-white"
        >
          <Heart size={48} className="text-white mx-auto mb-6" />
          <h3 className="text-3xl font-bold mb-4">Ready to Join Our Success Stories?</h3>
          <p className="text-primary-100 mb-8 max-w-2xl mx-auto text-lg">
            Experience the same exceptional service that has made our clients so happy. 
            Let's create your success story together.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
            <motion.button
              onClick={() => {
                const heroForm = document.getElementById('lead-form');
                if (heroForm) {
                  heroForm.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white hover:bg-gray-50 text-primary-600 font-semibold py-4 px-8 rounded-xl transition-colors shadow-lg"
            >
              Start Your Journey
            </motion.button>
            
            <motion.a
              href="tel:+1234567890"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-transparent hover:bg-white/10 text-white border-2 border-white font-semibold py-4 px-8 rounded-xl transition-colors"
            >
              Call (123) 456-7890
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;