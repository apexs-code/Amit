'use client';

import React from 'react';
import { motion } from 'framer-motion';

const TextReveal = ({ text }) => {
  const words = text.split(' ');

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.04 * i,
      },
    }),
  };

  const childVariants = {
    hidden: {
      opacity: 0,
      y: 20,
      filter: 'blur(10px)',
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
    },
  };

  return (
    <div className="flex items-center justify-center px-4 py-6">
      <motion.p
        className="font-bold text-n-2 text-center max-w-5xl leading-relaxed flex flex-wrap justify-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {words.map((word, index) => (
          <motion.span
            key={index}
            variants={childVariants}
            transition={{
              duration: 0.8,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
            style={{
              marginRight: '12px',
              marginTop: '10px',
              display: 'inline-block',
            }}
          >
            {word}
          </motion.span>
        ))}
      </motion.p>
    </div>
  );
};

export default TextReveal;