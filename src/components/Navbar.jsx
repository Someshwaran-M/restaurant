import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

import {
  FaUtensils,
  FaBars,
  FaTimes,
  FaHome,
  FaInfoCircle,
  FaBookOpen,
  FaImages,
  FaPhoneAlt,
  FaClipboardList,
  FaArrowRight,
} from "react-icons/fa";

import {
  FaFacebookF,
  FaInstagram,
  FaXTwitter,
} from "react-icons/fa6";
import logo from "../assets/images/logo.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";
  }, [menuOpen]);

  const navItems = [
    {
      name: "Home",
      path: "/",
      icon: <FaHome />,
    },
    
    {
      name: "Menu",
      path: "/menu",
      icon: <FaUtensils />,
    },
    {
      name: "Gallery",
      path: "/gallery",
      icon: <FaImages />,
    },
    {
      name: "Blog",
      path: "/blog",
      icon: <FaBookOpen />,
    },
    {
      name: "Contact",
      path: "/contact",
      icon: <FaPhoneAlt />,
    },
  ];

  return (
    <>
          <motion.header
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          scrolled
            ? "backdrop-blur-2xl border-b border-yellow-500/20 shadow-[0_10px_40px_rgba(0,0,0,0.7)]"
            : " backdrop-blur-xl"
        } py-4`}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between">

            {/* Logo */}

            <Link
              to="/"
              className="flex items-center gap-2 group"
            >
              <img
                src={logo}
                alt="Spice Garden Logo"
                className="w-16 h-16 object-contain transition-all duration-500 group-hover:scale-110"
              />

              <div>
                <h2 className="text-2xl font-black tracking-wide">
                  <span className="text-white">
                    Spice
                  </span>

                  <span className="bg-gradient-to-r from-yellow-300 via-yellow-500 to-amber-600 bg-clip-text text-transparent">
                    Garden
                  </span>
                </h2>

                <p className="uppercase tracking-[4px] text-xs text-yellow-500">
                  Fine Dining
                </p>
              </div>
            </Link>
                        {/* Desktop Menu */}

            <nav className="hidden lg:flex">
              <div className="flex items-center gap-2 rounded-full px-3 py-2 bg-black/60 border border-yellow-500/20 backdrop-blur-xl shadow-lg">

                {navItems.map((item) => (
                  <NavLink
                    key={item.name}
                    to={item.path}
                    className={({ isActive }) =>
                      `relative flex items-center gap-2 px-5 py-3 rounded-full font-semibold transition-all duration-300 ${
                        isActive
                          ? "bg-gradient-to-r from-yellow-400 via-amber-500 to-yellow-600 text-black shadow-[0_0_20px_rgba(234,179,8,0.4)]"
                          : "text-gray-200 hover:text-yellow-300 hover:bg-yellow-500/10"
                      }`
                    }
                  >
                    <span className="text-lg">{item.icon}</span>
                    <span>{item.name}</span>
                  </NavLink>
                ))}

              </div>
            </nav>

            {/* Right Side */}

            <div className="flex items-center gap-3">

              {/* Reserve Button */}

              <Link
                to="/reserve"
                className="
                  hidden
                  lg:flex
                  items-center
                  gap-3
                  px-7
                  py-3
                  rounded-full
                  font-semibold
                  bg-gradient-to-r
                  from-yellow-400
                  via-amber-500
                  to-yellow-600
                  text-black
                  shadow-xl
                  hover:scale-105
                  hover:shadow-[0_0_35px_rgba(234,179,8,0.6)]
                  transition-all
                  duration-500
                "
              >
                <FaClipboardList />
                <span>Reserve Table</span>
                <FaArrowRight />
              </Link>

              {/* Mobile Menu Button */}

              <motion.button
                whileTap={{ scale: 0.9 }}
                whileHover={{ rotate: 180 }}
                transition={{ duration: 0.4 }}
                onClick={() => setMenuOpen(!menuOpen)}
                className="lg:hidden w-12 h-12 rounded-full flex items-center justify-center bg-black/70 border border-yellow-500/20 text-yellow-300 hover:bg-yellow-500 hover:text-black transition-all duration-300"
              >
                {menuOpen ? (
                  <FaTimes size={22} />
                ) : (
                  <FaBars size={22} />
                )}
              </motion.button>

            </div>

          </div>
        </div>
      </motion.header>

      {/* Spacer */}
      <div className="h-24"></div>

      {/* Mobile Overlay */}

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setMenuOpen(false)}
            className="fixed inset-0 bg-black/80 backdrop-blur-md z-40 lg:hidden"
          />
        )}
      </AnimatePresence>
            {/* Mobile Drawer */}

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{
              duration: 0.35,
              ease: "easeInOut",
            }}
            className="fixed top-0 right-0 w-80 max-w-full h-screen z-50 bg-black shadow-[0_0_40px_rgba(0,0,0,0.8)] lg:hidden border-l border-yellow-500/20"
          >
            {/* Drawer Header */}

            <div className="flex items-center justify-between px-6 py-6 border-b border-yellow-500/20 bg-black">

              <div className="flex items-center gap-3">

                <img
                  src="/images/logo.png"
                  alt="Spice Garden Logo"
                  className="h-12 w-auto object-contain"
                />

                <div>
                  <h2 className="text-xl font-bold">
                    <span className="text-white">Spice</span>

                    <span className="bg-gradient-to-r from-yellow-300 via-amber-500 to-yellow-600 bg-clip-text text-transparent">
                      Garden
                    </span>
                  </h2>

                  <p className="text-xs uppercase tracking-[4px] text-yellow-500">
                    Fine Dining
                  </p>
                </div>

              </div>

              <button
                onClick={() => setMenuOpen(false)}
                className="w-10 h-10 rounded-full bg-black border border-yellow-500/20 text-yellow-300 hover:bg-yellow-500 hover:text-black transition-all duration-300 flex items-center justify-center"
              >
                <FaTimes size={18} />
              </button>

            </div>

            {/* Mobile Navigation */}

            <div className="px-6 py-8 flex flex-col gap-3">

              {navItems.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.path}
                  onClick={() => setMenuOpen(false)}
                  className={({ isActive }) =>
                    `group flex items-center gap-4 px-5 py-4 rounded-2xl transition-all duration-300 ${
                      isActive
                        ? "bg-gradient-to-r from-yellow-400 via-amber-500 to-yellow-600 text-black shadow-lg"
                        : "bg-black text-gray-300 hover:bg-yellow-500/10 hover:text-yellow-300 border border-transparent hover:border-yellow-500/20"
                    }`
                  }
                >
                  <span className="text-lg">
                    {item.icon}
                  </span>

                  <span className="font-medium">
                    {item.name}
                  </span>
                </NavLink>
              ))}
                            {/* Reserve Button */}

              <Link
                to="/reserve"
                onClick={() => setMenuOpen(false)}
                className="
                  mt-5
                  flex
                  items-center
                  justify-center
                  gap-3
                  rounded-2xl
                  bg-gradient-to-r
                  from-yellow-400
                  via-amber-500
                  to-yellow-600
                  px-5
                  py-4
                  text-black
                  font-semibold
                  shadow-xl
                  hover:scale-105
                  hover:shadow-[0_0_30px_rgba(234,179,8,0.5)]
                  transition-all
                  duration-300
                "
              >
                <FaClipboardList />
                <span>Reserve Table</span>
                <FaArrowRight />
              </Link>

            </div>

            {/* Bottom */}

            <div className="absolute bottom-0 left-0 w-full p-6 border-t border-yellow-500/20 bg-black">

              <p className="text-center text-sm text-gray-400">
                Experience Fine Dining
              </p>

              <h3 className="mt-2 text-center text-lg font-bold">
                <span className="text-white">Spice</span>

                <span className="bg-gradient-to-r from-yellow-300 via-amber-500 to-yellow-600 bg-clip-text text-transparent">
                  Garden
                </span>
              </h3>

              <p className="mt-1 text-center text-xs uppercase tracking-[4px] text-yellow-500">
                Luxury Restaurant
              </p>

              <div className="flex justify-center gap-4 mt-6">

                <motion.a
                  whileHover={{ scale: 1.15 }}
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 rounded-full flex items-center justify-center bg-black border border-yellow-500/20 text-yellow-300 hover:bg-yellow-500 hover:text-black transition-all duration-300"
                >
                  <FaFacebookF size={18} />
                </motion.a>

                <motion.a
                  whileHover={{ scale: 1.15 }}
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 rounded-full flex items-center justify-center bg-black border border-yellow-500/20 text-yellow-300 hover:bg-yellow-500 hover:text-black transition-all duration-300"
                >
                  <FaInstagram size={18} />
                </motion.a>

                <motion.a
                  whileHover={{ scale: 1.15 }}
                  href="https://x.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 rounded-full flex items-center justify-center bg-black border border-yellow-500/20 text-yellow-300 hover:bg-yellow-500 hover:text-black transition-all duration-300"
                >
                  <FaXTwitter size={18} />
                </motion.a>

              </div>

              <p className="mt-6 text-center text-xs text-gray-500">
                © {new Date().getFullYear()} Spice Garden Restaurant
              </p>

            </div>

          </motion.div>
        )}
      </AnimatePresence>

    </>
  );
};

export default Navbar;