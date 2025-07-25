import { Link, useLocation } from "react-router-dom";
import { disablePageScroll, enablePageScroll } from "scroll-lock";
import { motion } from "framer-motion";
import { navigation } from "../utils/constants";
import Button from "./Button";
import MenuSvg from "../assets/svg/MenuSvg";
import { HamburgerMenu } from "./design/Header";
import { useState } from "react";
import { useAuthStore } from "../store/authStore";

const Header = () => {
  const { user, logout } = useAuthStore();

  const handleLogout = () => {
    logout();
  };
  const pathname = useLocation();
  const [openNavigation, setOpenNavigation] = useState(false);

  const toggleNavigation = () => {
    if (openNavigation) {
      setOpenNavigation(false);
      enablePageScroll();
    } else {
      setOpenNavigation(true);
      disablePageScroll();
    }
  };

  const handleClick = () => {
    if (!openNavigation) return;

    enablePageScroll();
    setOpenNavigation(false);
  };

  return (
    <div
      className={`fixed top-0 left-0 w-full z-50  border-b border-n-6 lg:bg-n-8/90 lg:backdrop-blur-sm ${
        openNavigation ? "bg-n-8" : "bg-n-8/90 backdrop-blur-sm"
      }`}
    >
      <div className="flex items-center px-5 lg:px-7.5 xl:px-10 max-lg:py-4">
        <a className="flex gap-2 w-[12rem] xl:mr-8" href="#hero">
          <h1 className="font-cyborg text-3xl font-extrabold bg-gradient-6color bg-clip-text text-transparent">
            Guru-kul
          </h1>
        </a>

        <nav
          className={`${
            openNavigation ? "flex" : "hidden"
          } fixed top-[4rem] left-0 right-0 bottom-0 bg-n-8 lg:static lg:flex lg:mx-auto lg:bg-transparent`}
        >
          <div className="relative z-2 flex gap-1 flex-col items-center justify-center m-auto lg:flex-row">
            {navigation.map((item) => (
              <a
                key={item.id}
                href={item.url}
                onClick={handleClick}
                className={`block relative font-oxanium text-2xl uppercase text-n-1 transition-colors hover:text-color-primary ${
                  item.onlyMobile ? "lg:hidden" : ""
                } px-6 py-6 md:py-8 lg:-mr-0.25 lg:text-xs  ${
                  item.url === pathname.hash ? "z-2 lg:text-n-1" : "lg:text-n-3"
                } lg:leading-5 lg:hover:text-color-primary xl:px-12`}
              >
                {item.title}
              </a>
            ))}

            <div className="flex flex-col items-center gap-4 mt-6 lg:hidden">
              <div
                className="font-oxanium text-n-1 uppercase flex items-center gap-3 fixed top-[100px] left-10"
              >
                <motion.div
                  whileHover={{ scale: 1.05, rotate: 2 }}
                  whileTap={{ scale: 0.95 }}
                  className="clipPath-b-r bg-color-primary rounded-md p-[1px]"
                >
                  <div className="w-10 h-10 rounded-md clipPath-b-r bg-n-6 text-color-primary flex items-center justify-center font-cyborgb text-2xl uppercase transition duration-300">
                    {user?.userName?.[0] || "U"}
                  </div>
                </motion.div>
                <span className="text-sm">Profile</span>
              </div>

              <motion.div
                onClick={() => {
                  handleLogout();
                  handleClick(); // close menu
                }}
                whileHover={{ scale: 1.05, rotate: -2 }}
                whileTap={{ scale: 0.95 }}
                className="bg-color-primary rounded-md p-[1px] font-oxanium clipPath-b-l-t-r cursor-pointer fixed top-[100px] right-10"
              >
                <div className="h-10 rounded-md bg-n-6 text-white flex items-center justify-center text-sm uppercase px-6 clipPath-b-l-t-r transition duration-300 hover:bg-n-5">
                  Log Out
                </div>
              </motion.div>
            </div>
          </div>

          <HamburgerMenu />
        </nav>

        {/* profile */}
        <div
          className="hidden lg:flex items-center gap-2 font-oxanium text-n-1 mx-2"
        >
          <motion.div
            whileHover={{ scale: 1.05, rotate: 2 }}
            whileTap={{ scale: 0.95 }}
            className="clipPath-b-r bg-color-primary rounded-md p-[1px]"
          >
            <div className="w-10 h-10 rounded-md clipPath-b-r bg-n-6 text-color-primary flex items-center justify-center font-cyborgb text-2xl uppercase transition duration-300">
              {user?.userName?.[0] || "U"}
            </div>
          </motion.div>
        </div>

        {/* logout */}
        <motion.div
          onClick={handleLogout}
          whileHover={{ scale: 1.05, rotate: -2 }}
          whileTap={{ scale: 0.95 }}
          className="hidden lg:flex bg-color-primary rounded-md p-[1px] font-oxanium clipPath-b-l-t-r cursor-pointer"
        >
          <div className="flex h-10 rounded-md bg-n-6 text-white items-center justify-center text-sm uppercase px-4 clipPath-b-l-t-r transition duration-300 hover:bg-n-5">
            Log Out
          </div>
        </motion.div>

        {/* mobile menu */}
        <Button
          className="ml-auto lg:hidden"
          px="px-3"
          onClick={toggleNavigation}
        >
          <MenuSvg openNavigation={openNavigation} />
        </Button>
      </div>
    </div>
  );
};

export default Header;
