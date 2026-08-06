import React from "react";
import { FaUtensils, FaAward, FaUsers, FaLeaf } from "react-icons/fa";

const features = [
  {
    icon: <FaUtensils />,
    title: "Delicious Cuisine",
    description:
      "Enjoy authentic recipes prepared with premium ingredients and rich traditional flavors.",
  },
  {
    icon: <FaLeaf />,
    title: "Fresh Ingredients",
    description:
      "Every dish is crafted using fresh vegetables, quality spices, and carefully selected ingredients.",
  },
  {
    icon: <FaAward />,
    title: "Expert Chefs",
    description:
      "Our experienced chefs create unforgettable dining experiences with passion and perfection.",
  },
  {
    icon: <FaUsers />,
    title: "Perfect Ambience",
    description:
      "A luxurious and welcoming atmosphere for families, couples, friends, and celebrations.",
  },
];

const About = () => {
  return (
    <section
      id="about"
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
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left Image */}
          <div className="relative group">

            <img
              src="https://images.unsplash.com/photo-1552566626-52f8b828add9?w=900"
              alt="Restaurant"
              className="rounded-3xl shadow-[0_20px_50px_rgba(255,215,0,.15)] w-full h-[560px] object-cover transition duration-500 group-hover:scale-105"
            />

            <div className="absolute inset-0 rounded-3xl bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>

            {/* Experience Card */}
            <div className="absolute bottom-6 left-6 rounded-2xl border border-yellow-500/30 bg-black/80 backdrop-blur-lg px-6 py-5 shadow-xl">

              <h3 className="text-5xl font-black text-yellow-400">
                10+
              </h3>

              <p className="mt-1 text-white">
                Years of Excellence
              </p>

            </div>

          </div>

          {/* Right Content */}
          <div>

            <span className="uppercase tracking-[5px] text-yellow-400 font-bold">
              About Us
            </span>

            <h2 className="mt-4 text-5xl font-black text-white leading-tight">
              Welcome To
              <span className="block bg-gradient-to-r from-yellow-300 via-yellow-400 to-amber-500 bg-clip-text text-transparent">
                Spice Garden Restaurant
              </span>
            </h2>

            <p className="mt-6 text-gray-300 leading-8">
              Spice Garden Restaurant brings together authentic recipes,
              premium ingredients, and exceptional hospitality to create
              an unforgettable dining experience. Every dish is carefully
              prepared by our expert chefs using traditional cooking
              techniques and the finest spices.
            </p>

            <p className="mt-5 text-gray-400 leading-8">
              Whether you're planning a romantic dinner, a family gathering,
              a birthday celebration, or simply craving delicious food,
              we promise a warm atmosphere, outstanding service, and
              unforgettable flavors.
            </p>

            {/* Features */}

            <div className="grid sm:grid-cols-2 gap-6 mt-10">

              {features.map((feature, index) => (
                <div
                  key={index}
                  className="group rounded-3xl border border-yellow-500/20 bg-[#111111] p-6 transition-all duration-500 hover:border-yellow-400 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(255,215,0,.18)]"
                >

                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-yellow-400 to-amber-600 text-black text-3xl shadow-lg transition duration-500 group-hover:rotate-6">

                    {feature.icon}

                  </div>

                  <h3 className="mt-5 text-2xl font-bold text-yellow-400">
                    {feature.title}
                  </h3>

                  <p className="mt-3 text-gray-400 leading-7">
                    {feature.description}
                  </p>

                </div>
              ))}

            </div>

            {/* Button */}

            <button className="mt-10 rounded-full bg-gradient-to-r from-yellow-400 via-amber-500 to-yellow-600 px-10 py-4 text-lg font-bold text-black transition duration-300 hover:scale-105 hover:shadow-[0_0_35px_rgba(255,215,0,.35)]">
              Discover More
            </button>

          </div>

        </div>
      </div>
    </section>
  );
};

export default About;