import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const slides = [
  {
    img: "/2Danimation.webp",
    title: "2D animation",
    desc: "Creative 2D animation services for explainer videos, commercials, and educational content. "
  },
  {
    img: "/3Danimation.webp",
    title: "3D animation",
    desc: "Professional 3D animation services for characters, objects, and architectural walkthroughs. Create stunning animations that bring your ideas to life with high-quality rendering and attention to detail."
  },
  {
    img: "/3Dmodeling.webp",
    title: "3D modeling",
    desc: "High-quality 3D modeling services for games, architecture, and product visualization. Create realistic and detailed 3D models using industry-standard software."
  },
  {
    img: "/gamedev.webp",
    title: "Game dev",
    desc: "Complete game development services from concept to deployment across multiple platforms. "
  },
  {
    img: "/illustration.webp",
    title: "Illustration",
    desc: "Professional comic book illustration services with dynamic storytelling visuals. Create captivating comic book illustrations that bring your characters and stories to life with vibrant colors and intricate details."
  },
  {
    img: "/logodesign.webp",
    title: "Logo design",
    desc: "Professional logo design services for businesses and personal brands. Create unique and memorable logos that represent your brand identity and values, ensuring a strong visual impact."
  },
  {
    img: "/photoshop.webp",
    title: "Photoshop",
    desc: "Professional photo editing and manipulation services using Adobe Photoshop. Enhance your images with expert retouching, color correction, and creative effects to achieve stunning visual results."
  },
  {
    img: "/webdev.webp",
    title: "Web dev",
    desc: "Professional web development services using modern technologies like React, Next.js, and Node.js. Build responsive, high-performance websites tailored to your needs."
  },
];

export default function Slider() {
  const [activeIndex, setActiveIndex] = useState(0);
  const timeoutRef = useRef(null);

  useEffect(() => {
    startAutoSlide();
    return () => clearInterval(timeoutRef.current);
  }, [activeIndex]);

  const startAutoSlide = () => {
    clearInterval(timeoutRef.current);
    timeoutRef.current = setInterval(() => {
      nextSlide();
    }, 5000);
  };

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative h-screen w-full overflow-hidden bg-black text-white">
      {/* Main Slider */}
      <div className="absolute inset-0">
        {slides.map((slide, idx) => (
          <AnimatePresence key={idx}>
            {idx === activeIndex && (
              <motion.div
                key={slide.title}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.8 }}
                className="absolute inset-0"
              >
                <img
                  src={slide.img}
                  alt={slide.title}
                  className="h-full w-full object-cover bg-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                <div className="absolute top-2/4 left-10 max-w-md">
                  <p className="uppercase tracking-widest text-n-2">Design</p>
                  <h2 className="text-2xl md:text-4xl font-bold font-cyborgb mb-4 text-color-primary">
                    {slide.title}
                  </h2>
                  <p className="text-lg leading-relaxed">{slide.desc}</p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        ))}
      </div>

      {/* Arrows */}
      <div className="absolute top-1/1 right-4 z-30 space-y-4">
        <button
          onClick={prevSlide}
          className="w-10 h-10 text-2xl hover:border-color-primary bg-white/30 hover:text-color-primary text-n-1 rounded-sm hover:bg-white transition mr-2 clipPath-b-r"
        >
          &#8249;
        </button>
        <button
          onClick={nextSlide}
          className="w-10 h-10 text-2xl hover:border-color-primary bg-white/30 hover:text-color-primary text-n-1 rounded-sm hover:bg-white transition clipPath-b-l"
        >
          &#8250;
        </button>
      </div>

      {/* Thumbnails */}
      <div className="absolute bottom-8 w-full flex justify-center gap-4 px-4 overflow-x-auto z-30">
        {slides.map((slide, idx) => (
          <div
            key={idx}
            onClick={() => setActiveIndex(idx)}
            className={`relative w-28 h-36 cursor-pointer transition filter  overflow-hidden ${
              idx === activeIndex ? "brightness-125 border border-color-primary" : "brightness-50"
            }`}
          >
            <img src={slide.img} alt="thumb" className="w-full h-full object-cover" />
            <div className="absolute bottom-2 left-2 text-sm text-white">
              {slide.title}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
