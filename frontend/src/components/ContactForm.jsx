import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, User, Mail, MessageSquare, Loader2 } from 'lucide-react';
import toast from 'react-hot-toast';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      toast.error('Please fill in all fields');
      return;
    }

    setIsSubmitting(true);

    try {
      // TODO: Implement Resend API integration here
      const response = await fetch('https://formspree.io/f/xzzvrgbz', {
        method: 'POST',
        headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        },
      body: JSON.stringify({
        name: formData.name,
        email: formData.email,
        message: formData.message,
      }),
      });

      if (response.ok) {
      toast.success("Message sent successfully!");
      setFormData({ name: '', email: '', message: '' });
    } else {
      const error = await response.json();
      console.error(error);
      toast.error("Failed to send message.");
    }
  } catch (err) {
    console.error(err);
    toast.error("An error occurred. Try again later.");
  } finally {
    setIsSubmitting(false);
  }
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="relative z-20 max-w-lg mx-auto p-8"
    >
      {/* Form container with glassmorphism effect */}
      <motion.div
        className="backdrop-blur-lg bg-white/10 border border-color-secondary rounded-sm p-8 shadow-2xl"
        whileHover={{ scale: 1.02 }}
        transition={{ type: 'spring', stiffness: 300 }}
      >
        {/* Header */}
        <motion.div variants={itemVariants} className="text-center mb-8">
          <motion.h1
            className="text-4xl font-bold text-color-primary mb-4"
            animate={{ backgroundPosition: ['0%', '100%', '0%'] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            Get In Touch
          </motion.h1>
          <p className="text-n-4">
            Let's create something amazing together
          </p>
        </motion.div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name Input */}
          <motion.div variants={itemVariants}>
            <div className="relative">
              <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/60 w-5 h-5" />
              <motion.input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Your Name"
                className="w-full pl-12 pr-4 py-4 bg-white/10 border border-white/20 rounded-sm text-white placeholder-white/60 focus:outline-none focus:border-primary transition-all duration-300 backdrop-blur-sm"
                whileFocus={{ scale: 1.02, borderColor: '#FA1616' }}
                required
              />
            </div>
          </motion.div>

          {/* Email Input */}
          <motion.div variants={itemVariants}>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/60 w-5 h-5" />
              <motion.input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Your Email"
                className="w-full pl-12 pr-4 py-4 bg-white/10 border border-white/20 rounded-sm text-white placeholder-white/60 focus:outline-none focus:border-primary transition-all duration-300 backdrop-blur-sm"
                whileFocus={{ scale: 1.02, borderColor: '#FA1616' }}
                required
              />
            </div>
          </motion.div>

          {/* Message Input */}
          <motion.div variants={itemVariants}>
            <div className="relative">
              <MessageSquare className="absolute left-3 top-4 text-white/60 w-5 h-5" />
              <motion.textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Your Message"
                rows={5}
                className="w-full pl-12 pr-4 py-4 bg-white/10 border border-white/20 rounded-sm text-white placeholder-white/60 focus:outline-none focus:border-primary transition-all duration-300 backdrop-blur-sm resize-none"
                whileFocus={{ scale: 1.02, borderColor: '#FA1616' }}
                required
              />
            </div>
          </motion.div>

          {/* Submit Button */}
          <motion.div variants={itemVariants}>
            <motion.button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-primary to-secondary-3 text-white font-semibold py-4 px-6 rounded-sm shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
              whileHover={{ scale: 1.05, boxShadow: '0 10px 30px rgba(250, 22, 22, 0.3)', backgroundColor: '#FA1616' }}
              whileTap={{ scale: 0.98 }}
              animate={{
                backgroundPosition: isSubmitting ? ['0%', '100%', '0%'] : '0%',
              }}
              transition={{
                backgroundPosition: { duration: 2, repeat: isSubmitting ? Infinity : 0 },
              }}
            >
              <div className="flex items-center justify-center space-x-2">
                {isSubmitting ? (
                  <Loader2 className="w-5 h-5 animate-spin" />
                ) : (
                  <Send className="w-5 h-5" />
                )}
                <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
              </div>
            </motion.button>
          </motion.div>
        </form>

        {/* Decorative elements */}
        <div className="absolute -top-1 -left-1 w-3 h-3 bg-color-1 rounded-full animate-pulse" />
        <div className="absolute -top-1 -right-1 w-3 h-3 bg-color-2 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
        <div className="absolute -bottom-1 -left-1 w-3 h-3 bg-color-3 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-color-4 rounded-full animate-pulse" style={{ animationDelay: '1.5s' }} />
      </motion.div>

      {/* Floating elements */}
      <motion.div
        className="absolute -top-10 -left-10 w-20 h-20 bg-gradient-to-r from-color-primary to-color-secondary rounded-full blur-xl opacity-30"
        animate={{
          y: [0, -20, 0],
          x: [0, 10, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      <motion.div
        className="absolute -bottom-10 -right-10 w-16 h-16 bg-gradient-to-r from-color-primary to-color-secondary rounded-full blur-xl opacity-30"
        animate={{
          y: [0, 20, 0],
          x: [0, -10, 0],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 1,
        }}
      />
      <motion.div
        className="absolute bottom-3/4 right-[800px] w-16 h-16 bg-gradient-to-r from-color-primary to-color-secondary rounded-full blur-xl opacity-30"
        animate={{
          y: [0, 30, 0],
          x: [0, -10, 0],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 1,
        }}
      />
    </motion.div>
  );
};

export default ContactForm;