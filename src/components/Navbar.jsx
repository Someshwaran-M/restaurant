import { useState, useEffect } from "react";
import {
  Menu,
  X,
  Moon,
  Sun,
  Phone,
  MessageCircle,
} from "lucide-react";
import {
  Car,
  Clock3,
  MapPin,
  BadgeIndianRupee,
  CircleDot,
} from "lucide-react";
import logo from "../assets/images/Logo.png";

function Navbar({
  darkMode,
  setDarkMode,
  setActiveSection,
}) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navItems = [
    "Home",
    "Services",
    "Tours",
    "Gallery",
    "Contact",
  ];

  const handleNavClick = (item) => {
    if (item === "Tours") {
      setActiveSection("tours");

      setTimeout(() => {
        document.getElementById("tours")?.scrollIntoView({
          behavior: "smooth",
        });
      }, 100);

      return;
    }

    if (item === "Gallery") {
      setActiveSection("gallery");

      setTimeout(() => {
        document.getElementById("gallery")?.scrollIntoView({
          behavior: "smooth",
        });
      }, 100);

      return;
    }

    if (item === "Contact") {
      setActiveSection("contact");

      setTimeout(() => {
        document.getElementById("contact")?.scrollIntoView({
          behavior: "smooth",
        });
      }, 100);

      return;
    }

    document.getElementById(item.toLowerCase())?.scrollIntoView({
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full z-50">

      <div
        className={`transition-all duration-500 ${
          scrolled ? "py-3 backdrop-blur-md" : "py-6 backdrop-blur-md"
        }`}
      >
        <div className="max-w-7xl mx-auto px-5">

          <nav
            className={`rounded-full border transition-all duration-500 ${
              darkMode
                ? "backdrop-blur-sm border-white/10 shadow-2xl shadow-black/30"
                : "backdrop-blur-sm border-gray-200 shadow-xl shadow-gray-200/70"
            }`}
          >

            <div className="flex items-center justify-between px-6 lg:px-8 h-20">

              {/* Logo */}

              <div className="flex items-center gap-3">

                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center shadow-lg shadow-orange-500/40">

                  <img
                    src={logo}
                    alt="Logo"
                    className="h-9 w-auto"
                  />

                </div>

                <div className="hidden md:block">

                  <h2
                    className={`text-xl font-extrabold tracking-wide ${
                      darkMode
                        ? "text-white"
                        : "text-gray-900"
                    }`}
                  >
                    Nagma Travels
                  </h2>

                  <p
                    className={`text-xs ${
                      darkMode
                        ? "text-gray-400"
                        : "text-gray-500"
                    }`}
                  >
                    Safe • Trusted • Comfortable
                  </p>

                </div>

              </div>

              {/* Desktop Menu */}

              <ul className="hidden lg:flex items-center gap-3 ">

                {navItems.map((item) => (
                  <li key={item}>
                    <button
                      onClick={() => handleNavClick(item)}
                      className={`relative px-5 py-2 rounded-full font-semibold transition-all duration-300 group overflow-hidden ${
                        darkMode
                          ? "text-white hover:text-white"
                          : "text-gray-800 hover:text-white"
                      }`}
                    >

                      <span className="absolute inset-0 rounded-full bg-gradient-to-r from-orange-500 to-orange-600 scale-0 group-hover:scale-100 transition-transform duration-300 origin-center"></span>

                      <span className="relative z-10">
                        {item}
                      </span>

                    </button>
                  </li>
                ))}

              </ul>

              {/* Right Side */}

              <div className="hidden lg:flex items-center gap-3">

                <button
                  onClick={() => setDarkMode(!darkMode)}
                  className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 ${
                    darkMode
                      ? "bg-white/10 border border-white/10 hover:bg-orange-500"
                      : "bg-gray-100 border border-gray-200 hover:bg-orange-500 hover:text-white"
                  }`}
                >
                  {darkMode ? (
                    <Sun
                      size={20}
                      className="text-yellow-400"
                    />
                  ) : (
                    <Moon size={20} />
                  )}
                </button>

                <a
                  href="tel:+91 88844 49452"
                  className={`flex items-center gap-2 px-5 py-3 rounded-full font-semibold transition-all duration-300 ${
                    darkMode
                      ? "bg-white/10 text-white hover:bg-orange-500 text-gray-800"
                      : "bg-gray-100 text-gray-800 hover:bg-orange-200"
                  }`}
                >
                  <Phone size={18} />
                  Call
                </a>

                <a
                  href="https://wa.me/+91 88844 49452"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold shadow-xl shadow-orange-500/40 hover:scale-105 transition-all duration-300"
                >
                  <MessageCircle size={18} />
                  WhatsApp
                </a>

              </div>

              {/* Mobile Menu Button */}

              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className={`lg:hidden w-12 h-12 rounded-full flex items-center justify-center ${
                  darkMode
                    ? "bg-white/10 text-white"
                    : "bg-gray-100 text-gray-900"
                }`}
              >
                {menuOpen ? (
                  <X size={28} />
                ) : (
                  <Menu size={28} />
                )}
              </button>

            </div>

                        {menuOpen && (
              <div
                className={`lg:hidden overflow-hidden transition-all duration-500 ${
                  darkMode
                    ? "bg-[#0f172a]/95 border-t border-white/10"
                    : "bg-white border-t border-gray-200"
                }`}
              >
                <div className="px-6 py-6 space-y-3">

                  {navItems.map((item) => (
                    <button
                      key={item}
                      onClick={() => {
                        handleNavClick(item);
                        setMenuOpen(false);
                      }}
                      className={`w-full text-left px-5 py-4 rounded-2xl font-semibold transition-all duration-300 ${
                        darkMode
                          ? "text-white bg-white/5 hover:bg-orange-500"
                          : "text-gray-800 bg-gray-100 hover:bg-orange-500 hover:text-white"
                      }`}
                    >
                      {item}
                    </button>
                  ))}

                  <div className="grid grid-cols-2 gap-3 pt-3">

                    <a
                      href="tel:+91 88844 49452"
                      className="flex items-center justify-center gap-2 rounded-2xl py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold shadow-lg shadow-orange-500/30"
                    >
                      <Phone size={18} />
                      Call
                    </a>

                    <a
                      href="https://wa.me/+91 88844 49452"
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center justify-center gap-2 rounded-2xl py-4 bg-green-500 text-white font-semibold shadow-lg shadow-green-500/30"
                    >
                      <MessageCircle size={18} />
                      WhatsApp
                    </a>

                  </div>
                </div>
              </div>
            )}

          </nav>
        </div>
      </div>

     {/* Premium Animated Top Bar */}
<div className="relative overflow-hidden backdrop-blur-md border-y border-orange-500/20">

  {/* Glow */}
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(249,115,22,.15),transparent_30%),radial-gradient(circle_at_80%_50%,rgba(249,115,22,.08),transparent_40%)]"></div>

  {/* Moving Shine */}
  <div className="absolute top-0 left-[-40%] h-full w-1/3 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shine"></div>

  <div className="relative overflow-hidden py-3">

    <div className="flex w-max items-center whitespace-nowrap gap-10 animate-marquee">

      {/* Live Badge */}
      <div className="flex items-center gap-2 rounded-full border border-green-500/30 bg-green-500/10 px-4 py-1.5 backdrop-blur-md">

        <CircleDot
          size={10}
          className="text-green-400 animate-pulse fill-green-400"
        />

        <span className="font-semibold text-white">
          Booking Open
        </span>

      </div>

      <div className="flex items-center gap-2 text-gray-200 hover:text-orange-400 transition-all duration-300 group">
        <Car className="h-4 w-4 text-orange-400 group-hover:rotate-12 group-hover:scale-125 transition-all duration-300" />
        <span>Instant Taxi Booking</span>
      </div>

      <div className="flex items-center gap-2 text-gray-200 hover:text-orange-400 transition-all duration-300 group">
        <Clock3 className="h-4 w-4 text-orange-400 group-hover:animate-spin" />
        <span>24×7 Service</span>
      </div>

      <div className="flex items-center gap-2 text-gray-200 hover:text-orange-400 transition-all duration-300 group">
        <MapPin className="h-4 w-4 text-orange-400 group-hover:-translate-y-1 transition-all duration-300" />
        <span>One Way • Round Trip</span>
      </div>

      <div className="flex items-center gap-2 text-gray-200 hover:text-orange-400 transition-all duration-300 group">
        <BadgeIndianRupee className="h-4 w-4 text-orange-400 group-hover:scale-125 transition-all duration-300" />
        <span>Transparent Pricing</span>
      </div>

      <a
        href="tel:+91 88844 49452"
        className="flex items-center gap-2 font-semibold text-white hover:text-orange-400 transition-all duration-300 group"
      >
        <Phone className="h-4 w-4 text-orange-400 group-hover:animate-bounce" />
        +91 88844 49452
      </a>

      {/* Duplicate for Infinite Loop */}
      

      <div className="flex items-center gap-2 rounded-full border border-green-500/30 bg-green-500/10 px-4 py-1.5 backdrop-blur-md">
        <CircleDot
          size={10}
          className="text-green-400 animate-pulse fill-green-400"
        />
        <span className="font-semibold text-white">
          Booking Open
        </span>
      </div>

      <div className="flex items-center gap-2 text-gray-200">
        <Car className="h-4 w-4 text-orange-400" />
        <span>Instant Taxi Booking</span>
      </div>

      <div className="flex items-center gap-2 text-gray-200">
        <Clock3 className="h-4 w-4 text-orange-400" />
        <span>24×7 Service</span>
      </div>

      <div className="flex items-center gap-2 text-gray-200">
        <MapPin className="h-4 w-4 text-orange-400" />
        <span>One Way • Round Trip</span>
      </div>

      <div className="flex items-center gap-2 text-gray-200">
        <BadgeIndianRupee className="h-4 w-4 text-orange-400" />
        <span>Transparent Pricing</span>
      </div>

      <a
        href="tel:+91 88844 49452"
        className="flex items-center gap-2 font-semibold text-white"
      >
        <Phone className="h-4 w-4 text-orange-400" />
      +91 88844 49452
      </a>

    </div>
    

  </div>
</div>
      {/* Floating Contact Buttons */}

      <div className="fixed bottom-6 right-6 z-[999] flex flex-col gap-4">

        <a
          href="tel:+91 88844 49452"
          className="group w-16 h-16 rounded-full bg-gradient-to-r from-orange-500 to-orange-600 shadow-2xl shadow-orange-500/40 flex items-center justify-center hover:scale-110 transition-all duration-300"
        >
          <Phone
            size={28}
            className="text-white group-hover:rotate-12 transition"
          />
        </a>

        <a
          href="https://wa.me/+91 88844 49452"
          target="_blank"
          rel="noreferrer"
          className="group w-16 h-16 rounded-full bg-green-500 shadow-2xl shadow-green-500/40 flex items-center justify-center hover:scale-110 transition-all duration-300"
        >
          <MessageCircle
            size={28}
            className="text-white group-hover:scale-110 transition"
          />
        </a>

      </div>

          </header>
  );
}

export default Navbar;
