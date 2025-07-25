import React from "react";
import { motion } from "framer-motion";
import { Gradient } from "./design/Roadmap";

const GradientBG = () => {
  const svgDataUri =
    "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='50' height='50' viewBox='0 0 50 50'><circle cx='25' cy='25' r='1' fill='%23FA1616' opacity='0.3'/></svg>";

  const dots = Array.from({ length: 100 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 4 + 1,
    delay: Math.random() * 5,
  }));

  return (
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient overlay */}
        <div className="absolute inset-0" />

        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-20">
          <div
            className="h-full w-full bg-gradient-to-r from-transparent via-primary/10 to-transparent bg-[length:50px_50px]"
            style={{
              backgroundImage: `url('${svgDataUri}')`,
            }}
          />
        </div>

        {/* Floating dots */}
        {dots.map((dot) => (
          <motion.div
            key={dot.id}
            className="absolute rounded-full"
            style={{
              left: `${dot.x}%`,
              top: `${dot.y}%`,
              width: `${dot.size}px`,
              height: `${dot.size}px`,
            }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: [0, 1, 0.5, 1],
              scale: [0, 1, 0.8, 1],
              backgroundColor: [
                "#FA1616",
                "#AC6AFF",
                "#FFC876",
                "#FF776F",
                "#7ADB78",
                "#858DFF",
                "#FF98E2",
              ],
            }}
            transition={{
              duration: 4,
              delay: dot.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}

        {/* Animated lines */}
        <svg className="absolute inset-0 w-full h-full opacity-30">
          {Array.from({ length: 20 }, (_, i) => (
            <motion.line
              key={i}
              x1={Math.random() * 100 + "%"}
              y1={Math.random() * 100 + "%"}
              x2={Math.random() * 100 + "%"}
              y2={Math.random() * 100 + "%"}
              stroke="url(#gradient)"
              strokeWidth="1"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.6 }}
              transition={{
                duration: 3,
                delay: i * 0.2,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />
          ))}
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FA1616" />
              <stop offset="50%" stopColor="#AC6AFF" />
              <stop offset="100%" stopColor="#FFC876" />
            </linearGradient>
          </defs>
        </svg>
      </div>
  );
};

export default GradientBG;
