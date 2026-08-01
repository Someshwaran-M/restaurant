import React from "react";
import { motion } from "framer-motion";
import {
  MapPin,
  ArrowRight,
  Phone,
  MessageCircle,
} from "lucide-react";

// Featured cities split into two rows for the Marquee animation
const row1Cities = [
  { name: "Chennai", desc: "Airport • Outstation • Local Taxi" },
  { name: "Coimbatore", desc: "Airport • Outstation • Local Taxi" },
  { name: "Madurai", desc: "Temple • Airport • Outstation" },
  { name: "Salem", desc: "One Way • Round Trip • Local" },
  { name: "Tiruchirappalli", desc: "Airport • Local • Outstation" },
];

const row2Cities = [
  { name: "Tirunelveli", desc: "City • Outstation • Airport" },
  { name: "Bengaluru", desc: "IT Hub • Outstation • Airport" },
  { name: "Puducherry", desc: "Beach • Local • Outstation" },
  { name: "Erode", desc: "Industrial • One Way • Local" },
  { name: "Tiruppur", desc: "Textile Hub • Airport • Local" },
];

// Top 12 key destinations with working reliable image links
const top12Destinations = [
  {
    name: "Chennai",
    image:
      "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&q=80&w=300",
  },
  {
    name: "Coimbatore",
    image:
      "https://images.unsplash.com/photo-1605649487212-47bdab064df7?auto=format&fit=crop&q=80&w=300",
  },
  {
    name: "Madurai",
    image:
      "https://images.unsplash.com/photo-1621252179027-94459d278660?auto=format&fit=crop&q=80&w=300",
  },
  {
    name: "Kodaikanal",
    image:
      "https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?auto=format&fit=crop&q=80&w=300",
  },
  {
    name: "Ooty (Nilgiris)",
    image:
      "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&q=80&w=300",
  },
  {
    name: "Puducherry",
    image:
      "https://images.unsplash.com/photo-1584551246679-0daf3d275d0f?auto=format&fit=crop&q=80&w=300",
  },
  {
    name: "Rameswaram",
    image:
      "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&q=80&w=300",
  },
  {
    name: "Bengaluru",
    image:
      "https://images.unsplash.com/photo-1596176530529-78163a4f7af2?auto=format&fit=crop&q=80&w=300",
  },
  {
    name: "Kanyakumari",
    image:
      "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&q=80&w=300",
  },
  {
    name: "Thanjavur",
    image:
      "https://images.unsplash.com/photo-1621252179027-94459d278660?auto=format&fit=crop&q=80&w=300",
  },
  {
    name: "Tirupati",
    image:
      "https://images.unsplash.com/photo-1609766857041-ed402ea8069a?auto=format&fit=crop&q=80&w=300",
  },
  {
    name: "Munnar",
    image:
      "https://images.unsplash.com/photo-1593693397690-362cb9666fc2?auto=format&fit=crop&q=80&w=300",
  },
];

function ServiceAreas({ darkMode }) {
  // Helper to render city cards inside marquee
  const renderCityCard = (city, idx) => (
    <div
      key={idx}
      className={`group w-[340px] shrink-0 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 ${
        darkMode
          ? "border border-white/10 bg-[#141922] hover:border-orange-500/50 hover:shadow-[0_0_25px_rgba(249,115,22,.2)]"
          : "border border-gray-200 bg-white shadow-md hover:border-orange-400"
      }`}
    >
      <div className="flex items-start gap-4">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-orange-500/10 transition group-hover:bg-orange-500">
          <MapPin
            size={24}
            className="text-orange-400 group-hover:text-white"
          />
        </div>
        <div className="flex-1 min-w-0">
          <h3
            className={`text-xl font-bold truncate ${
              darkMode ? "text-white" : "text-gray-900"
            }`}
          >
            {city.name}
          </h3>
          <p
            className={`mt-1 text-sm truncate ${
              darkMode ? "text-gray-400" : "text-gray-600"
            }`}
          >
            {city.desc}
          </p>
          <button className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-orange-500 transition hover:text-orange-600">
            View Taxi
            <ArrowRight
              size={16}
              className="transition group-hover:translate-x-1"
            />
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <section
      id="service-areas"
      className={`relative overflow-hidden py-20 transition-all duration-500 ${
        darkMode ? "bg-[#0A0F1A]" : "bg-white"
      }`}
    >
      {/* Background Soft Ambient Lights */}
      <div
        className={`absolute left-0 top-40 h-80 w-80 rounded-full blur-[120px] pointer-events-none ${
          darkMode ? "bg-orange-500/10" : "bg-orange-300/20"
        }`}
      />
      <div
        className={`absolute right-0 bottom-20 h-80 w-80 rounded-full blur-[120px] pointer-events-none ${
          darkMode ? "bg-orange-600/10" : "bg-yellow-300/20"
        }`}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mx-auto mb-14 max-w-4xl text-center"
        >
          <span className="text-sm font-bold uppercase tracking-[6px] text-orange-400">
            SERVICE AREAS
          </span>

          <h3
            className={`mt-4 text-4xl font-extrabold leading-tight md:text-5xl ${
              darkMode ? "text-white" : "text-gray-900"
            }`}
          >
            Taxi Services Across{" "}
            <span className="bg-gradient-to-r from-orange-400 via-amber-400 to-yellow-300 bg-clip-text text-transparent">
              Tamil Nadu
            </span>{" "}
            & South India
          </h3>

          <p
            className={`mx-auto mt-5 max-w-3xl text-base leading-7 ${
              darkMode ? "text-gray-400" : "text-gray-600"
            }`}
          >
            Safe, affordable and reliable taxi services for airport transfers,
            one-way trips, round trips and outstation travel with professional
            drivers.
          </p>
        </motion.div>

        {/* MARQUEE CITY TICKERS */}
        <div className="space-y-6 overflow-hidden py-4">
          
          {/* Row 1: Moves Left */}
          <div className="flex w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
            <motion.div
              animate={{ x: ["0%", "-50%"] }}
              transition={{
                ease: "linear",
                duration: 25,
                repeat: Infinity,
              }}
              className="flex gap-6 shrink-0"
            >
              {[...row1Cities, ...row1Cities, ...row1Cities].map((city, idx) =>
                renderCityCard(city, idx)
              )}
            </motion.div>
          </div>

          {/* Row 2: Moves Right */}
          <div className="flex w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
            <motion.div
              animate={{ x: ["-50%", "0%"] }}
              transition={{
                ease: "linear",
                duration: 25,
                repeat: Infinity,
              }}
              className="flex gap-6 shrink-0"
            >
              {[...row2Cities, ...row2Cities, ...row2Cities].map((city, idx) =>
                renderCityCard(city, idx)
              )}
            </motion.div>
          </div>

        </div>

        {/* ADVANCE DESTINATION SEARCH CARD */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <div
            className={`rounded-[2.5rem] p-8 md:p-12 transition-all duration-500 shadow-2xl ${
              darkMode
                ? "bg-[#141922] border border-white/10 text-white"
                : "bg-white border border-gray-100 text-gray-900"
            }`}
          >
            <h3 className="text-center text-2xl font-extrabold text-orange-500 md:text-3xl mb-10">
              Advance destination search
            </h3>

            {/* 12 Cities 3-Column Grid */}
            <div className="grid grid-cols-1 gap-y-8 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
              {top12Destinations.map((destination, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-4 group cursor-pointer transition-transform hover:translate-x-1"
                >
                  {/* City Circular Thumbnail */}
                  <div className={`h-14 w-14 shrink-0 rounded-full overflow-hidden border-2 transition-colors ${
                    darkMode ? "border-orange-500/30" : "border-orange-100"
                  }`}>
                    <img
                      src={destination.image}
                      alt={destination.name}
                      className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-300"
                      onError={(e) => {
                        // Fallback image in case network blocks external link
                        e.target.src =
                          "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&q=80&w=300";
                      }}
                    />
                  </div>

                  {/* Text Container */}
                  <div>
                    <span className={`text-xs font-semibold block tracking-wide ${
                      darkMode ? "text-gray-400" : "text-gray-400"
                    }`}>
                      Things To Do In
                    </span>
                    <h4 className={`text-base font-bold transition-colors ${
                      darkMode 
                        ? "text-gray-100 group-hover:text-orange-400" 
                        : "text-gray-800 group-hover:text-orange-600"
                    }`}>
                      {destination.name}
                    </h4>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom Button */}
            <div className={`mt-12 text-center pt-6 border-t ${
              darkMode ? "border-white/10" : "border-gray-100"
            }`}>
              <button className={`inline-flex items-center gap-2 text-base font-bold transition-colors ${
                darkMode
                  ? "text-white hover:text-orange-400"
                  : "text-gray-900 hover:text-orange-600"
              }`}>
                Discover All Destination
                <ArrowRight size={20} className="-rotate-45" />
              </button>
            </div>

          </div>
        </motion.div>

        {/* INSTANT BOOKING BANNER */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-14"
        >
          <div
            className={`relative overflow-hidden rounded-3xl px-6 py-10 md:px-12 ${
              darkMode
                ? "border border-white/10 bg-[#101827]"
                : "border border-gray-200 bg-gray-50 shadow-lg"
            }`}
          >
            <div
              className={`absolute -left-20 top-0 h-48 w-48 rounded-full blur-[100px] pointer-events-none ${
                darkMode ? "bg-orange-500/20" : "bg-orange-300/20"
              }`}
            />

            <div className="relative z-10 flex flex-col items-center text-center">
              <h2
                className={`text-2xl font-bold md:text-4xl ${
                  darkMode ? "text-white" : "text-gray-900"
                }`}
              >
                Book Taxi from Any City Instantly
              </h2>

              <p
                className={`mt-3 text-sm md:text-base ${
                  darkMode ? "text-gray-400" : "text-gray-600"
                }`}
              >
                Fixed fare • No hidden charges • Instant confirmation
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <a
                  href="tel:+918884449452"
                  className={`flex items-center justify-center gap-2 rounded-full px-7 py-3 text-base font-semibold transition-all duration-300 ${
                    darkMode
                      ? "border border-orange-500 text-orange-400 hover:bg-orange-500 hover:text-white"
                      : "border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white"
                  }`}
                >
                  <Phone size={18} />
                  Call Now
                </a>

                <a
                  href="https://wa.me/918884449452"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-2 rounded-full bg-orange-500 px-7 py-3 text-base font-semibold text-white transition-all duration-300 hover:bg-orange-600"
                >
                  <MessageCircle size={18} />
                  Get Instant Fare on Whatsapp
                </a>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}

export default ServiceAreas;