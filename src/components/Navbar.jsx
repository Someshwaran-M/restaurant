import { useState } from "react";
import {
  Menu,
  X,
  Moon,
  Sun,
  Phone,
  MessageCircle,
} from "lucide-react";


function Navbar({ darkMode, setDarkMode }) {
  const [menuOpen, setMenuOpen] = useState(false);
  

  const navItems = [
    "Home",
    "Services",
    "Tours",
    "Gallery",
    "Contact",
  ];

  return (
    <header
  className={`fixed top-0 left-0 w-full z-50 ${
    darkMode
      ? " text-white"
      : " text-white"
  }`}
>

      <nav
  className={`border-b ${
    darkMode
      ? "border-orange-500/20 shadow-lg shadow-black/30"
      : "border-orange-500/20 shadow-lg shadow-black/30"
  }`}
>
  <div className="max-w-7xl mx-auto px-6">

    <div className="h-20 flex items-center justify-between">

      {/* Logo */}
      <div className="flex items-center">
        <img
          src="public/cars/logo.png"
          alt="Logo"
          className="h-16 w-auto"
        />
      </div>

      {/* Desktop Menu */}
      <ul className="hidden lg:flex items-center gap-10">

        {navItems.map((item) => (
          <li key={item}>
            <a
              href={`#${item.toLowerCase()}`}
              className={`relative font-semibold tracking-wide transition-all duration-300 hover:text-orange-500 after:absolute after:left-0 after:-bottom-2 after:h-[2px] after:w-0 after:bg-orange-500 after:transition-all after:duration-300 hover:after:w-full ${
  darkMode ? "text-white" : "text-white"
}`}
            >
              {item}
            </a>
          </li>
        ))}

      </ul>

      {/* Right Buttons */}
      <div className="hidden lg:flex items-center gap-4">

        {/* Dark Button */}
        <button
  onClick={() => setDarkMode(!darkMode)}
  className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 ${
    darkMode
      ? "border border-white/20 bg-white/5 hover:bg-orange-500"
      : "border border-gray-300 bg-gray-100 hover:bg-orange-500"
  }`}
>
  {darkMode ? (
    <Sun className="text-yellow-400" size={20} />
  ) : (
    <Moon className="text-gray-800" size={20} />
  )}
</button>

        {/* Call */}
        <a
          href="tel:+919999999999"
          className={`flex items-center gap-2 rounded-full px-6 py-3 font-semibold transition-all duration-300 ${
  darkMode
    ? "border border-white/20 bg-white/10 text-white hover:bg-orange-500"
    : "border border-white/20 bg-white/10 text-white hover:bg-orange-500"
}`}
        >
          <Phone size={18} />
          Call Now
        </a>

        {/* WhatsApp */}
        <a
          href="https://wa.me/919999999999"
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-2 rounded-full bg-orange-500 hover:bg-orange-600 px-6 py-3 text-white font-semibold shadow-lg shadow-orange-500/40 transition-all duration-300"
        >
          <MessageCircle size={18} />
          WhatsApp
        </a>

      </div>

      {/* Mobile Button */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="lg:hidden text-white"
      >
        {menuOpen ? <X size={30} /> : <Menu size={30} />}
      </button>

    </div>

  </div>

  {/* Mobile Menu */}
  {menuOpen && (
    <div
  className={`lg:hidden backdrop-blur-xl border-t ${
    darkMode
      ? "bg-black/95 border-orange-500/20"
      : "bg-white border-gray-200"
  }`}
>

      <div className="flex flex-col gap-5 p-6">

        {navItems.map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
           className={`font-medium hover:text-orange-500 transition ${
  darkMode ? "text-white" : "text-gray-900"
}`}
          >
            {item}
          </a>
        ))}

        <a
          href="tel:+919999999999"
          className="bg-orange-500 rounded-full py-3 text-center font-semibold text-white"
        >
          Call Now
        </a>

        <a
          href="https://wa.me/919999999999"
          className="bg-orange-600 rounded-full py-3 text-center font-semibold text-white"
        >
          WhatsApp
        </a>

      </div>

    </div>
  )}

</nav>
{/* Top Information Bar */}
<div className="bg-gradient-to-r from-orange-600 via-orange-500 to-orange-600 text-white border-b border-orange-300/20 overflow-hidden">

  <div className="marquee">

    <div className="marquee-content">

      <span>✔ Instant Booking</span>
      <span>◆</span>

      <span>✔ 24/7 Available</span>
      <span>◆</span>

      <span>✔ Per KM Based</span>
      <span>◆</span>

      <span>✔ Transparent Pricing</span>
      <span>◆</span>

      <span>📞 +91 98888 44444</span>
      <span>◆</span>

      <span>🚖 One Way & Outstation Cab Service</span>
      <span>◆</span>

      {/* Duplicate for seamless loop */}

      <span>✔ Instant Booking</span>
      <span>◆</span>

      <span>✔ 24/7 Available</span>
      <span>◆</span>

      <span>✔ Per KM Based</span>
      <span>◆</span>

      <span>✔ Transparent Pricing</span>
      <span>◆</span>

      <span>📞 +91 98888 44444</span>
      <span>◆</span>

      <span>🚖 One Way & Outstation Cab Service</span>

    </div>

  </div>
<div className="fixed bottom-6 right-6 z-[999] flex flex-col gap-5">

  {/* Call */}
  <a
    href="tel:+919888844444"
    className="floating-btn bg-gradient-to-r from-orange-500 to-orange-600 shadow-xl shadow-orange-500/50 hover:scale-110 transition-all duration-300"
  >
    <Phone
      size={30}
      className="text-white animate-pulse"
    />
  </a>

  {/* WhatsApp */}
  <a
    href="https://wa.me/919888844444"
    target="_blank"
    rel="noreferrer"
    className="floating-btn bg-orange-500 shadow-xl shadow-orange-500/50 hover:scale-110 transition-all duration-300"
  >
    <MessageCircle
      size={30}
      className="text-white"
    />
  </a>

</div>

</div>

    </header>
  );
}

export default Navbar;