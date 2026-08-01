import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronDown,
  Phone,
  MessageCircle,
  HelpCircle,
  ShieldCheck,
  Clock3,
  Star,
  Sparkles,
} from "lucide-react";

const faqs = [
  {
    question: "How does the booking work?",
    answer:
      "Simply call us or send your pickup and drop locations on WhatsApp. We instantly confirm your fare and assign a verified professional driver.",
  },
  {
    question: "Do I need to pay any advance?",
    answer:
      "No. Most bookings require no advance payment. You can pay directly to the driver after your journey unless informed otherwise.",
  },
  {
    question: "What is included in the fare?",
    answer:
      "Vehicle charges, professional driver, fuel, and standard travel charges. Toll, parking and state permit charges are additional wherever applicable.",
  },
  {
    question: "What is the minimum billing distance?",
    answer:
      "One Way Trips have a minimum billing of 150 KM while Round Trips have a minimum billing of 300 KM per day.",
  },
  {
    question: "Can I travel at midnight?",
    answer:
      "Yes. Our taxi service is available 24×7 including airport pickups, midnight rides and early morning departures.",
  },
  {
    question: "Which locations do you cover?",
    answer:
      "We provide premium taxi services across Tamil Nadu, Kerala, Karnataka, Pondicherry and nearby cities.",
  },
];

function Faq({ darkMode }) {
  const [active, setActive] = useState(0);

  const iconBox =
    "group flex h-10 w-10 items-center justify-center rounded-xl border border-white/20 bg-white/10 backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:scale-110 hover:border-orange-400 hover:bg-gradient-to-br hover:from-orange-500 hover:to-amber-500 hover:shadow-[0_0_25px_rgba(249,115,22,.55)]";

  return (
    <section
      id="faq"
      className={`relative overflow-hidden py-20 ${
        darkMode
          ? "bg-[#050914]"
          : "bg-gradient-to-b from-orange-50 via-white to-orange-100"
      }`}
    >
      {/* Background */}

      <div className="absolute inset-0 overflow-hidden">

        <div className="absolute -left-40 top-10 h-[420px] w-[420px] rounded-full bg-orange-500/15 blur-[170px]" />

        <div className="absolute -right-40 bottom-0 h-[420px] w-[420px] rounded-full bg-amber-400/15 blur-[170px]" />

        <div className="absolute left-1/2 top-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-orange-500/10 blur-[120px]" />

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

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .7 }}
          className="mx-auto mb-14 max-w-3xl text-center"
        >

          <div className="inline-flex items-center gap-2 rounded-full border border-orange-400/20 bg-white/5 px-4 py-2 backdrop-blur-xl">

            <Sparkles
              size={15}
              className="text-orange-400"
            />

            <span className="text-[11px] font-bold uppercase tracking-[4px] text-orange-400">

              FAQ

            </span>

          </div>

          <h2
            className={`mt-6 text-4xl font-black md:text-5xl ${
              darkMode
                ? "text-white"
                : "text-gray-900"
            }`}
          >

            Frequently Asked

            <span className="block bg-gradient-to-r from-orange-400 via-amber-300 to-yellow-300 bg-clip-text text-transparent">

              Questions

            </span>

          </h2>

          <p
            className={`mx-auto mt-5 max-w-2xl text-base leading-7 ${
              darkMode
                ? "text-gray-400"
                : "text-gray-600"
            }`}
          >

            Everything you need to know about our premium taxi service,
            bookings, pricing and travel experience.

          </p>

        </motion.div>

        {/* Main Layout */}

        <div className="grid gap-8 lg:grid-cols-[1.45fr_.55fr]">

          {/* ==========================
               FAQ ACCORDION
               Part 2
          ========================== */}
          {/* ==========================
      PREMIUM FAQ ACCORDION
========================== */}

<div className="space-y-4">

  {faqs.map((item, index) => (
    <motion.div
      key={index}
      initial={{ opacity: 0, x: -40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.45,
        delay: index * 0.08,
      }}
      whileHover={{
        y: -4,
      }}
      className={`group relative overflow-hidden rounded-2xl border transition-all duration-500 ${
        active === index
          ? darkMode
            ? "border-orange-500/40 bg-gradient-to-r from-orange-500/10 to-transparent shadow-[0_15px_45px_rgba(249,115,22,.22)]"
            : "border-orange-300 bg-white shadow-xl"
          : darkMode
          ? "border-white/10 bg-white/5 hover:border-orange-500/30"
          : "border-gray-200 bg-white hover:border-orange-300 hover:shadow-lg"
      }`}
    >

      {/* Glow */}

      <div className="absolute -right-10 -top-10 h-24 w-24 rounded-full bg-orange-500/20 blur-3xl opacity-0 transition-all duration-500 group-hover:opacity-100" />

      {/* Question */}

      <button
        onClick={() => setActive(active === index ? -1 : index)}
        className="flex w-full items-center justify-between p-5"
      >

        <div className="flex items-center gap-4">

          {/* Icon */}

          <motion.div
            whileHover={{
              rotate: 8,
              scale: 1.08,
            }}
            className={`flex h-11 w-11 items-center justify-center rounded-xl transition-all duration-500 ${
              active === index
                ? "bg-gradient-to-br from-orange-500 to-amber-500 text-white shadow-lg"
                : darkMode
                ? "bg-white/10 text-orange-400"
                : "bg-orange-100 text-orange-500"
            }`}
          >

            <HelpCircle size={18} />

          </motion.div>

          {/* Title */}

          <h3
            className={`text-base font-bold md:text-lg ${
              darkMode
                ? "text-white"
                : "text-gray-900"
            }`}
          >

            {item.question}

          </h3>

        </div>

        {/* Arrow */}

        <motion.div
          animate={{
            rotate: active === index ? 180 : 0,
            scale: active === index ? 1.05 : 1,
          }}
          transition={{
            duration: .35,
          }}
          className={`flex h-10 w-10 items-center justify-center rounded-full transition-all duration-500 ${
            active === index
              ? "bg-gradient-to-br from-orange-500 to-amber-500 text-white shadow-lg"
              : darkMode
              ? "bg-white/10 text-orange-400"
              : "bg-orange-100 text-orange-500"
          }`}
        >

          <ChevronDown size={18} />

        </motion.div>

      </button>

      {/* Answer */}

      <AnimatePresence>

        {active === index && (

          <motion.div
            initial={{
              height: 0,
              opacity: 0,
            }}
            animate={{
              height: "auto",
              opacity: 1,
            }}
            exit={{
              height: 0,
              opacity: 0,
            }}
            transition={{
              duration: .35,
            }}
            className="overflow-hidden"
          >

            <div
              className={`border-t px-5 pb-5 pt-4 ${
                darkMode
                  ? "border-white/10"
                  : "border-orange-100"
              }`}
            >

              <p
                className={`text-sm leading-7 ${
                  darkMode
                    ? "text-gray-300"
                    : "text-gray-600"
                }`}
              >

                {item.answer}

              </p>

            </div>

          </motion.div>

        )}

      </AnimatePresence>

    </motion.div>
  ))}

</div>

{/* ==========================
      BOOKING CARD
      (Part 3)
========================== */}
{/* ==========================
      PREMIUM BOOKING CARD
========================== */}

<motion.div
  initial={{ opacity: 0, x: 50 }}
  whileInView={{ opacity: 1, x: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.7 }}
>
  <div
    className={`sticky top-24 relative overflow-hidden rounded-[26px] border p-6 ${
      darkMode
        ? "border-white/10 bg-white/5 backdrop-blur-3xl"
        : "border-orange-200 bg-white shadow-2xl"
    }`}
  >

    {/* Background Glow */}

    <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-orange-500/20 blur-[90px]" />

    <div className="absolute -left-16 bottom-0 h-48 w-48 rounded-full bg-amber-400/20 blur-[90px]" />

    <div className="relative z-10">

      {/* Premium Icon */}

      <motion.div
        whileHover={{
          scale: 1.08,
          rotate: 8,
        }}
        className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-orange-500 to-amber-500 shadow-xl"
      >
        <ShieldCheck
          size={28}
          className="text-white"
        />
      </motion.div>

      <h3
        className={`mt-5 text-center text-2xl font-black ${
          darkMode ? "text-white" : "text-gray-900"
        }`}
      >
        Instant
        <span className="block bg-gradient-to-r from-orange-400 via-amber-300 to-yellow-300 bg-clip-text text-transparent">
          Taxi Booking
        </span>
      </h3>

      <p
        className={`mt-4 text-center text-sm leading-7 ${
          darkMode
            ? "text-gray-400"
            : "text-gray-600"
        }`}
      >
        Book your cab in seconds with
        verified drivers and fixed pricing.
      </p>

      {/* Features */}

      <div className="mt-7 space-y-3">

        {[
          {
            icon: ShieldCheck,
            title: "Verified Drivers",
          },
          {
            icon: Clock3,
            title: "24×7 Support",
          },
          {
            icon: Star,
            title: "Top Rated",
          },
        ].map((item, index) => {
          const Icon = item.icon;

          return (

            <motion.div
              key={index}
              whileHover={{
                x: 5,
              }}
              className={`group flex items-center gap-3 rounded-2xl p-3 transition-all duration-500 ${
                darkMode
                  ? "bg-white/5 hover:bg-white/10"
                  : "bg-orange-50 hover:bg-orange-100"
              }`}
            >

              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-orange-500 to-amber-500 shadow-lg transition-all duration-500 group-hover:rotate-6 group-hover:scale-110">

                <Icon
                  size={18}
                  className="text-white"
                />

              </div>

              <span
                className={`font-semibold ${
                  darkMode
                    ? "text-white"
                    : "text-gray-800"
                }`}
              >
                {item.title}
              </span>

            </motion.div>

          );
        })}

      </div>

      {/* Stats */}

      <div className="mt-7 grid grid-cols-2 gap-3">

        {[
          {
            value: "25K+",
            label: "Trips",
          },
          {
            value: "4.9★",
            label: "Rating",
          },
          {
            value: "24×7",
            label: "Support",
          },
          {
            value: "150+",
            label: "Cars",
          },
        ].map((item, index) => (

          <motion.div
            key={index}
            whileHover={{
              y: -4,
            }}
            className={`rounded-2xl border p-3 text-center transition-all duration-500 ${
              darkMode
                ? "border-white/10 bg-white/5"
                : "border-orange-100 bg-orange-50"
            }`}
          >

            <h4 className="text-xl font-black text-orange-500">

              {item.value}

            </h4>

            <p
              className={`mt-1 text-xs ${
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

      {/* Buttons */}

      <div className="mt-8 space-y-3">

        <a
          href="https://wa.me/919888444952"
          target="_blank"
          rel="noreferrer"
          className="group flex h-12 w-full items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-orange-500 via-amber-500 to-orange-600 font-bold text-white transition-all duration-500 hover:scale-[1.03] hover:shadow-[0_0_30px_rgba(249,115,22,.45)]"
        >

          <MessageCircle
            size={18}
            className="transition-transform duration-500 group-hover:rotate-12"
          />

          WhatsApp

        </a>

        <a
          href="tel:+919888444952"
          className={`group flex h-12 w-full items-center justify-center gap-3 rounded-xl border-2 font-bold transition-all duration-500 hover:scale-[1.03] ${
            darkMode
              ? "border-orange-500 text-orange-400 hover:bg-orange-500 hover:text-white"
              : "border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white"
          }`}
        >

          <Phone
            size={18}
            className="transition-transform duration-500 group-hover:rotate-12"
          />

          Call Now

        </a>

      </div>

    </div>

  </div>
</motion.div>

{/* ==========================
      PREMIUM CTA
      (Part 4)
========================== */}
        </div>

        {/* ==========================
              PREMIUM BOTTOM CTA
        ========================== */}

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-16"
        >

          <div className="relative overflow-hidden rounded-[28px] border border-orange-400/20 bg-gradient-to-r from-orange-500 via-amber-500 to-orange-600 px-6 py-12 shadow-[0_25px_70px_rgba(249,115,22,.35)] md:px-12">

            {/* Glow */}

            <div className="absolute -left-20 -top-20 h-60 w-60 rounded-full bg-white/20 blur-[110px]" />

            <div className="absolute -right-20 -bottom-20 h-60 w-60 rounded-full bg-yellow-300/20 blur-[110px]" />

            <div className="relative z-10 text-center">

              {/* Floating Icon */}

              <motion.div
                whileHover={{
                  scale: 1.1,
                  rotate: 10,
                }}
                className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl border border-white/20 bg-white/10 backdrop-blur-xl shadow-xl"
              >

                <MessageCircle
                  size={30}
                  className="text-white"
                />

              </motion.div>

              <h2 className="mt-5 text-3xl font-black text-white md:text-5xl">

                Ready To

                <span className="block">

                  Book Your Ride?

                </span>

              </h2>

              <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-orange-50 md:text-base">

                Safe rides, verified drivers, transparent pricing and
                24×7 support for every journey across South India.

              </p>

              {/* Feature Icons */}

              <div className="mt-8 flex flex-wrap items-center justify-center gap-4">

                {[
                  {
                    icon: ShieldCheck,
                    text: "Safe",
                  },
                  {
                    icon: Clock3,
                    text: "24×7",
                  },
                  {
                    icon: Star,
                    text: "Top Rated",
                  },
                ].map((item, index) => {
                  const Icon = item.icon;

                  return (
                    <motion.div
                      key={index}
                      whileHover={{
                        y: -5,
                        scale: 1.08,
                      }}
                      className="flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 backdrop-blur-xl"
                    >

                      <Icon
                        size={16}
                        className="text-white"
                      />

                      <span className="text-sm font-semibold text-white">

                        {item.text}

                      </span>

                    </motion.div>
                  );
                })}

              </div>

              {/* Buttons */}

              <div className="mt-8 flex flex-col items-center justify-center gap-4 md:flex-row">

                <motion.a
                  whileHover={{
                    scale: 1.05,
                  }}
                  whileTap={{
                    scale: 0.96,
                  }}
                  href="https://wa.me/919888444952"
                  target="_blank"
                  rel="noreferrer"
                  className="group flex h-12 items-center justify-center gap-3 rounded-full bg-[#0B101B] px-8 font-bold text-white transition-all duration-500 hover:shadow-[0_0_30px_rgba(0,0,0,.4)]"
                >

                  <MessageCircle
                    size={18}
                    className="transition-transform duration-500 group-hover:rotate-12"
                  />

                  WhatsApp Booking

                </motion.a>

                <motion.a
                  whileHover={{
                    scale: 1.05,
                  }}
                  whileTap={{
                    scale: 0.96,
                  }}
                  href="tel:+919888444952"
                  className="group flex h-12 items-center justify-center gap-3 rounded-full border border-white bg-white/10 px-8 font-bold text-white backdrop-blur-xl transition-all duration-500 hover:bg-white hover:text-orange-600"
                >

                  <Phone
                    size={18}
                    className="transition-transform duration-500 group-hover:rotate-12"
                  />

                  Call Now

                </motion.a>

              </div>

            </div>

          </div>

        </motion.div>

      </div>

    </section>
  );
}

export default Faq;