import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  MapPin,
  ShieldCheck,
  Clock3,
  Clock,
  BadgeDollarSign,
  User,
  Phone,
  Calendar,
  ArrowRight,
  ArrowLeftRight,
  Snowflake,
  Star,
  Flag,
  MessageCircle,
} from "lucide-react";

// Background: public/cars/Herobg.png -> served from root as /cars/Herobg.png
const heroBg = "/cars/Herobg.png";

// Vehicle list -- order matches the reference grid (3 columns).
// Edit names / prices here; images from public/cars/Car1.png ... Car7.png
const vehicles = [
  { id: 1, name: "MINI", price: "₹15/km", img: "/cars/Car1.png" },
  { id: 2, name: "SEDAN", price: "₹16/km", img: "/cars/Car2.png" },
  { id: 3, name: "ERTIGA", price: "₹21/km", img: "/cars/Car3.png" },
  { id: 4, name: "INNOVA", price: "₹22/km", img: "/cars/Car4.png" },
  { id: 5, name: "INNOVA CRYSTA", price: "₹25/km", img: "/cars/Car5.png" },
  { id: 6, name: "TEMPO TRAVELLER", price: "₹30/km", img: "/cars/Car6.png" },
  { id: 7, name: "FORCE URBANIA", price: "₹35/km", img: "/cars/Car7.png" },
];

// ---- Shared style tokens so every field/box is exactly the same size ----
const fieldLabel =
  "block text-[11px] font-semibold uppercase tracking-wide text-gray-400 mb-1.5";
const fieldInput =
  "w-full h-11 rounded-lg border border-white/10 bg-white/5 pl-9 pr-3 text-[15px] text-white placeholder:text-gray-500 outline-none transition focus:border-orange-500/60 focus:bg-white/10";
const fieldIcon =
  "pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-orange-400";

function Field({ label, icon: Icon, ...props }) {
  return (
    <div>
      <label className={fieldLabel}>{label}</label>
      <div className="relative">
        <Icon size={15} className={fieldIcon} />
        <input className={fieldInput} {...props} />
      </div>
    </div>
  );
}

function Hero() {
  const [tripType, setTripType] = useState("oneway");
  const [acType, setAcType] = useState("ac");
  const [vehicle, setVehicle] = useState(2);

  const toggleBase =
    "rounded-xl border px-4 py-3.5 text-left transition duration-150";
  const toggleSelected = "border-orange-500/60 bg-orange-500/10 text-white";
  const toggleIdle =
    "border-white/10 bg-white/5 text-gray-300 hover:bg-white/10 hover:border-white/20";

  return (
    <section id="home" className="relative min-h-screen overflow-hidden">
      {/* Floating Call / WhatsApp buttons */}
      <div className="hidden lg:flex flex-col gap-4 fixed right-6 top-1/2 -translate-y-1/2 z-30">
        <a
          href="tel:+919888444952"
          aria-label="Call us"
          className="relative w-14 h-14 rounded-full bg-amber-400 flex items-center justify-center shadow-lg shadow-amber-500/40 transition hover:scale-105"
        >
          <span className="absolute inset-0 -z-10 rounded-full bg-amber-400/40 blur-xl" />
          <Phone size={22} className="text-white" fill="white" />
        </a>
        <a
          href="https://wa.me/919888444952"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
          className="relative w-14 h-14 rounded-full bg-orange-600 flex items-center justify-center shadow-lg shadow-orange-600/40 transition hover:scale-105"
        >
          <span className="absolute inset-0 -z-10 rounded-full bg-orange-600/40 blur-xl" />
          <MessageCircle size={22} className="text-white" fill="white" />
        </a>
      </div>

      {/* Background */}
      <div
        className="absolute top-0 left-0 w-full h-[850px] bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 bg-black/65" />
      <div className="absolute inset-0 bg-gradient-to-r from-orange-900/60 via-black/30 to-black/60" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-40 pb-20">
        <div className="grid lg:grid-cols-2 gap-14 items-start">
          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: -70 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full border border-orange-400 bg-orange-500/10 backdrop-blur-xl">
              <span className="w-3 h-3 rounded-full bg-orange-400 animate-pulse" />
              <span className="text-orange-200 font-semibold tracking-wide uppercase">
                One Way & Outstation Cab Service
              </span>
            </div>

            <h1 className="mt-10 text-6xl xl:text-7xl font-extrabold leading-none text-white">
              Book
              <span className="text-orange-400"> One Way</span>
              <br />
              Taxi Across
              <br />
              <span className="text-orange-300">South India</span>
            </h1>

            <p className="mt-8 max-w-xl text-lg leading-9 text-gray-200">
              Travel anywhere in Tamil Nadu, Kerala & Karnataka with reliable
              taxi service. Fixed fare, clean vehicles and professional drivers
              for safe outstation and airport rides.
            </p>

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

            <div className="grid grid-cols-3 gap-2 mt-8 border-t border-white/10 pt-10">
              <div className="flex items-center gap-2">
                <div className="w-14 h-14 rounded-2xl bg-orange-500/20 flex items-center justify-center">
                  <MapPin className="text-orange-400" />
                </div>
                <div>
                  <h2 className="text-4xl font-bold text-white">10,000+</h2>
                  <p className="text-gray-300">Happy Trips</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-orange-500/20 flex items-center justify-center">
                  <ShieldCheck className="text-orange-400" />
                </div>
                <div>
                  <h2 className="text-4xl font-bold text-white">55+</h2>
                  <p className="text-gray-300">Cities Covered</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-orange-500/20 flex items-center justify-center">
                  <Star className="text-orange-400" />
                </div>
                <div>
                  <h2 className="text-4xl font-bold text-white">5★</h2>
                  <p className="text-gray-300">Average Rating</p>
                </div>
              </div>
            </div>

            <div className="mt-14 flex items-center gap-3 text-gray-300">
              <span className="animate-bounce text-2xl">↓</span>
              Scroll to explore
            </div>
          </motion.div>

          {/* RIGHT SIDE — Quick Taxi Booking Card */}
          <motion.div
            initial={{ opacity: 0, x: 70 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="rounded-[32px] border border-white/10 bg-white/10 backdrop-blur-2xl p-6 shadow-2xl"
          >
            <h2 className="text-3xl font-bold text-white">
              Quick Taxi Booking
            </h2>
            <p className="text-gray-300 mt-1 text-sm">
              One Way • Outstation • Airport Drop
            </p>

            {/* Pickup / Drop */}
            <div className="grid md:grid-cols-2 gap-3 mt-6">
              <Field
                label="Pickup Location"
                icon={MapPin}
                type="text"
                placeholder="Enter pickup location"
              />
              <Field
                label="Drop Location"
                icon={Flag}
                type="text"
                placeholder="Enter drop location"
              />
            </div>

            {/* Name / Mobile */}
            <div className="grid md:grid-cols-2 gap-3 mt-3">
              <Field
                label="Full Name"
                icon={User}
                type="text"
                placeholder="Enter your name"
              />
              <Field
                label="Mobile Number"
                icon={Phone}
                type="tel"
                placeholder="Enter mobile number"
              />
            </div>

            {/* Date / Time */}
            <div className="grid md:grid-cols-2 gap-3 mt-3">
              <Field label="Pickup Date" icon={Calendar} type="date" />
              <Field label="Pickup Time" icon={Clock} type="time" />
            </div>

            {/* Return Date — only appears for Round Trip */}
            <AnimatePresence>
              {tripType === "roundtrip" && (
                <motion.div
                  initial={{ opacity: 0, height: 0, marginTop: 0 }}
                  animate={{ opacity: 1, height: "auto", marginTop: 12 }}
                  exit={{ opacity: 0, height: 0, marginTop: 0 }}
                  transition={{ duration: 0.25 }}
                  className="grid md:grid-cols-2 gap-3 overflow-hidden"
                >
                  <Field label="Return Date" icon={Calendar} type="date" />
                </motion.div>
              )}
            </AnimatePresence>

            {/* Trip Type */}
            <div className="mt-4">
              <label className={fieldLabel}>Trip Type</label>
              <div className="grid grid-cols-2 gap-3 mt-1.5">
                <button
                  type="button"
                  onClick={() => setTripType("oneway")}
                  className={`${toggleBase} ${
                    tripType === "oneway" ? toggleSelected : toggleIdle
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <ArrowRight size={15} className="text-orange-400" />
                    <h3 className="text-white text-base font-bold">One Way</h3>
                  </div>
                  <p className="text-xs mt-0.5 text-gray-400">Min 150 KM</p>
                </button>

                <button
                  type="button"
                  onClick={() => setTripType("roundtrip")}
                  className={`${toggleBase} ${
                    tripType === "roundtrip" ? toggleSelected : toggleIdle
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <ArrowLeftRight size={15} className="text-orange-400" />
                    <h3 className="text-white text-base font-bold">
                      Round Trip
                    </h3>
                  </div>
                  <p className="text-xs mt-0.5 text-gray-400">
                    Min 300 KM / Day
                  </p>
                </button>
              </div>
            </div>

            {/* AC Selection */}
            <div className="mt-4">
              <label className={fieldLabel}>AC / Non-AC</label>
              <div className="grid grid-cols-2 gap-3 mt-1.5">
                <button
                  type="button"
                  onClick={() => setAcType("ac")}
                  className={`${toggleBase} flex items-center justify-center gap-2 py-3 font-bold ${
                    acType === "ac" ? toggleSelected : toggleIdle
                  }`}
                >
                  <Snowflake size={15} className="text-orange-400" />
                  AC
                </button>
                <button
                  type="button"
                  onClick={() => setAcType("nonac")}
                  className={`${toggleBase} flex items-center justify-center gap-2 py-3 font-bold ${
                    acType === "nonac" ? toggleSelected : toggleIdle
                  }`}
                >
                  Non AC
                </button>
              </div>
            </div>

            {/* Vehicle Selection */}
            <div className="mt-4">
              <label className={fieldLabel}>Select Vehicle</label>
              <div className="grid grid-cols-3 gap-2.5 mt-1.5">
                {vehicles.map((v) => (
                  <div
                    key={v.id}
                    onClick={() => setVehicle(v.id)}
                    className={`rounded-xl border cursor-pointer p-2.5 text-center transition duration-150 ${
                      vehicle === v.id
                        ? "border-orange-500/60 bg-orange-500/10"
                        : "border-white/10 bg-white/5 hover:border-orange-400/40 hover:bg-orange-500/5"
                    }`}
                  >
                    <img
                      src={v.img}
                      alt={v.name}
                      className="h-12 w-full mx-auto object-contain"
                    />
                    <p className="text-orange-400 font-bold mt-1.5 text-xs">
                      {v.price}
                    </p>
                    <h4 className="text-white font-semibold mt-0.5 text-[10px] leading-tight">
                      {v.name}
                    </h4>
                  </div>
                ))}
              </div>
            </div>

            {/* WhatsApp Button */}
            <a
              href="https://wa.me/919888444952"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 flex h-[52px] w-full items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-orange-500 to-orange-600 text-lg font-bold text-white shadow-lg shadow-orange-500/30 transition hover:from-orange-600 hover:to-orange-700"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-7 w-7"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M20.52 3.48A11.8 11.8 0 0 0 12.06 0C5.52 0 .18 5.34.18 11.88c0 2.1.54 4.14 1.62 5.94L0 24l6.36-1.68a11.85 11.85 0 0 0 5.7 1.44h.06c6.54 0 11.88-5.34 11.88-11.88 0-3.18-1.26-6.18-3.48-8.4zm-8.46 18.3a9.9 9.9 0 0 1-5.04-1.38l-.36-.18-3.78.96 1.02-3.66-.24-.42A9.88 9.88 0 0 1 2.1 11.88c0-5.46 4.5-9.96 9.96-9.96 2.64 0 5.16 1.02 7.02 2.94a9.82 9.82 0 0 1 2.94 7.02c0 5.46-4.44 9.9-9.96 9.9zm5.46-7.44c-.3-.18-1.8-.9-2.1-.96-.24-.12-.48-.12-.66.18-.18.24-.72.9-.9 1.08-.18.18-.3.18-.6.06-.3-.18-1.2-.42-2.28-1.38-.84-.72-1.44-1.62-1.62-1.92-.18-.3 0-.42.12-.6.12-.12.3-.3.42-.48.12-.12.18-.3.3-.48.06-.18 0-.36-.06-.54-.06-.18-.66-1.62-.9-2.22-.24-.54-.48-.48-.66-.48h-.54c-.18 0-.48.06-.72.3-.24.24-.96.9-.96 2.16s.96 2.46 1.08 2.64c.18.18 1.92 2.94 4.68 4.08.66.3 1.2.48 1.62.6.72.24 1.38.18 1.92.12.6-.12 1.8-.72 2.04-1.44.24-.66.24-1.26.18-1.44-.12-.18-.3-.24-.6-.42z" />
              </svg>
              <span>Send Booking via WhatsApp</span>
            </a>

            <div className="my-4 flex items-center gap-4">
              <div className="h-px flex-1 bg-white/10"></div>
              <span className="text-xs text-gray-400">or call directly</span>
              <div className="h-px flex-1 bg-white/10"></div>
            </div>

            <a
              href="tel:+919888444952"
              className="flex h-12 w-full items-center justify-center gap-3 rounded-xl border-2 border-orange-500 bg-orange-500/5 text-orange-400 text-lg font-bold transition-all duration-300 hover:bg-orange-500 hover:text-white hover:shadow-lg hover:shadow-orange-500/30"
            >
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
