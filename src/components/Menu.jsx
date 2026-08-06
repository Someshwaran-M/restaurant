import React, { useState } from "react";
import { FaStar, FaShoppingCart, FaSearch } from "react-icons/fa";

const menuItems = [
  {
    id: 1,
    name: "Margherita Pizza",
    category: "Pizza",
    price: "$12",
    rating: 4.8,
    image:
      "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=700",
  },
  {
    id: 2,
    name: "Pepperoni Pizza",
    category: "Pizza",
    price: "$15",
    rating: 4.9,
    image:
      "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=700",
  },
  {
    id: 3,
    name: "Chicken Burger",
    category: "Burger",
    price: "$10",
    rating: 4.7,
    image:
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=700",
  },
  {
    id: 4,
    name: "Beef Burger",
    category: "Burger",
    price: "$13",
    rating: 4.8,
    image:
      "https://images.unsplash.com/photo-1550547660-d9450f859349?w=700",
  },
  {
    id: 5,
    name: "Creamy Pasta",
    category: "Pasta",
    price: "$14",
    rating: 4.9,
    image:
      "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=700",
  },
  {
    id: 6,
    name: "Spaghetti",
    category: "Pasta",
    price: "$15",
    rating: 4.8,
    image:
      "https://images.unsplash.com/photo-1521389508051-d7ffb5dc8d98?w=700",
  },
  {
    id: 7,
    name: "Chicken Biryani",
    category: "Indian",
    price: "$16",
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1701579231373-43f90d5f74af?w=700",
  },
  {
    id: 8,
    name: "Paneer Butter Masala",
    category: "Indian",
    price: "$13",
    rating: 4.8,
    image:
      "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=700",
  },
  {
    id: 9,
    name: "Chocolate Cake",
    category: "Dessert",
    price: "$8",
    rating: 4.9,
    image:
      "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=700",
  },
  {
    id: 10,
    name: "Ice Cream",
    category: "Dessert",
    price: "$6",
    rating: 4.7,
    image:
      "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=700",
  },
  {
    id: 11,
    name: "Mojito",
    category: "Drinks",
    price: "$5",
    rating: 4.8,
    image:
      "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=700",
  },
  {
    id: 12,
    name: "Fresh Juice",
    category: "Drinks",
    price: "$4",
    rating: 4.9,
    image:
      "https://images.unsplash.com/photo-1622597467836-f3e6706a4b59?w=700",
  },
];

const categories = [
  "All",
  "Pizza",
  "Burger",
  "Pasta",
  "Indian",
  "Dessert",
  "Drinks",
];

const Menu = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [search, setSearch] = useState("");

  const filteredItems = menuItems.filter((item) => {
    const matchCategory =
      selectedCategory === "All" || item.category === selectedCategory;

    const matchSearch = item.name
      .toLowerCase()
      .includes(search.toLowerCase());

    return matchCategory && matchSearch;
  });

  const [selectedFood, setSelectedFood] = useState(menuItems[0]);
const [showSuccess, setShowSuccess] = useState(false);

const handleOrder = (item) => {
  setSelectedFood(item);
  setShowSuccess(true);

  setTimeout(() => {
    setShowSuccess(false);
  }, 3000);
};

  return (
    <div className="min-h-screen bg-black text-white">

      {/* Background Glow */}

      <div className="fixed -top-40 -left-40 h-[450px] w-[450px] rounded-full bg-yellow-500/10 blur-[180px]" />

      <div className="fixed -bottom-40 -right-40 h-[450px] w-[450px] rounded-full bg-amber-500/10 blur-[180px]" />

      {/* Hero */}

      <section className="relative h-[380px] overflow-hidden">

        <img
          src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1600"
          alt="Restaurant Menu"
          className="h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-black/75"></div>

        <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">

          <span className="uppercase tracking-[6px] text-yellow-400 font-bold">
            Premium Menu
          </span>

          <h1 className="mt-4 text-5xl md:text-6xl font-black text-white">
            Discover Our
            <span className="block bg-gradient-to-r from-yellow-300 via-yellow-400 to-amber-500 bg-clip-text text-transparent">
              Signature Dishes
            </span>
          </h1>

          <p className="mt-6 max-w-2xl text-gray-300 leading-8">
            Experience authentic flavors, premium ingredients,
            and unforgettable dining at Spice Garden Restaurant.
          </p>

        </div>

      </section>

      {/* Search */}

      <section className="mx-auto mt-12 max-w-7xl px-6">

        <div className="relative mx-auto max-w-lg">

          <FaSearch className="absolute left-5 top-1/2 -translate-y-1/2 text-yellow-400" />

          <input
            type="text"
            placeholder="Search your favourite food..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full rounded-full border border-yellow-500/20 bg-[#111111] py-4 pl-14 pr-6 text-white placeholder:text-gray-500 focus:border-yellow-400 focus:outline-none"
          />

        </div>

      </section>

      {/* Category Buttons */}

      <section className="mx-auto max-w-7xl px-6 py-10">

        <div className="flex flex-wrap justify-center gap-4">
       {categories.map((cat) => (
  <button
    key={cat}
    onClick={() => setSelectedCategory(cat)}
    className={`rounded-full px-7 py-3 font-semibold transition-all duration-300 ${
      selectedCategory === cat
        ? "bg-gradient-to-r from-yellow-400 via-amber-500 to-yellow-600 text-black shadow-[0_0_20px_rgba(255,215,0,.35)]"
        : "border border-yellow-500/20 bg-[#111111] text-yellow-400 hover:bg-yellow-500 hover:text-black"
    }`}
  >
    {cat}
  </button>
))}
</div>
</section>

{/* Menu Grid */}

<section className="mx-auto max-w-7xl px-6 pb-24">

  <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

    {filteredItems.map((item, index) => (
      <div
        key={item.id}
        className="group overflow-hidden rounded-3xl border border-yellow-500/20 bg-[#111111] transition-all duration-500 hover:-translate-y-3 hover:border-yellow-400 hover:shadow-[0_0_35px_rgba(255,215,0,.18)]"
      >

        {/* Image */}

        <div className="relative overflow-hidden">

          <img
            src={item.image}
            alt={item.name}
            className="h-72 w-full object-cover transition duration-700 group-hover:scale-110"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>

          {/* Price */}

          <span className="absolute right-4 top-4 rounded-full bg-gradient-to-r from-yellow-400 via-amber-500 to-yellow-600 px-4 py-2 font-bold text-black shadow-lg">

            {item.price}

          </span>

        </div>

        {/* Content */}

        <div className="p-6">

          <h3 className="text-2xl font-bold text-yellow-400">

            {item.name}

          </h3>

          <p className="mt-2 text-gray-400">

            {item.category}

          </p>

          {/* Rating */}

          <div className="mt-4 flex items-center">

            <FaStar className="text-yellow-400" />

            <span className="ml-2 font-semibold text-white">

              {item.rating}

            </span>

          </div>

          {/* Button */}

          <button className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-yellow-400 via-amber-500 to-yellow-600 py-3 font-bold text-black transition-all duration-300 hover:scale-105 hover:shadow-[0_0_25px_rgba(255,215,0,.35)]">

            <FaShoppingCart />

            Order Now

          </button>

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
      Premium Dining
    </span>

    <h2 className="mt-4 text-4xl font-black text-white md:text-5xl">
      Ready To Enjoy
      <span className="block bg-gradient-to-r from-yellow-300 via-yellow-400 to-amber-500 bg-clip-text text-transparent">
        An Unforgettable Meal?
      </span>
    </h2>

    <p className="mx-auto mt-6 max-w-3xl leading-8 text-gray-300">
      Discover authentic recipes, premium ingredients, and exceptional
      hospitality. Reserve your table today and enjoy a luxury dining
      experience with your family and friends at Spice Garden Restaurant.
    </p>

    {/* Features */}

    <div className="mt-10 flex flex-wrap items-center justify-center gap-5">

      <div className="rounded-full border border-yellow-500/20 bg-[#111111] px-6 py-3 text-yellow-400">
        ⭐ 4.9 Rating
      </div>

      <div className="rounded-full border border-yellow-500/20 bg-[#111111] px-6 py-3 text-yellow-400">
        🍽️ Fresh Ingredients
      </div>

      <div className="rounded-full border border-yellow-500/20 bg-[#111111] px-6 py-3 text-yellow-400">
        👨‍🍳 Expert Chefs
      </div>

      <div className="rounded-full border border-yellow-500/20 bg-[#111111] px-6 py-3 text-yellow-400">
        ❤️ 25K+ Happy Customers
      </div>

    </div>

    {/* Buttons */}

    <div className="mt-12 flex flex-col items-center justify-center gap-5 md:flex-row">

      <button className="rounded-full bg-gradient-to-r from-yellow-400 via-amber-500 to-yellow-600 px-10 py-4 font-bold text-black transition-all duration-300 hover:scale-105 hover:shadow-[0_0_35px_rgba(255,215,0,.35)]">
        Reserve a Table
      </button>

      <button className="rounded-full border border-yellow-500 px-10 py-4 font-bold text-yellow-400 transition-all duration-300 hover:bg-yellow-500 hover:text-black">
        Order Online
      </button>

    </div>

  </div>

</section>

</div>
);
};

export default Menu;