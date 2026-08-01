import { motion } from "framer-motion";
import {
  ArrowRight,
  RotateCcw,
  Plane,
  Car,
  Building2,
  Mountain,
  BadgeCheck,
  ShieldCheck,
  Sparkles,
  ArrowUpRight,
  CheckCircle2,
  Crown,
   Phone,
  MessageCircle,
} from "lucide-react";



/* Keep your existing services[] and whyChooseUs[] arrays */

function Services({ darkMode }) {
  const services = [
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
      "Schedule your ride anytime based on your convenience.",
  },
  {
    icon: ShieldCheck,
    title: "Verified Drivers",
    description:
      "Experienced drivers focused on safe travel.",
  },
  {
    icon: Mountain,
    title: "Wide Route Coverage",
    description:
      "Serving Tamil Nadu, Kerala, Karnataka and Pondicherry.",
  },
  {
    icon: BadgeCheck,
    title: "Transparent Pricing",
    description:
      "No hidden charges or surge pricing.",
  },
  {
    icon: Building2,
    title: "24/7 Booking Support",
    description:
      "Call or WhatsApp us anytime.",
  },
];
  const iconButton =
    "group flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/10 backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:scale-110 hover:rotate-6 hover:border-orange-400 hover:bg-gradient-to-br hover:from-orange-500 hover:to-amber-500 hover:shadow-[0_0_25px_rgba(249,115,22,.55)]";

  return (
    <section
      id="services"
      className={`relative overflow-hidden py-20 ${
        darkMode
          ? "bg-[#050914]"
          : "bg-gradient-to-b from-orange-50 via-white to-orange-100"
      }`}
    >
      {/* Background */}

      <div className="absolute inset-0 overflow-hidden">

        <div className="absolute -left-36 top-0 h-[380px] w-[380px] rounded-full bg-orange-500/15 blur-[150px]" />

        <div className="absolute -right-36 bottom-0 h-[380px] w-[380px] rounded-full bg-amber-400/15 blur-[150px]" />

        <div className="absolute left-1/2 top-1/2 h-[260px] w-[260px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-orange-500/10 blur-[100px]" />

      </div>

      {/* Grid */}

      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(to right,#fff 1px,transparent 1px),linear-gradient(to bottom,#fff 1px,transparent 1px)",
          backgroundSize: "65px 65px",
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-5">

        {/* Premium Heading */}

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .7 }}
          className="mx-auto mb-14 max-w-3xl text-center"
        >

          <div className="inline-flex items-center gap-2 rounded-full border border-orange-400/20 bg-white/10 px-4 py-2 backdrop-blur-xl">

            <Crown
              size={15}
              className="text-orange-400"
            />

            <span className="text-[11px] font-bold uppercase tracking-[4px] text-orange-400">

              Our Services

            </span>

          </div>

          <h2
            className={`mt-5 text-4xl font-black leading-tight md:text-5xl ${
              darkMode
                ? "text-white"
                : "text-gray-900"
            }`}
          >

            Complete

            <span className="block bg-gradient-to-r from-orange-400 via-amber-300 to-yellow-300 bg-clip-text text-transparent">

              Taxi Solutions

            </span>

          </h2>

          <p
            className={`mx-auto mt-5 max-w-2xl text-base leading-7 ${
              darkMode
                ? "text-gray-400"
                : "text-gray-600"
            }`}
          >

            Premium taxi services with verified drivers,
            transparent pricing and luxury vehicles for
            airport, local and outstation travel.

          </p>

          {/* Stats */}

          <div className="mt-8 flex flex-wrap justify-center gap-4">

            {[
              { value: "24×7", label: "Support" },
              { value: "100%", label: "Safe Ride" },
              { value: "25K+", label: "Trips" },
            ].map((item, index) => (

              <motion.div
                key={index}
                whileHover={{
                  y: -4,
                  scale: 1.05,
                }}
                className={`rounded-2xl border px-5 py-3 transition-all duration-500 ${
                  darkMode
                    ? "border-white/10 bg-white/5 backdrop-blur-xl"
                    : "border-orange-100 bg-white shadow-lg"
                }`}
              >

                <h4 className="text-xl font-black text-orange-500">

                  {item.value}

                </h4>

                <p
                  className={`text-xs ${
                    darkMode
                      ? "text-gray-400"
                      : "text-gray-600"
                  }`}
                >

                  {item.label}

                </p>

              </motion.div>

            ))}

          </div>

        </motion.div>

        {/* Premium Service Cards */}

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">

          {/* ========= PART 2 ========= */}

          {services.map((service, index) => {

  const Icon = service.icon;

  return (

    <motion.div
      key={index}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{
        y: -6,
        scale: 1.02,
      }}
      transition={{
        duration: 0.55,
        delay: index * 0.08,
      }}
      viewport={{ once: true }}
      className={`group relative overflow-hidden rounded-[22px] border transition-all duration-700 ${
        darkMode
          ? "border-white/10 bg-white/5 backdrop-blur-xl hover:border-orange-500/40 hover:shadow-[0_20px_50px_rgba(249,115,22,.22)]"
          : "border-orange-100 bg-white hover:border-orange-300 hover:shadow-[0_18px_45px_rgba(249,115,22,.18)]"
      }`}
    >

      {/* Hover Glow */}

      <div className="absolute -left-16 -top-16 h-44 w-44 rounded-full bg-orange-500/20 blur-[80px] opacity-0 transition-all duration-700 group-hover:opacity-100" />

      <div className="relative p-5">

        {/* Header */}

        <div className="flex items-start justify-between">

          <motion.div
            whileHover={{
              rotate: 8,
              scale: 1.08,
            }}
            className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-orange-500 to-amber-500 shadow-lg"
          >

            <Icon
              size={22}
              className="text-white"
            />

          </motion.div>

          <motion.button
            whileHover={{
              rotate: -45,
              scale: 1.1,
            }}
            whileTap={{
              scale: .95,
            }}
            className={iconButton}
          >

            <ArrowUpRight
              size={16}
              className="text-white"
            />

          </motion.button>

        </div>

        {/* Title */}

        <h3
          className={`mt-5 text-xl font-black ${
            darkMode
              ? "text-white"
              : "text-gray-900"
          }`}
        >

          {service.title}

        </h3>

        {/* Description */}

        <p
          className={`mt-3 text-sm leading-7 ${
            darkMode
              ? "text-gray-400"
              : "text-gray-600"
          }`}
        >

          {service.description}

        </p>

        {/* Feature Badges */}

        <div className="mt-5 flex flex-wrap gap-2">

          {[
            "Verified",
            "24×7",
            "Premium",
          ].map((item) => (

            <motion.span
              key={item}
              whileHover={{
                y: -2,
                scale: 1.04,
              }}
              className={`rounded-full border px-3 py-1.5 text-[11px] font-semibold transition-all duration-500 ${
                darkMode
                  ? "border-orange-500/20 bg-orange-500/10 text-orange-300 hover:bg-orange-500 hover:text-white"
                  : "border-orange-200 bg-orange-50 text-orange-600 hover:bg-orange-500 hover:text-white"
              }`}
            >

              {item}

            </motion.span>

          ))}

        </div>

        {/* Footer */}

        <div className="mt-6 flex items-center justify-between">

          <span className="text-sm font-semibold text-orange-500">

            Explore Service

          </span>

          <motion.button
            whileHover={{
              scale: 1.1,
              rotate: -45,
            }}
            whileTap={{
              scale: .95,
            }}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-orange-500 to-amber-500 text-white shadow-lg transition-all duration-500 hover:shadow-[0_0_25px_rgba(249,115,22,.45)]"
          >

            <ArrowRight size={18} />

          </motion.button>

        </div>

      </div>

    </motion.div>

  );

})}

{/* ===========================
      PART 3
=========================== */}

</div>

{/* =====================================
        PREMIUM HOW IT WORKS
===================================== */}
<motion.div
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.7 }}
  viewport={{ once: true }}
  className="mt-20"
>

  {/* Heading */}

  <div className="mx-auto mb-14 max-w-3xl text-center">

    <div className="inline-flex items-center gap-2 rounded-full border border-orange-500/20 bg-orange-500/10 px-5 py-2 backdrop-blur-xl">

      <Sparkles
        size={15}
        className="text-orange-400"
      />

      <span className="text-[11px] font-bold uppercase tracking-[4px] text-orange-400">

        How It Works

      </span>

    </div>

    <h2
      className={`mt-5 text-4xl font-black ${
        darkMode ? "text-white" : "text-gray-900"
      }`}
    >
      Book Your Taxi

      <span className="block bg-gradient-to-r from-orange-400 via-amber-300 to-yellow-300 bg-clip-text text-transparent">

        In Just 4 Steps

      </span>
    </h2>

    <p
      className={`mx-auto mt-4 max-w-2xl text-sm leading-7 ${
        darkMode ? "text-gray-400" : "text-gray-600"
      }`}
    >
      Fast booking process with verified drivers and instant confirmation.
    </p>

  </div>

  {/* Steps */}

  <div className="grid gap-5 lg:grid-cols-4">

    {[
      {
        icon: Phone,
        title: "Contact Us",
        desc: "Call or WhatsApp anytime.",
      },
      {
        icon: Car,
        title: "Choose Vehicle",
        desc: "Select Sedan, SUV or Traveller.",
      },
      {
        icon: BadgeCheck,
        title: "Confirm Booking",
        desc: "Receive fixed fare instantly.",
      },
      {
        icon: ShieldCheck,
        title: "Enjoy Ride",
        desc: "Safe, comfortable journey.",
      },
    ].map((step, index) => {

      const Icon = step.icon;

      return (

        <motion.div
          key={index}
          whileHover={{
            y: -8,
            scale: 1.03,
          }}
          transition={{
            duration: .3,
          }}
          className={`group relative overflow-hidden rounded-3xl border p-6 ${
            darkMode
              ? "border-white/10 bg-white/5 backdrop-blur-xl hover:border-orange-500/40 hover:shadow-[0_20px_45px_rgba(249,115,22,.25)]"
              : "border-orange-100 bg-white hover:border-orange-300 hover:shadow-xl"
          }`}
        >

          {/* Glow */}

          <div className="absolute -right-16 -top-16 h-44 w-44 rounded-full bg-orange-500/20 blur-[90px] opacity-0 transition-all duration-500 group-hover:opacity-100" />

          {/* Number */}

          <div className="absolute right-5 top-5 text-5xl font-black text-orange-500/10">

            0{index + 1}

          </div>

          {/* Icon */}

          <motion.div
            whileHover={{
              rotate: 8,
              scale: 1.1,
            }}
            className="relative z-10 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-orange-500 to-amber-500 shadow-xl"
          >

            <Icon
              size={26}
              className="text-white"
            />

          </motion.div>

          {/* Title */}

          <h3
            className={`mt-6 text-xl font-black ${
              darkMode ? "text-white" : "text-gray-900"
            }`}
          >

            {step.title}

          </h3>

          {/* Description */}

          <p
            className={`mt-3 text-sm leading-7 ${
              darkMode ? "text-gray-400" : "text-gray-600"
            }`}
          >

            {step.desc}

          </p>

          {/* Bottom Line */}

          <div className="mt-6 h-1 w-14 rounded-full bg-gradient-to-r from-orange-500 to-amber-400 transition-all duration-500 group-hover:w-24" />

        </motion.div>

      );

    })}

  </div>

</motion.div>
{/* =====================================
          WHY CHOOSE US
          PART 4
===================================== */}
{/* =====================================
          WHY CHOOSE US
===================================== */}

<motion.section
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.7 }}
  viewport={{ once: true }}
  className="relative mt-24"
>
  {/* Heading */}

  <div className="mx-auto mb-16 max-w-3xl text-center">

    <div className="inline-flex items-center gap-2 rounded-full border border-orange-500/20 bg-orange-500/10 px-5 py-2 backdrop-blur-xl">

      <BadgeCheck
        size={16}
        className="text-orange-400"
      />

      <span className="text-xs font-bold uppercase tracking-[4px] text-orange-400">

        Why Choose Us

      </span>

    </div>

    <h2
      className={`mt-6 text-4xl font-black md:text-5xl ${
        darkMode
          ? "text-white"
          : "text-gray-900"
      }`}
    >

      Premium Travel

      <span className="block bg-gradient-to-r from-orange-400 via-amber-300 to-yellow-300 bg-clip-text text-transparent">

        Experience

      </span>

    </h2>

    <p
      className={`mx-auto mt-5 max-w-2xl text-base leading-7 ${
        darkMode
          ? "text-gray-400"
          : "text-gray-600"
      }`}
    >

      Thousands of customers trust our professional drivers,
      transparent pricing and premium travel experience.

    </p>

  </div>

  {/* Cards */}

  <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">

    {whyChooseUs.map((item, index) => {

      const Icon = item.icon;

      return (

        <motion.div
          key={index}
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          whileHover={{
            y: -10,
          }}
          transition={{
            duration: .45,
            delay: index * .08,
          }}
          viewport={{
            once: true,
          }}
          className={`group relative overflow-hidden rounded-[28px] border p-6 transition-all duration-700 ${
            darkMode
              ? "border-white/10 bg-[#111827] hover:border-orange-500/40 hover:shadow-[0_25px_60px_rgba(249,115,22,.30)]"
              : "border-orange-100 bg-white hover:border-orange-300 hover:shadow-[0_25px_60px_rgba(249,115,22,.18)]"
          }`}
        >

          {/* Glow */}

          <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-orange-500/20 blur-[90px] opacity-0 transition-all duration-700 group-hover:opacity-100" />

          {/* Premium Badge */}

          <div className="absolute right-5 top-5 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 px-3 py-1 text-[10px] font-bold uppercase tracking-[2px] text-white shadow-lg">

            Premium

          </div>

          {/* Icon */}

          <motion.div
            whileHover={{
              rotate: 10,
              scale: 1.1,
            }}
            className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-orange-500 via-amber-500 to-orange-600 shadow-xl"
          >

            <Icon
              size={28}
              className="text-white"
            />

          </motion.div>

          {/* Title */}

          <h3
            className={`mt-6 text-xl font-black ${
              darkMode
                ? "text-white"
                : "text-gray-900"
            }`}
          >

            {item.title}

          </h3>

          {/* Description */}

          <p
            className={`mt-3 text-sm leading-7 ${
              darkMode
                ? "text-gray-400"
                : "text-gray-600"
            }`}
          >

            {item.description}

          </p>

          {/* Bottom */}

          <div className="mt-6">

            <div className="flex items-center justify-between">

              <span className="text-sm font-semibold text-orange-500">

                Trusted Service

              </span>

              <ArrowUpRight
                size={18}
                className="text-orange-500 transition duration-500 group-hover:-translate-y-1 group-hover:translate-x-1"
              />

            </div>

            <div className="mt-4 h-1 overflow-hidden rounded-full bg-orange-100 dark:bg-white/10">

              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                transition={{
                  duration: 1.2,
                  delay: index * .15,
                }}
                className="h-full rounded-full bg-gradient-to-r from-orange-500 to-amber-400"
              />

            </div>

          </div>

        </motion.div>

      );

    })}

  </div>

  {/* Bottom Stats */}

  <div className="mt-16 grid gap-5 md:grid-cols-4">

    {[
      {
        value: "25K+",
        label: "Happy Riders",
      },
      {
        value: "4.9★",
        label: "Customer Rating",
      },
      {
        value: "24×7",
        label: "Support",
      },
      {
        value: "100%",
        label: "Safe Journey",
      },
    ].map((item, index) => (

      <motion.div
        key={index}
        whileHover={{
          y: -5,
          scale: 1.03,
        }}
        className={`rounded-3xl border p-6 text-center transition-all duration-500 ${
          darkMode
            ? "border-white/10 bg-white/5 backdrop-blur-xl hover:border-orange-500/40"
            : "border-orange-100 bg-white shadow-lg hover:border-orange-300"
        }`}
      >

        <h3 className="text-3xl font-black text-orange-500">

          {item.value}

        </h3>

        <p
          className={`mt-2 text-sm ${
            darkMode
              ? "text-gray-400"
              : "text-gray-600"
          }`}
        >

          {item.label}

        </p>

      </motion.div>

    ))}

  </div>

</motion.section>

      </div>
    </section>
  );
}

export default Services;