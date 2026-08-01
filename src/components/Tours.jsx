import { motion } from "framer-motion";
import {
  Clock3,
  Snowflake,
  Wind,
  CheckCircle2,
  MessageCircle,
  ArrowUpRight,
  Star,
  Sparkles,
  MapPin,
} from "lucide-react";

const tours = [
  {
    id: 1,
    title: "Ooty Hill Station Tour",
    price: "₹4,999",
    nonAc: "₹4,499",
    duration: "2 Days / 1 Night",
    image:
      "https://images.unsplash.com/photo-1587474260584-136574528ed5?w=1200",
    description:
      "Explore Botanical Garden, Ooty Lake, Doddabetta Peak and Tea Factory.",
    highlights: [
      "Botanical Garden",
      "Ooty Lake",
      "Doddabetta Peak",
      "Tea Factory",
    ],
    inclusions: [
      "Sedan",
      "Fuel Charges",
      "Driver Bata",
      "Parking & Toll",
    ],
  },

  {
    id: 2,
    title: "Kodaikanal Getaway",
    price: "₹5,499",
    nonAc: "₹4,999",
    duration: "2 Days / 1 Night",
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=1200",
    description:
      "Visit Coaker's Walk, Pillar Rocks, Bryant Park and Silver Cascade Falls.",
    highlights: [
      "Coaker's Walk",
      "Pillar Rocks",
      "Bryant Park",
      "Silver Falls",
    ],
    inclusions: [
      "Sedan",
      "Fuel Charges",
      "Driver Bata",
      "Parking & Toll",
    ],
  },

  {
    id: 3,
    title: "Pondicherry Beach Tour",
    price: "₹2,999",
    nonAc: "₹2,599",
    duration: "1 Day",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200",
    description:
      "French Colony, Paradise Beach, Promenade Beach and Auroville.",
    highlights: [
      "Promenade",
      "Paradise Beach",
      "Auroville",
      "French Colony",
    ],
    inclusions: [
      "Sedan",
      "Fuel Charges",
      "Driver Bata",
      "Parking & Toll",
    ],
  },
];

function Tours({ darkMode }) {

  const iconBtn =
    "group flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/10 backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:scale-110 hover:rotate-6 hover:bg-gradient-to-br hover:from-orange-500 hover:to-amber-500 hover:border-orange-300 hover:shadow-[0_0_30px_rgba(249,115,22,.55)]";

  return (

<section
id="tours"
className={`relative overflow-hidden py-24 ${
darkMode
? "bg-[#050914]"
: "bg-gradient-to-b from-orange-50 via-white to-orange-100"
}`}
>

{/* Background */}

<div className="absolute inset-0 overflow-hidden">

<div className="absolute -left-40 top-10 h-[420px] w-[420px] rounded-full bg-orange-500/15 blur-[170px]" />

<div className="absolute -right-40 bottom-0 h-[420px] w-[420px] rounded-full bg-amber-400/15 blur-[170px]" />

<div className="absolute left-1/2 top-1/2 h-[320px] w-[320px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-orange-500/10 blur-[120px]" />

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

<motion.div
initial={{ opacity:0,y:40 }}
whileInView={{ opacity:1,y:0 }}
viewport={{ once:true }}
transition={{ duration:.7 }}
className="mx-auto mb-14 max-w-3xl text-center"
>

<div className="inline-flex items-center gap-2 rounded-full border border-orange-400/20 bg-white/10 px-5 py-2 backdrop-blur-xl">

<Sparkles
size={16}
className="text-orange-400"
/>

<span className="text-[11px] font-bold uppercase tracking-[4px] text-orange-400">

Tours

</span>

</div>

<h2
className={`mt-6 text-4xl font-black md:text-5xl ${
darkMode
? "text-white"
: "text-gray-900"
}`}
>

Explore

<span className="block bg-gradient-to-r from-orange-400 via-amber-300 to-yellow-300 bg-clip-text text-transparent">

Luxury Destinations

</span>

</h2>

<p
className={`mx-auto mt-5 max-w-2xl text-base leading-7 ${
darkMode
? "text-gray-400"
: "text-gray-600"
}`}
>

Premium tour packages with luxury vehicles,
professional drivers and unforgettable travel experiences.

</p>

</motion.div>

{/* Premium Cards */}

<div className="grid gap-6 lg:grid-cols-3">

{/* ===========================
      TOUR CARD
      PART 2
=========================== */}
{tours.map((tour, index) => (

  <motion.div
    key={tour.id}
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    whileHover={{ y: -10 }}
    transition={{
      duration: .6,
      delay: index * .08,
    }}
    viewport={{ once: true }}
    className={`group relative overflow-hidden rounded-[28px] border transition-all duration-700 ${
      darkMode
        ? "border-white/10 bg-[#111827] hover:border-orange-500/40 hover:shadow-[0_20px_60px_rgba(249,115,22,.25)]"
        : "border-orange-100 bg-white hover:border-orange-300 hover:shadow-[0_20px_60px_rgba(249,115,22,.18)]"
    }`}
  >

    {/* Glow */}

    <div className="absolute -left-20 -top-20 h-56 w-56 rounded-full bg-orange-500/20 blur-[90px] opacity-0 transition-all duration-700 group-hover:opacity-100" />

    <div className="absolute -right-20 bottom-0 h-56 w-56 rounded-full bg-yellow-400/20 blur-[90px] opacity-0 transition-all duration-700 group-hover:opacity-100" />

    {/* Image */}

    <div className="relative overflow-hidden">

      <img
        src={tour.image}
        alt={tour.title}
        className="h-56 w-full object-cover transition-all duration-1000 group-hover:scale-110 group-hover:rotate-1"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

      {/* Price */}

      <div className="absolute left-4 top-4 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 px-4 py-2 text-sm font-bold text-white shadow-xl">

        {tour.price}

      </div>

      {/* Duration */}

      <div className="absolute right-4 top-4 flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-2 text-xs font-semibold text-white backdrop-blur-xl">

        <Clock3 size={14} />

        {tour.duration}

      </div>

      {/* Floating Icons */}

      <div className="absolute bottom-4 right-4 flex gap-2">

        <motion.button
          whileHover={{
            scale: 1.12,
            rotate: 10,
          }}
          className={iconBtn}
        >
          <Star
            size={16}
            className="text-white"
          />
        </motion.button>

        <motion.button
          whileHover={{
            scale: 1.12,
            rotate: 10,
          }}
          className={iconBtn}
        >
          <MapPin
            size={16}
            className="text-white"
          />
        </motion.button>

      </div>

    </div>

    {/* Content */}

    <div className="p-5">

      <div className="flex items-center justify-between">

        <h3
          className={`text-xl font-black ${
            darkMode
              ? "text-white"
              : "text-gray-900"
          }`}
        >

          {tour.title}

        </h3>

        <motion.div
          whileHover={{
            rotate: -45,
            scale: 1.1,
          }}
          className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-orange-500 to-amber-500 text-white shadow-lg"
        >

          <ArrowUpRight size={18} />

        </motion.div>

      </div>

      <p
        className={`mt-3 text-sm leading-7 ${
          darkMode
            ? "text-gray-400"
            : "text-gray-600"
        }`}
      >

        {tour.description}

      </p>

      {/* Premium Pricing */}

      <div className="mt-6 grid grid-cols-2 gap-3">

        <motion.div
          whileHover={{
            y: -4,
          }}
          className="rounded-2xl bg-gradient-to-r from-orange-500 to-amber-500 p-4 text-white shadow-lg"
        >

          <div className="flex items-center gap-2">

            <Snowflake size={16} />

            <span className="text-sm font-semibold">

              AC

            </span>

          </div>

          <h4 className="mt-2 text-xl font-black">

            {tour.price}

          </h4>

        </motion.div>

        <motion.div
          whileHover={{
            y: -4,
          }}
          className={`rounded-2xl border p-4 ${
            darkMode
              ? "border-white/10 bg-white/5"
              : "border-orange-100 bg-orange-50"
          }`}
        >

          <div className="flex items-center gap-2">

            <Wind
              size={16}
              className="text-orange-500"
            />

            <span
              className={`text-sm font-semibold ${
                darkMode
                  ? "text-gray-300"
                  : "text-gray-700"
              }`}
            >

              Non AC

            </span>

          </div>

          <h4 className="mt-2 text-xl font-black text-orange-500">

            {tour.nonAc}

          </h4>

        </motion.div>

      </div>

      {/* ==========================
            PART 3
      ========================== */}
            {/* Highlights */}

      <div className="mt-6">

        <div className="mb-3 flex items-center gap-2">

          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-orange-500 to-amber-500 text-white shadow-lg">

            <MapPin size={16} />

          </div>

          <h4
            className={`text-sm font-bold uppercase tracking-[2px] ${
              darkMode
                ? "text-gray-300"
                : "text-gray-700"
            }`}
          >

            Tour Highlights

          </h4>

        </div>

        <div className="flex flex-wrap gap-2">

          {tour.highlights.map((place, i) => (

            <motion.span
              key={i}
              whileHover={{
                scale: 1.05,
                y: -2,
              }}
              className={`rounded-full border px-3 py-2 text-xs font-semibold transition-all duration-500 ${
                darkMode
                  ? "border-orange-500/30 bg-orange-500/10 text-orange-300 hover:bg-orange-500 hover:text-white"
                  : "border-orange-200 bg-orange-50 text-orange-600 hover:bg-orange-500 hover:text-white"
              }`}
            >

              {place}

            </motion.span>

          ))}

        </div>

      </div>

      {/* Inclusions */}

      <div className="mt-7">

        <div className="mb-4 flex items-center gap-2">

          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-green-500 to-emerald-500 text-white shadow-lg">

            <CheckCircle2 size={16} />

          </div>

          <h4
            className={`text-sm font-bold uppercase tracking-[2px] ${
              darkMode
                ? "text-gray-300"
                : "text-gray-700"
            }`}
          >

            Package Includes

          </h4>

        </div>

        <div className="grid grid-cols-2 gap-3">

          {tour.inclusions.map((item, i) => (

            <motion.div
              key={i}
              whileHover={{
                x: 4,
                scale: 1.02,
              }}
              className={`group flex items-center gap-3 rounded-2xl border p-3 transition-all duration-500 ${
                darkMode
                  ? "border-white/10 bg-white/5 hover:border-orange-500/30 hover:bg-white/10"
                  : "border-orange-100 bg-orange-50 hover:border-orange-300 hover:bg-orange-100"
              }`}
            >

              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-orange-500 to-amber-500 text-white shadow-md transition-all duration-500 group-hover:rotate-12 group-hover:scale-110">

                <CheckCircle2 size={14} />

              </div>

              <span
                className={`text-sm font-medium ${
                  darkMode
                    ? "text-gray-300"
                    : "text-gray-700"
                }`}
              >

                {item}

              </span>

            </motion.div>

          ))}

        </div>

      </div>

      {/* CTA Buttons */}

      <div className="mt-7 flex gap-3">

        <motion.a
          whileHover={{
            scale: 1.04,
            y: -2,
          }}
          whileTap={{
            scale: 0.96,
          }}
          href="https://wa.me/919888444952"
          target="_blank"
          rel="noreferrer"
          className="group flex h-12 flex-1 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-orange-500 via-amber-500 to-orange-600 font-semibold text-white shadow-lg transition-all duration-500 hover:shadow-[0_0_35px_rgba(249,115,22,.45)]"
        >

          <MessageCircle
            size={18}
            className="transition-transform duration-500 group-hover:rotate-12"
          />

          Book Tour

        </motion.a>

        <motion.button
          whileHover={{
            scale: 1.08,
            rotate: -8,
          }}
          whileTap={{
            scale: 0.95,
          }}
          className={iconBtn}
        >

          <ArrowUpRight
            size={18}
            className="text-white"
          />

        </motion.button>

      </div>

    </div>

  </motion.div>

))}

{/* ==========================
      PART 4
========================== */}
    </div>

    {/* ===========================
        PREMIUM BOTTOM CTA
    =========================== */}

    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="mt-20"
    >

      <div className="relative overflow-hidden rounded-[32px] border border-orange-400/20 bg-gradient-to-r from-orange-500 via-amber-500 to-orange-600 px-8 py-14 shadow-[0_30px_80px_rgba(249,115,22,.35)]">

        {/* Glow */}

        <div className="absolute -left-20 -top-20 h-72 w-72 rounded-full bg-white/20 blur-[120px]" />

        <div className="absolute -right-20 -bottom-20 h-72 w-72 rounded-full bg-yellow-300/20 blur-[120px]" />

        <div className="relative z-10 text-center">

          {/* Floating Icon */}

          <motion.div
            whileHover={{
              scale: 1.1,
              rotate: 10,
            }}
            className="mx-auto flex h-20 w-20 items-center justify-center rounded-full border border-white/20 bg-white/10 backdrop-blur-xl shadow-2xl"
          >

            <Sparkles
              size={34}
              className="text-white"
            />

          </motion.div>

          <h2 className="mt-6 text-4xl font-black text-white md:text-5xl">

            Discover Your

            <span className="block">

              Dream Destination

            </span>

          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-orange-50">

            Enjoy premium vehicles, experienced drivers,
            transparent pricing and unforgettable journeys
            across South India.

          </p>

          {/* Features */}

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">

            {[
              {
                icon: Star,
                text: "Premium Service",
              },
              {
                icon: Clock3,
                text: "24×7 Support",
              },
              {
                icon: CheckCircle2,
                text: "Best Price",
              },
            ].map((item, index) => {

              const Icon = item.icon;

              return (

                <motion.div
                  key={index}
                  whileHover={{
                    y: -4,
                    scale: 1.05,
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

          {/* CTA Buttons */}

          <div className="mt-10 flex flex-col items-center justify-center gap-4 md:flex-row">

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
              className="group flex h-14 items-center justify-center gap-3 rounded-full bg-[#0B101B] px-10 font-bold text-white transition-all duration-500 hover:shadow-[0_0_40px_rgba(0,0,0,.45)]"
            >

              <MessageCircle
                size={20}
                className="transition-transform duration-500 group-hover:rotate-12"
              />

              Book via WhatsApp

            </motion.a>

            <motion.button
              whileHover={{
                scale: 1.05,
              }}
              whileTap={{
                scale: 0.96,
              }}
              className="group flex h-14 items-center justify-center gap-3 rounded-full border border-white bg-white/10 px-10 font-bold text-white backdrop-blur-xl transition-all duration-500 hover:bg-white hover:text-orange-600"
            >

              <ArrowUpRight
                size={20}
                className="transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1"
              />

              View All Tours

            </motion.button>

          </div>

        </div>

      </div>

    </motion.div>

  </div>

</section>

  );
}

export default Tours;