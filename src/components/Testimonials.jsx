import React from "react";
import { motion } from "framer-motion";
import { FaStar, FaQuoteLeft } from "react-icons/fa";

const testimonials = [
  {
    id: 1,
    name: "Rahul Sharma",
    role: "Food Blogger",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    review:
      "Absolutely amazing food and outstanding service. Every dish was full of authentic flavors and beautifully presented.",
    rating: 5,
  },
  {
    id: 2,
    name: "Priya Nair",
    role: "Happy Customer",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    review:
      "One of the best restaurants I've visited. The ambience is elegant, and the staff made us feel very special.",
    rating: 5,
  },
  {
    id: 3,
    name: "Arun Kumar",
    role: "Business Executive",
    image: "https://randomuser.me/api/portraits/men/55.jpg",
    review:
      "Perfect place for family dinners and business meetings. Highly recommended for anyone who loves premium dining.",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section
      id="testimonials"
      className="relative overflow-hidden bg-black py-24"
    >
      {/* Background Glow */}

      <div className="absolute -top-40 -left-40 h-[420px] w-[420px] rounded-full bg-yellow-500/10 blur-[180px]" />

      <div className="absolute -bottom-40 -right-40 h-[420px] w-[420px] rounded-full bg-amber-500/10 blur-[180px]" />

      {/* Gold Grid */}

      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(to right,#FFD700 1px,transparent 1px),linear-gradient(to bottom,#FFD700 1px,transparent 1px)",
          backgroundSize: "70px 70px",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >

          <span className="uppercase tracking-[6px] text-yellow-400 font-bold">
            Testimonials
          </span>

          <h2 className="mt-4 text-5xl font-black text-white">
            What Our
            <span className="block bg-gradient-to-r from-yellow-300 via-yellow-400 to-amber-500 bg-clip-text text-transparent">
              Happy Customers Say
            </span>
          </h2>

          <p className="mt-6 text-gray-400 leading-8">
            We take pride in delivering unforgettable dining experiences.
            Here's what our valued guests say about Spice Garden Restaurant.
          </p>

        </motion.div>

        {/* Testimonial Cards */}

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

                 {testimonials.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{
                y: -10,
                scale: 1.03,
              }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.15,
              }}
              className="group relative overflow-hidden rounded-3xl border border-yellow-500/20 bg-[#111111] p-8 transition-all duration-500 hover:border-yellow-400 hover:shadow-[0_0_35px_rgba(255,215,0,.20)]"
            >
              {/* Gold Glow */}
              <div className="absolute -right-10 -top-10 h-36 w-36 rounded-full bg-yellow-500/10 blur-3xl opacity-0 transition-all duration-500 group-hover:opacity-100" />

              {/* Quote Icon */}
              <div className="relative z-10">

                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-yellow-400 to-amber-600 text-2xl text-black shadow-lg">
                  <FaQuoteLeft />
                </div>

                {/* Stars */}

                <div className="mt-6 flex gap-1">

                  {[...Array(item.rating)].map((_, i) => (
                    <FaStar
                      key={i}
                      className="text-yellow-400 text-lg"
                    />
                  ))}

                </div>

                {/* Review */}

                <p className="mt-6 text-gray-300 leading-8 italic">
                  "{item.review}"
                </p>

                {/* Customer */}

                <div className="mt-8 flex items-center gap-4">

                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-16 w-16 rounded-full border-2 border-yellow-400 object-cover"
                  />

                  <div>

                    <h3 className="text-xl font-bold text-yellow-400">
                      {item.name}
                    </h3>

                    <p className="text-gray-400">
                      {item.role}
                    </p>

                  </div>

                </div>

              </div>

            </motion.div>
          ))}

        </div>

        {/* Bottom CTA Starts Here */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-20"
        >
                  <div className="relative overflow-hidden rounded-[30px] border border-yellow-500/20 bg-gradient-to-r from-[#111111] via-black to-[#111111] px-8 py-14 shadow-[0_0_45px_rgba(255,215,0,.18)]">

            {/* Gold Glow */}
            <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-yellow-500/10 blur-[120px]" />
            <div className="absolute -right-24 -bottom-24 h-72 w-72 rounded-full bg-amber-500/10 blur-[120px]" />

            <div className="relative z-10 text-center">

              <h2 className="text-4xl md:text-5xl font-black text-white">
                Join Thousands Of
                <span className="block bg-gradient-to-r from-yellow-300 via-yellow-400 to-amber-500 bg-clip-text text-transparent">
                  Happy Food Lovers
                </span>
              </h2>

              <p className="mx-auto mt-6 max-w-2xl text-gray-400 leading-8">
                Every meal at Spice Garden Restaurant is prepared with
                passion, premium ingredients, and authentic flavors.
                Come and experience the taste everyone is talking about.
              </p>

              {/* Statistics */}

              <div className="mt-12 grid grid-cols-2 gap-6 md:grid-cols-4">

                {[
                  {
                    value: "10+",
                    label: "Years Experience",
                  },
                  {
                    value: "25K+",
                    label: "Happy Customers",
                  },
                  {
                    value: "100+",
                    label: "Menu Items",
                  },
                  {
                    value: "4.9★",
                    label: "Customer Rating",
                  },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    whileHover={{
                      y: -6,
                      scale: 1.05,
                    }}
                    className="rounded-2xl border border-yellow-500/20 bg-[#111111] p-6 transition-all duration-300 hover:border-yellow-400"
                  >
                    <h3 className="text-3xl font-black text-yellow-400">
                      {item.value}
                    </h3>

                    <p className="mt-2 text-sm text-gray-400">
                      {item.label}
                    </p>
                  </motion.div>
                ))}

              </div>

              {/* Button */}

              <motion.button
                whileHover={{
                  scale: 1.05,
                }}
                whileTap={{
                  scale: 0.95,
                }}
                className="mt-12 rounded-full bg-gradient-to-r from-yellow-400 via-amber-500 to-yellow-600 px-10 py-4 text-lg font-bold text-black shadow-[0_0_30px_rgba(255,215,0,.35)] transition duration-300"
              >
                Reserve Your Table
              </motion.button>

            </div>

          </div>

        </motion.div>

      </div>
    </section>
  );
};

export default Testimonials;