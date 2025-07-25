import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: "Sarah Chen",
    role: "CEO",
    company: "TechFlow Solutions",
    content: "Absolutely exceptional work! The attention to detail and creative approach exceeded all our expectations. Our project was delivered on time and the results have been phenomenal.",
    rating: 5,
    avatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
  },
  {
    id: 2,
    name: "Marcus Rodriguez",
    role: "Marketing Director",
    company: "Digital Horizon",
    content: "Working with this team has been a game-changer for our business. Their innovative solutions and professional approach have helped us achieve remarkable growth in just a few months.",
    rating: 5,
    avatar: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
  },
  {
    id: 3,
    name: "Emily Watson",
    role: "Founder",
    company: "Creative Studio",
    content: "The level of creativity and technical expertise is unmatched. They transformed our vision into reality with stunning results that continue to impress our clients daily.",
    rating: 5,
    avatar: "https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
  },
  {
    id: 4,
    name: "David Kim",
    role: "Product Manager",
    company: "InnovateLab",
    content: "Outstanding communication, flawless execution, and results that speak for themselves. This collaboration has been one of the best investments we've made for our company.",
    rating: 5,
    avatar: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
  },
  {
    id: 5,
    name: "Lisa Thompson",
    role: "Operations Director",
    company: "GrowthCorp",
    content: "Their strategic thinking and flawless implementation have revolutionized our operations. The ROI has been incredible, and the ongoing support is second to none.",
    rating: 5,
    avatar: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
  },
  {
    id: 6,
    name: "James Mitchell",
    role: "CTO",
    company: "FutureTech",
    content: "Incredible talent, professionalism, and dedication. They delivered beyond our wildest expectations and continue to provide exceptional support. Highly recommended!",
    rating: 5,
    avatar: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
  },
  {
    id: 7,
    name: "Rachel Green",
    role: "Brand Manager",
    company: "Elevate Brands",
    content: "The transformation of our brand has been remarkable. Their creative vision and strategic approach have elevated our market presence significantly. Simply outstanding work!",
    rating: 5,
    avatar: "https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
  },
  {
    id: 8,
    name: "Alex Johnson",
    role: "Entrepreneur",
    company: "StartupBoost",
    content: "From concept to completion, the entire process was seamless. Their expertise and commitment to excellence have been instrumental in our success. I couldn't be happier!",
    rating: 5,
    avatar: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
  }
];

const TestimonialsSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToTestimonial = (index) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(nextTestimonial, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? '100%' : '-100%',
      opacity: 0,
      scale: 0.8,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? '100%' : '-100%',
      opacity: 0,
      scale: 0.8,
    }),
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset, velocity) => {
    return Math.abs(offset) * velocity;
  };

  return (
    <div className="w-full max-w-4xl mx-auto px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl font-bold font-cyborg text-color-primary mb-4">What Our Clients Say</h2>
        <p className="text-xl text-n-4 max-w-2xl mx-auto">
          Don't just take our word for it. Here's what our amazing clients have to say about their experience working with us.
        </p>
      </motion.div>

      <div className="relative">
        <div 
          className="overflow-hidden rounded-sm bg-n-2 shadow-2xl"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          <AnimatePresence mode="wait" custom={currentIndex}>
            <motion.div
              key={currentIndex}
              custom={currentIndex}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.3 },
                scale: { duration: 0.3 }
              }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={1}
              onDragEnd={(e, { offset, velocity }) => {
                const swipe = swipePower(offset.x, velocity.x);

                if (swipe < -swipeConfidenceThreshold) {
                  nextTestimonial();
                } else if (swipe > swipeConfidenceThreshold) {
                  prevTestimonial();
                }
              }}
              className="p-8 md:p-12 min-h-[400px] flex flex-col justify-center cursor-grab active:cursor-grabbing"
            >
              <div className="flex flex-col items-center text-center space-y-6">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                  className="relative border border-color-secondary w-20 h-20 flex justify-center align-middle"
                >
                  <Quote className="w-12 h-12 text-color-primary mb-6" />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="flex space-x-1 mb-4"
                >
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </motion.div>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-3xl italic"
                >
                  "{testimonials[currentIndex].content}"
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5, type: "spring" }}
                  className="flex items-center space-x-4 mt-8"
                >
                  <img
                    src={testimonials[currentIndex].avatar}
                    alt={testimonials[currentIndex].name}
                    className="w-16 h-16 rounded-full object-cover shadow-lg"
                  />
                  <div className="text-left">
                    <h4 className="font-semibold text-gray-900 text-lg">
                      {testimonials[currentIndex].name}
                    </h4>
                    <p className="text-gray-600">
                      {testimonials[currentIndex].role} at {testimonials[currentIndex].company}
                    </p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation Buttons */}
        <motion.button
          onClick={prevTestimonial}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-n-1 hover:bg-n-6 shadow-lg rounded-sm clipPath-b-r p-3 text-gray-600 hover:text-color-primary hover:shadow-xl transition-all duration-200 z-10"
        >
          <ChevronLeft className="w-6 h-6" />
        </motion.button>

        <motion.button
          onClick={nextTestimonial}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-n-1 hover:bg-n-6 shadow-lg rounded-sm clipPath-b-l p-3 text-gray-600 hover:text-color-primary hover:shadow-xl transition-all duration-200 z-10"
        >
          <ChevronRight className="w-6 h-6" />
        </motion.button>
      </div>

      {/* Dot Indicators */}
      <div className="flex justify-center space-x-2 mt-8">
        {testimonials.map((_, index) => (
          <motion.button
            key={index}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
            onClick={() => goToTestimonial(index)}
            className={`w-2 h-2 transition-all duration-300 ${
              index === currentIndex
                ? 'bg-color-primary scale-125'
                : 'bg-gray-300 hover:bg-gray-400'
            }`}
          />
        ))}
      </div>

      {/* Progress Bar */}
      <div className="mt-6 w-full bg-gray-200 rounded-full h-1 overflow-hidden">
        <motion.div
          className="h-full bg-gradient-to-r from-color-primary/70 to-color-secondary rounded-full"
          initial={{ width: 0 }}
          animate={{ width: `${((currentIndex + 1) / testimonials.length) * 100}%` }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        />
      </div>
    </div>
  );
};

export default TestimonialsSlider;