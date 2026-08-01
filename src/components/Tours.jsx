import React, { useState } from "react";
import {
  MapPin,
  Clock3,
  Car,
  CheckCircle,
  ArrowUpRight,
  Trees,
  Mountain,
  Umbrella,
  Star,
  Moon,
  Sun,
} from "lucide-react";
import { motion } from "framer-motion";

function Tours({ darkMode, setDarkMode }) {

  const tours = [
    {
      id: "01",
      title: "Ooty Hill Station",
      location: "Nilgiris, Tamil Nadu",
      days: "2 Days / 1 Night",
      vehicle: "Sedan / SUV",
      price: "₹4,999",
      oldPrice: "₹4,499",
      description:
        "Experience the cool climate, tea plantations and breathtaking mountain views with our luxury package.",

      image:
        "https://images.unsplash.com/photo-1587474260584-136574528ed5?q=80&w=1200&auto=format&fit=crop",

      icon: <Mountain size={28} />,

      highlights: [
        "Botanical Garden",
        "Ooty Lake",
        "Tea Factory",
        "Doddabetta Peak",
      ],

      includes: [
        "Private Cab",
        "Driver Bata",
        "Fuel",
        "Parking",
        "Toll",
        "Pickup & Drop",
      ],
    },

    {
      id: "02",
      title: "Kodaikanal",
      location: "Dindigul, Tamil Nadu",
      days: "2 Days / 1 Night",
      vehicle: "SUV",
      price: "₹5,499",
      oldPrice: "₹4,999",

      description:
        "Explore misty hills, waterfalls and scenic valleys in Princess of Hill Stations.",

      image:
        "https://images.unsplash.com/photo-1627894483216-2138af692e32?q=80&w=1200&auto=format&fit=crop",

      icon: <Trees size={28} />,

      highlights: [
        "Coakers Walk",
        "Bryant Park",
        "Pillar Rocks",
        "Silver Falls",
      ],

      includes: [
        "SUV",
        "Fuel",
        "Parking",
        "Driver",
        "Pickup",
        "Drop",
      ],
    },

    {
      id: "03",
      title: "Pondicherry",
      location: "Puducherry",
      days: "1 Day",
      vehicle: "Sedan",
      price: "₹2,999",
      oldPrice: "₹2,599",

      description:
        "Enjoy French architecture, beaches, cafés and peaceful streets with premium travel.",

      image:
        "https://images.unsplash.com/photo-1593693397690-362cb9666fc2?q=80&w=1200&auto=format&fit=crop",

      icon: <Umbrella size={28} />,

      highlights: [
        "Promenade",
        "Paradise Beach",
        "French Colony",
        "Auroville",
      ],

      includes: [
        "Cab",
        "Fuel",
        "Driver",
        "Parking",
        "Pickup",
        "Drop",
      ],
    },
  ];

  return (
   <div
  className={`min-h-screen transition-all duration-700 ${
    darkMode
      ? "bg-[#070b12] text-white"
      : "bg-gradient-to-br from-orange-50 via-white to-orange-100 text-gray-900"
  }`}
>
      {/* Background Glow */}

      <div className="absolute inset-0 overflow-hidden pointer-events-none">

        <div className="absolute top-0 left-0 w-96 h-96 rounded-full bg-orange-400/20 blur-[130px]" />

        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-orange-500/20 blur-[160px]" />

      </div>

      {/* Theme Toggle */}

      <button
        onClick={() => setDarkMode(!darkMode)}
        className="fixed z-50 right-8 top-8 w-14 h-14 rounded-full bg-orange-500 hover:scale-110 transition flex items-center justify-center text-white shadow-2xl"
      >
        {darkMode ? <Sun /> : <Moon />}
      </button>

      <div className="relative max-w-7xl mx-auto px-6 py-20">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: -60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .8 }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-2 bg-orange-500 text-white px-6 py-2 rounded-full font-semibold shadow-xl">

            ✨ PREMIUM TOURS

          </div>

          <h1 className="text-6xl md:text-7xl font-black mt-6 leading-none">

            Discover

            <br />

            <span className="text-orange-500">

              Tamil Nadu

            </span>

          </h1>

          <p
            className={`max-w-3xl mx-auto mt-6 text-xl ${
              darkMode ? "text-gray-300" : "text-gray-600"
            }`}
          >
            Premium travel experiences with luxury vehicles,
            experienced drivers, transparent pricing and unforgettable
            destinations.
          </p>
        </motion.div>

        {/* Timeline */}

        <div className="relative mt-24">

          {/* Vertical Line */}

          <div className="hidden lg:block absolute left-1/2 -translate-x-1/2 top-0 w-1 h-full rounded-full bg-orange-500" />
{/* ==================== TOUR CARDS ==================== */}

<div className="space-y-32">

  {tours.map((tour, index) => (
    <motion.div
      key={tour.id}
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className={`relative flex flex-col lg:flex-row items-center ${
        index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
      } justify-between gap-12`}
    >

      {/* ================= CARD ================= */}

      <div
        className={`w-full lg:w-[46%] rounded-[30px] border transition-all duration-500 shadow-2xl overflow-hidden
        ${
          darkMode
  ? "bg-[#101827]/90 border-white/10 backdrop-blur-xl"
  : "bg-white border-orange-200"
        }`}
      >

        {/* Top */}

        <div className="flex justify-between items-start p-7">

          <div className="flex gap-5">

            <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-orange-500 to-orange-600 text-white flex items-center justify-center text-3xl font-black shadow-xl">

              {tour.id}

            </div>

            <div>

              <h2 className="text-3xl font-bold">

                {tour.title}

              </h2>

              <div className="flex items-center gap-2 mt-2 text-orange-500">

                <MapPin size={18} />

                {tour.location}

              </div>

            </div>

          </div>

          <div
  className={`rounded-2xl px-5 py-4 text-right ${
    darkMode
      ? "bg-white/10 backdrop-blur-xl border border-white/10"
      : "bg-orange-50"
  }`}
>

            <div className="text-4xl font-black text-orange-600">

              {tour.price}

            </div>

            <div className="text-gray-500 text-sm">

              Non AC : {tour.oldPrice}

            </div>

          </div>

        </div>

        {/* Info */}

        <div className="px-7 flex flex-wrap gap-3">

          <div className={`flex items-center gap-2 rounded-xl border px-4 py-2 ${
  darkMode
    ? "border-white/10 bg-white/5"
    : "border-orange-200 bg-white"
}`}>

            <Clock3 size={18} className="text-orange-500" />

            {tour.days}

          </div>

          <div className={`flex items-center gap-2 rounded-xl border px-4 py-2 ${
  darkMode
    ? "border-white/10 bg-white/5"
    : "border-orange-200 bg-white"
}`}>

            <Car size={18} className="text-orange-500" />

            {tour.vehicle}

          </div>

        </div>

        {/* Description */}

        <p
          className={`px-7 mt-6 leading-8 ${
            darkMode ? "text-gray-300" : "text-gray-600"
          }`}
        >
          {tour.description}
        </p>

        {/* Lists */}

        <div className="grid md:grid-cols-2 gap-8 px-7 mt-8">

          <div>

            <h3 className="text-orange-500 font-bold text-xl flex items-center gap-2">

              <Star size={18} />

              Highlights

            </h3>

            <div className="mt-4 space-y-3">

              {tour.highlights.map((item, i) => (
                <div key={i} className="flex gap-3 items-center">

                  <CheckCircle
                    size={18}
                    className="text-orange-500"
                  />

                  {item}

                </div>
              ))}

            </div>

          </div>

          <div>

            <h3 className="text-orange-500 font-bold text-xl">

              Includes

            </h3>

            <div className="grid grid-cols-2 gap-3 mt-4">

              {tour.includes.map((item, i) => (
                <div key={i} className="flex gap-2 items-center">

                  <CheckCircle
                    size={16}
                    className="text-orange-500"
                  />

                  <span className="text-sm">

                    {item}

                  </span>

                </div>
              ))}

            </div>

          </div>

        </div>

        {/* Buttons */}

        <div className="flex gap-5 p-7">

          <button className="flex-1 rounded-xl bg-gradient-to-r from-orange-500 to-orange-600 text-white py-4 font-bold hover:scale-105 transition">

            Book Now

          </button>

          <button
            className={`flex-1 rounded-xl border py-4 font-semibold hover:bg-orange-500 hover:text-white transition ${
              darkMode
  ? "border-white/10 bg-white/5 text-white"
  : "border-orange-200 bg-white"
            }`}
          >

            View Details

            <ArrowUpRight className="inline ml-2" size={18} />

          </button>

        </div>

      </div>

      {/* ================= IMAGE ================= */}

    {/* ================= IMAGE ================= */}

<div className="relative flex items-center justify-center">

  {/* Connector Line */}
  <svg
    className={`hidden lg:block absolute ${
      index % 2 === 0 ? "-left-52" : "-right-52 scale-x-[-1]"
    } top-1/2 -translate-y-1/2`}
    width="220"
    height="120"
    viewBox="0 0 220 120"
  >
    <path
      d="M0 60
         C40 0,
         100 0,
         140 60
         S200 120,
         220 60"
      fill="none"
      stroke="#f97316"
      strokeWidth="3"
      strokeDasharray="8 8"
      strokeLinecap="round"
    />

    {/* Start Dot */}
    <circle cx="0" cy="60" r="6" fill="#f97316" />

    {/* End Dot */}
    <circle cx="220" cy="60" r="6" fill="#f97316" />

    {/* Moving Dot */}
    <circle r="5" fill="#fb923c">
      <animateMotion
        dur="3s"
        repeatCount="indefinite"
        path="M0 60
              C40 0,
              100 0,
              140 60
              S200 120,
              220 60"
      />
    </circle>
  </svg>

        <motion.div
          whileHover={{ scale: 1.05, rotate: 4 }}
          transition={{ duration: .4 }}
          className="w-[360px] h-[360px] rounded-full overflow-hidden border-[6px] border-orange-300 shadow-[0_0_60px_rgba(255,120,0,.35)]"
        >

          <img
            src={tour.image}
            alt={tour.title}
            className="w-full h-full object-cover"
          />

        </motion.div>

        <div className="absolute bottom-5 right-5 w-20 h-20 rounded-full bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center text-white shadow-2xl">

          {tour.icon}

        </div>

      </div>

      {/* Center Timeline Node */}

      <div
  className={`hidden lg:flex absolute left-1/2 -translate-x-1/2 z-20 h-10 w-10 items-center justify-center rounded-full border-4 border-orange-500 shadow-xl ${
    darkMode ? "bg-[#070b12]" : "bg-white"
  }`}
>
  <div className="h-3 w-3 rounded-full bg-orange-500 animate-pulse" />
</div>
    </motion.div>
  ))}

</div>
{/* ================= CTA SECTION ================= */}

<motion.div
  initial={{ opacity: 0, y: 60 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.8 }}
  className="mt-32"
>
  <div className="relative overflow-hidden rounded-[32px] bg-gradient-to-r from-orange-500 via-orange-600 to-orange-500 p-10 shadow-[0_25px_70px_rgba(255,120,0,.45)]">

    {/* Background Glow */}

    <div className="absolute -left-20 -top-20 w-72 h-72 rounded-full bg-white/10 blur-3xl" />
    <div className="absolute -right-20 bottom-0 w-72 h-72 rounded-full bg-yellow-300/20 blur-3xl" />

    <div className="relative flex flex-col lg:flex-row items-center justify-between gap-10">

      {/* Left */}

      <div className="flex items-center gap-6">

        <div className="w-28 h-28 rounded-full border-4 border-white/40 bg-white/10 backdrop-blur-lg flex items-center justify-center shadow-2xl">

          <Star
            size={55}
            className="text-white fill-white"
          />

        </div>

        <div>

          <h2 className="text-4xl md:text-5xl font-black text-white leading-tight">

            Ready For Your
            <br />
            Next Adventure?

          </h2>

          <p className="text-orange-100 mt-4 max-w-xl leading-8">

            Travel across Tamil Nadu with luxury vehicles,
            professional drivers and unforgettable experiences.

          </p>

        </div>

      </div>

      {/* Buttons */}

      <div className="flex flex-col sm:flex-row gap-5">

        <button className="px-10 py-5 rounded-2xl bg-white text-orange-600 font-bold text-lg shadow-xl hover:scale-105 transition">

          Book Now

        </button>

        <button className="px-10 py-5 rounded-2xl border-2 border-white text-white font-bold text-lg hover:bg-white hover:text-orange-600 transition">

          View All Packages

        </button>

      </div>

    </div>
  </div>
</motion.div>

</div>

</div>
</div>
);
}
export default Tours;