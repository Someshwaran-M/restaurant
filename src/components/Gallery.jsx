import { motion } from "framer-motion";
import {
  Camera,
  Heart,
  MapPin,
  Star,
  ArrowUpRight,
  ImageIcon,
} from "lucide-react";

const galleryImages = [
  {
    id: 1,
    title: "Maldives",
    location: "Indian Ocean",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=900&auto=format&fit=crop",
    rating: "4.9",
    featured: true,
  },
  {
    id: 2,
    title: "Bali",
    location: "Indonesia",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=900&auto=format&fit=crop",
    rating: "4.8",
  },
  {
    id: 3,
    title: "Dubai",
    location: "UAE",
    image:
      "https://images.unsplash.com/photo-1527631746610-bca00a040d60?w=900&auto=format&fit=crop",
    rating: "4.9",
  },
  {
    id: 4,
    title: "Switzerland",
    location: "Europe",
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=900&auto=format&fit=crop",
    rating: "5.0",
  },
  {
    id: 5,
    title: "Paris",
    location: "France",
    image:
      "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=900&auto=format&fit=crop",
    rating: "4.8",
  },
  {
    id: 6,
    title: "Singapore",
    location: "Singapore",
    image:
      "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=900&auto=format&fit=crop",
    rating: "4.9",
  },
];

function Gallery({ darkMode }) {
  const iconButton =
    "group flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/10 backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:scale-110 hover:rotate-6 hover:border-orange-400 hover:bg-gradient-to-br hover:from-orange-500 hover:to-amber-500 hover:shadow-[0_0_28px_rgba(249,115,22,.55)]";

  return (
    <section
      id="gallery"
      className={`relative overflow-hidden py-24 ${
        darkMode
          ? "bg-[#04070F]"
          : "bg-gradient-to-b from-orange-50 via-white to-orange-100"
      }`}
    >
      {/* Premium Background */}

      <div className="absolute inset-0 overflow-hidden">

        <div className="absolute -left-40 top-10 h-[450px] w-[450px] rounded-full bg-orange-500/15 blur-[170px]" />

        <div className="absolute -right-40 bottom-0 h-[450px] w-[450px] rounded-full bg-amber-400/15 blur-[170px]" />

        <div className="absolute left-1/2 top-1/2 h-[320px] w-[320px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-orange-400/10 blur-[130px]" />

      </div>

      {/* Grid */}

      <div
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "linear-gradient(to right,#fff 1px,transparent 1px),linear-gradient(to bottom,#fff 1px,transparent 1px)",
          backgroundSize: "70px 70px",
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-5 lg:px-8">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 45 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >

          <div className="inline-flex items-center gap-3 rounded-full border border-orange-400/25 bg-white/5 px-5 py-2 backdrop-blur-xl">

            <ImageIcon
              size={16}
              className="text-orange-400"
            />

            <span className="text-[11px] font-bold uppercase tracking-[4px] text-orange-400">

              Gallery

            </span>

          </div>

          <h2
            className={`mt-6 text-4xl font-black leading-tight md:text-5xl ${
              darkMode ? "text-white" : "text-gray-900"
            }`}
          >

            Explore Our

            <span className="block bg-gradient-to-r from-orange-400 via-amber-300 to-yellow-300 bg-clip-text text-transparent">

              Luxury Destinations

            </span>

          </h2>

          <p
            className={`mx-auto mt-5 max-w-2xl text-base leading-7 ${
              darkMode ? "text-gray-400" : "text-gray-600"
            }`}
          >

            Discover breathtaking destinations, premium travel experiences,
            comfortable rides and unforgettable adventures crafted with style.

          </p>

        </motion.div>

        {/* Premium Gallery Grid */}

        <div className="grid auto-rows-[220px] gap-5 md:grid-cols-2 lg:grid-cols-4">

          {/* ===========================
              FEATURED CARD STARTS HERE
              (Part 2)
          =========================== */}
          {/* ===========================
    PREMIUM FEATURED CARD
=========================== */}

<motion.div
  initial={{ opacity: 0, scale: 0.92 }}
  whileInView={{ opacity: 1, scale: 1 }}
  whileHover={{ y: -8 }}
  viewport={{ once: true }}
  transition={{ duration: 0.7 }}
  className={`group relative overflow-hidden rounded-[28px] border lg:col-span-2 lg:row-span-2 ${
    darkMode
      ? "border-white/10 bg-[#111827]"
      : "border-orange-200 bg-white"
  } shadow-2xl transition-all duration-700 hover:border-orange-400/60 hover:shadow-[0_25px_80px_rgba(249,115,22,.35)]`}
>

  {/* Image */}

  <img
    src={galleryImages[0].image}
    alt={galleryImages[0].title}
    className="absolute inset-0 h-full w-full object-cover transition-all duration-1000 group-hover:scale-[1.12] group-hover:rotate-1 group-hover:brightness-110"
  />

  {/* Overlay */}

  <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/30 to-black/90" />

  {/* Animated Glow */}

  <div className="absolute -left-24 -top-24 h-64 w-64 rounded-full bg-orange-500/20 blur-[120px] opacity-0 transition-all duration-700 group-hover:opacity-100" />

  <div className="absolute -right-24 bottom-0 h-64 w-64 rounded-full bg-yellow-400/20 blur-[120px] opacity-0 transition-all duration-700 group-hover:opacity-100" />

  {/* Camera */}

  <motion.div
    whileHover={{
      scale: 1.12,
      rotate: 10,
      y: -3,
    }}
    className="absolute left-5 top-5"
  >
    <button className={iconButton}>

      <Camera
        size={18}
        className="text-white transition-all duration-500 group-hover:scale-125"
      />

    </button>
  </motion.div>

  {/* Heart */}

  <motion.div
    whileHover={{
      scale: 1.12,
      rotate: 12,
      y: -3,
    }}
    className="absolute right-5 top-5"
  >
    <button className={iconButton}>

      <Heart
        size={18}
        className="text-white transition-all duration-500 group-hover:text-red-200"
      />

    </button>
  </motion.div>

  {/* Rating */}

  <div className="absolute left-5 top-20">

    <div className="flex items-center gap-2 rounded-full border border-white/10 bg-black/25 px-3 py-1.5 backdrop-blur-xl">

      <Star
        size={13}
        className="fill-yellow-400 text-yellow-400"
      />

      <span className="text-xs font-semibold text-white">

        {galleryImages[0].rating}

      </span>

    </div>

  </div>

  {/* Location */}

  <div className="absolute right-5 top-20">

    <div className="flex items-center gap-2 rounded-full border border-white/10 bg-black/25 px-3 py-1.5 backdrop-blur-xl">

      <MapPin
        size={13}
        className="text-orange-400"
      />

      <span className="text-xs text-white">

        {galleryImages[0].location}

      </span>

    </div>

  </div>

  {/* Bottom Content */}

  <div className="absolute bottom-0 left-0 w-full p-6">

    <div className="inline-flex items-center gap-2 rounded-full border border-orange-400/30 bg-orange-500/20 px-3 py-1 backdrop-blur-xl">

      <span className="h-2 w-2 rounded-full bg-orange-400 animate-pulse" />

      <span className="text-[11px] font-semibold uppercase tracking-[3px] text-orange-300">

        Featured Destination

      </span>

    </div>

    <h2 className="mt-4 text-4xl font-black text-white">

      {galleryImages[0].title}

    </h2>

    <p className="mt-3 max-w-md text-sm leading-6 text-gray-200">

      Crystal clear waters, luxury resorts, premium travel
      experiences and unforgettable sunsets waiting for you.

    </p>

    {/* Premium Icons */}

    <div className="mt-6 flex items-center gap-3">

      <motion.button
        whileHover={{
          scale: 1.12,
          rotate: 8,
          y: -3,
        }}
        whileTap={{ scale: 0.95 }}
        className="group flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-orange-500 to-amber-500 text-white shadow-lg transition-all duration-500 hover:shadow-[0_0_30px_rgba(249,115,22,.7)]"
      >

        <ArrowUpRight
          size={18}
          className="transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1"
        />

      </motion.button>

      <motion.button
        whileHover={{
          scale: 1.12,
          rotate: 8,
          y: -3,
        }}
        whileTap={{ scale: 0.95 }}
        className={iconButton}
      >

        <Camera
          size={17}
          className="text-white"
        />

      </motion.button>

      <motion.button
        whileHover={{
          scale: 1.12,
          rotate: 8,
          y: -3,
        }}
        whileTap={{ scale: 0.95 }}
        className={iconButton}
      >

        <MapPin
          size={17}
          className="text-white"
        />

      </motion.button>

      <motion.button
        whileHover={{
          scale: 1.12,
          rotate: 8,
          y: -3,
        }}
        whileTap={{ scale: 0.95 }}
        className={iconButton}
      >

        <Heart
          size={17}
          className="text-white"
        />

      </motion.button>

    </div>

  </div>

  {/* Bottom Glow */}

  <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-orange-500/20 to-transparent opacity-0 transition-all duration-700 group-hover:opacity-100" />

</motion.div>

{/* ===========================
    SMALL CARDS START HERE
    (Part 3)
=========================== */}
{/* ===========================
    PREMIUM SMALL CARDS
=========================== */}

{galleryImages.slice(1).map((item, index) => (
  <motion.div
    key={item.id}
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    whileHover={{ y: -8 }}
    viewport={{ once: true }}
    transition={{
      duration: 0.6,
      delay: index * 0.08,
    }}
    className={`group relative overflow-hidden rounded-[24px] border ${
      darkMode
        ? "border-white/10 bg-[#111827]"
        : "border-orange-200 bg-white"
    } shadow-xl transition-all duration-700 hover:border-orange-400/60 hover:shadow-[0_20px_60px_rgba(249,115,22,.35)]`}
  >

    {/* Image */}

    <img
      src={item.image}
      alt={item.title}
      className="absolute inset-0 h-full w-full object-cover transition-all duration-1000 group-hover:scale-[1.12] group-hover:rotate-1 group-hover:brightness-110"
    />

    {/* Overlay */}

    <div className="absolute inset-0 bg-gradient-to-b from-black/15 via-black/20 to-black/90" />

    {/* Glow */}

    <div className="absolute -left-16 -top-16 h-44 w-44 rounded-full bg-orange-500/20 blur-[90px] opacity-0 transition-all duration-700 group-hover:opacity-100" />

    <div className="absolute -right-16 bottom-0 h-44 w-44 rounded-full bg-yellow-400/20 blur-[90px] opacity-0 transition-all duration-700 group-hover:opacity-100" />

    {/* Camera */}

    <motion.div
      whileHover={{
        scale: 1.1,
        rotate: 8,
      }}
      className="absolute left-4 top-4"
    >
      <button className={iconButton}>

        <Camera
          size={16}
          className="text-white transition-all duration-500 group-hover:scale-125"
        />

      </button>
    </motion.div>

    {/* Heart */}

    <motion.div
      whileHover={{
        scale: 1.1,
        rotate: 10,
      }}
      className="absolute right-4 top-4"
    >
      <button className={iconButton}>

        <Heart
          size={14}
          className="text-white transition-all duration-500 group-hover:text-red-200"
        />

      </button>
    </motion.div>

    {/* Bottom */}

    <div className="absolute bottom-0 left-0 w-full p-4">

      {/* Rating */}

      

      {/* Title */}

      <h3 className="text-xl font-bold text-white">

        {item.title}

      </h3>

      <p className="mt-2 text-xs leading-5 text-gray-300">

        Luxury rides, scenic views and unforgettable travel
        experiences crafted for every journey.

      </p>

      {/* Premium Buttons */}

      <div className="mt-4 flex items-center justify-between">

        <div className="flex gap-2">

          <motion.button
            whileHover={{
              scale: 1.12,
              rotate: 8,
            }}
            whileTap={{ scale: 0.95 }}
            className="group flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-orange-500 to-amber-500 text-white shadow-lg transition-all duration-500 hover:shadow-[0_0_25px_rgba(249,115,22,.7)]"
          >

            <ArrowUpRight
              size={16}
              className="transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1"
            />

          </motion.button>

          <motion.button
            whileHover={{
              scale: 1.1,
              rotate: 8,
            }}
            whileTap={{ scale: 0.95 }}
            className={iconButton}
          >

            <Camera
              size={15}
              className="text-white"
            />

          </motion.button>

        </div>

        <motion.button
          whileHover={{
            scale: 1.1,
            rotate: 8,
          }}
          whileTap={{ scale: 0.95 }}
          className={iconButton}
        >

          <Heart
            size={15}
            className="text-white"
          />

        </motion.button>

      </div>

    </div>

    {/* Hover Border */}

    <div className="absolute inset-0 rounded-[24px] border border-orange-400/0 transition-all duration-700 group-hover:border-orange-400/40" />

  </motion.div>
))}

{/* ===========================
    PREMIUM CTA
    (Part 4)
=========================== */}
{/* ===========================
    PREMIUM CTA
=========================== */}

        </div>

        <motion.div
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-20"
        >

          <div className="relative overflow-hidden rounded-[32px] border border-orange-400/20">

            {/* Background */}

            <div className="absolute inset-0 bg-gradient-to-r from-[#ff7b00] via-[#ff9a00] to-[#ff6b00]" />

            {/* Glow */}

            <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-white/20 blur-[120px]" />

            <div className="absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-yellow-300/20 blur-[120px]" />

            <div className="relative z-10 flex flex-col items-center px-6 py-14 text-center">

              {/* Premium Icon */}

              <motion.div
                whileHover={{
                  scale: 1.08,
                  rotate: 8,
                }}
                className="group flex h-20 w-20 items-center justify-center rounded-full border border-white/20 bg-white/10 backdrop-blur-xl shadow-2xl"
              >

                <Camera
                  size={34}
                  className="text-white transition-all duration-500 group-hover:rotate-12 group-hover:scale-110"
                />

              </motion.div>

              <h2 className="mt-6 text-3xl font-black text-white md:text-5xl">

                Start Your

                <span className="block">

                  Dream Journey

                </span>

              </h2>

              <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-orange-50">

                Explore breathtaking destinations with premium comfort,
                luxury vehicles and unforgettable travel experiences.

              </p>

              {/* Buttons */}

              <div className="mt-8 flex flex-wrap items-center justify-center gap-3">

                <motion.button
                  whileHover={{
                    scale: 1.12,
                    rotate: 8,
                    y: -3,
                  }}
                  whileTap={{
                    scale: 0.95,
                  }}
                  className="group flex h-12 w-12 items-center justify-center rounded-full bg-white text-orange-500 shadow-xl transition-all duration-500 hover:shadow-[0_0_30px_rgba(255,255,255,.5)]"
                >

                  <ArrowUpRight
                    size={20}
                    className="transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1"
                  />

                </motion.button>

                <motion.button
                  whileHover={{
                    scale: 1.12,
                    rotate: 8,
                    y: -3,
                  }}
                  whileTap={{
                    scale: 0.95,
                  }}
                  className={iconButton}
                >

                  <Camera
                    size={18}
                    className="text-white"
                  />

                </motion.button>

                <motion.button
                  whileHover={{
                    scale: 1.12,
                    rotate: 8,
                    y: -3,
                  }}
                  whileTap={{
                    scale: 0.95,
                  }}
                  className={iconButton}
                >

                  <MapPin
                    size={18}
                    className="text-white"
                  />

                </motion.button>

                <motion.button
                  whileHover={{
                    scale: 1.12,
                    rotate: 8,
                    y: -3,
                  }}
                  whileTap={{
                    scale: 0.95,
                  }}
                  className={iconButton}
                >

                  <Heart
                    size={18}
                    className="text-white group-hover:text-red-200"
                  />

                </motion.button>

              </div>

            </div>

          </div>

        </motion.div>

      </div>

    </section>
  );
}

export default Gallery;