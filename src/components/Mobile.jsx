import React from "react";
import { motion } from "framer-motion";
import {
  FaStar,
  FaHeart,
  FaFire,
  FaLeaf,
} from "react-icons/fa";

const menuItems = [
  {
    id: 1,
    name: "Grilled Chicken",
    desc: "Juicy grilled chicken with herbs.",
    image: "/images/dish1.jpg",
    price: "$18",
    type: "Non-Veg",
    
  },
  {
    id: 2,
    name: "Paneer Tikka",
    desc: "Indian cottage cheese grilled.",
    image: "/images/dish2.jpg",
    price: "$15",
    type: "Veg",
    
  },
  {
    id: 3,
    name: "Butter Garlic Prawns",
    desc: "Garlic butter prawns.",
    image: "/images/dish3.jpg",
    price: "$22",
    type: "Non-Veg",
   
  },
  {
    id: 4,
    name: "Sizzling Brownie",
    desc: "Brownie with vanilla ice cream.",
    image: "/images/dish4.jpg",
    price: "$10",
    type: "Dessert",
    
  },
  {
    id: 5,
    name: "Cheese Burger",
    desc: "Loaded burger with fries.",
    image: "/images/dish5.jpg",
    price: "$16",
    type: "Non-Veg",
    popular: false,
  },
  {
    id: 6,
    name: "Italian Pizza",
    desc: "Cheesy Italian pizza.",
    image: "/images/dish6.jpg",
    price: "$20",
    type: "Veg",
    
  },
  {
    id: 7,
    name: "Chicken Biryani",
    desc: "Traditional dum biryani.",
    image: "/images/dish7.jpg",
    price: "$19",
    type: "Non-Veg",
    
  },
  {
    id: 8,
    name: "Chocolate Cake",
    desc: "Rich chocolate dessert.",
    image: "/images/dish8.jpg",
    price: "$9",
    type: "Dessert",
    
  },
  {
    id: 9,
    name: "Rasmalai",
    desc: "Soft and delicious Rasmalai in creamy sweet milk.",
    image: "/images/dish9.jpg",
    price: "$8",
    type: "Dessert",
  
  },
  {
    id: 10,
    name: "Royal Falooda",
    desc: "Sweet and creamy Falooda topped with delicious ice cream.",
    image: "/images/dish10.jpg",
    price: "$7",
    type: "Drinks",
    
  },
];

function Mobile() {
  const infiniteMenu = [...menuItems, ...menuItems, ...menuItems];

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{
        opacity: 1,
        y: [0, -8, 0],
      }}
      transition={{
        opacity: { duration: 0.8 },
        y: {
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        },
      }}
      className="relative h-[720px] w-[340px] overflow-hidden rounded-[48px] border-[8px] border-zinc-800 bg-black/500 shadow-[0_40px_90px_rgba(0,0,0,0.45)]"
    >
      {/* Dynamic Island */}
      <div className="absolute left-1/2 top-3 z-50 h-7 w-36 -translate-x-1/2 rounded-full bg-zinc-900" />

      {/* Background Glow */}
      <div className="absolute -left-16 top-24 h-52 w-52 rounded-full bg-yellow-400/20 blur-[90px]" />

      <div className="absolute -right-20 bottom-20 h-56 w-56 rounded-full bg-orange-500/20 blur-[110px]" />

      {/* Header */}
      <div className="relative z-20 px-5 pt-16">
        <motion.h3
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mt-2 text-center text-xs text-gray-400"
        >
          Our
        </motion.h3>

        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-center text-4xl font-extrabold text-yellow-500"
        >
          Must Try
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="mt-2 text-center text-xs text-gray-500"
        >
          Freshly prepared with premium ingredients
        </motion.p>
      </div>

      {/* Scroll Area */}
      <div className="relative mt-6 h-[560px] overflow-hidden px-4">
        
        {/* Infinite Scroll */}
        <div className="animate-scroll space-y-5 pb-10">
  {infiniteMenu.map((item, index) => (
    <motion.div
      key={`${item.id}-${index}`}
      whileHover={{
        scale: 1.03,
        y: -5,
      }}
      transition={{ duration: 0.3 }}
      className="relative flex items-center rounded-3xl border border-white/10 bg-zinc-900/70 p-3 shadow-2xl backdrop-blur-xl transition-all duration-300"
    >
      {/* Popular Badge */}
      {item.popular && (
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2 }}
          className="absolute right-3 top-3 flex items-center gap-1 rounded-full bg-gradient-to-r from-red-500 to-orange-500 px-2.5 py-1 text-[10px] font-semibold text-white shadow-lg"
        >
          <FaFire className="text-[9px]" />
          Popular
        </motion.div>
      )}

      {/* Food Image */}
      <motion.div
        whileHover={{
          rotate: 4,
          scale: 1.08,
        }}
        transition={{ duration: 0.3 }}
        className="relative"
      >
        <img
          src={item.image}
          alt={item.name}
          className="h-24 w-24 rounded-2xl object-cover shadow-xl ring-2 ring-yellow-500/30"
        />

        <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-black/40 to-transparent" />
      </motion.div>

      {/* Content */}
      <div className="ml-4 flex-1">

        {/* Title */}
        <div className="flex items-start justify-between gap-2">

          <div>
            <h4 className="text-[17px] font-bold text-white">
              {item.name}
            </h4>

            <p className="mt-1 text-xs leading-5 text-gray-300">
              {item.desc}
            </p>
          </div>

          <motion.button
            whileTap={{ scale: 0.9 }}
            whileHover={{ scale: 1.15 }}
            className="rounded-full bg-red-500/20 p-2 text-red-400 transition-all"
          >
            <FaHeart />
          </motion.button>

        </div>

        {/* Rating */}
        <div className="mt-3 flex items-center gap-1">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.3 }}
            >
              <FaStar className="text-sm text-yellow-400" />
            </motion.div>
          ))}

          <span className="ml-2 text-xs text-gray-400">
            4.9
          </span>
        </div>

        {/* Price & Type */}
        <div className="mt-4 flex items-center justify-between">

          <motion.span
            whileHover={{ scale: 1.05 }}
            className="text-xl font-extrabold text-yellow-400"
          >
            {item.price}
          </motion.span>

          <span
            className={`flex items-center gap-1 rounded-full px-3 py-1 text-xs font-semibold ${
              item.type === "Veg"
                ? "bg-green-900/40 text-green-300"
                : item.type === "Dessert"
                ? "bg-pink-900/40 text-pink-300"
                : item.type === "Drinks"
                ? "bg-blue-900/40 text-blue-300"
                : "bg-red-900/40 text-red-300"
            }`}
          >
            {item.type === "Veg" && (
              <FaLeaf className="text-[11px]" />
            )}

            {item.type}
          </span>

        </div>

      </div>

    </motion.div>
  ))}
</div>
</div>

{/* Bottom Navigation */}
<div className="absolute bottom-0 left-0 right-0 z-30 border-t border-white/10 bg-black/70 px-4 py-4 backdrop-blur-3xl">

  {/* Home Indicator */}
  <div className="mx-auto mt-4 h-1.5 w-32 rounded-full bg-white/80" />

</div>

</motion.div>
  );
}

export default Mobile;