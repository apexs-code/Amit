import { check, GurukulSymbol } from "../assets";
import { collabApps, collabContent, collabText } from "../utils/constants";
import Section from "./Section";
import { LeftCurve, RightCurve } from "./design/AboutUs";
import { motion } from "framer-motion";

const AboutUs = () => {
  return (
    <Section crosses>
        <h1 className="font-cyborg text-4xl text-color-primary mb-10 flex align-middle justify-center"> About US </h1>
      <div id="about-us" className="container lg:flex">
        <div className="max-w-[25rem]">
          <h2 className="h2 mb-4 md:mb-8">
            We are the group of professionals who are ready to help you
            <span className="text-color-primary"> grow your business</span>
          </h2>

          <ul className="max-w-[22rem] mb-10 md:mb-14">
            {collabContent.map((item) => (
              <li className="mb-3 py-3" key={item.id}>
                <div className="flex items-center">
                  <img src={check} width={24} height={24} alt="check" />
                  <h6 className="body-2 ml-5">{item.title}</h6>
                </div>
                {item.text && (
                  <p className="body-2 mt-3 text-n-4">{item.text}</p>
                )}
              </li>
            ))}
          </ul>

          <motion.div
            whileHover={{ scale: 1.05, rotate: -2 }}
            className="w-32 cursor-pointer group clipPath-t-r bg-color-primary p-[1px] flex items-center justify-center transition-all duration-300"
          >
            <a
              href="#contact-us"
              smooth="true" // Changed from smooth={true} to smooth="true"
              duration="500" // Assuming duration is supported by your scrolling library
              className="w-full h-full"
            >
              <motion.div
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="w-full h-full relative text-center font-medium text-n-1 pt-3 px-4 py-2 bg-n-6 clipPath-t-r"
              >
                About us
              </motion.div>
            </a>
          </motion.div>
        </div>

        <div className="lg:ml-auto xl:w-[38rem] mt-4">
          <p className="body-2 mb-8 text-n-4 md:mb-16 lg:mb-32 lg:w-[22rem] lg:mx-auto">
            {collabText}
          </p>

          <div className="relative left-1/2 flex w-[22rem] aspect-square border border-n-6 rounded-full -translate-x-1/2 scale:75 md:scale-100">
            <div className="flex w-60 aspect-square m-auto border border-n-6 rounded-full">
              <div className="w-[6rem] aspect-square m-auto p-[0.2rem] bg-color-secondary rounded-full">
                <div className="flex items-center justify-center w-full h-full bg-n-8 rounded-full">
                  <img src={GurukulSymbol} width={48} height={48} alt="Gurukul" />
                </div>
              </div>
            </div>

            <ul>
              {collabApps.map((app, index) => (
                <li
                  key={app.id}
                  className={`absolute top-0 left-1/2 h-1/2 -ml-[1.6rem] origin-bottom rotate-${
                    index * 45
                  }`}
                >
                  <div
                    className={`relative -top-[1.6rem] flex w-[3.2rem] h-[3.2rem] bg-n-7 border border-n-1/15 rounded-xl -rotate-${
                      index * 45
                    }`}
                  >
                    <img
                      className="m-auto"
                      width={app.width}
                      height={app.height}
                      alt={app.title}
                      src={app.icon}
                    />
                  </div>
                </li>
              ))}
            </ul>

            <LeftCurve />
            <RightCurve />
          </div>
        </div>
      </div>
    </Section>
  );
};

export default AboutUs;
