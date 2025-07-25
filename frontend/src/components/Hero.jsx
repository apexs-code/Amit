import Section from "./Section";
import { BackgroundCircles, BottomLine, Gradient } from "./design/Hero";
import { heroIcons } from "../utils/constants";
import { ScrollParallax } from "react-just-parallax";
import { useRef } from "react";
import Slider from "./ui/ImageSlider";
import Notification from "./Notification";
import CompanyLogos from "./CompanyLogos";
import TextReveal from "../components/ui/TextReveal";
import FiverSendButton from "./ui/ExploreButton";
import { motion } from "framer-motion";

const Hero = () => {
  const parallaxRef = useRef(null);

  return (
    <Section
      className="pt-[12rem] -mt-[5.25rem]"
      crosses
      crossesOffset="lg:translate-y-[5.25rem]"
      customPaddings
      id="hero"
    >
      <div className="container relative" ref={parallaxRef}>
        <div className="relative z-1 max-w-[62rem] mx-auto text-center mb-[3.875rem] md:mb-20 lg:mb-[6.25rem]">
          <h1 className="h1 mb-6 font-cyborgb">
            Explore the Possibilities of Inter
            <span className="text-color-primary font-cyborgb">net </span>
            with {` `}
            <span className="inline-block relative font-cyborg text-color-primary">
              Gurukul{" "}
            </span>
          </h1>
          <div className="body-1 max-w-3xl mx-auto mb-6 text-n-2 lg:mb-8">
            <TextReveal text="Work with Gurukul and unlock the power of technology and the internet through our wide range of services, including web development, game development, 2D & 3D animation, and more." />
          </div>

          <div className="flex justify-center align-middle gap-20">
            <a href="#products">
              <FiverSendButton className="hidden md:flex" />
            </a>
            <motion.div
              whileHover={{ scale: 1.05, rotate: -2 }}
              className="cursor-pointer group clipPath-t-l bg-color-primary p-[1px] flex items-center justify-center transition-all duration-300"
            >
              <a
                href="#about-us"
                smooth="true" // Changed from smooth={true} to smooth="true"
                duration="500" // Assuming duration is supported by your scrolling library
                className="w-full h-full"
              >
                <motion.div
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="w-full h-full relative text-center font-medium text-n-1 pt-3 px-4 py-2 bg-n-6 clipPath-t-l"
                >
                  About us
                </motion.div>
              </a>
            </motion.div>
          </div>
        </div>
        <div className="relative max-w-[23rem] mx-auto md:max-w-5xl xl:mb-24">
          <div className="relative z-1 p-0.5 rounded-2xl bg-color-primary">
            <div className="relative bg-n-8 rounded-[1rem]">
              <div className="h-[1.4rem] bg-n-10 rounded-t-[0.9rem]" />

              <div className="aspect-[33/75] rounded-b-[0.9rem] overflow-hidden md:aspect-[688/780] lg:aspect-[1024/980]">
                <Slider />

                <ScrollParallax isAbsolutelyPositioned>
                  <ul className="hidden absolute -left-[5.5rem] top-[5rem] px-1 py-1 bg-n-9/40 backdrop-blur-sm border border-n-1/10 rounded-sm xl:flex clipPath-t-r">
                    {heroIcons.map((icon, index) => (
                      <li className="p-5" key={index}>
                        <img src={icon} width={24} height={25} alt={icon} />
                      </li>
                    ))}
                  </ul>
                </ScrollParallax>

                <ScrollParallax isAbsolutelyPositioned>
                  <Notification
                    className="hidden absolute -right-[5.5rem] bottom-[11rem] w-[18rem] xl:flex clipPath-t-r"
                    title="Code generation"
                  />
                </ScrollParallax>
              </div>
            </div>

            <Gradient />
          </div>

          <BackgroundCircles />
        </div>

        <CompanyLogos className="hidden relative z-10 mt-20 lg:block" />
      </div>

      <BottomLine />
    </Section>
  );
};

export default Hero;