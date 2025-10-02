import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  TrendingUp, 
  BarChart3, 
  DollarSign, 
  Home, 
  Users, 
  Clock, 
  ArrowUp, 
  ArrowDown, 
  Minus,
  Building,
  Activity,
  Eye,
  Download,
  RefreshCw
} from 'lucide-react';

const MarketInsights: React.FC = () => {
  const [selectedNeighborhood, setSelectedNeighborhood] = useState('downtown');

  const neighborhoods = [
    {
      id: 'downtown',
      name: 'Downtown Metro',
      avgPrice: '$625,000',
      change: '+12.3%',
      daysOnMarket: 12,
      trend: 'up',
      description: 'Urban luxury living with premium amenities',
      highlights: ['High-rise condos', 'Walking distance to work', 'Premium amenities']
    },
    {
      id: 'suburbs',
      name: 'Suburban Heights',
      avgPrice: '$485,000',
      change: '+8.7%',
      daysOnMarket: 16,
      trend: 'up',
      description: 'Family-friendly community with excellent schools',
      highlights: ['Top-rated schools', 'Family amenities', 'Safe neighborhoods']
    },
    {
      id: 'waterfront',
      name: 'Waterfront District',
      avgPrice: '$725,000',
      change: '+15.2%',
      daysOnMarket: 21,
      trend: 'up',
      description: 'Luxury waterfront properties with stunning views',
      highlights: ['Water views', 'Luxury homes', 'Marina access']
    },
    {
      id: 'historic',
      name: 'Historic Quarter',
      avgPrice: '$395,000',
      change: '+6.4%',
      daysOnMarket: 28,
      trend: 'up',
      description: 'Charming historic homes with character',
      highlights: ['Historic charm', 'Walkable streets', 'Cultural district']
    }
  ];

  const marketPredictions = [
    {
      icon: TrendingUp,
      title: 'Continued Growth',
      prediction: 'Property values expected to rise 6-8% in next 12 months',
      confidence: 'High',
      timeframe: 'Next 12 months',
      reasoning: 'Low inventory, high demand, and economic growth driving appreciation'
    },
    {
      icon: Clock,
      title: 'Faster Sales',
      prediction: 'Average days on market to decrease to 14-16 days',
      confidence: 'Medium',
      timeframe: 'Next 6 months',
      reasoning: 'Spring buying season and limited inventory accelerating sales'
    },
    {
      icon: Building,
      title: 'New Development',
      prediction: 'Increased construction activity in suburban areas',
      confidence: 'High',
      timeframe: 'Next 18 months',
      reasoning: 'City planning approvals and developer interest in expansion'
    },
    {
      icon: Users,
      title: 'Buyer Demographics',
      prediction: 'Millennial buyers will dominate 65% of market share',
      confidence: 'High',
      timeframe: 'Ongoing trend',
      reasoning: 'Age demographics and lifestyle preferences driving market demand'
    }
  ];

  const keyMetrics = [
    {
      icon: Home,
      label: 'Properties Sold',
      value: '1,247',
      change: '+23%',
      trend: 'up',
      period: 'Last 6 months'
    },
    {
      icon: DollarSign,
      label: 'Average Sale Price',
      value: '$485,000',
      change: '+8.5%',
      trend: 'up',
      period: 'vs. last year'
    },
    {
      icon: Clock,
      label: 'Days on Market',
      value: '18',
      change: '-5 days',
      trend: 'down',
      period: 'vs. last year'
    },
    {
      icon: Activity,
      label: 'Market Activity',
      value: 'Very High',
      change: 'Hot Market',
      trend: 'up',
      period: 'Current status'
    }
  ];

  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case 'up': return <ArrowUp size={16} className="text-green-500" />;
      case 'down': return <ArrowDown size={16} className="text-red-500" />;
      default: return <Minus size={16} className="text-gray-500" />;
    }
  };

  const getTrendColor = (trend: string) => {
    switch (trend) {
      case 'up': return 'text-green-600';
      case 'down': return 'text-red-600';
      default: return 'text-gray-600';
    }
  };

  const selectedNeighborhoodData = neighborhoods.find(n => n.id === selectedNeighborhood);

  return (
    <section id="market" className="section-padding bg-white">
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
            Market <span className="text-gradient">Insights</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay informed with the latest real estate market trends, property values, 
            and expert predictions for our local area.
          </p>
          
          {/* Last Updated */}
          <div className="flex items-center justify-center space-x-2 mt-6 text-sm text-gray-500">
            <RefreshCw size={16} />
            <span>Last updated: {new Date().toLocaleDateString('en-US', { 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            })}</span>
          </div>
        </motion.div>

        {/* Key Market Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {keyMetrics.map((metric, index) => {
            const MetricIcon = metric.icon;
            return (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-white to-gray-50 p-6 rounded-2xl shadow-card border border-gray-100"
              >
                <div className="flex items-center justify-between mb-4">
                  <MetricIcon size={24} className="text-primary-600" />
                  {getTrendIcon(metric.trend)}
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-1">{metric.value}</h3>
                <p className="text-sm font-medium text-gray-700 mb-2">{metric.label}</p>
                
                <div className="flex items-center justify-between text-xs">
                  <span className={`font-medium ${getTrendColor(metric.trend)}`}>
                    {metric.change}
                  </span>
                  <span className="text-gray-500">{metric.period}</span>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Neighborhood Analysis */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Neighborhood Analysis
          </h3>

          {/* Neighborhood Selector */}
          <div className="flex flex-wrap justify-center mb-8">
            <div className="bg-gray-100 rounded-2xl p-2">
              {neighborhoods.map((neighborhood) => (
                <button
                  key={neighborhood.id}
                  onClick={() => setSelectedNeighborhood(neighborhood.id)}
                  className={`px-4 py-2 rounded-xl transition-all duration-300 text-sm font-medium ${
                    selectedNeighborhood === neighborhood.id
                      ? 'bg-primary-600 text-white shadow-lg'
                      : 'text-gray-600 hover:text-primary-600 hover:bg-white'
                  }`}
                >
                  {neighborhood.name}
                </button>
              ))}
            </div>
          </div>

          {/* Selected Neighborhood Details */}
          {selectedNeighborhoodData && (
            <motion.div
              key={selectedNeighborhood}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-gradient-to-r from-primary-50 to-secondary-50 rounded-3xl p-8"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <h4 className="text-2xl font-bold text-gray-900 mb-4">
                    {selectedNeighborhoodData.name}
                  </h4>
                  <p className="text-gray-600 mb-6">{selectedNeighborhoodData.description}</p>
                  
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-white/80 p-4 rounded-xl">
                      <div className="text-2xl font-bold text-gray-900">
                        {selectedNeighborhoodData.avgPrice}
                      </div>
                      <div className="text-sm text-gray-600">Average Price</div>
                      <div className="flex items-center space-x-1 text-sm">
                        {getTrendIcon(selectedNeighborhoodData.trend)}
                        <span className={getTrendColor(selectedNeighborhoodData.trend)}>
                          {selectedNeighborhoodData.change}
                        </span>
                      </div>
                    </div>
                    
                    <div className="bg-white/80 p-4 rounded-xl">
                      <div className="text-2xl font-bold text-gray-900">
                        {selectedNeighborhoodData.daysOnMarket}
                      </div>
                      <div className="text-sm text-gray-600">Days on Market</div>
                      <div className="text-sm text-green-600">Fast-selling area</div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <h5 className="font-semibold text-gray-900">Area Highlights:</h5>
                    {selectedNeighborhoodData.highlights.map((highlight, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-primary-600 rounded-full"></div>
                        <span className="text-gray-700">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-white/90 p-6 rounded-2xl">
                  <h5 className="font-bold text-gray-900 mb-4 flex items-center space-x-2">
                    <BarChart3 size={20} className="text-primary-600" />
                    <span>Price Trend Analysis</span>
                  </h5>
                  
                  {/* Mock Chart Visualization */}
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">6 months ago</span>
                      <div className="flex-1 mx-3 bg-gray-200 rounded-full h-2">
                        <div className="bg-gray-400 h-2 rounded-full" style={{ width: '70%' }}></div>
                      </div>
                      <span className="text-sm font-medium">$445K</span>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">3 months ago</span>
                      <div className="flex-1 mx-3 bg-gray-200 rounded-full h-2">
                        <div className="bg-blue-400 h-2 rounded-full" style={{ width: '85%' }}></div>
                      </div>
                      <span className="text-sm font-medium">$465K</span>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Current</span>
                      <div className="flex-1 mx-3 bg-gray-200 rounded-full h-2">
                        <div className="bg-primary-600 h-2 rounded-full" style={{ width: '100%' }}></div>
                      </div>
                      <span className="text-sm font-bold text-primary-600">
                        {selectedNeighborhoodData.avgPrice}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </motion.div>

        {/* Market Predictions */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Expert Market Predictions
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {marketPredictions.map((prediction, index) => {
              const PredictionIcon = prediction.icon;
              return (
                <motion.div
                  key={prediction.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white p-6 rounded-2xl shadow-card border border-gray-100"
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <PredictionIcon size={24} className="text-primary-600" />
                    </div>
                    
                    <div className="flex-1">
                      <h4 className="text-lg font-bold text-gray-900 mb-2">{prediction.title}</h4>
                      <p className="text-gray-700 mb-3">{prediction.prediction}</p>
                      
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <span className="text-gray-500">Confidence:</span>
                          <span className={`ml-1 font-medium ${
                            prediction.confidence === 'High' ? 'text-green-600' : 'text-yellow-600'
                          }`}>
                            {prediction.confidence}
                          </span>
                        </div>
                        <div>
                          <span className="text-gray-500">Timeline:</span>
                          <span className="ml-1 font-medium text-gray-700">{prediction.timeframe}</span>
                        </div>
                      </div>
                      
                      <div className="mt-3 p-3 bg-gray-50 rounded-lg">
                        <p className="text-xs text-gray-600 italic">{prediction.reasoning}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Market Report CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center bg-gradient-to-r from-primary-600 to-secondary-600 rounded-3xl p-12 text-white"
        >
          <Eye size={48} className="text-white mx-auto mb-6" />
          <h3 className="text-3xl font-bold mb-4">Get Your Personalized Market Report</h3>
          <p className="text-primary-100 mb-8 max-w-2xl mx-auto text-lg">
            Receive a detailed analysis of your specific neighborhood, including property values, 
            market trends, and personalized insights for your real estate goals.
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
              className="bg-white hover:bg-gray-50 text-primary-600 font-semibold py-4 px-8 rounded-xl transition-colors shadow-lg flex items-center space-x-2"
            >
              <Download size={20} />
              <span>Get Free Market Report</span>
            </motion.button>
            
            <motion.a
              href="tel:+1234567890"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-transparent hover:bg-white/10 text-white border-2 border-white font-semibold py-4 px-8 rounded-xl transition-colors"
            >
              Speak with Market Expert
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MarketInsights;