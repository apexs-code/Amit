"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function ExploreButton() {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      whileTap={{ scale: 0.95 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="flex items-center rounded-sm p-[1px] bg-n-1 hover:bg-color-primary text-white font-medium text-lg gap-2 overflow-hidden transition-all duration-200 cursor-pointer clipPath-t-r"
    >
      <div className="clipPath-t-r px-4 py-2 flex items-center bg-n-6 w-full h-full cursor-pointer">
        <motion.div
          animate={hovered ? { y: [-2, 2] } : { y: 0 }}
          transition={
            hovered
              ? {
                  duration: 0.6,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut",
                }
              : {}
          }
          className="w-6 h-6 flex items-center justify-center"
        >
          <motion.svg
  xmlns="http://www.w3.org/2000/svg"
  xmlnsXlink="http://www.w3.org/1999/xlink"
  fill="#fff"
  viewBox="0 0 60 60"
  width="60"
  height="60"
  style={{ enableBackground: "new 0 0 60 60" }}
  animate={
    hovered
      ? {
          x: 30,
          scale: 1,
          fill: "#FA1616",
        }
      : {
          x: 0,
          scale: 0.6,
        }
  }
  transition={{ duration: 0.3, ease: "easeInOut" }}
>
  <g>
    <defs>
      <rect width="60" height="60" id="SVGID_1_" />
    </defs>
    <clipPath>
      <use xlinkHref="#SVGID_1_" style={{ overflow: "visible" }} />
    </clipPath>
    <path d="M5.4,44.7C1.9,48.1,0,52.8,0,57.7V60h2.3c4.9,0,9.5-1.9,13-5.4l3.6-3.6L9,41.1L5.4,44.7z M12,51.3c-2,2-4.4,3.3-7.1,3.8C5.4,52.4,6.7,50,8.7,48L9,47.7l3.3,3.3L12,51.3z" />
    <path d="M46.1,13.9c-2.7-2.7-7.2-2.7-9.9,0c-2.7,2.7-2.7,7.2,0,9.9c1.4,1.4,3.2,2.1,5,2.1s3.6-0.7,5-2.1C48.8,21.1,48.8,16.7,46.1,13.9z M42.7,20.6c-0.9,0.9-2.4,0.9-3.3,0c-0.9-0.9-0.9-2.4,0-3.3c0.9-0.9,2.4-0.9,3.3,0C43.7,18.2,43.7,19.7,42.7,20.6z" />
    <path d="M57.7,0C51,0,44.5,1.3,38.4,3.8c-3.8,1.6-7.4,3.6-10.7,6L14.2,7.2c-2.3-0.5-4.7,0.3-6.4,1.9l-7.2,7.2l13.3,6.6l-6,6l23.2,23.2l6-6l6.6,13.3l7.2-7.2c1.7-1.7,2.4-4,1.9-6.4l-2.7-13.5c2.4-3.3,4.5-6.9,6-10.7C58.7,15.5,60,9,60,2.3V0H57.7z M54.8,9.4l-4.2-4.2c1.5-0.2,3.1-0.4,4.7-0.5C55.2,6.3,55,7.9,54.8,9.4z M8.6,15l2.6-2.6c0.6-0.6,1.3-0.8,2.1-0.6l9.8,2c-0.4,0.3-0.7,0.7-1,1l-4.6,4.6L8.6,15z M24.5,38.8l9.9-9.9l-3.3-3.3l-9.9,9.9l-6.6-6.6l10.8-10.8C31,12.5,37.7,8.5,45.2,6.4l8.4,8.4c-2.1,7.4-6.1,14.2-11.7,19.8L31.1,45.4L24.5,38.8z M48.2,46.7c0.2,0.8-0.1,1.6-0.6,2.1L45,51.4l-4.4-8.8l4.6-4.6c0.3-0.3,0.7-0.7,1-1L48.2,46.7z" />
  </g>
</motion.svg>


        </motion.div>
        <motion.span
          animate={hovered ? { x: 100 } : { x: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="whitespace-nowrap pt-[1px] pl-1"
        >
          Explore
        </motion.span>
      </div>
    </motion.div>
  );
}
