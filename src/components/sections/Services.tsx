import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Home, 
  TrendingUp, 
  Building, 
  Calculator, 
  Search, 
  Camera, 
  FileText, 
  Handshake, 
  MapPin, 
  DollarSign, 
  Clock, 
  CheckCircle, 
  Users, 
  Award, 
  Target, 
  PieChart,
  Briefcase,
  Heart,
  Shield,
  Zap
} from 'lucide-react';

const Services: React.FC = () => {
  const [activeTab, setActiveTab] = useState('buyers');

  const serviceCategories = [
    { id: 'buyers', label: 'Home Buyers', icon: Home },
    { id: 'sellers', label: 'Home Sellers', icon: TrendingUp },
    { id: 'investors', label: 'Investors', icon: Building },
    { id: 'consultation', label: 'Consultation', icon: Briefcase },
  ];

  const buyerServices = {
    title: "Complete Buyer Representation",
    subtitle: "Your trusted guide through every step of the home buying journey",
    description: "From first-time buyers to seasoned investors, I provide comprehensive support to help you find and secure your perfect property.",
    process: [
      {
        step: 1,
        title: "Initial Consultation",
        description: "We'll discuss your needs, budget, timeline, and preferences to create a targeted search strategy.",
        icon: Users,
        duration: "1 hour"
      },
      {
        step: 2,
        title: "Pre-Approval & Financing",
        description: "Connect with trusted lenders to get pre-approved and understand your buying power.",
        icon: Calculator,
        duration: "1-2 days"
      },
      {
        step: 3,
        title: "Property Search",
        description: "Access exclusive listings and receive instant notifications for properties matching your criteria.",
        icon: Search,
        duration: "Ongoing"
      },
      {
        step: 4,
        title: "Property Tours",
        description: "Schedule viewings and get expert insights on each property's potential and value.",
        icon: MapPin,
        duration: "Flexible"
      },
      {
        step: 5,
        title: "Market Analysis",
        description: "Receive detailed comparative market analysis to make informed offers.",
        icon: PieChart,
        duration: "Same day"
      },
      {
        step: 6,
        title: "Offer & Negotiation",
        description: "Craft competitive offers and negotiate the best terms on your behalf.",
        icon: Handshake,
        duration: "24-48 hours"
      },
      {
        step: 7,
        title: "Closing Support",
        description: "Coordinate inspections, appraisals, and guide you through to closing day.",
        icon: CheckCircle,
        duration: "30-45 days"
      }
    ],
    features: [
      "Exclusive access to off-market properties",
      "Comprehensive market analysis for every property",
      "Professional network of inspectors, lenders, and contractors",
      "24/7 support throughout the buying process",
      "Post-purchase support and local recommendations"
    ]
  };

  const sellerServices = {
    title: "Strategic Seller Representation",
    subtitle: "Maximize your property's value with proven marketing strategies",
    description: "Get top dollar for your property with our comprehensive marketing approach and expert pricing strategy.",
    process: [
      {
        step: 1,
        title: "Property Evaluation",
        description: "Comprehensive market analysis to determine optimal pricing strategy for maximum return.",
        icon: Calculator,
        duration: "1-2 hours"
      },
      {
        step: 2,
        title: "Home Preparation",
        description: "Staging recommendations and repair suggestions to maximize appeal and value.",
        icon: Heart,
        duration: "1-2 weeks"
      },
      {
        step: 3,
        title: "Professional Photography",
        description: "High-quality photos, virtual tours, and drone footage to showcase your property.",
        icon: Camera,
        duration: "1 day"
      },
      {
        step: 4,
        title: "Marketing Launch",
        description: "Multi-channel marketing campaign including MLS, social media, and premium websites.",
        icon: Target,
        duration: "Same day"
      },
      {
        step: 5,
        title: "Showing Management",
        description: "Coordinate showings, open houses, and provide feedback from potential buyers.",
        icon: Clock,
        duration: "Ongoing"
      },
      {
        step: 6,
        title: "Offer Review",
        description: "Analyze all offers and negotiate the best terms for your situation.",
        icon: FileText,
        duration: "24-48 hours"
      },
      {
        step: 7,
        title: "Closing Coordination",
        description: "Manage all closing details to ensure a smooth transaction to completion.",
        icon: Handshake,
        duration: "30-45 days"
      }
    ],
    features: [
      "Professional staging consultation included",
      "Premium photography and virtual tours",
      "Targeted social media marketing campaigns",
      "Network of 50,000+ agent referrals",
      "Average 15% higher sale price than market average"
    ]
  };

  const investorServices = {
    title: "Investment Property Expertise",
    subtitle: "Build wealth through strategic real estate investments",
    description: "Whether you're a first-time investor or expanding your portfolio, get expert guidance on profitable investment opportunities.",
    process: [
      {
        step: 1,
        title: "Investment Strategy",
        description: "Define your investment goals, risk tolerance, and develop a customized strategy.",
        icon: Target,
        duration: "1-2 hours"
      },
      {
        step: 2,
        title: "Market Research",
        description: "Analyze market trends, rental rates, and identify high-potential neighborhoods.",
        icon: TrendingUp,
        duration: "Ongoing"
      },
      {
        step: 3,
        title: "Property Analysis",
        description: "ROI calculations, cash flow analysis, and investment potential evaluation.",
        icon: Calculator,
        duration: "Per property"
      },
      {
        step: 4,
        title: "Due Diligence",
        description: "Thorough property inspections, title research, and risk assessment.",
        icon: Shield,
        duration: "1-2 weeks"
      },
      {
        step: 5,
        title: "Financing Options",
        description: "Connect with investment-friendly lenders and explore financing strategies.",
        icon: DollarSign,
        duration: "3-5 days"
      },
      {
        step: 6,
        title: "Acquisition",
        description: "Negotiate purchase terms and manage the buying process efficiently.",
        icon: Handshake,
        duration: "30-45 days"
      },
      {
        step: 7,
        title: "Portfolio Management",
        description: "Ongoing support for property management and portfolio optimization.",
        icon: PieChart,
        duration: "Ongoing"
      }
    ],
    features: [
      "Access to off-market investment opportunities",
      "Detailed ROI and cash flow analysis",
      "Network of property managers and contractors",
      "1031 Exchange expertise and coordination",
      "Portfolio performance tracking and optimization"
    ]
  };

  const consultationServices = {
    title: "Real Estate Consultation",
    subtitle: "Expert advice for all your real estate decisions",
    description: "Get professional guidance on market conditions, property values, and strategic real estate decisions.",
    process: [
      {
        step: 1,
        title: "Needs Assessment",
        description: "Understanding your specific situation, goals, and timeline for real estate decisions.",
        icon: Users,
        duration: "30 minutes"
      },
      {
        step: 2,
        title: "Market Analysis",
        description: "Comprehensive review of current market conditions and trends affecting your area.",
        icon: TrendingUp,
        duration: "1 hour"
      },
      {
        step: 3,
        title: "Strategy Development",
        description: "Create a customized action plan based on your goals and market conditions.",
        icon: Target,
        duration: "1 hour"
      },
      {
        step: 4,
        title: "Resource Planning",
        description: "Identify necessary resources, timeline, and next steps for implementation.",
        icon: Clock,
        duration: "30 minutes"
      },
      {
        step: 5,
        title: "Follow-up Support",
        description: "Ongoing check-ins and strategy adjustments as market conditions change.",
        icon: Handshake,
        duration: "Ongoing"
      }
    ],
    features: [
      "Free initial consultation (30 minutes)",
      "Detailed market reports and analysis",
      "Strategic planning for real estate goals",
      "Referrals to trusted professionals",
      "Ongoing market updates and insights"
    ]
  };

  const getActiveService = () => {
    switch (activeTab) {
      case 'buyers': return buyerServices;
      case 'sellers': return sellerServices;
      case 'investors': return investorServices;
      case 'consultation': return consultationServices;
      default: return buyerServices;
    }
  };

  const valueProps = [
    {
      icon: Zap,
      title: "Fast Response",
      description: "Get responses within 1 hour during business hours"
    },
    {
      icon: Award,
      title: "Expert Knowledge",
      description: "15+ years of local market expertise and proven results"
    },
    {
      icon: Shield,
      title: "Full Protection",
      description: "Comprehensive insurance and legal protection for all transactions"
    },
    {
      icon: Heart,
      title: "Personal Service",
      description: "Dedicated support tailored to your specific needs and goals"
    }
  ];

  const activeService = getActiveService();

  return (
    <section id="services" className="section-padding bg-gray-50">
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
            Our <span className="text-gradient">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive real estate services designed to help you achieve your property goals 
            with confidence and peace of mind.
          </p>
        </motion.div>

        {/* Service Category Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center mb-12"
        >
          <div className="bg-white rounded-2xl p-2 shadow-lg">
            {serviceCategories.map((category) => {
              const IconComponent = category.icon;
              return (
                <button
                  key={category.id}
                  onClick={() => setActiveTab(category.id)}
                  className={`flex items-center space-x-2 px-6 py-3 rounded-xl transition-all duration-300 ${
                    activeTab === category.id
                      ? 'bg-primary-600 text-white shadow-lg'
                      : 'text-gray-600 hover:text-primary-600 hover:bg-gray-50'
                  }`}
                >
                  <IconComponent size={20} />
                  <span className="font-medium">{category.label}</span>
                </button>
              );
            })}
          </div>
        </motion.div>

        {/* Active Service Content */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-3xl shadow-xl p-8 md:p-12 mb-16"
        >
          {/* Service Header */}
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">{activeService.title}</h3>
            <p className="text-xl text-primary-600 font-semibold mb-4">{activeService.subtitle}</p>
            <p className="text-gray-600 max-w-4xl mx-auto text-lg">{activeService.description}</p>
          </div>

          {/* Process Steps */}
          <div className="mb-12">
            <h4 className="text-2xl font-bold text-gray-900 text-center mb-8">Our Process</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {activeService.process.map((step, index) => {
                const StepIcon = step.icon;
                return (
                  <motion.div
                    key={step.step}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="relative"
                  >
                    <div className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-2xl border border-gray-200 hover:shadow-lg transition-shadow duration-300 h-full">
                      {/* Step Number */}
                      <div className="absolute -top-3 -left-3 w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                        {step.step}
                      </div>
                      
                      {/* Icon */}
                      <div className="w-12 h-12 bg-primary-100 rounded-xl mb-4 flex items-center justify-center">
                        <StepIcon size={24} className="text-primary-600" />
                      </div>
                      
                      {/* Content */}
                      <h5 className="font-bold text-gray-900 mb-2">{step.title}</h5>
                      <p className="text-gray-600 text-sm mb-3">{step.description}</p>
                      <div className="flex items-center space-x-1 text-xs text-primary-600">
                        <Clock size={12} />
                        <span>{step.duration}</span>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Features */}
          <div className="bg-gradient-to-r from-primary-50 to-secondary-50 rounded-2xl p-8">
            <h4 className="text-xl font-bold text-gray-900 text-center mb-6">What's Included</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {activeService.features.map((feature, index) => (
                <motion.div
                  key={feature}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-start space-x-3"
                >
                  <CheckCircle size={20} className="text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{feature}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Value Propositions */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Why Choose Our Services
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {valueProps.map((prop, index) => {
              const PropIcon = prop.icon;
              return (
                <motion.div
                  key={prop.title}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center p-6 bg-white rounded-2xl shadow-card"
                >
                  <div className="w-16 h-16 bg-primary-100 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                    <PropIcon size={32} className="text-primary-600" />
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">{prop.title}</h4>
                  <p className="text-gray-600 text-sm">{prop.description}</p>
                </motion.div>
              );
            })}
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
          <h3 className="text-3xl font-bold mb-4">Ready to Get Started?</h3>
          <p className="text-primary-100 mb-8 max-w-2xl mx-auto text-lg">
            Let's discuss your real estate goals and create a customized plan to achieve them. 
            Schedule your free consultation today.
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
              Get Free Consultation
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

export default Services;