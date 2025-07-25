import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Triangle } from "lucide-react";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight * 1.2) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          className="fixed bottom-6 right-10 p-[1px] bg-n-5 rounded-md clipPath-b-r"
          onClick={scrollToTop}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.3 }}
          whileTap={{ scale: 0.95 }}
          aria-label="Scroll to top"
        >
          <div className=" bg-n-8 p-3 rounded-md clipPath-b-r">
            <motion.div
              animate={{ rotate: 0 }}
              whileHover={{
                y: [-2, 2, -2, 0],
                rotate: [0, 5, -5, 0],
                transition: {
                  duration: 0.8,
                  repeat: 1,
                  ease: "easeInOut",
                },
              }}
            >
              <Triangle size={24} color="#FA1616" />
            </motion.div>
          </div>
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTop;
