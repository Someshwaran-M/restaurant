import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

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
     className={`relative overflow-hidden py-20 transition-all duration-500 ${
  darkMode ? "bg-[#080C16]" : "bg-white"
}`}
    >
    <div
  className={`absolute left-0 top-40 h-80 w-80 rounded-full blur-[120px] ${
    darkMode ? "bg-orange-500/10" : "bg-orange-300/20"
  }`}
/>

<div
  className={`absolute right-0 bottom-20 h-80 w-80 rounded-full blur-[120px] ${
    darkMode ? "bg-orange-600/10" : "bg-yellow-300/20"
  }`}
/>

      <div className="relative z-10 mx-auto max-w-7xl px-6">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
         className="mx-auto mb-14 max-w-3xl text-center"
        >

          <span className="text-sm font-bold uppercase tracking-[6px] text-orange-400">
            TESTIMONIALS
          </span>

          <h2 className={`mt-4 text-4xl font-extrabold md:text-5xl ${
  darkMode ? "text-white" : "text-gray-900"
}`}>
            Riders{" "}
            <span className="bg-gradient-to-r from-orange-400 to-amber-300 bg-clip-text text-transparent">
              Love Us
            </span>
          </h2>

        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">

                  {testimonials.map((item, index) => (

            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              viewport={{ once: true }}
              className={`group relative rounded-2xl p-6 transition-all duration-500 hover:-translate-y-2 ${
  darkMode
    ? "border border-white/10 bg-[#141922] hover:border-orange-500/40 hover:shadow-[0_0_30px_rgba(249,115,22,.18)]"
    : "border border-gray-200 bg-white shadow-lg hover:border-orange-400"
}`}
            >

              <Quote
                size={36}
                className="absolute right-8 top-8 text-orange-500/20 group-hover:text-orange-500/40"
              />

              <div className="flex gap-2">

                {[...Array(5)].map((_, i) => (

                  <Star
                    key={i}
                    size={16}
                    className="fill-orange-400 text-orange-400"
                  />

                ))}

              </div>
              <p className={`mt-5 text-base leading-7 ${
  darkMode ? "text-gray-300" : "text-gray-600"
}`}>
                "{item.review}"
              </p>

              <div className={`my-6 h-px w-full ${
  darkMode ? "bg-white/10" : "bg-gray-200"
}`}></div>

              <h3 className={`text-xl font-bold ${
  darkMode ? "text-white" : "text-gray-900"
}`}>
                {item.name}
              </h3>

              <p className="mt-1 text-sm font-semibold text-orange-500">
                {item.route}
              </p>

            </motion.div>

          ))}

        </div>
        
              </div>

    </section>
  );
}

export default Testimonials;