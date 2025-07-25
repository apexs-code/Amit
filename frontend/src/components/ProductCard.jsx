import React from 'react';
import { motion } from 'framer-motion';
import { Star, Clock, Tag } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const ProductCard = ({ service, index }) => {
  const navigate = useNavigate();
  const discount = Math.round(((service.originalPrice - service.price) / service.originalPrice) * 100);

  const handleClick = () => {
    navigate(`/service/${service.id}`);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -8, scale: 1.02 }}
      className="bg-n-6 rounded-sm shadow-lg hover:shadow-2xl transition-all duration-0 cursor-pointer overflow-hidden group hover:border-color-primary border border-transparent"
      onClick={handleClick}
    >
      <div className="relative overflow-hidden">
        <motion.img
          src={service.image}
          alt={service.name}
          className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
          whileHover={{ scale: 1.1 }}
        />
        <div className="absolute top-4 left-4">
          <span className="bg-n-8 text-color-primary clipPath-t-r text-xs font-bold px-3 py-1 rounded-sm">
            -{discount}%
          </span>
        </div>
        <div className="absolute top-4 right-4">
          <span className="bg-n-8 text-color-primary backdrop-blur-sm text-xs px-2 py-1 rounded-sm">
            {service.category}
          </span>
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold text-n-1 mb-2 transition-colors duration-300">
          {service.name}
        </h3>
        
        <p className="text-n-2 text-sm mb-4 line-clamp-2">
          {service.description}
        </p>

        <div className="flex items-center gap-2 mb-4">
          <div className="flex items-center gap-1">
            <Star className="w-4 h-4 fill-color-4 text-color-4" />
            <span className="text-sm font-semibold text-color-4">{service.rating}</span>
          </div>
          <span className="text-n-4 text-sm"><span className='text-color-primary'>[</span> {service.reviews} reviews <span className='text-color-primary'>]</span></span>
        </div>

        <div className="flex items-center gap-2 mb-4">
          <Clock className="w-4 h-4 text-n-2" />
          <span className="text-sm text-n-4">{service.deliveryTime}</span>
        </div>

        <div className="flex flex-wrap gap-2 mb-4">
          {service.tags.slice(0, 3).map((tag, idx) => (
            <span
              key={idx}
              className="inline-flex items-center gap-1 bg-n-1 text-color-primary text-xs px-2 py-1 rounded-sm"
            >
              <Tag className="w-3 h-3" />
              {tag}
            </span>
          ))}
          {service.tags.length > 3 && (
            <span className="text-xs text-n-4 pt-1">+{service.tags.length - 3} more</span>
          )}
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold text-color-primary">${service.price}</span>
            <span className="text-sm text-color-secondary line-through">${service.originalPrice}</span>
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-color-primary to-color-secondary text-n-6 px-6 py-2 rounded-sm font-semibold hover:shadow-lg transition-all duration-300"
          >
            View Details
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;