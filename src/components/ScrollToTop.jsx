// src/components/ScrollToTop.jsx

import { useEffect, useState } from "react";
import { ChevronUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", toggleVisibility);

    return () =>
      window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          onClick={scrollTop}
          initial={{ opacity: 0, scale: 0.5, y: 50 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 50 }}
          transition={{ duration: 0.3 }}
          className="
            fixed
            bottom-6
            right-6
            z-50
            w-14
            h-14
            rounded-full
            bg-orange-500
            hover:bg-orange-600
            text-white
            shadow-xl
            hover:shadow-orange-300
            flex
            items-center
            justify-center
            transition-all
            duration-300
          "
        >
          <ChevronUp size={28} />
        </motion.button>
      )}
    </AnimatePresence>
  );
}

export default ScrollToTop;