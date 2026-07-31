import { motion } from "framer-motion";
import {
  Clock3,
  Snowflake,
  Wind,
  CheckCircle2,
  MessageCircle,
} from "lucide-react";

const tours = [
  {
    id: 1,
    title: "Ooty Hill Station Tour",
    price: "₹4,999",
    nonAc: "₹4,499",
    duration: "2 Days / 1 Night",

    image:
      "https://images.unsplash.com/photo-1587474260584-136574528ed5?w=900",

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
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=900",

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
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=900",

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
  return (
    
<section
  id="tours"
  className={`relative overflow-hidden py-32 transition-all duration-500 ${
  darkMode ? "bg-[#0B101B]" : "bg-white"
}`}
>
  <div
  className={`absolute left-0 top-40 h-80 w-80 rounded-full blur-[120px] ${
    darkMode ? "bg-orange-500/10" : "bg-orange-300/20"
  }`}
/>

<div
  className={`absolute right-0 bottom-0 h-80 w-80 rounded-full blur-[120px] ${
    darkMode ? "bg-orange-600/10" : "bg-yellow-300/20"
  }`}
/>

  <div className="relative z-10 mx-auto max-w-7xl px-6">

    <motion.div
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  viewport={{ once: true }}
  className="mx-auto mb-14 max-w-5xl text-center"
>
  <span className="text-sm font-bold uppercase tracking-[5px] text-orange-400">
    TOUR PACKAGES
  </span>

  <h3
    className={`mt-4 text-4xl font-bold leading-tight md:text-6xl ${
      darkMode ? "text-white" : "text-gray-900"
    }`}
  >
    Explore{" "}
    <span className="bg-gradient-to-r from-orange-400 to-amber-300 bg-clip-text text-transparent">
      Popular
    </span>{" "}
    Destinations
  </h3>

  <p
    className={`mx-auto mt-6 max-w-3xl text-lg leading-8 ${
      darkMode ? "text-gray-400" : "text-gray-600"
    }`}
  >
  Curated travel packages with comfortable rides, fixed pricing, and hassle-free bookings.
  </p>
</motion.div>

    <div className="grid gap-4 lg:grid-cols-3">

      {tours.map((tour, index) => (

        <motion.div
          key={tour.id}
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            delay: index * 0.1,
          }}
          viewport={{ once: true }}
          className={`overflow-hidden rounded-3xl transition-all duration-500 hover:-translate-y-2 ${
  darkMode
    ? "border border-white/10 bg-[#171C27] hover:border-orange-500/40"
    : "border border-gray-200 bg-white shadow-lg hover:border-orange-400"
}`}
        >

          <div className="relative">

            <img
              src={tour.image}
              alt={tour.title}
              className="h-52 w-full object-cover transition duration-700 hover:scale-105"
            />

            <div className="absolute left-5 top-5 rounded-full bg-orange-500 px-4 py-1.5 text-base font-bold text-white shadow-lg">

              {tour.price}

            </div>

            <div className="absolute right-5 top-5 flex items-center gap-2 rounded-full bg-[#111827]/90 px-3 py-1.5 text-xs font-semibold text-white backdrop-blur">

              <Clock3 size={16} />

              {tour.duration}

            </div>

          </div>

          <div className="p-5">

            <h3 className={`text-2xl font-bold ${
  darkMode ? "text-white" : "text-gray-900"
}`}>

              {tour.title}

            </h3>

            <p className={`mt-3 text-base leading-7 ${
  darkMode ? "text-gray-400" : "text-gray-600"
}`}>

              {tour.description}

            </p>

            <div className={`mt-6 flex overflow-hidden rounded-xl ${
  darkMode ? "bg-[#222733]" : "bg-gray-100"
}`}>

              <div className="flex flex-1 items-center justify-center gap-2 bg-orange-500 py-3 font-bold text-white">

                <Snowflake size={14} />

                AC

                <span>{tour.price}</span>

              </div>

              <div
  className={`flex flex-1 items-center justify-center gap-2 py-3 font-bold transition-all duration-300 ${
    darkMode
      ? "text-gray-300"
      : "text-gray-700"
  }`}
>
  <Wind
    size={14}
    className={darkMode ? "text-gray-300" : "text-gray-700"}
  />

  Non-AC

  <span>{tour.nonAc}</span>
</div>

            </div>

            <div className="mt-6">

              <h4 className="text-xs font-bold uppercase tracking-[3px] text-gray-500">
                Highlights
              </h4>

              <div className="mt-3 flex flex-wrap gap-3">

                {tour.highlights.map((place, i) => (

                  <span
  key={i}
  className={`rounded-full px-3 py-1.5 text-xs font-semibold transition-all duration-300 ${
    darkMode
      ? "border border-orange-500/30 bg-orange-500/10 text-orange-300"
      : "border border-orange-200 bg-orange-50 text-orange-600"
  }`}
>
  {place}
</span>

                ))}

              </div>

            </div>

            <div className="mt-4">

              <h4 className={`flex items-center gap-2 ${
  darkMode ? "text-gray-300" : "text-gray-700"
}`}>
                Inclusions
              </h4>

              <div className="mt-3 grid grid-cols-2 gap-y-4">

                {tour.inclusions.map((item, i) => (

                  <div
                    key={i}
                    className={`flex items-center gap-2 ${
  darkMode ? "text-gray-300" : "text-gray-700"
}`}
                  >

                    <CheckCircle2
                      size={18}
                      className="text-orange-500"
                    />

                    <span>{item}</span>

                  </div>

                ))}

              </div>

            </div>

            <a
              href="https://wa.me/919888444952"
              target="_blank"
              rel="noreferrer"
              className="mt-8 flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-orange-500 text-base font-semibold text-white transition-all duration-300 hover:bg-orange-600"
            >

              <MessageCircle size={24} />

              Book This Tour

            </a>

          </div>

        </motion.div>

      ))}

    </div>

    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="mt-12 flex justify-center"
    >

      <button
        className={`rounded-full border-2 border-orange-500 px-6 py-3 text-base font-semibold transition-all duration-300 hover:bg-orange-500 hover:text-white ${
  darkMode ? "text-orange-400" : "text-orange-500"
}`}
      >
        View All Packages
      </button>

    </motion.div>

  </div>

</section>

  );
}

export default Tours;