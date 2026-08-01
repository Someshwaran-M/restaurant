import React, { useState } from "react";
import { motion } from "framer-motion";
import passengerImage from "../assets/images/carmobile.jpeg";
import {
  ArrowRight,
  RotateCcw,
  Plane,
  Car,
  Building2,
  Mountain,
  BadgeCheck,
  ShieldCheck,
  CheckCircle2,
  Clock,
  Shield,
  Smile,
  MapPin,
  Handshake,
  MessageCircle,
  PieChart,
  CarTaxiFront,
  Cog,
} from "lucide-react";

// Section Data (Your Original Content Preserved)
const ourServicesList = [
  {
    icon: Clock,
    title: "Excellence in Service",
    description:
      "We aim for the best in every ride, providing professional, trustable, and comfortable service that goes beyond expectations.",
  },
  {
    icon: Shield,
    title: "Safety First",
    description:
      "The safety of our passengers and drivers are our top-most priority. We ensure it with well-maintained cabs, trained drivers, and strict safety rules.",
  },
  {
    icon: Smile,
    title: "Integrity & Transparency",
    description:
      "We stay true to our word with clear communication, fair prices, and trust in every ride.",
  },
];

const chauffeurPoints = [
  {
    icon: Clock,
    title: "Reliability & Punctuality",
    description: "We deliver on time, every time, valuing your schedule and time.",
  },
  {
    icon: Handshake,
    title: "Customer-Centric Approach",
    description:
      "We listen to your needs and keep improving our service for a smooth and comfortable ride.",
  },
  {
    icon: MessageCircle,
    title: "Professional Development",
    description:
      "We invest in your needs and keep improving our service for a smooth and comfortable ride. Our drivers and staff get regular training program to provide professional and high-quality service.",
  },
];

const professionalism3Es = [
  {
    icon: PieChart,
    title: "Equitable Service",
    description:
      "We make sure everyone gets trusted rides with fair prices and great service quality.",
  },
  {
    icon: CarTaxiFront,
    title: "Essential Mobility",
    description:
      "We know rides are important, whether for work, medical needs, or more. We're committed to providing giving you the best service.",
  },
  {
    icon: Cog,
    title: "Ethical Operations",
    description:
      "Our service is built on fairness, honesty, and care in every ride for everyone.",
  },
];

const mainTaxiServices = [
  {
    icon: ArrowRight,
    title: "One Way Drop Taxi",
    description:
      "Pay only for one-way distance. No return fare charged. Perfect for intercity drop trips.",
  },
  {
    icon: RotateCcw,
    title: "Round Trip Taxi",
    description:
      "Multi-day journeys with flexible return. Per-day driver bata and minimum KM billing.",
  },
  {
    icon: Plane,
    title: "Airport Transfer",
    description:
      "Reliable airport pickup and drop with flight tracking. Always on time.",
  },
  {
    icon: Car,
    title: "Outstation Cab",
    description:
      "Long distance taxi service across Tamil Nadu, Kerala, Karnataka and Pondicherry.",
  },
  {
    icon: Building2,
    title: "Corporate Travel",
    description:
      "Employee transport, airport pickup and client travel with dedicated support.",
  },
  {
    icon: Mountain,
    title: "Hill Station Trips",
    description:
      "Experienced drivers for Ooty, Kodaikanal, Munnar, Yercaud and other hill stations.",
  },
];

const whyChooseUs = [
  {
    icon: Car,
    title: "Well Maintained Cars",
    description:
      "Clean Mini, Sedan, SUV and Traveller options for comfortable long distance travel.",
  },
  {
    icon: Plane,
    title: "Flexible Pickup",
    description:
      "Schedule your ride anytime based on your convenience — early morning or late night.",
  },
  {
    icon: ShieldCheck,
    title: "Verified Drivers",
    description:
      "Experienced drivers focused on safe, secure and comfortable travel.",
  },
  {
    icon: Mountain,
    title: "Wide Route Coverage",
    description:
      "Serving major cities and destinations across Tamil Nadu, Kerala, Karnataka and Pondicherry.",
  },
  {
    icon: BadgeCheck,
    title: "Transparent Pricing",
    description:
      "Fixed pricing with no hidden charges, surge fares or unexpected costs.",
  },
  {
    icon: Building2,
    title: "24/7 Booking Support",
    description:
      "Call or WhatsApp us anytime. Our team confirms every booking personally.",
  },
];

function Services({ darkMode }) {
  const [activeValueIndex, setActiveValueIndex] = useState(1); // Default hover box on item 2 like ref
  const [activeChauffeurIndex, setActiveChauffeurIndex] = useState(null);

  return (
    <section
      id="services"
      className={`relative overflow-hidden py-20 transition-colors duration-500 ${
        darkMode ? "bg-[#080C16] text-white" : "bg-white text-gray-900"
      }`}
    >
      {/* Background Soft Glows */}
      <div
        className={`absolute left-0 top-36 h-96 w-96 rounded-full blur-[140px] pointer-events-none ${
          darkMode ? "bg-orange-500/10" : "bg-orange-200/40"
        }`}
      />
      <div
        className={`absolute right-0 bottom-36 h-96 w-96 rounded-full blur-[140px] pointer-events-none ${
          darkMode ? "bg-red-600/10" : "bg-red-100/50"
        }`}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6 space-y-28">

        {/* ========================================================
            1. OUR SERVICES (REPLACED OUR VALUES & ADDED HOVER CARD EFFECT)
           ======================================================== */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-6 space-y-6"
          >
            <h2 className="text-4xl font-extrabold tracking-tight md:text-5xl">
              Our <span className="text-red-600 dark:text-orange-500">Services</span>
            </h2>

            <div className="space-y-4">
              {ourServicesList.map((item, index) => {
                const Icon = item.icon;
                const isHovered = activeValueIndex === index;

                return (
                  <div
                    key={index}
                    onMouseEnter={() => setActiveValueIndex(index)}
                    className={`flex items-start gap-5 p-5 rounded-2xl transition-all duration-300 cursor-pointer ${
                      isHovered
                        ? darkMode
                          ? "bg-[#141922] border border-white/10 shadow-xl"
                          : "bg-white border border-gray-100 shadow-xl shadow-gray-200/60"
                        : "bg-transparent border border-transparent"
                    }`}
                  >
                    <div className="shrink-0 mt-1">
                      <Icon
                        size={38}
                        strokeWidth={1.5}
                        className={`${
                          darkMode ? "text-orange-400" : "text-gray-900"
                        }`}
                      />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-red-600 dark:text-orange-500">
                        {item.title}
                      </h3>
                      <p
                        className={`mt-1.5 text-sm leading-relaxed ${
                          darkMode ? "text-gray-300" : "text-gray-600"
                        }`}
                      >
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>

          {/* Right Banner Photo */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-6 flex justify-center"
          >
            <div className="relative overflow-hidden rounded-[2.5rem] shadow-2xl border border-gray-100 dark:border-white/10 max-w-lg w-full">
              <img
                src={passengerImage}
                alt="Passenger riding taxi"
                className="h-[390px] w-full object-cover"
              />
            </div>
          </motion.div>

        </div>

        {/* ========================================================
            2. 100% TRAINED CHAUFFEURS (ROUTE CONNECTOR + HOVER CARDS)
           ======================================================== */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center">
          
          {/* Left Layered Image Composition with Moving Car */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-6 relative flex justify-center items-center py-6"
          >
            <div className="relative w-full max-w-md h-[380px] flex items-center justify-center">
              
              {/* Red Curved Accent */}
              <div className="absolute bottom-4 right-2 w-[270px] h-[230px] rounded-[2.5rem] bg-gradient-to-tr from-red-600 to-orange-500 shadow-xl transform rotate-6" />

              {/* Driver Photo */}
              <div className="absolute top-0 left-2 w-[280px] h-[270px] rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white dark:border-gray-800 -rotate-6 z-10">
                <img
                  src="https://images.unsplash.com/photo-1506015391300-4802dc74de2e?auto=format&fit=crop&q=80&w=800"
                  alt="Driver Chauffeur"
                  className="h-full w-full object-cover"
                />
              </div>

              {/* Transparent Car - Animated Forward / Backward */}
              <motion.div
                animate={{ x: [-22, 22, -22] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute bottom-0 right-0 w-[270px] z-20 drop-shadow-[0_20px_15px_rgba(0,0,0,0.35)]"
              >
                <img
                  src="https://pngimg.com/uploads/suzuki/suzuki_PNG12290.png"
                  alt="Moving Cab"
                  className="w-full h-auto object-contain"
                />
              </motion.div>

            </div>
          </motion.div>

          {/* Right Text Block */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-6 space-y-6"
          >
            <div>
              <h2 className="text-4xl font-extrabold tracking-tight md:text-5xl leading-tight">
                100% Trained
                <span className="block text-red-600 dark:text-orange-500">Chauffeurs</span>
              </h2>
              <p className={`mt-4 text-base leading-relaxed ${
                darkMode ? "text-gray-300" : "text-gray-700"
              }`}>
                Red Taxi provides the <strong className="underline decoration-red-500">Best Cab Service</strong> in the city with skilled and well trained drivers. They follow high-quality service to give smooth and comfortable ride for the customers.
              </p>
            </div>

            {/* List with Dashed Route Line & Map Pin Marker Details */}
            <div className="relative space-y-4 pt-2">
              
              {/* Dashed Route SVG Connector between Map Pins */}
              <div className="absolute left-[20px] top-[40px] bottom-[40px] w-6 pointer-events-none hidden sm:block z-0">
                <svg className="h-full w-full" fill="none">
                  <path
                    d="M 12 0 C 30 50, -10 100, 12 150 C 30 180, -10 220, 12 260"
                    stroke="#EF4444"
                    strokeWidth="2"
                    strokeDasharray="4 4"
                  />
                </svg>
              </div>

              {chauffeurPoints.map((point, index) => {
                const Icon = point.icon;
                const isHovered = activeChauffeurIndex === index;

                return (
                  <div
                    key={index}
                    onMouseEnter={() => setActiveChauffeurIndex(index)}
                    onMouseLeave={() => setActiveChauffeurIndex(null)}
                    className={`relative z-10 flex items-start gap-4 p-4 rounded-2xl transition-all duration-300 cursor-pointer ${
                      isHovered
                        ? darkMode
                          ? "bg-[#141922] border border-white/10 shadow-xl"
                          : "bg-white border border-gray-100 shadow-xl shadow-gray-200/60"
                        : "bg-transparent border border-transparent"
                    }`}
                  >
                    {/* Location Pin with Overlay Icon */}
                    <div className="relative shrink-0 mt-1">
                      <div className="relative flex h-11 w-11 items-center justify-center rounded-full bg-red-600 text-white shadow-md">
                        <Icon size={20} />
                        {/* Red Location Badge Marker */}
                        <div className="absolute -bottom-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-white shadow">
                          <MapPin size={12} />
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg font-bold text-red-600 dark:text-orange-500">
                        {point.title}
                      </h3>
                      <p className={`mt-1 text-sm leading-relaxed ${
                        darkMode ? "text-gray-400" : "text-gray-600"
                      }`}>
                        {point.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

          </motion.div>

        </div>

        {/* ========================================================
            3. REPLACED SECTION: DIRECT CONNECTIONS & THE 3E'S OF PROFESSIONALISM
           ======================================================== */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center space-y-12"
        >
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-extrabold md:text-4xl">
              Direct connections{" "}
              <span className="block text-red-600 dark:text-orange-500 mt-1">
                for clarity and choice
              </span>
            </h2>
            <p className={`mt-4 text-base ${
              darkMode ? "text-gray-400" : "text-gray-600"
            }`}>
              Our platform is dedicated to delivering essential transportation services that fulfill fundamental mobility needs while upholding core values and ethical business practices.
            </p>

            <h3 className="mt-8 text-2xl font-bold">
              The <span className="text-red-600 dark:text-orange-500">3E's</span> of Professionalism
            </h3>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {professionalism3Es.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className={`flex flex-col items-center text-center p-8 rounded-3xl transition-all duration-300 hover:-translate-y-2 ${
                    darkMode
                      ? "bg-[#141922] border border-white/10 hover:border-orange-500/40"
                      : "bg-white border border-gray-100 shadow-xl shadow-gray-200/50 hover:border-red-400"
                  }`}
                >
                  <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-red-500/10 text-red-600 dark:text-orange-400">
                    <Icon size={36} strokeWidth={1.5} />
                  </div>
                  <h4 className="text-xl font-bold text-red-600 dark:text-orange-500">
                    {item.title}
                  </h4>
                  <p className={`mt-3 text-sm leading-relaxed ${
                    darkMode ? "text-gray-400" : "text-gray-600"
                  }`}>
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </motion.div>

        {/* ========================================================
            4. IMPROVED UI: BOOKED IN 4 EASY STEPS
           ======================================================== */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className={`rounded-3xl p-10 lg:p-14 border ${
            darkMode
              ? "bg-[#0c1221] border-white/10"
              : "bg-gray-900 text-white border-gray-800 shadow-2xl"
          }`}
        >
          <div className="text-center">
            <span className="text-xs font-extrabold uppercase tracking-[6px] text-orange-400">
              HOW IT WORKS
            </span>
            <h2 className="mt-3 text-3xl font-extrabold text-white md:text-4xl">
              Booked In{" "}
              <span className="bg-gradient-to-r from-orange-400 to-amber-300 bg-clip-text text-transparent">
                4 Easy Steps
              </span>
            </h2>
          </div>

          <div className="relative mt-16">
            {/* Step Horizontal Line */}
            <div className="absolute left-10 right-10 top-11 hidden h-[2px] bg-gradient-to-r from-orange-500/20 via-orange-500 to-orange-500/20 lg:block" />

            <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
              
              {/* Step 1 */}
              <div className="group relative flex flex-col items-center text-center">
                <div className="relative mb-6 flex h-22 w-22 items-center justify-center rounded-3xl border border-orange-500/30 bg-orange-500/10 transition-all duration-300 group-hover:bg-orange-500 group-hover:shadow-[0_0_25px_rgba(249,115,22,0.4)]">
                  <Car size={32} className="text-orange-400 group-hover:text-white transition-colors" />
                  <div className="absolute -top-2 -right-2 flex h-8 w-8 items-center justify-center rounded-full bg-orange-500 text-xs font-black text-white ring-4 ring-[#0c1221]">
                    1
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white">Choose Route</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-400">
                  Select pickup and destination to receive an instant fare.
                </p>
              </div>

              {/* Step 2 */}
              <div className="group relative flex flex-col items-center text-center">
                <div className="relative mb-6 flex h-22 w-22 items-center justify-center rounded-3xl border border-orange-500/30 bg-orange-500/10 transition-all duration-300 group-hover:bg-orange-500 group-hover:shadow-[0_0_25px_rgba(249,115,22,0.4)]">
                  <Plane size={32} className="text-orange-400 group-hover:text-white transition-colors" />
                  <div className="absolute -top-2 -right-2 flex h-8 w-8 items-center justify-center rounded-full bg-orange-500 text-xs font-black text-white ring-4 ring-[#0c1221]">
                    2
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white">Confirm Booking</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-400">
                  Confirm your booking with transparent pricing and no hidden fees.
                </p>
              </div>

              {/* Step 3 */}
              <div className="group relative flex flex-col items-center text-center">
                <div className="relative mb-6 flex h-22 w-22 items-center justify-center rounded-3xl border border-orange-500/30 bg-orange-500/10 transition-all duration-300 group-hover:bg-orange-500 group-hover:shadow-[0_0_25px_rgba(249,115,22,0.4)]">
                  <BadgeCheck size={32} className="text-orange-400 group-hover:text-white transition-colors" />
                  <div className="absolute -top-2 -right-2 flex h-8 w-8 items-center justify-center rounded-full bg-orange-500 text-xs font-black text-white ring-4 ring-[#0c1221]">
                    3
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white">Driver Assigned</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-400">
                  A professional verified driver will be assigned to your trip.
                </p>
              </div>

              {/* Step 4 */}
              <div className="group relative flex flex-col items-center text-center">
                <div className="relative mb-6 flex h-22 w-22 items-center justify-center rounded-3xl border border-orange-500/30 bg-orange-500/10 transition-all duration-300 group-hover:bg-orange-500 group-hover:shadow-[0_0_25px_rgba(249,115,22,0.4)]">
                  <ShieldCheck size={32} className="text-orange-400 group-hover:text-white transition-colors" />
                  <div className="absolute -top-2 -right-2 flex h-8 w-8 items-center justify-center rounded-full bg-orange-500 text-xs font-black text-white ring-4 ring-[#0c1221]">
                    4
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white">Enjoy Your Ride</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-400">
                  Relax and travel comfortably with safe, reliable and on-time service.
                </p>
              </div>

            </div>
          </div>
        </motion.div>

       

      </div>
    </section>
  );
}

export default Services;