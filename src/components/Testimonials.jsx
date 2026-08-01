import { motion } from "framer-motion";
import {
  Star,
  Quote,
  Sparkles,
  UserCircle2,
  ArrowUpRight,
  ShieldCheck,
} from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Karthik R.",
    route: "Chennai → Coimbatore",
    review:
      "On-time pickup and exact fare as quoted. Smooth long-distance ride. Highly recommended for outstation travel.",
  },
  {
    id: 2,
    name: "Divya S.",
    route: "Madurai → Kodaikanal",
    review:
      "Driver handled hill roads well. Comfortable journey overall. Will definitely book again for family trips.",
  },
  {
    id: 3,
    name: "Sanjay V.",
    route: "Bangalore → Salem",
    review:
      "Booked via WhatsApp, got quick confirmation and clean vehicle. Fixed fare with no surprises at the end.",
  },
  {
    id: 4,
    name: "Lakshmi P.",
    route: "Trichy → Rameswaram",
    review:
      "Family trip was smooth. Good space for luggage and the driver was very professional throughout.",
  },
  {
    id: 5,
    name: "Arvind K.",
    route: "Coimbatore → Kochi",
    review:
      "Reliable service for intercity travel. No hidden charges — exactly what was quoted is what I paid.",
  },
];

function Testimonials({ darkMode }) {
  return (
    <section
      id="testimonials"
      className={`relative overflow-hidden py-24 ${
        darkMode
          ? "bg-[#050914]"
          : "bg-gradient-to-b from-orange-50 via-white to-orange-100"
      }`}
    >
      {/* Premium Background */}

      <div className="absolute inset-0 overflow-hidden">

        <div className="absolute -left-44 top-10 h-[430px] w-[430px] rounded-full bg-orange-500/15 blur-[180px]" />

        <div className="absolute -right-44 bottom-0 h-[430px] w-[430px] rounded-full bg-amber-400/15 blur-[180px]" />

        <div className="absolute left-1/2 top-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-orange-500/10 blur-[130px]" />

      </div>

      {/* Grid */}

      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(to right,#fff 1px,transparent 1px),linear-gradient(to bottom,#fff 1px,transparent 1px)",
          backgroundSize: "70px 70px",
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-5">

        {/* Premium Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .7 }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >

          <div className="inline-flex items-center gap-2 rounded-full border border-orange-400/20 bg-white/10 px-5 py-2 backdrop-blur-xl">

            <Sparkles
              size={16}
              className="text-orange-400"
            />

            <span className="text-[11px] font-bold uppercase tracking-[4px] text-orange-400">

              Customer Reviews

            </span>

          </div>

          <h2
            className={`mt-6 text-4xl font-black leading-tight md:text-5xl ${
              darkMode
                ? "text-white"
                : "text-gray-900"
            }`}
          >

            What Our

            <span className="block bg-gradient-to-r from-orange-400 via-amber-300 to-yellow-300 bg-clip-text text-transparent">

              Happy Riders Say

            </span>

          </h2>

          <p
            className={`mx-auto mt-5 max-w-2xl text-base leading-7 ${
              darkMode
                ? "text-gray-400"
                : "text-gray-600"
            }`}
          >

            Thousands of customers trust us for comfortable,
            safe and affordable taxi services across South India.

          </p>

        </motion.div>

        {/* Premium Cards */}

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">

          {/* ==========================
                PART 2
          ========================== */}
          {testimonials.map((item, index) => (

  <motion.div
    key={item.id}
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    whileHover={{
      y: -10,
      scale: 1.02,
    }}
    transition={{
      duration: 0.6,
      delay: index * 0.08,
    }}
    viewport={{ once: true }}
    className={`group relative overflow-hidden rounded-[28px] border transition-all duration-700 ${
      darkMode
        ? "border-white/10 bg-[#111827] hover:border-orange-500/40 hover:shadow-[0_25px_60px_rgba(249,115,22,.25)]"
        : "border-orange-100 bg-white hover:border-orange-300 hover:shadow-[0_25px_60px_rgba(249,115,22,.18)]"
    }`}
  >

    {/* Premium Glow */}

    <div className="absolute -left-20 -top-20 h-56 w-56 rounded-full bg-orange-500/20 blur-[90px] opacity-0 transition-all duration-700 group-hover:opacity-100" />

    <div className="absolute -right-20 bottom-0 h-56 w-56 rounded-full bg-yellow-400/20 blur-[90px] opacity-0 transition-all duration-700 group-hover:opacity-100" />

    <div className="relative p-6">

      {/* Quote */}

      <motion.div
        whileHover={{
          rotate: 12,
          scale: 1.1,
        }}
        className="absolute right-6 top-6 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-orange-500 to-amber-500 text-white shadow-xl"
      >

        <Quote size={20} />

      </motion.div>

      {/* Customer */}

      <div className="flex items-center gap-4">

        <motion.div
          whileHover={{
            scale: 1.08,
            rotate: 8,
          }}
          className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-orange-500 via-amber-500 to-orange-600 shadow-xl"
        >

          <UserCircle2
            size={34}
            className="text-white"
          />

        </motion.div>

        <div>

          <h3
            className={`text-xl font-black ${
              darkMode
                ? "text-white"
                : "text-gray-900"
            }`}
          >

            {item.name}

          </h3>

          <div className="mt-1 flex items-center gap-2">

            <ShieldCheck
              size={15}
              className="text-orange-500"
            />

            <span className="text-sm font-semibold text-orange-500">

              Verified Customer

            </span>

          </div>

        </div>

      </div>

      {/* Rating */}

      <div className="mt-6 flex gap-2">

        {[...Array(5)].map((_, i) => (

          <motion.div
            key={i}
            whileHover={{
              scale: 1.25,
              rotate: 12,
            }}
          >

            <Star
              size={17}
              className="fill-orange-400 text-orange-400"
            />

          </motion.div>

        ))}

      </div>

      {/* Review */}

      <p
        className={`mt-5 text-[15px] leading-8 italic ${
          darkMode
            ? "text-gray-300"
            : "text-gray-600"
        }`}
      >

        "{item.review}"

      </p>

      {/* Divider */}

      <div
        className={`my-6 h-px ${
          darkMode
            ? "bg-white/10"
            : "bg-gray-200"
        }`}
      />

      {/* Route */}

      <div className="flex items-center justify-between">

        <div>

          <p className="text-xs uppercase tracking-[3px] text-gray-500">

            Route

          </p>

          <p className="mt-2 font-bold text-orange-500">

            {item.route}

          </p>

        </div>

        <motion.div
          whileHover={{
            rotate: -45,
            scale: 1.1,
          }}
          className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-orange-500 to-amber-500 text-white shadow-lg"
        >

          <ArrowUpRight size={18} />

        </motion.div>

      </div>

    </div>

  </motion.div>

))}

{/* ==========================
        PART 3
========================== */}
        </div>

        {/* ==========================
              PREMIUM CTA
        ========================== */}

        

      </div>

    </section>
  );
}

export default Testimonials;