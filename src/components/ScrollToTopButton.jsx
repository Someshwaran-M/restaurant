import { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";

const ScrollToTopButton = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 250);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check initial position

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div
      className={`fixed bottom-6 right-6 z-[9999] transition-all duration-500 ${
        visible
          ? "translate-y-0 opacity-100 scale-100"
          : "translate-y-10 opacity-0 scale-75 pointer-events-none"
      }`}
    >
      {/* Glow */}
      <div className="absolute inset-0 rounded-full bg-yellow-400 blur-xl opacity-70 animate-pulse"></div>

      {/* Button */}
      <button
        onClick={scrollToTop}
        aria-label="Scroll to top"
        className="relative flex h-16 w-16 items-center justify-center rounded-full
                   bg-gradient-to-br from-yellow-300 via-yellow-400 to-orange-500
                   text-black shadow-[0_0_20px_rgba(250,204,21,0.8)]
                   hover:shadow-[0_0_35px_rgba(250,204,21,1)]
                   hover:scale-110 active:scale-95
                   transition-all duration-300 border-2 border-yellow-200"
      >
        <FaArrowUp className="text-2xl animate-bounce" />
      </button>
    </div>
  );
};

export default ScrollToTopButton;