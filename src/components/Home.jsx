import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

import {
  FaArrowRight,
  FaUtensils,
  FaLeaf,
  FaStar,
  FaUsers,
  FaAward,
  FaClock,
  FaConciergeBell,
  FaCrown,
} from "react-icons/fa";

import Mobile from "./Mobile";
import About from "./About";
import ServiceAreas from "./ServiceAreas";
import Testimonials from "./Testimonials";
import Faq from "./Faq";

function Home() {
  const navigate = useNavigate();

  const features = [
    {
      icon: <FaUtensils />,
      title: "Expert Chefs",
      text: "Skilled & experienced culinary experts",
    },
    {
      icon: <FaLeaf />,
      title: "Fresh Ingredients",
      text: "Only the freshest & highest quality",
    },
    {
      icon: <FaConciergeBell />,
      title: "Delicious Food",
      text: "Perfect blend of taste & flavor",
    },
    {
      icon: <FaStar />,
      title: "Top Rated",
      text: "Loved by thousands of customers",
    },
  ];

  const stats = [
    {
      icon: <FaUsers />,
      value: "20K+",
      label: "Happy Customers",
    },
    {
      icon: <FaConciergeBell />,
      value: "50+",
      label: "Delicious Dishes",
    },
    {
      icon: <FaAward />,
      value: "15+",
      label: "Awards Won",
    },
    {
      icon: <FaClock />,
      value: "10AM - 11PM",
      label: "Open Everyday",
    },
  ];

  return (
    <>
      <section
        className="relative overflow-hidden bg-black text-white"
        style={{
          backgroundImage: "url('/images/home.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/75"></div>

       

<div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col-reverse items-center justify-center gap-10 px-5 py-10 lg:flex-row lg:justify-between lg:gap-16">

  <motion.div
    initial={{ opacity: 0, x: -80 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.8 }}
    className="relative flex w-full justify-center lg:w-[48%]"
  >
    {/* Gold Circle */}

    <div className="absolute -bottom-12 -left-20 hidden h-[480px] w-[480px] rounded-full border border-yellow-500/20 lg:block"></div>

    {/* Food Image */}

    <img
      src="/images/home-food.png"
      alt=""
      className="absolute -left-24 bottom-0 hidden w-[360px] opacity-90 lg:block"
    />

    {/* Smoke */}

    <div className="absolute left-40 top-10 hidden h-72 w-24 bg-white/10 blur-[90px] lg:block"></div>

    {/* Mobile */}

    <div className="relative z-20 scale-105 lg:scale-110">
      <Mobile />
    </div>
  </motion.div>

  {/* RIGHT SIDE */}

  <motion.div
    initial={{ opacity: 0, x: 80 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.8 }}
    className="w-full lg:w-[46%]"
  >

    {/* Welcome */}

    <div className="mb-8 flex items-center gap-5">

      {/* Badge */}

      <div className="flex h-24 w-24 flex-col items-center justify-center rounded-full border-2 border-yellow-400 bg-black/70 shadow-[0_0_25px_rgba(234,179,8,.2)]">

        <FaCrown className="mb-1 text-lg text-yellow-400" />

        <p className="text-[9px] font-bold uppercase tracking-[2px] leading-3 text-yellow-300 text-center">
          PREMIUM
          <br />
          QUALITY
        </p>

      </div>

      {/* Text */}

      <div>

        <p
          className="text-3xl text-yellow-400"
          style={{ fontFamily: "cursive" }}
        >
          Welcome To SpiceGarden
        </p>

        <div className="mt-2 h-[2px] w-28 bg-gradient-to-r from-yellow-500 via-yellow-300 to-transparent"></div>

      </div>

    </div>

    {/* Heading */}

    <h1 className="text-5xl font-extrabold leading-[1.05] lg:text-6xl xl:text-7xl">
      Taste The
      <br />

      <span className="text-yellow-400">
        Best Food
      </span>
    </h1>

    {/* Description */}

    <p className="mt-8 max-w-lg text-lg leading-9 text-gray-300">
      Experience authentic flavors crafted by expert chefs using fresh
      ingredients. Every meal is prepared with passion to give you a
      unique dining experience.
    </p>

    {/* Buttons */}

    <div className="mt-10 flex flex-wrap gap-4">

     
    <button
      onClick={() => navigate("/reserve")}
      className="flex items-center gap-3 rounded-full bg-yellow-400 px-7 py-3.5 font-semibold text-black transition-all duration-300 hover:scale-105 hover:bg-yellow-300"
    >
      Reserve Table
      <FaArrowRight />
    </button>


      <button 
      onClick={() => navigate("/menu")}
      className="rounded-full border border-gray-500 px-7 py-3.5 font-semibold text-white transition-all duration-300 hover:border-yellow-400 hover:bg-yellow-400 hover:text-black">
        View Menu
      </button>

    </div>
                        {/* Features */}

            {/* Premium Features */}

<div className="mt-16">

  <div className="grid grid-cols-2 md:grid-cols-4">

    {features.map((item, index) => (
      <motion.div
        key={index}
        whileHover={{ y: -6 }}
        transition={{ duration: 0.3 }}
        className={`relative flex flex-col items-center text-center px-6 py-5
          ${
            index !== features.length - 1
              ? "md:border-r md:border-yellow-500/30"
              : ""
          }
        `}
      >

        {/* Gold Icon */}

        <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-full border border-yellow-500/50 bg-yellow-500/10 text-2xl text-yellow-400 shadow-[0_0_20px_rgba(234,179,8,.25)]">
          {item.icon}
        </div>

        {/* Title */}

        <h3 className="text-lg font-bold text-white">
          {item.title}
        </h3>

        {/* Decorative Line */}

        <div className="my-3 h-[2px] w-12 bg-gradient-to-r from-transparent via-yellow-400 to-transparent"></div>

        {/* Description */}

        <p className="max-w-[180px] text-sm leading-6 text-gray-400">
          {item.text}
        </p>

      </motion.div>
      
    ))}
    </div>
            </div>

          </motion.div>

        </div>

        {/* Bottom Statistics */}

        <div className="relative z-20 px-4 pb-4">
  <div className="mx-auto max-w-6xl rounded-2xl border border-yellow-500/20 bg-black/70 backdrop-blur-xl">

    <div className="grid grid-cols-2 md:grid-cols-4">

      {stats.map((item, index) => (
        <motion.div
          key={index}
          whileHover={{ scale: 1.03 }}
          className={`flex items-center gap-3 p-4 ${
            index !== stats.length - 1
              ? "border-b border-yellow-500/10 md:border-b-0 md:border-r"
              : ""
          }`}
        >
          <div className="flex h-12 w-12 items-center justify-center rounded-full border border-yellow-500 text-lg text-yellow-400">
            {item.icon}
          </div>

          <div>
            <h2 className="text-xl font-bold text-white">
              {item.value}
            </h2>

            <p className="mt-1 text-xs text-gray-400">
              {item.label}
            </p>
          </div>
        </motion.div>
      ))}

    </div>

  </div>
</div>

         
      </section>

      {/* Other Sections */}

      <About />

      <ServiceAreas />

      <Testimonials />

      <Faq />
    </>
  );
}

export default Home;