import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FaStar,
  FaHeart,
  FaFire,
  FaLeaf,
} from "react-icons/fa";
import logo from "../assets/images/logo.png";

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
   const [time, setTime] = useState("");
   const navigate = useNavigate();

  useEffect(() => {
    const updateTime = () => {
      setTime(
        new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        })
      );
    };

    updateTime();

    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval);
  }, []);
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
      
      {/* Background Glow */}
      <div className="absolute -left-16 top-24 h-52 w-52 rounded-full bg-yellow-400/20 blur-[90px]" />

      <div className="absolute -right-20 bottom-20 h-56 w-56 rounded-full bg-orange-500/20 blur-[110px]" />

{/* ================= HERO HEADER ================= */}
<div className="relative z-20 h-[120px] overflow-hidden ">

  {/* Background */}
  <img
    src="/images/home.png"
    alt="Restaurant"
    className="absolute inset-0 h-full w-full object-cover"
  />

  {/* Overlay */}
  <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-black/25 to-black/75"></div>

  {/* Status Bar */}
  <div className="absolute top-2 inset-x-0 z-40 flex items-center justify-between px-4">

    <span className="text-sm font-semibold tracking-wide text-white">
      {time}
    </span>

    <div className="flex items-center gap-2">

      {/* Signal */}
      <div className="flex items-end gap-[2px]">
        <div className="h-2 w-[2px] rounded bg-white"></div>
        <div className="h-3 w-[2px] rounded bg-white"></div>
        <div className="h-4 w-[2px] rounded bg-white"></div>
        <div className="h-5 w-[2px] rounded bg-white"></div>
      </div>

      {/* Wifi */}
      <svg
        width="14"
        height="14"
        viewBox="0 0 24 24"
        fill="white"
      >
        <path d="M12 18a2 2 0 100 4 2 2 0 000-4zm0-3c2.3 0 4.4.9 6 2.5l1.4-1.4A10.5 10.5 0 0012 13a10.5 10.5 0 00-7.4 3.1l1.4 1.4A8.5 8.5 0 0112 15z"/>
      </svg>

      {/* Battery */}
      <div className="relative h-4 w-7 rounded border border-white">
        <div className="absolute left-[2px] top-[2px] h-[8px] w-[18px] rounded bg-yellow-400"></div>
        <div className="absolute -right-[3px] top-[4px] h-[5px] w-[2px] rounded bg-white"></div>
      </div>

    </div>

  </div>

  {/* Restaurant Logo */}
  <div className="absolute top-10 right-4 z-30 flex items-center gap-2 rounded-xl bg-black/40 px-3 py-2 backdrop-blur-md">

    <img
  src={logo}
  alt="Spice Garden Logo"
  className="h-9 w-9 rounded-full border border-yellow-400 object-cover"
/>

    <div>

      <h2 className="text-sm font-bold text-white">
        Spice 
      </h2>
      <h2 className="text-sm font-bold text-yellow-300">
        Garden 
      </h2>

      <p className="text-[8px] text-yellow-300">
        FINI DINING
      </p>

    </div>

  </div>

  {/* Hero Text */}
  <div className="absolute top-6 left-4 z-20">

    <p className="text-lg italic text-yellow-400 font-serif">
      Our
    </p>

    <h1 className="text-4xl font-black leading-none text-white">
      Must Try
    </h1>

    <p className="ml-12 text-lg italic text-yellow-400 font-serif">
      Food
    </p>

    <div className="mt-2 h-[2px] w-20 rounded-full bg-yellow-400"></div>

  </div>

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
      className="relative flex items-center rounded-2xl border border-white/10 bg-zinc-900/70 p-2.5 shadow-xl backdrop-blur-xl"
 >    

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
      <div className="ml-3 flex-1">

  <div className="flex items-start justify-between">

    <div>
      <h4 className="text-sm font-bold text-white">
        {item.name}
      </h4>

      <p className="mt-1 text-[10px] leading-4 text-gray-300 line-clamp-2">
        {item.desc}
      </p>
    </div>

    <motion.button
      whileTap={{ scale: 0.9 }}
      whileHover={{ scale: 1.1 }}
      className="rounded-full bg-red-500/20 p-1.5 text-red-400"
    >
      <FaHeart size={12} />
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

       <div className="mt-2 flex items-center justify-between">

  <span className="text-lg font-bold text-yellow-400">
    {item.price}
  </span>

  <motion.button
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    onClick={() => navigate("/menu")}
    className="rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 px-3 py-1 text-[10px] font-bold text-black"
  >
    Order
  </motion.button>

</div>

<div className="mt-2">
  <span
    className={`inline-flex items-center gap-1 rounded-full px-2 py-1 text-[9px] font-semibold ${
      item.type === "Veg"
        ? "bg-green-900/40 text-green-300"
        : item.type === "Dessert"
        ? "bg-pink-900/40 text-pink-300"
        : item.type === "Drinks"
        ? "bg-blue-900/40 text-blue-300"
        : "bg-red-900/40 text-red-300"
    }`}
  >
    {item.type === "Veg" && <FaLeaf size={8} />}
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

  

</div>

</motion.div>
  );
}

export default Mobile;