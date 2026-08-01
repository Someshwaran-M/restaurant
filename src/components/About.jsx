// src/components/About.jsx

import { useState } from "react";
import { motion } from "framer-motion";
import {
  MapPin,
  ShieldCheck,
  Info,
  ArrowRightLeft,
  RotateCcw,
  CheckCircle2,
} from "lucide-react";

// Curved sedan taxi silhouette (orange theme).
// viewBox height = 54, wheel radius 8 centered at cy=46 -> wheel bottom = 54,
// exactly the bottom edge of the canvas. So this icon's own bottom edge IS
// the wheel-contact line -- aligning it to a road needs no offset math.
function TaxiIcon({ className }) {
  return (
    <svg
      viewBox="0 0 120 54"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Body */}
      <path
        d="M10 38 L10 32 Q10 28 14 28 L28 28 L34 14 Q36 10 41 10 L74 10 Q79 10 81 14 L87 28 L106 28 Q110 28 110 32 L110 38 Q110 42 106 42 L14 42 Q10 42 10 38 Z"
        fill="currentColor"
      />
      {/* Windshield */}
      <path d="M36 26 L40 14 L57 14 L57 26 Z" fill="#0f172a" />
      {/* Rear window */}
      <path d="M60 26 L60 14 L78 14 L83 26 Z" fill="#0f172a" />
      {/* Roof taxi sign */}
      <rect x="53" y="4" width="14" height="7" rx="1.5" fill="#0f172a" />
      <rect x="55" y="5.5" width="10" height="4" rx="1" fill="currentColor" />
      {/* Headlight */}
      <circle cx="14" cy="34" r="2.4" fill="#FDE68A" />
      {/* Door line */}
      <line
        x1="58.5"
        y1="28"
        x2="58.5"
        y2="41"
        stroke="#0f172a"
        strokeWidth="1.5"
        opacity="0.4"
      />
      {/* Wheels -- bottom edge sits exactly on the viewBox floor (y = 54) */}
      <circle cx="24" cy="46" r="8" fill="#111827" />
      <circle cx="24" cy="46" r="3.2" fill="#4b5563" />
      <circle cx="96" cy="46" r="8" fill="#111827" />
      <circle cx="96" cy="46" r="3.2" fill="#4b5563" />
    </svg>
  );
}

// Animated number that counts up from 0 to the target value the first time
// it scrolls into view. Preserves any non-numeric suffix (+, ★, /7) and
// comma formatting on the way there.
function CountUp({ value }) {
  const [display, setDisplay] = useState("0");
  const [started, setStarted] = useState(false);

  const match = value.match(/^([\d,]+(?:\.\d+)?)(.*)$/);
  const numPart = match ? match[1] : value;
  const suffix = match ? match[2] : "";
  const hasComma = numPart.includes(",");
  const isDecimal = numPart.includes(".");
  const target = parseFloat(numPart.replace(/,/g, ""));

  const formatNumber = (num) => {
    if (isDecimal) return num.toFixed(1);
    const rounded = Math.round(num);
    return hasComma ? rounded.toLocaleString("en-IN") : rounded.toString();
  };

  const runCount = () => {
    if (started || Number.isNaN(target)) return;
    setStarted(true);

    const durationMs = 1800;
    const startTime = performance.now();

    const step = (now) => {
      const progress = Math.min((now - startTime) / durationMs, 1);
      const eased = 1 - Math.pow(1 - progress, 3); // ease-out
      setDisplay(formatNumber(target * eased));
      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        setDisplay(formatNumber(target));
      }
    };

    requestAnimationFrame(step);
  };

  return (
    <motion.h6
      onViewportEnter={runCount}
      viewport={{ once: true, amount: 0.6 }}
      className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-orange-500 tracking-tight"
    >
      {display}
      {suffix}
    </motion.h6>
  );
}

function About({ darkMode }) {
  const cities = [
    "Madurai",
    "Salem",
    "Trichy",
    "Tirunelveli",
    "Bangalore",
    "Pondicherry",
    "Ooty",
    "Kodaikanal",
    "Erode",
    "Vellore",
    "Thanjavur",
    "Dindigul",
    "Karur",
  ];

  const stats = [
    { number: "10,000+", label: "HAPPY TRIPS" },
    { number: "55+", label: "CITIES COVERED" },
    { number: "4.8★", label: "AVERAGE RATING" },
    { number: "24/7", label: "BOOKING SUPPORT" },
  ];

  return (
    <section
      id="about"
      className={`relative overflow-hidden py-20 sm:py-28 transition-colors duration-500 ${
        darkMode ? "bg-[#080C16]" : "bg-gray-50"
      }`}
    >
      {/* Top Road */}
      <div className="relative h-14 sm:h-20 bg-[#11192b] border-y border-white/5 overflow-hidden">
        {/* Scrolling Road Line — slowed way down so it reads as a road, not a blur */}
        <motion.div
          className="absolute left-0 top-1/2 -translate-y-1/2 flex items-center gap-6 sm:gap-10 w-max"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {Array.from({ length: 60 }).map((_, index) => (
            <div
              key={index}
              className="w-6 sm:w-10 h-[3px] sm:h-1 rounded-full bg-orange-400 shrink-0"
            />
          ))}
        </motion.div>

        {/* Taxi — stays in a fixed spot on the road (road scrolls beneath it,
            same concept as the reference file) and gets a small bounce so it
            reads as "driving over" the passing lane-lines instead of floating. */}
        <motion.div
          className="absolute left-[30%] sm:left-[35%] bottom-1/2"
          style={{ transform: "translateX(-50%)" }}
          animate={{ y: [0, -3, 0, -1, 0] }}
          transition={{
            duration: 0.9,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <TaxiIcon className="w-12 h-6 sm:w-16 sm:h-8 text-orange-400 drop-shadow-[0_0_10px_rgba(251,146,60,.55)]" />
        </motion.div>
      </div>

      {/* Cities Strip */}
      <div
        className={`border-b transition-colors duration-500 ${
          darkMode ? "border-white/10 bg-[#0d1220]" : "border-gray-200 bg-white"
        }`}
      >
        <div className="max-w-[1800px] mx-auto overflow-hidden">
          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              repeat: Infinity,
              duration: 25,
              ease: "linear",
            }}
            className="flex whitespace-nowrap"
          >
            {[...cities, ...cities].map((city, index) => (
              <div
                key={index}
                className="flex items-center gap-2 sm:gap-3 px-5 sm:px-8 py-4 sm:py-5"
              >
                <MapPin size={16} className="text-orange-400 sm:hidden" />
                <MapPin size={18} className="text-orange-400 hidden sm:block" />
                <span
                  className={`font-medium text-base sm:text-lg ${
                    darkMode ? "text-gray-300" : "text-gray-700"
                  }`}
                >
                  {city}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Trust Bar */}
      <div
        className={`border-b transition-colors duration-500 ${
          darkMode
            ? "border-white/10 bg-[#091019]"
            : "border-gray-200 bg-orange-50"
        }`}
      >
        <div className="max-w-7xl mx-auto py-4 sm:py-5 px-4 flex flex-wrap justify-center gap-4 sm:gap-10">
          <div
            className={`flex items-center gap-2 sm:gap-3 text-sm sm:text-base ${
              darkMode ? "text-gray-300" : "text-gray-700"
            }`}
          >
            <CheckCircle2 size={18} className="text-orange-400 shrink-0" />
            <span>Toll charges as per actual</span>
          </div>

          <div
            className={`flex items-center gap-2 sm:gap-3 text-sm sm:text-base ${
              darkMode ? "text-gray-300" : "text-gray-700"
            }`}
          >
            <CheckCircle2 size={18} className="text-orange-400 shrink-0" />
            <span>No hidden fees</span>
          </div>

          <div
            className={`flex items-center gap-2 sm:gap-3 text-sm sm:text-base ${
              darkMode ? "text-gray-300" : "text-gray-700"
            }`}
          >
            <CheckCircle2 size={18} className="text-orange-400 shrink-0" />
            <span>Transparent billing</span>
          </div>
        </div>
      </div>

      {/* Cards Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 mt-14 sm:mt-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
          {/* Important Information */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className={`rounded-[24px] sm:rounded-[32px] p-6 sm:p-8 shadow-xl transition-all duration-300 hover:-translate-y-2 hover:border-orange-500/40 ${
              darkMode
                ? "border border-white/10 bg-[#121721]"
                : "border border-gray-200 bg-white"
            }`}
          >
            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-orange-500/15 flex items-center justify-center">
              <Info size={28} className="text-orange-400 sm:hidden" />
              <Info size={32} className="text-orange-400 hidden sm:block" />
            </div>

            <h2
              className={`text-2xl sm:text-3xl font-bold mt-5 sm:mt-6 ${
                darkMode ? "text-white" : "text-gray-900"
              }`}
            >
              Important Information
            </h2>

            <div className="mt-6 sm:mt-8 space-y-5 sm:space-y-6">
              <div className="flex items-start gap-3 sm:gap-4">
                <CheckCircle2
                  size={20}
                  className="text-orange-400 mt-1 shrink-0"
                />
                <p
                  className={`text-base sm:text-lg leading-7 sm:leading-8 ${
                    darkMode ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  Toll, parking and permit charges are billed as per actual.
                </p>
              </div>

              <div className="flex items-start gap-3 sm:gap-4">
                <CheckCircle2
                  size={20}
                  className="text-orange-400 mt-1 shrink-0"
                />
                <p
                  className={`text-base sm:text-lg leading-7 sm:leading-8 ${
                    darkMode ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  Driver bata varies depending on the selected vehicle.
                </p>
              </div>

              <div className="flex items-start gap-3 sm:gap-4">
                <CheckCircle2
                  size={20}
                  className="text-orange-400 mt-1 shrink-0"
                />
                <p
                  className={`text-base sm:text-lg leading-7 sm:leading-8 ${
                    darkMode ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  Route or distance changes may affect the final fare.
                </p>
              </div>

              <div className="flex items-start gap-3 sm:gap-4">
                <CheckCircle2
                  size={20}
                  className="text-orange-400 mt-1 shrink-0"
                />
                <p
                  className={`text-base sm:text-lg leading-7 sm:leading-8 ${
                    darkMode ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  Vehicle allocation depends on availability and trip type.
                </p>
              </div>

              <div className="flex items-start gap-3 sm:gap-4">
                <CheckCircle2
                  size={20}
                  className="text-orange-400 mt-1 shrink-0"
                />
                <p
                  className={`text-base sm:text-lg leading-7 sm:leading-8 ${
                    darkMode ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  Night travel and hill station charges may apply when required.
                </p>
              </div>
            </div>
          </motion.div>

          {/* One Way Travel Terms */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.6 }}
            viewport={{ once: true }}
            className={`rounded-[24px] sm:rounded-[32px] p-6 sm:p-8 shadow-xl transition-all duration-300 hover:-translate-y-2 hover:border-orange-500/40 ${
              darkMode
                ? "border border-white/10 bg-[#121721]"
                : "border border-gray-200 bg-white"
            }`}
          >
            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-orange-500/15 flex items-center justify-center">
              <ArrowRightLeft size={26} className="text-orange-400 sm:hidden" />
              <ArrowRightLeft
                size={30}
                className="text-orange-400 hidden sm:block"
              />
            </div>

            <h2
              className={`mt-5 sm:mt-6 text-2xl sm:text-3xl font-bold ${
                darkMode ? "text-white" : "text-gray-900"
              }`}
            >
              One Way Travel Terms
            </h2>

            <div className="mt-6 sm:mt-8 space-y-5 sm:space-y-6">
              <div className="flex items-start gap-3 sm:gap-4">
                <CheckCircle2
                  size={20}
                  className="text-orange-400 mt-1 shrink-0"
                />
                <p
                  className={`text-base sm:text-lg leading-7 sm:leading-8 ${
                    darkMode ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  Minimum 150 KM billing.
                </p>
              </div>

              <div className="flex items-start gap-3 sm:gap-4">
                <CheckCircle2
                  size={20}
                  className="text-orange-400 mt-1 shrink-0"
                />
                <p
                  className={`text-base sm:text-lg leading-7 sm:leading-8 ${
                    darkMode ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  Driver bata ₹400 (Mini) to ₹500 (Sedan & above).
                </p>
              </div>

              <div className="flex items-start gap-3 sm:gap-4">
                <CheckCircle2
                  size={20}
                  className="text-orange-400 mt-1 shrink-0"
                />
                <p
                  className={`text-base sm:text-lg leading-7 sm:leading-8 ${
                    darkMode ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  Toll & parking charges extra (actual).
                </p>
              </div>

              <div className="flex items-start gap-3 sm:gap-4">
                <CheckCircle2
                  size={20}
                  className="text-orange-400 mt-1 shrink-0"
                />
                <p
                  className={`text-base sm:text-lg leading-7 sm:leading-8 ${
                    darkMode ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  No return fare charged.
                </p>
              </div>

              <div className="flex items-start gap-3 sm:gap-4">
                <CheckCircle2
                  size={20}
                  className="text-orange-400 mt-1 shrink-0"
                />
                <p
                  className={`text-base sm:text-lg leading-7 sm:leading-8 ${
                    darkMode ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  Ideal for city-to-city drop trips.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Round Trip Travel Terms */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            viewport={{ once: true }}
            className={`rounded-[24px] sm:rounded-[32px] p-6 sm:p-8 shadow-xl transition-all duration-300 hover:-translate-y-2 hover:border-orange-500/40 ${
              darkMode
                ? "border border-white/10 bg-[#121721]"
                : "border border-gray-200 bg-white"
            }`}
          >
            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-orange-500/15 flex items-center justify-center">
              <RotateCcw size={26} className="text-orange-400 sm:hidden" />
              <RotateCcw
                size={30}
                className="text-orange-400 hidden sm:block"
              />
            </div>

            <h2
              className={`mt-5 sm:mt-6 text-2xl sm:text-3xl font-bold ${
                darkMode ? "text-white" : "text-gray-900"
              }`}
            >
              Round Trip Travel Terms
            </h2>

            <div className="mt-6 sm:mt-8 space-y-5 sm:space-y-6">
              <div className="flex items-start gap-3 sm:gap-4">
                <CheckCircle2
                  size={20}
                  className="text-orange-400 mt-1 shrink-0"
                />
                <p
                  className={`text-base sm:text-lg leading-7 sm:leading-8 ${
                    darkMode ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  Minimum 300 KM billing.
                </p>
              </div>

              <div className="flex items-start gap-3 sm:gap-4">
                <CheckCircle2
                  size={20}
                  className="text-orange-400 mt-1 shrink-0"
                />
                <p
                  className={`text-base sm:text-lg leading-7 sm:leading-8 ${
                    darkMode ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  Driver bata ₹400–₹500/day (Tempo Traveller ₹800).
                </p>
              </div>

              <div className="flex items-start gap-3 sm:gap-4">
                <CheckCircle2
                  size={20}
                  className="text-orange-400 mt-1 shrink-0"
                />
                <p
                  className={`text-base sm:text-lg leading-7 sm:leading-8 ${
                    darkMode ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  Flexible return schedule.
                </p>
              </div>

              <div className="flex items-start gap-3 sm:gap-4">
                <CheckCircle2
                  size={20}
                  className="text-orange-400 mt-1 shrink-0"
                />
                <p
                  className={`text-base sm:text-lg leading-7 sm:leading-8 ${
                    darkMode ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  Extra KM charged separately.
                </p>
              </div>

              <div className="flex items-start gap-3 sm:gap-4">
                <CheckCircle2
                  size={20}
                  className="text-orange-400 mt-1 shrink-0"
                />
                <p
                  className={`text-base sm:text-lg leading-7 sm:leading-8 ${
                    darkMode ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  Best suited for multi-day journeys.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Stats — numbers count up from 0 the first time this row scrolls into view */}
      <section
        className={`mt-14 sm:mt-20 border-t border-b py-12 sm:py-16 transition-colors duration-500 ${
          darkMode ? "bg-[#0B101B] border-white/10" : "bg-white border-gray-200"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-10 gap-x-4">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <CountUp value={stat.number} />
                <p
                  className={`mt-3 sm:mt-5 uppercase tracking-[2px] sm:tracking-[4px] text-xs sm:text-sm font-semibold ${
                    darkMode ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </section>
  );
}

export default About;