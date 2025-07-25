import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowLeft,
  Star,
  Clock,
  Tag,
  Check,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import Section from "./Section";
import services from '../utils/services.json';
import { useParams, useNavigate } from "react-router-dom";
import Footer from "./Footer";

const ProductDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState(0);
  
  const service = services.find(s => s.id === parseInt(id));
  
  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Service not found</h2>
          <button
            onClick={() => navigate('/')}
            className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors"
          >
            Back to Services
          </button>
        </div>
      </div>
    );
  }

  const discount = Math.round(((service.originalPrice - service.price) / service.originalPrice) * 100);

  const nextImage = () => {
    setSelectedImage((prev) => (prev + 1) % service.images.length);
  };

  const prevImage = () => {
    setSelectedImage((prev) => (prev - 1 + service.images.length) % service.images.length);
  };

  return (
    <Section crosses className="h-screen">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        {/* Header */}
        <div className=" shadow-sm sticky top-0 z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex items-center justify-between">
              <motion.button
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate('/#products')}
                className="flex items-center gap-2 text-gray-600 hover:text-color-primary transition-colors duration-200"
              >
                <ArrowLeft className="w-5 h-5" />
                Back to Services
              </motion.button>

              
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Image Gallery */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-4"
            >
              <div className="relative overflow-hidden rounded-sm bg-n-6 aspect-video">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={selectedImage}
                    src={service.images[selectedImage]}
                    alt={service.name}
                    className="w-full h-full object-cover"
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                  />
                </AnimatePresence>

                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/20 backdrop-blur-sm text-white p-2 clipPath-b-r hover:bg-black/30 transition-colors duration-200"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>

                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/20 backdrop-blur-sm text-white p-2 clipPath-b-l hover:bg-black/30 transition-colors duration-200"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>

                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                  {service.images.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setSelectedImage(idx)}
                      className={`w-2 h-2 transition-colors duration-200 ${
                        selectedImage === idx ? "bg-color-primary" : "bg-white/50"
                      }`}
                    />
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-4 gap-2">
                {service.images.map((image, idx) => (
                  <motion.button
                    key={idx}
                    whileHover={{ scale: 1.05 }}
                    onClick={() => setSelectedImage(idx)}
                    className={`aspect-square bg-n-6 overflow-hidden border transition-colors duration-200 ${
                      selectedImage === idx
                        ? "border-color-primary"
                        : "border-transparent"
                    }`}
                  >
                    <img
                      src={image}
                      alt={`${service.name} ${idx + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </motion.button>
                ))}
              </div>
            </motion.div>

            {/* Service Details */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6"
            >
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="bg-n-6 text-color-primary text-sm px-3 py-1">
                    {service.category}
                  </span>
                  <span className="bg-gradient-to-r from-color-primary to-color-secondary text-n-6 text-sm font-bold px-3 py-1">
                    -{discount}% OFF
                  </span>
                </div>

                <h1 className="text-3xl font-bold text-n-1 mb-4">
                  {service.name}
                </h1>

                <div className="flex items-center gap-4 mb-4">
                  <div className="flex items-center gap-1">
                    <Star className="w-5 h-5 fill-color-4 text-color-4" />
                    <span className="text-lg font-semibold text-color-4">
                      {service.rating}
                    </span>
                  </div>
                  <span className="text-n-4">
                    <span className='text-color-primary'>[</span> {service.reviews} reviews <span className='text-color-primary'>]</span>
                  </span>
                  <div className="flex items-center gap-1 text-n-4">
                    <Clock className="w-4 h-4" />
                    <span>{service.deliveryTime}</span>
                  </div>
                </div>

                <p className="text-n-2 text-lg leading-relaxed">
                  {service.description}
                </p>
              </div>

              {/* Features */}
              <div>
                <h3 className="text-xl font-semibold text-n-4 mb-4">
                  What's Included
                </h3>
                <div className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: idx * 0.1 }}
                      className="flex items-center gap-3"
                    >
                      <div className="w-5 h-5 bg-green-100 flex items-center justify-center">
                        <Check className="w-3 h-3 text-green-600" />
                      </div>
                      <span className="text-n-3">{feature}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Tags */}
              <div>
                <h3 className="text-xl font-semibold text-color-primary mb-4">
                  Technologies & Skills
                </h3>
                <div className="flex flex-wrap gap-2">
                  {service.tags.map((tag, idx) => (
                    <motion.span
                      key={idx}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: idx * 0.05 }}
                      className="inline-flex items-center gap-1 bg-gray-100 text-color-primary px-3 py-2 rounded-sm text-sm"
                    >
                      <Tag className="w-3 h-3" />
                      {tag}
                    </motion.span>
                  ))}
                </div>
              </div>

              {/* Pricing */}
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-sm p-6">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <div className="flex items-center gap-3">
                      <span className="text-3xl font-bold text-gray-900">
                        ${service.price}
                      </span>
                      <span className="text-lg text-gray-500 line-through">
                        ${service.originalPrice}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 mt-1">
                      One-time payment
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-gray-600">You save</p>
                    <p className="text-lg font-semibold text-color-4">
                      ${service.originalPrice - service.price}
                    </p>
                  </div>
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-gradient-to-r from-color-secondary to-color-secondary text-white font-semibold py-4 rounded-sm hover:shadow-lg transition-all duration-300"
                >
                  Order Now - ${service.price}
                </motion.button>

                <p className="text-xs text-gray-500 text-center mt-3">
                  Secure payment • 30-day money-back guarantee
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
      <Footer />
    </Section>
  );
};

export default ProductDetailPage;
