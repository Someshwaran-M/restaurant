import { motion } from "framer-motion";
import {
  MapPin,
  ShieldCheck,
  Clock3,
  BadgeDollarSign,
} from "lucide-react";

import heroImage from "../assets/images/hero.jpg";

function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden"
    >
      {/* Background */}
      <div
  className="absolute top-0 left-0 w-full h-[850px] bg-cover bg-center bg-no-repeat"
  style={{
    backgroundImage: `url(${heroImage})`,
  }}
/>
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/65" />

      {/* Orange Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-orange-900/60 via-black/30 to-black/60" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-40 pb-20">

        <div className="grid lg:grid-cols-2 gap-14 items-start">

          {/* LEFT SIDE */}

          <motion.div
            initial={{ opacity: 0, x: -70 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: .8 }}
          >

            {/* Badge */}

            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full border border-orange-400 bg-orange-500/10 backdrop-blur-xl">

              <span className="w-3 h-3 rounded-full bg-orange-400 animate-pulse" />

              <span className="text-orange-200 font-semibold tracking-wide uppercase">
                One Way & Outstation Cab Service
              </span>

            </div>

            {/* Heading */}

            <h1 className="mt-10 text-6xl xl:text-7xl font-extrabold leading-none text-white">

              Book

              <span className="text-orange-400">
                {" "}One Way
              </span>

              <br />

              Taxi Across

              <br />

              <span className="text-orange-300">
                South India
              </span>

            </h1>

            {/* Description */}

            <p className="mt-8 max-w-xl text-lg leading-9 text-gray-200">

              Travel anywhere in Tamil Nadu, Kerala & Karnataka with reliable
              taxi service. Fixed fare, clean vehicles and professional
              drivers for safe outstation and airport rides.

            </p>

            {/* Feature Chips */}

            <div className="mt-10 flex flex-wrap gap-2">

              <div className="flex items-center gap-2 px-5 py-3 rounded-full bg-white/10 border border-white/20 backdrop-blur-lg text-white">
                <BadgeDollarSign size={18} className="text-orange-400" />
                Fixed Fare
              </div>

              <div className="flex items-center gap-2 px-5 py-3 rounded-full bg-white/10 border border-white/20 backdrop-blur-lg text-white">
                <ShieldCheck size={18} className="text-orange-400" />
                No Hidden Charges
              </div>

              <div className="flex items-center gap-2 px-5 py-3 rounded-full bg-white/10 border border-white/20 backdrop-blur-lg text-white">
                <Clock3 size={18} className="text-orange-400" />
                24/7 Booking Support
              </div>

              <div className="flex items-center gap-2 px-5 py-3 rounded-full bg-white/10 border border-white/20 backdrop-blur-lg text-white">
                <MapPin size={18} className="text-orange-400" />
                Verified Drivers
              </div>

            </div>

                        {/* Stats */}

            <div className="grid grid-cols-3 gap-2 mt-8 border-t border-white/10 pt-10">

              <div className="flex items-center gap-2">

                <div className="w-14 h-14 rounded-2xl bg-orange-500/20 flex items-center justify-center">
                  <MapPin className="text-orange-400" />
                </div>

                <div>
                  <h2 className="text-4xl font-bold text-white">
                    10,000+
                  </h2>

                  <p className="text-gray-300">
                    Happy Trips
                  </p>
                </div>

              </div>

              <div className="flex items-center gap-4">

                <div className="w-14 h-14 rounded-2xl bg-orange-500/20 flex items-center justify-center">
                  <ShieldCheck className="text-orange-400" />
                </div>

                <div>
                  <h2 className="text-4xl font-bold text-white">
                    55+
                  </h2>

                  <p className="text-gray-300">
                    Cities Covered
                  </p>
                </div>

              </div>

              <div className="flex items-center gap-4">

                <div className="w-14 h-14 rounded-2xl bg-orange-500/20 flex items-center justify-center">
                  ★
                </div>

                <div>
                  <h2 className="text-4xl font-bold text-white">
                    5★
                  </h2>

                  <p className="text-gray-300">
                    Average Rating
                  </p>
                </div>

              </div>

            </div>

            {/* Scroll */}

            <div className="mt-14 flex items-center gap-3 text-gray-300">

              <span className="animate-bounce text-2xl">
                ↓
              </span>

              Scroll to explore

            </div>

          </motion.div>

          {/* RIGHT SIDE */}

          <motion.div
            initial={{ opacity: 0, x: 70 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: .8 }}
            className="rounded-[40px] border border-white/10 bg-white/10 backdrop-blur-2xl p-8 shadow-2xl"
          >

            <h2 className="text-4xl font-bold text-white">
              Quick Taxi Booking
            </h2>

            <p className="text-gray-300 mt-2">
              One Way • Outstation • Airport Drop
            </p>

            <div className="grid md:grid-cols-2 gap-5 mt-8">

              <input
                type="text"
                placeholder="Pickup Location"
                className="bg-white/10 border border-white/20 rounded-xl px-5 py-4 text-white placeholder:text-gray-400 outline-none"
              />

              <input
                type="text"
                placeholder="Drop Location"
                className="bg-white/10 border border-white/20 rounded-xl px-5 py-4 text-white placeholder:text-gray-400 outline-none"
              />

              <input
                type="text"
                placeholder="Full Name"
                className="bg-white/10 border border-white/20 rounded-xl px-5 py-4 text-white placeholder:text-gray-400 outline-none"
              />

              <input
                type="text"
                placeholder="Mobile Number"
                className="bg-white/10 border border-white/20 rounded-xl px-5 py-4 text-white placeholder:text-gray-400 outline-none"
              />

              <input
                type="date"
                className="bg-white/10 border border-white/20 rounded-xl px-5 py-4 text-white outline-none"
              />

              <input
                type="time"
                className="bg-white/10 border border-white/20 rounded-xl px-5 py-4 text-white outline-none"
              />

              </div>
                          {/* Trip Type */}

            <div className="mt-8">

              <label className="text-gray-300 text-sm font-semibold uppercase tracking-wide">
                Trip Type
              </label>

              <div className="grid grid-cols-2 gap-4 mt-3">

                <button className="rounded-2xl border border-orange-500 bg-orange-500/20 px-6 py-5 text-left hover:bg-orange-500/30 transition">

                  <h3 className="text-white text-xl font-bold">
                    One Way
                  </h3>

                  <p className="text-orange-200 text-sm mt-1">
                    Min 150 KM
                  </p>

                </button>

                <button className="rounded-2xl border border-white/20 bg-white/5 px-6 py-5 text-left hover:bg-white/10 transition">

                  <h3 className="text-white text-xl font-bold">
                    Round Trip
                  </h3>

                  <p className="text-gray-300 text-sm mt-1">
                    Min 300 KM / Day
                  </p>

                </button>

              </div>

            </div>

            {/* AC Selection */}

            <div className="mt-8">

              <label className="text-gray-300 text-sm font-semibold uppercase tracking-wide">
                AC / NON-AC
              </label>

              <div className="grid grid-cols-2 gap-4 mt-3">

                <button className="rounded-2xl border border-orange-500 bg-orange-500/20 py-4 text-white font-bold hover:bg-orange-500/30 transition">
                  ❄ AC
                </button>

                <button className="rounded-2xl border border-white/20 bg-white/5 py-4 text-white font-bold hover:bg-white/10 transition">
                  Non AC
                </button>

              </div>

            </div>

            {/* Vehicle Selection */}

            <div className="mt-8">

              <label className="text-gray-300 text-sm font-semibold uppercase tracking-wide">
                Select Vehicle
              </label>

              <div className="grid grid-cols-3 gap-4 mt-4">

                {/* Mini */}

                <div className="rounded-2xl border border-white/20 bg-white/5 hover:border-orange-500 hover:bg-orange-500/10 transition cursor-pointer p-4 text-center">

                  <img
                    src="public/cars/mini.jpg"
                    alt="Mini"
                    className="h-20 mx-auto object-contain"
                  />

                  <p className="text-orange-400 font-bold mt-3">
                    ₹15/km
                  </p>

                  <h4 className="text-white font-semibold mt-1">
                    MINI
                  </h4>

                </div>

                {/* Sedan */}

                <div className="rounded-2xl border border-orange-500 bg-orange-500/10 cursor-pointer p-4 text-center">

                  <img
                    src="public/cars/sedan.png"
                    alt="Sedan"
                    className="h-20 mx-auto object-contain"
                  />

                  <p className="text-orange-400 font-bold mt-3">
                    ₹16/km
                  </p>

                  <h4 className="text-white font-semibold mt-1">
                    SEDAN
                  </h4>

                </div>

                {/* Ertiga */}

                <div className="rounded-2xl border border-white/20 bg-white/5 hover:border-orange-500 hover:bg-orange-500/10 transition cursor-pointer p-4 text-center">

                  <img
                    src="public/cars/ertiga.jpeg"
                    alt="Ertiga"
                    className="h-20 mx-auto object-contain"
                  />

                  <p className="text-orange-400 font-bold mt-3">
                    ₹21/km
                  </p>

                  <h4 className="text-white font-semibold mt-1">
                    ERTIGA
                  </h4>

                </div>

                {/* Innova */}

                <div className="rounded-2xl border border-white/20 bg-white/5 hover:border-orange-500 hover:bg-orange-500/10 transition cursor-pointer p-4 text-center">

                  <img
                    src="public/cars/innova.jpg"
                    alt="Innova"
                    className="h-20 mx-auto object-contain"
                  />

                  <p className="text-orange-400 font-bold mt-3">
                    ₹22/km
                  </p>

                  <h4 className="text-white font-semibold mt-1">
                    INNOVA
                  </h4>

                </div>

                {/* Traveller */}

                <div className="rounded-2xl border border-white/20 bg-white/5 hover:border-orange-500 hover:bg-orange-500/10 transition cursor-pointer p-4 text-center">

                  <img
                    src="public/cars/traveller.jpg"
                    alt="Traveller"
                    className="h-20 mx-auto object-contain"
                  />

                  <p className="text-orange-400 font-bold mt-3">
                    ₹30/km
                  </p>

                  <h4 className="text-white font-semibold mt-1">
                    TEMPO TRAVELLER
                  </h4>

                </div>

              </div>

            </div>


<a
  href="https://wa.me/919888444952"
  target="_blank"
  rel="noopener noreferrer"
  className="mt-8 flex h-16 w-full items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-orange-500 to-orange-600 text-xl font-bold text-white shadow-lg shadow-orange-500/30 transition hover:from-orange-600 hover:to-orange-700"
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-7 w-7"
    fill="currentColor"
    viewBox="0 0 24 24"
  >
    <path d="M20.52 3.48A11.8 11.8 0 0 0 12.06 0C5.52 0 .18 5.34.18 11.88c0 2.1.54 4.14 1.62 5.94L0 24l6.36-1.68a11.85 11.85 0 0 0 5.7 1.44h.06c6.54 0 11.88-5.34 11.88-11.88 0-3.18-1.26-6.18-3.48-8.4zm-8.46 18.3a9.9 9.9 0 0 1-5.04-1.38l-.36-.18-3.78.96 1.02-3.66-.24-.42A9.88 9.88 0 0 1 2.1 11.88c0-5.46 4.5-9.96 9.96-9.96 2.64 0 5.16 1.02 7.02 2.94a9.82 9.82 0 0 1 2.94 7.02c0 5.46-4.44 9.9-9.96 9.9zm5.46-7.44c-.3-.18-1.8-.9-2.1-.96-.24-.12-.48-.12-.66.18-.18.24-.72.9-.9 1.08-.18.18-.3.18-.6.06-.3-.18-1.2-.42-2.28-1.38-.84-.72-1.44-1.62-1.62-1.92-.18-.3 0-.42.12-.6.12-.12.3-.3.42-.48.12-.12.18-.3.3-.48.06-.18 0-.36-.06-.54-.06-.18-.66-1.62-.9-2.22-.24-.54-.48-.48-.66-.48h-.54c-.18 0-.48.06-.72.3-.24.24-.96.9-.96 2.16s.96 2.46 1.08 2.64c.18.18 1.92 2.94 4.68 4.08.66.3 1.2.48 1.62.6.72.24 1.38.18 1.92.12.6-.12 1.8-.72 2.04-1.44.24-.66.24-1.26.18-1.44-.12-.18-.3-.24-.6-.42z"/>
  </svg>

  <span>Send Booking via WhatsApp</span>
</a>

{/* Divider */}

<div className="my-6 flex items-center gap-4">

  <div className="h-px flex-1 bg-white/10"></div>

  <span className="text-sm text-gray-400">
    or call directly
  </span>

  <div className="h-px flex-1 bg-white/10"></div>

</div>

{/* Call Button */}

<a
  href="tel:+919888444952"
  className="flex h-14 w-full items-center justify-center gap-3 rounded-2xl border-2 border-orange-500 bg-orange-500/5 text-orange-400 text-2xl font-bold transition-all duration-300 hover:bg-orange-500 hover:text-white hover:shadow-lg hover:shadow-orange-500/30">
  <span>+918884449452</span>
</a>

          </motion.div>

        </div>

{/* Trust Bar */}
<div className="mt-8 rounded-full border border-orange-500/30 bg-orange-500/10 px-6 py-5 backdrop-blur-xl">

  <div className="flex flex-wrap items-center justify-center gap-8 text-sm text-orange-100">

    <div className="flex items-center gap-2">
      <ShieldCheck size={16} className="text-orange-400" />
      <span>No Hidden Charges</span>
    </div>

    <div className="flex items-center gap-2">
      <ShieldCheck size={16} className="text-orange-400" />
      <span>Verified Drivers</span>
    </div>

    <div className="flex items-center gap-2">
      <ShieldCheck size={16} className="text-orange-400" />
      <span>Instant Confirmation</span>
    </div>

    <div className="flex items-center gap-2">
      <ShieldCheck size={16} className="text-orange-400" />
      <span>Pay Driver Directly</span>
    </div>

  </div>

</div>
      </div>

    </section>
  );
}

export default Hero;