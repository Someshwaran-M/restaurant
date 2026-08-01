import { useState } from "react";
import { motion } from "framer-motion";
import { Camera, ArrowRight } from "lucide-react";

const galleryImages = [
  {
    id: 1,
    image: "/images/Maldives.jpg",
    title: "Maldives",
  },
  {
    id: 2,
    image: "/images/Bali.jpg",
    title: "Bali",
  },
  {
    id: 3,
    image: "/images/Dubai.jpg",
    title: "Dubai",
  },
  {
    id: 4,
    image: "/images/Switzerland.jpg",
    title: "Switzerland",
  },
  {
    id: 5,
    image: "/images/Pairs.jpg",
    title: "Paris",
  },
  {
    id: 6,
    image: "/images/Singapore.jpg",
    title: "Singapore",
  },
];

function Gallery({ darkMode }) {
  // Tracks which card is "open" on tap — CSS :hover/:active alone is unreliable
  // on touch devices, so we drive the shade explicitly for mobile taps.
  const [activeId, setActiveId] = useState(null);

  const handleCardTap = (id) => {
    setActiveId((prev) => (prev === id ? null : id));
  };

  return (
    <section
      id="gallery"
      className={`relative overflow-hidden py-20 sm:py-32 transition-all duration-500 ${
        darkMode ? "bg-[#080C16]" : "bg-white"
      }`}
    >
      {/* Shimmer keyframes, scoped to this component */}
      <style>{`
        @keyframes gallery-shimmer {
          0% { transform: translateX(-130%) skewX(-20deg); }
          100% { transform: translateX(230%) skewX(-20deg); }
        }
        .gallery-shimmer-sweep {
          animation: gallery-shimmer 2.6s ease-in-out infinite;
        }
      `}</style>

      <div
        className={`absolute left-0 top-40 h-80 w-80 rounded-full blur-[120px] ${
          darkMode ? "bg-orange-500/10" : "bg-orange-300/20"
        }`}
      />

      <div
        className={`absolute right-0 bottom-0 h-80 w-80 rounded-full blur-[120px] ${
          darkMode ? "bg-orange-600/10" : "bg-yellow-300/20"
        }`}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mx-auto mb-10 sm:mb-14 max-w-3xl text-center"
        >
          <span className="text-xs sm:text-sm font-bold uppercase tracking-[4px] sm:tracking-[6px] text-orange-400">
            GALLERY
          </span>

          <h2
            className={`mt-4 text-3xl sm:text-4xl font-extrabold md:text-5xl ${
              darkMode ? "text-white" : "text-gray-900"
            }`}
          >
            Explore Our{" "}
            <span className="bg-gradient-to-r from-orange-400 to-amber-300 bg-clip-text text-transparent">
              Travel Moments
            </span>
          </h2>

          <p
            className={`mx-auto mt-5 max-w-2xl text-sm sm:text-base leading-6 sm:leading-7 ${
              darkMode ? "text-gray-400" : "text-gray-600"
            }`}
          >
            Beautiful journeys, unforgettable memories and premium travel
            experiences captured from our happy customers.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 mt-8 sm:mt-10">
          {galleryImages.map((item, index) => {
            const isActive = activeId === item.id;

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 70 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}
                viewport={{ once: true }}
                onClick={() => handleCardTap(item.id)}
                className={`group relative overflow-hidden rounded-2xl cursor-pointer transition-all duration-500 hover:-translate-y-2 ${
                  darkMode
                    ? "border border-white/10 bg-[#141922] hover:border-orange-500/40 hover:shadow-[0_0_30px_rgba(249,115,22,.18)]"
                    : "border border-gray-200 bg-white shadow-lg hover:border-orange-400"
                }`}
              >
                {/* Image + shimmer sweep */}
                <div className="relative h-56 sm:h-64 w-full overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  />

                  {/* Diagonal light sweep — ambient shimmer, pauses/hides while hovered */}
                  <div
                    className="gallery-shimmer-sweep pointer-events-none absolute inset-y-0 left-0 w-1/3
                               bg-gradient-to-r from-transparent via-white/35 to-transparent
                               opacity-100 transition-opacity duration-200
                               group-hover:opacity-0"
                  />
                </div>

                {/* Shade overlay: shows on hover (desktop) or tap (mobile), fast transition */}
                <div
                  className={`absolute inset-0 flex flex-col justify-end p-5 sm:p-6
                             bg-gradient-to-t from-black/85 via-black/45 to-black/10
                             transition-opacity duration-150 ease-out
                             group-hover:opacity-100
                             ${isActive ? "opacity-100" : "opacity-0"}`}
                >
                  <Camera
                    size={30}
                    className={`text-orange-400 mb-2 sm:mb-4 transition-transform duration-300 group-hover:scale-110 ${
                      isActive ? "scale-110" : ""
                    }`}
                  />

                  <h3 className="text-xl sm:text-2xl font-bold text-white">
                    {item.title}
                  </h3>

                  <button
                    className={`mt-2 sm:mt-3 flex items-center gap-2 text-sm font-semibold text-orange-300 transition-transform duration-300 group-hover:translate-x-1 ${
                      isActive ? "translate-x-1" : ""
                    }`}
                  >
                    View Destination
                    <ArrowRight size={18} />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-10 sm:mt-12"
        >
          <button
            className={`rounded-full border-2 border-orange-500 px-6 sm:px-8 py-2.5 sm:py-3 text-sm sm:text-base font-semibold transition-all duration-300 hover:bg-orange-500 hover:text-white ${
              darkMode ? "text-orange-400" : "text-orange-500"
            }`}
          >
            View Complete Gallery
          </button>
        </motion.div>
      </div>
    </section>
  );
}

export default Gallery;
