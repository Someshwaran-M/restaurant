import { motion } from "framer-motion";
import {
  MapPin,
  ShieldCheck,
  Info,
  ArrowRightLeft,
  RotateCcw,
  CheckCircle2,
} from "lucide-react";

function TaxiIcon({ className }) {
  return (
    <svg
      viewBox="0 0 100 50"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >

      <path
        d="M8 34 Q8 26 16 26 L24 14 Q27 10 33 10 H63 Q69 10 72 14 L80 26 Q92 26 92 34 L92 38 Q92 41 89 41 H11 Q8 41 8 38 Z"
        fill="currentColor"
      />

      <path d="M30 15 L26 25 H50 V15 Z" fill="#0f172a" opacity="0.85" />
      <path d="M53 15 H62 L68 25 H53 Z" fill="#0f172a" opacity="0.85" />

      <rect x="44" y="3" width="12" height="7" rx="2" fill="#0f172a" />
      <rect x="45.5" y="4.5" width="9" height="4" rx="1" fill="currentColor" />

      <circle cx="26" cy="41" r="7" fill="#111827" />
      <circle cx="26" cy="41" r="3" fill="#374151" />
      <circle cx="74" cy="41" r="7" fill="#111827" />
      <circle cx="74" cy="41" r="3" fill="#374151" />
    </svg>
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
    {
      number: "10,000+",
      label: "HAPPY TRIPS",
    },
    {
      number: "55+",
      label: "CITIES COVERED",
    },
    {
      number: "4.8★",
      label: "AVERAGE RATING",
    },
    {
      number: "24/7",
      label: "BOOKING SUPPORT",
    },
  ];

  return (
    <section
  id="about"
  className={`relative overflow-hidden py-28 transition-colors duration-500 ${
    darkMode ? "bg-[#080C16]" : "bg-gray-50"
  }`}
>

      <div className="relative h-15 bg-[#11192b] border-y border-white/5 overflow-hidden">


        <motion.div
          className="absolute left-0 top-1/2 -translate-y-1/2 flex items-center gap-16 w-max"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {Array.from({ length: 40 }).map((_, index) => (
            <div
              key={index}
              className="w-16 h-1.5 rounded-full bg-orange-400 shrink-0"
            />
          ))}
        </motion.div>



        <motion.div
          initial={{ left: "-10%" }}
          animate={{ left: "110%" }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-1/2 -translate-y-1/2"
        >
          <TaxiIcon className="w-16 h-8 text-orange-400 drop-shadow-[0_0_15px_rgba(251,146,60,.7)]" />
        </motion.div>
      </div>


      <div className={`border-b transition-colors duration-500 ${
  darkMode
    ? "border-white/10 bg-[#0d1220]"
    : "border-gray-200 bg-white"
}`}>
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
              <div key={index} className="flex items-center gap-3 px-8 py-5">
                <MapPin size={18} className="text-orange-400" />

                <span
  className={`font-medium text-lg ${
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

      <div className={`border-b transition-colors duration-500 ${
  darkMode
    ? "border-white/10 bg-[#091019]"
    : "border-gray-200 bg-orange-50"
}`}>
        <div className="max-w-7xl mx-auto py-4 flex flex-wrap justify-center gap-10">
          <div className={`flex items-center gap-3 ${
  darkMode ? "text-gray-300" : "text-gray-700"
}`}>
            <CheckCircle2 size={18} className="text-orange-400" />

            <span>Toll charges as per actual</span>
          </div>

          <div className={`flex items-center gap-3 ${
  darkMode ? "text-gray-300" : "text-gray-700"
}`}>
            <CheckCircle2 size={18} className="text-orange-400" />

            <span>No hidden fees</span>
          </div>

          <div className={`flex items-center gap-3 ${
  darkMode ? "text-gray-300" : "text-gray-700"
}`}>
            <CheckCircle2 size={18} className="text-orange-400" />

            <span>Transparent billing</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-20">
        <div className="grid lg:grid-cols-3 gap-6">


          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className={`rounded-[32px] p-8 shadow-xl transition-all duration-300 hover:-translate-y-2 hover:border-orange-500/40 ${
  darkMode
    ? "border border-white/10 bg-[#121721]"
    : "border border-gray-200 bg-white"
}`}
          >

            <div className="w-12 h-12 rounded-xl bg-orange-100 dark:bg-orange-500/15 flex items-center justify-center">
              <Info size={24} className="text-orange-500" />
            </div>
            <h2
  className={`mt-4 text-2xl font-bold ${
    darkMode ? "text-white" : "text-gray-900"
  }`}
>
              Important Information
            </h2>

            <div className="mt-4 space-y-2">
              <div className="flex items-start gap-3">
               <CheckCircle2
  size={16}
  className="text-orange-500 mt-1 flex-shrink-0"
/>

                <p
  className={`text-base leading-5 ${
    darkMode ? "text-gray-300" : "text-gray-600"
  }`}
>
                  Toll, parking and permit charges are billed as per actual.
                </p>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 size={16} className="text-orange-500 mt-1 flex-shrink-0" />

                <p
  className={`text-base leading-5 ${
    darkMode ? "text-gray-300" : "text-gray-600"
  }`}
>
                  Driver bata varies depending on the selected vehicle.
                </p>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 size={16} className="text-orange-500 mt-1 flex-shrink-0" />

                <p
  className={`text-base leading-5 ${
    darkMode ? "text-gray-300" : "text-gray-600"
  }`}
>
                  Route or distance changes may affect the final fare.
                </p>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 size={16} className="text-orange-500 mt-1 flex-shrink-0" />

                <p
  className={`text-base leading-5 ${
    darkMode ? "text-gray-300" : "text-gray-600"
  }`}
>
                  Vehicle allocation depends on availability and trip type.
                </p>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 size={16} className="text-orange-500 mt-1 flex-shrink-0" />

                <p
  className={`text-base leading-5 ${
    darkMode ? "text-gray-300" : "text-gray-600"
  }`}
>
                  Night travel and hill station charges may apply when required.
                </p>
              </div>
            </div>
          </motion.div>


          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.6 }}
            viewport={{ once: true }}
           className={`rounded-[32px] p-8 shadow-xl transition-all duration-300 hover:-translate-y-2 hover:border-orange-500/40 ${
  darkMode
    ? "border border-white/10 bg-[#121721]"
    : "border border-gray-200 bg-white"
}`}
          >

            <div className="w-12 h-12 rounded-xl bg-orange-100 dark:bg-orange-500/15 flex items-center justify-center">
              <ArrowRightLeft size={24} className="text-orange-400" />
            </div>

           <h2
  className={`mt-4 text-2xl font-bold ${
    darkMode ? "text-white" : "text-gray-900"
  }`}
>
              One Way Travel Terms
            </h2>

            <div className="mt-6 space-y-4">
              <div className="flex items-start gap-4">
                <CheckCircle2 size={16} className="text-orange-500 mt-1 flex-shrink-0" />
                <p className={`text-base leading-5 ${darkMode ? "text-gray-300" : "text-gray-600"}`}>
                  Minimum 150 KM billing.
                </p>
              </div>

              <div className="flex items-start gap-4">
                <CheckCircle2 size={16} className="text-orange-500 mt-1 flex-shrink-0" />
                <p className={`text-base leading-5 ${darkMode ? "text-gray-300" : "text-gray-600"}`}>
                  Driver bata ₹400 (Mini) to ₹500 (Sedan & above).
                </p>
              </div>

              <div className="flex items-start gap-4">
                <CheckCircle2 size={16} className="text-orange-500 mt-1 flex-shrink-0" />
                <p className={`text-base leading-5 ${darkMode ? "text-gray-300" : "text-gray-600"}`}>
                  Toll & parking charges extra (actual).
                </p>
              </div>

              <div className="flex items-start gap-4">
                <CheckCircle2 size={16} className="text-orange-500 mt-1 flex-shrink-0" />
                <p className={`text-base leading-5 ${darkMode ? "text-gray-300" : "text-gray-600"}`}>
                  No return fare charged.
                </p>
              </div>

              <div className="flex items-start gap-4">
                <CheckCircle2 size={16} className="text-orange-500 mt-1 flex-shrink-0" />
                <p className={`text-base leading-5 ${darkMode ? "text-gray-300" : "text-gray-600"}`}>
                  Ideal for city-to-city drop trips.
                </p>
              </div>
            </div>
          </motion.div>


          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            viewport={{ once: true }}
            className={`rounded-[32px] p-8 shadow-xl transition-all duration-300 hover:-translate-y-2 hover:border-orange-500/40 ${
  darkMode
    ? "border border-white/10 bg-[#121721]"
    : "border border-gray-200 bg-white"
}`}
          >
            <div className="w-12 h-12 rounded-xl bg-orange-100 dark:bg-orange-500/15 flex items-center justify-center">
              <RotateCcw size={24} className="text-orange-400" />
            </div>

            <h2
  className={`mt-4 text-2xl font-bold ${
    darkMode ? "text-white" : "text-gray-900"
  }`}
>
              Round Trip Travel Terms
            </h2>

            <div className="mt-6 space-y-4">
              <div className="flex items-start gap-4">
                <CheckCircle2 size={16} className="text-orange-500 mt-1 flex-shrink-0" />
                <p className={`text-base leading-5 ${darkMode ? "text-gray-300" : "text-gray-600"}`}>
                  Minimum 300 KM billing.
                </p>
              </div>

              <div className="flex items-start gap-4">
                <CheckCircle2 size={16} className="text-orange-500 mt-1 flex-shrink-0" />
                <p className={`text-base leading-5 ${darkMode ? "text-gray-300" : "text-gray-600"}`}>
                  Driver bata ₹400–₹500/day (Tempo Traveller ₹800).
                </p>
              </div>

              <div className="flex items-start gap-4">
                <CheckCircle2 size={16} className="text-orange-500 mt-1 flex-shrink-0" />
                <p className={`text-base leading-5 ${darkMode ? "text-gray-300" : "text-gray-600"}`}>
                  Flexible return schedule.
                </p>
              </div>

              <div className="flex items-start gap-4">
                <CheckCircle2 size={16} className="text-orange-500 mt-1 flex-shrink-0" />
                <p className={`text-base leading-5 ${darkMode ? "text-gray-300" : "text-gray-600"}`}>
                  Extra KM charged separately.
                </p>
              </div>

              <div className="flex items-start gap-4">
                <CheckCircle2 size={16} className="text-orange-500 mt-1 flex-shrink-0" />
                <p className={`text-base leading-5 ${darkMode ? "text-gray-300" : "text-gray-600"}`}>
                  Best suited for multi-day journeys.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <section
  className={`mt-20 border-y py-12 transition-colors duration-500 ${
    darkMode
      ? "bg-[#0B101B] border-white/10"
      : "bg-white border-gray-200"
  }`}
>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-10">
            {/* Happy Trips */}
            <div className="text-center">
              <h6 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-orange-500 tracking-tight">
  10,000+
</h6>

              <p className={`mt-5 uppercase tracking-[4px] text-sm font-semibold ${
  darkMode ? "text-gray-400" : "text-gray-600"
}`}>
                HAPPY TRIPS
              </p>
            </div>

            <div className="text-center">
              <h6 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-orange-500 tracking-tight">
  55+
</h6>

              <p className={`mt-5 uppercase tracking-[4px] text-sm font-semibold ${
  darkMode ? "text-gray-400" : "text-gray-600"
}`}>
                CITIES COVERED
              </p>
            </div>

            <div className="text-center">
              <h6 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-orange-500 tracking-tight">
                4.8★
              </h6>

              <p className={`mt-5 uppercase tracking-[4px] text-sm font-semibold ${
  darkMode ? "text-gray-400" : "text-gray-600"
}`}>
                AVERAGE RATING
              </p>
            </div>

            <div className="text-center">
              <h6 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-orange-500 tracking-tight">
                24/7
              </h6>

              <p className={`mt-5 uppercase tracking-[4px] text-sm font-semibold ${
  darkMode ? "text-gray-400" : "text-gray-600"
}`}>
                BOOKING SUPPORT
              </p>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}

export default About;
