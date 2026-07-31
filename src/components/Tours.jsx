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
function Tours() {
  return (
    
<section
  id="tours"
  className="relative overflow-hidden bg-[#0B101B] py-28"
>
  {/* Background Glow */}

  <div className="absolute left-0 top-40 h-96 w-96 rounded-full bg-orange-500/10 blur-[140px]" />

  <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-orange-600/10 blur-[150px]" />

  <div className="relative z-10 mx-auto max-w-7xl px-6">

    {/* Heading */}

    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="mx-auto mb-20 max-w-4xl text-center"
    >

      <span className="text-sm font-bold uppercase tracking-[6px] text-orange-400">
        TOUR PACKAGES
      </span>

      <h2 className="mt-5 text-5xl font-extrabold text-white md:text-6xl">
        Popular
        <span className="bg-gradient-to-r from-orange-400 to-amber-300 bg-clip-text text-transparent">
          {" "}Weekend Tours
        </span>
      </h2>

      <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-gray-400">
        Affordable holiday packages with premium comfort,
        verified drivers and transparent pricing.
      </p>

    </motion.div>

    {/* Cards */}

    <div className="grid gap-8 lg:grid-cols-3">

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
          className="overflow-hidden rounded-[32px] border border-white/10 bg-[#171C27] shadow-xl transition-all duration-500 hover:-translate-y-2 hover:border-orange-500/40"
        >

          {/* Image */}

          <div className="relative">

            <img
              src={tour.image}
              alt={tour.title}
              className="h-64 w-full object-cover transition duration-700 hover:scale-105"
            />

            {/* Price */}

            <div className="absolute left-5 top-5 rounded-full bg-orange-500 px-5 py-2 text-lg font-bold text-white shadow-lg">

              {tour.price}

            </div>

            {/* Duration */}

            <div className="absolute right-5 top-5 flex items-center gap-2 rounded-full bg-[#111827]/90 px-4 py-2 text-sm font-semibold text-white backdrop-blur">

              <Clock3 size={16} />

              {tour.duration}

            </div>

          </div>

          {/* Content */}

          <div className="p-7">

            <h3 className="text-3xl font-bold text-white">

              {tour.title}

            </h3>

            <p className="mt-4 text-lg leading-8 text-gray-400">

              {tour.description}

            </p>

            {/* AC / NON AC */}

            <div className="mt-8 flex overflow-hidden rounded-2xl bg-[#222733]">

              <div className="flex flex-1 items-center justify-center gap-2 bg-orange-500 py-4 font-bold text-white">

                <Snowflake size={18} />

                AC

                <span>{tour.price}</span>

              </div>

              <div className="flex flex-1 items-center justify-center gap-2 py-4 font-bold text-gray-300">

                <Wind size={18} />

                Non-AC

                <span>{tour.nonAc}</span>

              </div>

            </div>

                        {/* Highlights */}

            <div className="mt-8">

              <h4 className="text-xs font-bold uppercase tracking-[3px] text-gray-500">
                Highlights
              </h4>

              <div className="mt-4 flex flex-wrap gap-3">

                {tour.highlights.map((place, i) => (

                  <span
                    key={i}
                    className="rounded-full border border-orange-500/30 bg-orange-500/10 px-4 py-2 text-sm font-semibold text-orange-300"
                  >
                    {place}
                  </span>

                ))}

              </div>

            </div>

            {/* Inclusions */}

            <div className="mt-8">

              <h4 className="text-xs font-bold uppercase tracking-[3px] text-gray-500">
                Inclusions
              </h4>

              <div className="mt-5 grid grid-cols-2 gap-y-4">

                {tour.inclusions.map((item, i) => (

                  <div
                    key={i}
                    className="flex items-center gap-2 text-gray-300"
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

            {/* Book Button */}

            <a
              href="https://wa.me/919888444952"
              target="_blank"
              rel="noreferrer"
              className="mt-10 flex h-16 w-full items-center justify-center gap-3 rounded-2xl bg-orange-500 text-xl font-bold text-white transition-all duration-300 hover:bg-orange-600 hover:shadow-lg hover:shadow-orange-500/30"
            >

              <MessageCircle size={24} />

              Book This Tour

            </a>

          </div>

        </motion.div>

      ))}

    </div>
        {/* Bottom Button */}

    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="mt-20 flex justify-center"
    >

      <button
        className="rounded-full border-2 border-orange-500 px-10 py-4 text-lg font-bold text-orange-400 transition-all duration-300 hover:bg-orange-500 hover:text-white hover:shadow-lg hover:shadow-orange-500/30"
      >
        View All Packages
      </button>

    </motion.div>

  </div>

</section>

  );
}

export default Tours;