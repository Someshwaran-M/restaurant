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

const heroBg = "/cars/Herobg.png";
const vehicles = [
  { id: 1, name: "MINI", price: "₹15/km", img: "/cars/Car1.png" },
  { id: 2, name: "SEDAN", price: "₹16/km", img: "/cars/Car2.png" },
  { id: 3, name: "ERTIGA", price: "₹21/km", img: "/cars/Car3.png" },
  { id: 4, name: "INNOVA", price: "₹22/km", img: "/cars/Car4.png" },
  { id: 5, name: "INNOVA CRYSTA", price: "₹25/km", img: "/cars/Car5.png" },
  { id: 6, name: "TEMPO TRAVELLER", price: "₹30/km", img: "/cars/Car6.png" },
  { id: 7, name: "FORCE URBANIA", price: "₹35/km", img: "/cars/Car7.png" },
];

function Hero({ darkMode }) {
  const [tripType, setTripType] = useState("oneway");
  const [acType, setAcType] = useState("ac");
  const [vehicle, setVehicle] = useState(2);

  const fieldLabel = `block mb-1.5 text-[11px] font-semibold uppercase tracking-wide ${
    darkMode ? "text-gray-400" : "text-gray-700"
  }`;

  const fieldInput = `w-full h-10 rounded-lg border pl-9 pr-3 text-sm outline-none transition-all duration-300 ${
    darkMode
      ? "border-gray-700  text-white placeholder:text-gray-500 focus:border-orange-500 focus:bg-[#111827]"
      : "border-gray-300 bg-white text-gray-900 placeholder:text-gray-500 focus:border-orange-500 focus:bg-orange-50"
  }`;

  const fieldIcon = `pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 ${
    darkMode ? "text-orange-400" : "text-orange-500"
  }`;

  const toggleBase =
    "rounded-xl border px-3 py-2 text-left transition-all duration-300";

  const toggleSelected =
    "border-orange-500 bg-orange-500/10 text-orange-500 shadow-md shadow-orange-500/20";

  const toggleIdle = darkMode
    ? "border-white/10 bg-white/5 text-white hover:border-orange-400 hover:bg-orange-500/5"
    : "border-gray-300 bg-gray-100 text-gray-900 hover:border-orange-400 hover:bg-orange-50";

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


  return (
    <section id="home" className="relative min-h-[850px] overflow-hidden bg-[#0b0f19]">


      <div
  className="absolute top-0 left-0 w-full h-[850px] bg-cover bg-center bg-no-repeat"
  style={{ backgroundImage: `url(${heroBg})` }}
/>

<div
  className={`absolute inset-0 transition-colors duration-500 ${
    darkMode
      ? "bg-black/65"
      : "bg-white/35"
  }`}
/>
     
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-40 pb-12">
        <div className="grid lg:grid-cols-2 gap-14 items-start">
        
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

            <h3 className="mt-8 text-5xl xl:text-6xl font-extrabold leading-tight text-white">
              Book
              <span className="text-orange-400"> One Way</span>
              <br />
              Taxi Across
              <br />
              <span className="text-orange-300">South India</span>
            </h3>

            <p className="mt-6 max-w-xl text-lg leading-7 text-gray-200">
              Travel anywhere in Tamil Nadu, Kerala & Karnataka with reliable
              taxi service. Fixed fare, clean vehicles and professional drivers
              for safe outstation and airport rides.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-3">
  {[
    { icon: BadgeDollarSign, text: "Fixed Fare" },
    { icon: ShieldCheck, text: "No Hidden Charges" },
    { icon: Clock3, text: "24/7 Booking Support" },
    { icon: MapPin, text: "Verified Drivers" },
  ].map(({ icon: Icon, text }) => (
    <div
      key={text}
      className="flex items-center gap-2 rounded-full
      border border-white/10
      bg-black/40
      backdrop-blur-xl
      px-6 py-3
      text-[14px] font-semibold
      text-white
      shadow-[0_8px_25px_rgba(0,0,0,0.25)]
      transition-all duration-300
      hover:border-orange-500/40
      hover:bg-black/60
      hover:-translate-y-0.5"
    >
      <Icon
        size={10}
        className="text-orange-400"
        strokeWidth={2.2}
      />
      <span>{text}</span>
    </div>
  ))}
</div>

            <div className="grid grid-cols-3 gap-2 mt-8 border-t border-white/10 pt-10">
              <div className="flex items-center gap-2">
                <div className="w-12 h-12 rounded-2xl bg-orange-500/20 flex items-center justify-center">
                  <MapPin className="text-orange-400" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-white">10,000+</h2>
                  <p className="text-gray-300">Happy Trips</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-orange-500/20 flex items-center justify-center">
                  <ShieldCheck className="text-orange-400" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-white">55+</h2>
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

            <div className="mt-4 flex items-center gap-3 text-gray-300">
              <span className="animate-bounce text-2xl">↓</span>
              Scroll to explore
            </div>
          </motion.div>

          
          <motion.div
            initial={{ opacity: 0, x: 70 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
           className={`w-[600px] rounded-[28px] p-5 shadow-2xl backdrop-blur-sm transition-all duration-500 ${
  darkMode
    ? "border border-gray-700 "
    : "border border-gray-200 bg-white/90 shadow-xl"
}`}
          >
            <h2 className={`text-3xl font-bold ${
  darkMode ? "text-white" : "text-gray-900"
}`}>
              Quick Taxi Booking
            </h2>
            <p className={`mt-1 text-sm ${
  darkMode ? "text-gray-300" : "text-gray-600"
}`}>
              One Way • Outstation • Airport Drop
            </p>

            <div className="grid md:grid-cols-2 gap-3 mt-6">
              <Field
  label="Pickup Location"
  icon={MapPin}
  type="text"
  placeholder="Enter pickup location"
  fieldLabel={fieldLabel}
  fieldInput={fieldInput}
  fieldIcon={fieldIcon}
/>
              <Field
                label="Drop Location"
                icon={Flag}
                type="text"
                placeholder="Enter drop location"
                fieldLabel={fieldLabel}
                fieldInput={fieldInput}
                fieldIcon={fieldIcon}

              />
            </div>

            <div className="grid md:grid-cols-2 gap-3 mt-3">
              <Field
                label="Full Name"
                icon={User}
                type="text"
                placeholder="Enter your name"
                fieldLabel={fieldLabel}
                fieldInput={fieldInput}
                fieldIcon={fieldIcon}
              />
              <Field
                label="Mobile Number"
                icon={Phone}
                type="tel"
                placeholder="Enter mobile number"
                fieldLabel={fieldLabel}
                fieldInput={fieldInput}
                fieldIcon={fieldIcon}
              />
            </div>

            <div className="grid md:grid-cols-2 gap-3 mt-3">
              
              <Field label="Pickup Date" icon={Calendar} type="date" fieldLabel={fieldLabel} fieldInput={fieldInput} fieldIcon={fieldIcon} />
              <Field label="Pickup Time" icon={Clock} type="time" fieldLabel={fieldLabel} fieldInput={fieldInput} fieldIcon={fieldIcon} />
            </div>

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

            <div className="mt-2">
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
                    <ArrowRight size={10} className="text-orange-400" />
                    <h3
  className={`text-base font-bold ${
    darkMode ? "text-white" : "text-gray-900"
  }`}
>One Way</h3>
                  </div>
                  <p
  className={`mt-0.5 text-xs ${
    darkMode ? "text-gray-400" : "text-gray-600"
  }`}
>Min 150 KM</p>
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
                   <h3
  className={`text-base font-bold ${
    darkMode ? "text-white" : "text-gray-900"
  }`}
>
                      Round Trip
                    </h3>
                  </div>
                 <p
  className={`mt-0.5 text-xs ${
    darkMode ? "text-gray-400" : "text-gray-600"
  }`}
>
                    Min 300 KM / Day
                  </p>
                </button>
              </div>
            </div>

            <div className="mt-2">
              <label className={fieldLabel}>AC / Non-AC</label>
              <div className="grid grid-cols-2 gap-3 mt-1.5">
                <button
  type="button"
  onClick={() => setAcType("ac")}
  className={`${toggleBase} flex items-center justify-center gap-2 py-3 font-bold ${
    acType === "ac" ? toggleSelected : toggleIdle
  }`}
>
  <Snowflake size={15} className="text-orange-500" />
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

            <div className="mt-2">
              <label className={fieldLabel}>Select Vehicle</label>
              <div className="grid grid-cols-3 gap-2 mt-1.5">
                {vehicles.map((v) => (
                  <div
                    key={v.id}
                    onClick={() => setVehicle(v.id)}
                   className={`rounded-xl border cursor-pointer p-2 text-center transition duration-300 ${
  vehicle === v.id
    ? "border-orange-500 bg-orange-500/10"
    : darkMode
    ? "border-white/10 bg-white/5 hover:border-orange-400"
    : "border-gray-200 bg-gray-50 hover:border-orange-400 hover:bg-orange-50"
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
                    <h4 className={`mt-0.5 text-[10px] font-semibold leading-tight ${
  darkMode ? "text-white" : "text-gray-900"
}`}>
                      {v.name}
                    </h4>
                  </div>
                ))}
              </div>
            </div>

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
              <div className={`h-px flex-1 ${
  darkMode ? "bg-white/10" : "bg-gray-300"
}`}></div>
              <span className={`text-xs ${
  darkMode ? "text-gray-400" : "text-gray-600"
}`}>or call directly</span>
              <div className="h-px flex-1 bg-white/10"></div>
            </div>

            <a
              href="tel:+919888444952"
              className={`flex h-12 w-full items-center justify-center gap-3 rounded-xl border-2 border-orange-500 text-lg font-bold transition-all duration-300 hover:bg-orange-500 hover:text-white ${
  darkMode
    ? "bg-orange-500/5 text-orange-400"
    : "bg-orange-50 text-orange-600"
}`}
            >
              <span>+918884449452</span>
            </a>
          </motion.div>
        </div>

        <div className="mt-8 rounded-full border border-orange-500/30 bg-orange-500/10 px-4 py-3 backdrop-blur-xl">
          <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-orange-100">
            <div className="flex items-center gap-2">
              <ShieldCheck size={12} className="text-orange-400" />
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
