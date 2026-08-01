import { motion } from "framer-motion";
import { useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  MapPin,
  ArrowRight,
} from "lucide-react";

const destinations = [
  {
    id: 1,
    title: "Ooty",
    category: "Queen of Hills",
    description:
      "Experience lush tea gardens, misty mountains and cool weather.",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 2,
    title: "Kodaikanal",
    category: "Princess of Hills",
    description:
      "Beautiful lakes, pine forests and breathtaking viewpoints.",
    image:
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 3,
    title: "Yercaud",
    category: "Coffee Paradise",
    description:
      "A peaceful hill station surrounded by coffee plantations.",
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 4,
    title: "Kanyakumari",
    category: "Sunrise Point",
    description:
      "Witness the magical sunrise where three seas meet together.",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 5,
    title: "Mahabalipuram",
    category: "Heritage",
    description:
      "Explore UNESCO temples and ancient rock-cut sculptures.",
    image:
      "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1200&q=80",
  },
  {
    id: 6,
    title: "Rameswaram",
    category: "Spiritual Journey",
    description:
      "Famous temple town with scenic sea bridges and beaches.",
    image:
      "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=1200&q=80",
  },
];

function DestinationCards({ darkMode }) {
  const [startIndex, setStartIndex] = useState(0);

  const visibleCards = destinations.slice(startIndex, startIndex + 3);

  const nextSlide = () => {
    if (startIndex < destinations.length - 3) {
      setStartIndex(startIndex + 1);
    } else {
      setStartIndex(0);
    }
  };

  const prevSlide = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
    } else {
      setStartIndex(destinations.length - 3);
    }
  };

  return (
    <section
      className={`relative overflow-hidden py-16 ${
        darkMode
          ? "bg-[#0b1018]"
          : "bg-gradient-to-br from-orange-50 via-white to-orange-100"
      }`}
    >
      {/* Orange Background Glow */}
      <div className="absolute -left-40 top-0 w-96 h-96 bg-orange-500/20 blur-[120px] rounded-full"></div>

      <div className="absolute right-0 bottom-0 w-96 h-96 bg-orange-400/20 blur-[140px] rounded-full"></div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
     {/* ================= LEFT SIDE ================= */}

<motion.div
  initial={{ opacity: 0, x: -80 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: true }}
  className="relative z-10"
>
  {/* Small Label */}
  <span className="inline-block px-4 py-2 rounded-full bg-orange-500/15 border border-orange-500/30 text-orange-500 text-xs font-bold tracking-[4px] uppercase">
    Premium Tour
  </span>

  {/* Heading */}
  <h1
    className={`mt-6 font-black leading-none ${
      darkMode ? "text-white" : "text-gray-900"
    }`}
  >
    <span className="block text-5xl lg:text-6xl">
      EXPLORE
    </span>

    <span className="block mt-2 text-5xl lg:text-6xl">
      DREAM
    </span>

    <span className="block mt-3 text-4xl lg:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-orange-400 to-yellow-400">
      DESTINATION
    </span>
  </h1>

  {/* Orange Line */}
  <div className="w-28 h-1 rounded-full bg-gradient-to-r from-orange-500 to-yellow-400 mt-6"></div>

  {/* Description */}
  <p
    className={`mt-7 max-w-md leading-8 text-base ${
      darkMode ? "text-gray-300" : "text-gray-600"
    }`}
  >
    Discover Tamil Nadu's most beautiful destinations with
    comfortable travel, premium service, and unforgettable
    experiences. Every journey is designed to create memories
    you'll cherish forever.
  </p>

  {/* Buttons */}
  <div className="flex gap-4 mt-8">

    <button
      className="px-7 h-12 rounded-xl bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold shadow-lg shadow-orange-500/30 hover:scale-105 transition duration-300"
    >
      Book Now
    </button>

    <button
      className={`px-7 h-12 rounded-xl border transition duration-300 ${
        darkMode
          ? "border-orange-500 text-orange-400 hover:bg-orange-500 hover:text-white"
          : "border-orange-500 text-orange-600 hover:bg-orange-500 hover:text-white"
      }`}
    >
      Explore
    </button>

  </div>

  {/* Small Statistics */}
  <div className="flex gap-10 mt-12">

    <div>
      <h2 className="text-3xl font-bold text-orange-500">
        150+
      </h2>
      <p
        className={`text-sm ${
          darkMode ? "text-gray-400" : "text-gray-500"
        }`}
      >
        Destinations
      </p>
    </div>

    <div>
      <h2 className="text-3xl font-bold text-orange-500">
        50K+
      </h2>
      <p
        className={`text-sm ${
          darkMode ? "text-gray-400" : "text-gray-500"
        }`}
      >
        Happy Travelers
      </p>
    </div>

    <div>
      <h2 className="text-3xl font-bold text-orange-500">
        24×7
      </h2>
      <p
        className={`text-sm ${
          darkMode ? "text-gray-400" : "text-gray-500"
        }`}
      >
        Support
      </p>
    </div>

  </div>

</motion.div>
{/* ================= RIGHT SIDE ================= */}

<motion.div
  initial={{ opacity: 0, x: 80 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: true }}
  className="relative"
>
  {/* Cards */}
  <div className="grid grid-cols-2  sm:grid-cols-2 lg:grid-cols-3 gap-5">

    {visibleCards.map((place) => (

      <motion.div
        key={place.id}
        whileHover={{
          y: -10,
          scale: 1.03,
        }}
        transition={{ duration: 0.3 }}
        className={`group overflow-hidden rounded-2xl border shadow-xl ${
          darkMode
            ? "bg-white/5 border-white/10 backdrop-blur-xl"
            : "bg-white border-orange-100"
        }`}
      >

        {/* Image */}
        <div className="relative h-48 overflow-hidden">

          <img
            src={place.image}
            alt={place.title}
            className="w-full h-full object-cover transition duration-700 group-hover:scale-110"
          />

          {/* Orange Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

          {/* Category */}
          <div className="absolute top-4 left-4">

            <span className="px-3 py-1 rounded-full bg-orange-500 text-white text-xs font-bold">
              {place.category}
            </span>

          </div>

        </div>

        {/* Content */}
        <div className="p-5">

          <div className="flex items-center gap-2 text-orange-500 text-sm font-semibold">

            <MapPin size={16} />

            {place.title}

          </div>

          <h3
            className={`mt-3 text-xl font-bold ${
              darkMode ? "text-white" : "text-gray-900"
            }`}
          >
            {place.title}
          </h3>

          <p
            className={`mt-3 text-sm leading-7 ${
              darkMode ? "text-gray-400" : "text-gray-600"
            }`}
          >
            {place.description}
          </p>

          <button className="mt-5 inline-flex items-center gap-2 text-orange-500 font-semibold hover:gap-3 transition-all">

            Read More

            <ArrowRight size={18} />

          </button>

        </div>

      </motion.div>

    ))}

  </div>

  {/* Navigation Buttons */}
  <div className="flex justify-center items-center gap-4 mt-8">

    <button
      onClick={prevSlide}
      className="w-11 h-11 rounded-full bg-orange-500 text-white flex items-center justify-center hover:bg-orange-600 transition"
    >
      <ChevronLeft size={20} />
    </button>

    <button
      onClick={nextSlide}
      className="w-11 h-11 rounded-full bg-orange-500 text-white flex items-center justify-center hover:bg-orange-600 transition"
    >
      <ChevronRight size={20} />
    </button>

  </div>

</motion.div>
        </div>
      </div>
    </section>
  );
}

export default DestinationCards;