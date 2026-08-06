import React from "react";
import { motion } from "framer-motion";
import {
  FaMapMarkerAlt,
  FaMotorcycle,
  FaClock,
  FaParking,
  FaConciergeBell,
  FaUtensils,
} from "react-icons/fa";

const serviceAreas = [
  {
    icon: <FaMapMarkerAlt />,
    title: "Dine-In",
    description:
      "Enjoy a premium dining experience in our elegant and comfortable restaurant.",
  },
  {
    icon: <FaMotorcycle />,
    title: "Home Delivery",
    description:
      "Fresh and delicious meals delivered quickly to your doorstep within our service area.",
  },
  {
    icon: <FaConciergeBell />,
    title: "Takeaway",
    description:
      "Order your favorite dishes and pick them up freshly prepared at your convenience.",
  },
  {
    icon: <FaUtensils />,
    title: "Private Events",
    description:
      "We host birthday parties, family gatherings, and corporate dining events.",
  },
  {
    icon: <FaParking />,
    title: "Free Parking",
    description:
      "Spacious and secure parking is available for all our valued customers.",
  },
  {
    icon: <FaClock />,
    title: "Open Every Day",
    description:
      "Serving delicious food daily from 10:00 AM to 11:00 PM with warm hospitality.",
  },
];

const ServiceAreas = () => {
  return (
    <section
      id="services"
      className="relative overflow-hidden bg-black py-24"
    >
      {/* Gold Glow */}
      <div className="absolute -top-40 -left-32 h-96 w-96 rounded-full bg-yellow-500/10 blur-[180px]" />
      <div className="absolute -bottom-40 -right-32 h-96 w-96 rounded-full bg-amber-500/10 blur-[180px]" />

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
          <span className="uppercase tracking-[5px] text-yellow-400 font-bold">
            Our Services
          </span>

          <h2 className="mt-4 text-5xl font-black text-white">
            Experience
            <span className="block bg-gradient-to-r from-yellow-300 via-yellow-400 to-amber-500 bg-clip-text text-transparent">
              Premium Restaurant Services
            </span>
          </h2>

          <p className="mt-6 text-gray-400 leading-8">
            At Spice Garden Restaurant, we offer exceptional dining,
            takeaway, delivery, and event services with delicious food,
            premium quality, and warm hospitality.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">

          {serviceAreas.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{
                y: -10,
                scale: 1.03,
              }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              className="group relative overflow-hidden rounded-3xl border border-yellow-500/20 bg-[#111111] p-8 transition-all duration-500 hover:border-yellow-400 hover:shadow-[0_0_35px_rgba(255,215,0,.18)]"
            >
              {/* Glow */}
              <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-yellow-500/10 blur-3xl opacity-0 transition-all duration-500 group-hover:opacity-100" />

              <div className="relative z-10">

                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-yellow-400 to-amber-600 text-black text-3xl shadow-xl">
                  {service.icon}
                </div>

                <h3 className="mt-6 text-2xl font-bold text-yellow-400">
                  {service.title}
                </h3>

                <p className="mt-4 leading-7 text-gray-400">
                  {service.description}
                </p>

              </div>
            </motion.div>
          ))}

        </div>

        {/* Bottom Banner */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-20"
        >
          <div className="rounded-[30px] border border-yellow-500/20 bg-gradient-to-r from-[#111111] via-black to-[#111111] p-12 text-center shadow-[0_0_40px_rgba(255,215,0,.15)]">

            <h2 className="text-4xl font-black text-white">
              Delicious Food,
              <span className="block bg-gradient-to-r from-yellow-300 via-yellow-400 to-amber-500 bg-clip-text text-transparent">
                Exceptional Service
              </span>
            </h2>

            <p className="mt-5 max-w-2xl mx-auto text-gray-400 leading-8">
              Whether you're dining with family, celebrating a special
              occasion, or enjoying your favorite meal at home, Spice Garden
              Restaurant is committed to delivering unforgettable flavors and
              outstanding hospitality every day.
            </p>

            <button className="mt-8 rounded-full bg-gradient-to-r from-yellow-400 via-amber-500 to-yellow-600 px-10 py-4 font-bold text-black transition duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(255,215,0,.35)]">
              Book Your Table
            </button>

          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default ServiceAreas;