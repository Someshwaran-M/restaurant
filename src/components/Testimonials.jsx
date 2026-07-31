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

function Testimonials() {
  return (
    <section
      id="testimonials"
      className="relative overflow-hidden bg-[#080C16] py-28"
    >
      {/* Background Glow */}
      <div className="absolute left-0 top-40 h-96 w-96 rounded-full bg-orange-500/10 blur-[140px]" />

      <div className="absolute right-0 bottom-20 h-96 w-96 rounded-full bg-orange-600/10 blur-[150px]" />

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
            TESTIMONIALS
          </span>

          <h2 className="mt-5 text-5xl font-extrabold text-white md:text-6xl">
            Riders{" "}
            <span className="bg-gradient-to-r from-orange-400 to-amber-300 bg-clip-text text-transparent">
              Love Us
            </span>
          </h2>

        </motion.div>

        {/* Cards */}

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

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
              className="group relative rounded-[30px] border border-white/10 bg-[#141922] p-8 transition-all duration-500 hover:-translate-y-2 hover:border-orange-500/40 hover:shadow-[0_0_40px_rgba(249,115,22,0.18)]"
            >

              {/* Quote Icon */}

              <Quote
                size={48}
                className="absolute right-8 top-8 text-orange-500/20 group-hover:text-orange-500/40"
              />

              {/* Stars */}

              <div className="flex gap-2">

                {[...Array(5)].map((_, i) => (

                  <Star
                    key={i}
                    size={20}
                    className="fill-orange-400 text-orange-400"
                  />

                ))}

              </div>

              {/* Review */}

              <p className="mt-8 text-xl leading-10 text-gray-300">
                "{item.review}"
              </p>

              <div className="my-8 h-px w-full bg-white/10"></div>

              {/* Customer */}

              <h3 className="text-3xl font-bold text-white">
                {item.name}
              </h3>

              <p className="mt-2 text-lg font-medium text-orange-400">
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