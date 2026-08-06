import React from "react";
import {
  FaCalendarAlt,
  FaUser,
  FaArrowRight,
} from "react-icons/fa";

const blogs = [
  {
    id: 1,
    title: "5 Healthy Foods You Should Try",
    image:
      "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=900",
    date: "August 1, 2026",
    author: "Chef David",
    description:
      "Eating healthy doesn't mean compromising on taste. Discover nutritious dishes packed with fresh ingredients and authentic flavors.",
  },
  {
    id: 2,
    title: "Top 10 Signature Dishes at Spice Garden",
    image:
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=900",
    date: "July 28, 2026",
    author: "Chef Emma",
    description:
      "Explore the signature dishes our guests love the most and discover your next favorite meal.",
  },
];

const categories = [
  "Healthy Food",
  "Pizza",
  "Burger",
  "Desserts",
  "Chef Tips",
  "Restaurant News",
];

const Blog = () => {
  return (
    <div className="min-h-screen bg-black text-white">

      {/* Gold Glow */}

      <div className="fixed -top-40 -left-40 h-[450px] w-[450px] rounded-full bg-yellow-500/10 blur-[180px]" />

      <div className="fixed -bottom-40 -right-40 h-[450px] w-[450px] rounded-full bg-amber-500/10 blur-[180px]" />

      {/* Hero */}

      <section className="relative h-[380px] overflow-hidden">

        <img
          src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=1600"
          alt="Restaurant Blog"
          className="h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-black/75"></div>

        <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">

          <span className="uppercase tracking-[6px] font-bold text-yellow-400">
            Restaurant Blog
          </span>

          <h1 className="mt-4 text-5xl md:text-6xl font-black text-white">

            Food Stories

            <span className="block bg-gradient-to-r from-yellow-300 via-yellow-400 to-amber-500 bg-clip-text text-transparent">

              Recipes & Updates

            </span>

          </h1>

          <p className="mt-6 max-w-2xl text-gray-300 leading-8">

            Discover delicious recipes, chef's secrets,
            restaurant news and inspiring food stories from
            Spice Garden Restaurant.

          </p>

        </div>

      </section>

      {/* Blog Cards */}

      <section className="mx-auto max-w-7xl px-6 py-20">

        <div className="mb-16 text-center">

          <span className="uppercase tracking-[6px] font-bold text-yellow-400">
            Latest Articles
          </span>

          <h2 className="mt-4 text-5xl font-black text-white">

            Our Latest

            <span className="block bg-gradient-to-r from-yellow-300 via-yellow-400 to-amber-500 bg-clip-text text-transparent">

              Blog Posts

            </span>

          </h2>

        </div>

        <div className="grid gap-10 lg:grid-cols-2">
        {blogs.map((blog) => (
  <div
    key={blog.id}
    className="group overflow-hidden rounded-3xl border border-yellow-500/20 bg-[#111111] transition-all duration-500 hover:-translate-y-3 hover:border-yellow-400 hover:shadow-[0_0_35px_rgba(255,215,0,.18)]"
  >
    {/* Image */}

    <div className="relative overflow-hidden">

      <img
        src={blog.image}
        alt={blog.title}
        className="h-72 w-full object-cover transition duration-700 group-hover:scale-110"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>

    </div>

    {/* Content */}

    <div className="p-8">

      {/* Date & Author */}

      <div className="mb-5 flex flex-wrap items-center gap-6 text-sm text-gray-400">

        <div className="flex items-center gap-2">

          <FaCalendarAlt className="text-yellow-400" />

          {blog.date}

        </div>

        <div className="flex items-center gap-2">

          <FaUser className="text-yellow-400" />

          {blog.author}

        </div>

      </div>

      {/* Title */}

      <h3 className="text-2xl font-bold text-yellow-400">

        {blog.title}

      </h3>

      {/* Description */}

      <p className="mt-5 leading-8 text-gray-300">

        {blog.description}

      </p>

      {/* Button */}

      <button className="mt-6 flex items-center gap-3 font-semibold text-yellow-400 transition duration-300 hover:text-yellow-300">

        Read More

        <FaArrowRight />

      </button>

    </div>

  </div>
))}

</div>

</section>

{/* Categories */}

<section className="border-t border-yellow-500/20 bg-[#090909] py-20">

  <div className="mx-auto max-w-6xl px-6">

    <div className="mb-12 text-center">

      <span className="uppercase tracking-[6px] font-bold text-yellow-400">
        Categories
      </span>

      <h2 className="mt-4 text-4xl font-black text-white">

        Explore By

        <span className="block bg-gradient-to-r from-yellow-300 via-yellow-400 to-amber-500 bg-clip-text text-transparent">

          Popular Topics

        </span>

      </h2>

    </div>

    <div className="flex flex-wrap justify-center gap-5">

      {categories.map((item) => (
        <button
          key={item}
          className="rounded-full border border-yellow-500/20 bg-[#111111] px-7 py-3 font-semibold text-yellow-400 transition-all duration-300 hover:bg-gradient-to-r hover:from-yellow-400 hover:via-amber-500 hover:to-yellow-600 hover:text-black"
        >
          {item}
        </button>
      ))}

    </div>

  </div>

</section>

{/* Newsletter Starts Here */}
<section className="relative overflow-hidden border-t border-yellow-500/20 bg-gradient-to-r from-[#050505] via-[#111111] to-[#050505] py-24">

  {/* Gold Glow */}
  <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-yellow-500/10 blur-[140px]" />
  <div className="absolute -right-24 -bottom-24 h-72 w-72 rounded-full bg-amber-500/10 blur-[140px]" />

  <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">

    <span className="uppercase tracking-[6px] font-bold text-yellow-400">
      Stay Updated
    </span>

    <h2 className="mt-4 text-4xl md:text-5xl font-black text-white">

      Subscribe To Our

      <span className="block bg-gradient-to-r from-yellow-300 via-yellow-400 to-amber-500 bg-clip-text text-transparent">

        Newsletter

      </span>

    </h2>

    <p className="mx-auto mt-6 max-w-2xl text-gray-300 leading-8">

      Receive our latest recipes, chef's special dishes,
      exclusive offers, food stories, and restaurant news
      directly in your inbox.

    </p>

    {/* Email Form */}

    <div className="mx-auto mt-10 flex max-w-2xl flex-col gap-4 sm:flex-row">

      <input
        type="email"
        placeholder="Enter your email address"
        className="flex-1 rounded-full border border-yellow-500/20 bg-[#111111] px-6 py-4 text-white placeholder:text-gray-500 focus:border-yellow-400 focus:outline-none"
      />

      <button className="rounded-full bg-gradient-to-r from-yellow-400 via-amber-500 to-yellow-600 px-8 py-4 font-bold text-black transition-all duration-300 hover:scale-105 hover:shadow-[0_0_35px_rgba(255,215,0,.35)]">

        Subscribe

      </button>

    </div>

    {/* Stats */}

    <div className="mt-16 grid grid-cols-2 gap-6 md:grid-cols-4">

      {[
        {
          value: "10+",
          label: "Years Experience",
        },
        {
          value: "25K+",
          label: "Happy Guests",
        },
        {
          value: "100+",
          label: "Signature Dishes",
        },
        {
          value: "4.9★",
          label: "Customer Rating",
        },
      ].map((item, index) => (
        <div
          key={index}
          className="rounded-2xl border border-yellow-500/20 bg-[#111111] p-6 transition-all duration-300 hover:-translate-y-2 hover:border-yellow-400"
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

  </div>

</section>

</div>
);
};

export default Blog;