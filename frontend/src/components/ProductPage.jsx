import React, { useState, useRef, useEffect } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { Sparkles, TrendingUp } from 'lucide-react';
import Section from "./Section";
import ProductCard from './ProductCard';
import ProductDetailPage from './ProductDetailPage';
import services from '../utils/services.json';

const ProductPage = () => {
    
  const [selectedService, setSelectedService] = useState(null);
  const heroRef = useRef(null);
  const servicesRef = useRef(null);
  const isHeroInView = useInView(heroRef, { once: true });
  const isServicesInView = useInView(servicesRef, { once: true });

  const handleServiceClick = (service) => {
    setSelectedService(service);
  };

  const handleBackClick = () => {
    setSelectedService(null);
  };

  useEffect(() => {
    if (selectedService) {
      window.scrollTo(0, 0);
    }
  }, [selectedService]);

  if (selectedService) {
    return <ProductDetailPage service={selectedService} onBack={handleBackClick} />;
  }

  return (
    <Section crosses className="min-h-screen" id="products">
      {/* Hero Section */}
      <motion.section
        ref={heroRef}
        initial={{ opacity: 0 }}
        animate={isHeroInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.8 }}
        className="relative overflow-hidden text-white"
      >
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isHeroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-6"
            >
              <div className="inline-flex items-center gap-2 bg-n-5 backdrop-blur-sm rounded-sm px-4 py-2 mb-6 hover:border-color-primary border border-transparent transition-colors duration-300">
                <Sparkles className="w-4 h-4" />
                <span className="text-sm font-medium">Premium Services Marketplace</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 font-cyborg text-color-primary">
                Find the Perfect
                <br />
                <span className="bg-gradient-to-r from-color-primary to-color-secondary bg-clip-text text-transparent font-cyborgb">
                  Creative Service
                </span>
              </h1>
              <p className="text-xl text-n-4 max-w-3xl mx-auto leading-relaxed">
                Connect with top-rated professionals and bring your ideas to life with our curated marketplace of premium digital services.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isHeroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex items-center justify-center gap-8 text-sm"
            >
              <div className="flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-green-300" />
                <span>15+ Services Available</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                <span>1,700+ Happy Customers</span>
              </div>
            </motion.div>
          </div>
        </div>
        
        {/* Animated background elements */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/30 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-yellow-500/30 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-32 left-20 w-72 h-72 bg-pink-500/30 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </motion.section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            ref={servicesRef}
            initial={{ opacity: 0, y: 50 }}
            animate={isServicesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-color-primary mb-4 font-cyborgb">
              Explore Our
              <span className="bg-gradient-to-r from-color-primary to-purple-600 bg-clip-text text-transparent font-cyborg"> Premium Services</span>
            </h2>
            <p className="text-xl text-n-4 max-w-3xl mx-auto">
              From web development to creative design, find the perfect professional service to bring your vision to life.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={isServicesInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {services.map((service, index) => (
              <ProductCard
                key={service.id}
                service={service}
                onClick={handleServiceClick}
                index={index}
              />
            ))}
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="border-b border-t border-n-6 py-16"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            {[
              { number: '1,500+', label: 'Happy Clients' },
              { number: '17+', label: 'Service Categories' },
              { number: '4.8', label: 'Average Rating' },
              { number: '99%', label: 'Completion Rate' }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-4xl font-bold font-cyborg text-color-primary mb-2">{stat.number}</div>
                <div className="text-color-secondary">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
    </Section>
  );
};

export default ProductPage;