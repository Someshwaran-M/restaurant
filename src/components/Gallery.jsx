import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const images = [
  {
    id: 1,
    category: "Food",
    image:
      "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=800",
    title: "Cheese Pizza",
  },
  {
    id: 2,
    category: "Food",
    image:
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800",
    title: "Chicken Burger",
  },
  {
    id: 3,
    category: "Food",
    image:
      "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=800",
    title: "Creamy Pasta",
  },
  {
    id: 4,
    category: "Interior",
    image:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800",
    title: "Luxury Interior",
  },
  {
    id: 5,
    category: "Chef",
    image:
      "https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=800",
    title: "Master Chef",
  },
  {
    id: 6,
    category: "Events",
    image:
      "https://images.unsplash.com/photo-1552566626-52f8b828add9?w=800",
    title: "Family Dinner",
  },
  {
    id: 7,
    category: "Food",
    image:
      "https://images.unsplash.com/photo-1544025162-d76694265947?w=800",
    title: "Grilled Steak",
  },
  {
    id: 8,
    category: "Food",
    image:
      "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800",
    title: "Special Pizza",
  },
];

const categories = [
  "All",
  "Food",
  "Interior",
  "Chef",
  "Events",
];

const Gallery = () => {
  const [active, setActive] = useState("All");

  const filteredImages =
    active === "All"
      ? images
      : images.filter((item) => item.category === active);

      const navigate = useNavigate();

  return (
    

    <div className="min-h-screen bg-black text-white">

      {/* Gold Glow */}

      <div className="fixed -top-40 -left-40 h-[450px] w-[450px] rounded-full bg-yellow-500/10 blur-[180px]" />

      <div className="fixed -bottom-40 -right-40 h-[450px] w-[450px] rounded-full bg-amber-500/10 blur-[180px]" />

      {/* Hero */}

      <section className="relative h-[380px] overflow-hidden">

        <img
          src="https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=1600"
          alt="Restaurant Gallery"
          className="h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-black/75"></div>

        <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">

          <span className="uppercase tracking-[6px] font-bold text-yellow-400">
            Premium Gallery
          </span>

          <h1 className="mt-4 text-5xl md:text-6xl font-black text-white">

            Explore Our

            <span className="block bg-gradient-to-r from-yellow-300 via-yellow-400 to-amber-500 bg-clip-text text-transparent">

              Restaurant Moments

            </span>

          </h1>

          <p className="mt-6 max-w-2xl text-gray-300 leading-8">

            Experience delicious food, elegant interiors,
            unforgettable celebrations, and world-class hospitality
            at Spice Garden Restaurant.

          </p>

        </div>

      </section>

      {/* Category Buttons */}

      <section className="mx-auto max-w-7xl px-6 py-12">

        <div className="flex flex-wrap justify-center gap-4">
          {categories.map((category) => (
  <button
    key={category}
    onClick={() => setActive(category)}
    className={`rounded-full px-7 py-3 font-semibold transition-all duration-300 ${
      active === category
        ? "bg-gradient-to-r from-yellow-400 via-amber-500 to-yellow-600 text-black shadow-[0_0_25px_rgba(255,215,0,.35)]"
        : "border border-yellow-500/20 bg-[#111111] text-yellow-400 hover:bg-yellow-500 hover:text-black"
    }`}
  >
    {category}
  </button>
))}
        </div>
      </section>

      {/* Gallery Grid */}

      <section className="mx-auto max-w-7xl px-6 pb-24">

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

          {filteredImages.map((item) => (
            <div
              key={item.id}
              className="group relative overflow-hidden rounded-3xl border border-yellow-500/20 bg-[#111111] transition-all duration-500 hover:-translate-y-3 hover:border-yellow-400 hover:shadow-[0_0_35px_rgba(255,215,0,.18)]"
            >
              {/* Image */}

              <div className="overflow-hidden">

                <img
                  src={item.image}
                  alt={item.title}
                  className="h-72 w-full object-cover transition duration-700 group-hover:scale-110"
                />

              </div>

              {/* Overlay */}

              <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/75 opacity-0 transition-all duration-500 group-hover:opacity-100">

                <div className="rounded-full border border-yellow-500/20 bg-yellow-500/10 px-4 py-1 text-sm font-semibold text-yellow-400">
                  {item.category}
                </div>

                <h3 className="mt-5 text-center text-2xl font-bold text-white">
                  {item.title}
                </h3>

                <div className="mt-5 h-1 w-16 rounded-full bg-gradient-to-r from-yellow-400 to-amber-600"></div>

              </div>

              {/* Bottom Title */}

              <div className="border-t border-yellow-500/20 bg-[#111111] p-5">

                <h3 className="text-xl font-bold text-yellow-400">
                  {item.title}
                </h3>

                <p className="mt-2 text-gray-400">
                  {item.category}
                </p>

              </div>

            </div>
          ))}

        </div>

      </section>

      {/* Premium CTA Starts Here */}
      <section className="relative overflow-hidden border-t border-yellow-500/20 bg-gradient-to-r from-[#050505] via-[#111111] to-[#050505] py-24">

  {/* Gold Glow */}
  <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-yellow-500/10 blur-[140px]" />
  <div className="absolute -right-24 -bottom-24 h-72 w-72 rounded-full bg-amber-500/10 blur-[140px]" />

  <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">

    <span className="uppercase tracking-[6px] font-bold text-yellow-400">
      Luxury Dining Experience
    </span>

    <h2 className="mt-4 text-4xl md:text-5xl font-black text-white">
      Create
      <span className="block bg-gradient-to-r from-yellow-300 via-yellow-400 to-amber-500 bg-clip-text text-transparent">
        Unforgettable Memories
      </span>
    </h2>

    <p className="mx-auto mt-6 max-w-3xl text-gray-300 leading-8">
      From our signature dishes and elegant interiors to memorable celebrations,
      every moment at <span className="text-yellow-400 font-semibold">Spice Garden Restaurant</span>
      is crafted to give you an unforgettable dining experience.
    </p>

    {/* Highlights */}

    <div className="mt-12 grid grid-cols-2 gap-6 md:grid-cols-4">

      {[
        {
          value: "25K+",
          label: "Happy Guests",
        },
        {
          value: "100+",
          label: "Delicious Dishes",
        },
        {
          value: "10+",
          label: "Years Experience",
        },
        {
          value: "4.9★",
          label: "Customer Rating",
        },
      ].map((item, index) => (
        <div
          key={index}
          className="rounded-2xl border border-yellow-500/20 bg-[#111111] p-6 transition-all duration-300 hover:border-yellow-400 hover:-translate-y-2"
        >
          <h3 className="text-3xl font-black text-yellow-400">
            {item.value}
          </h3>

          <p className="mt-2 text-gray-400">
            {item.label}
          </p>
        </div>
      ))}

    </div>

    {/* Buttons */}

    <div className="mt-12 flex flex-col items-center justify-center gap-5 md:flex-row">

      
{/* Reserve Your Table */}
<button
  onClick={() => navigate("/reserve")}
  className="rounded-full bg-gradient-to-r from-yellow-400 via-amber-500 to-yellow-600 px-10 py-4 font-bold text-black transition-all duration-300 hover:scale-105 hover:shadow-[0_0_35px_rgba(255,215,0,.35)]"
>
  Reserve Your Table
</button>

{/* View Our Menu */}
<button
  onClick={() => navigate("/menu")}
  className="rounded-full border border-yellow-500 px-10 py-4 font-bold text-yellow-400 transition-all duration-300 hover:bg-yellow-500 hover:text-black"
>
  View Our Menu
</button>



    </div>

  </div>

</section>

</div>
);
};

export default Gallery;