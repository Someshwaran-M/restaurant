import React, { useState } from "react";
import { FaStar, FaShoppingCart, FaSearch } from "react-icons/fa";
import "../styles/Menu.css";

const favouriteItems = [
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
    image:"/images/dish11.jpg",
  },
  {
    id: 7,
    name: "Fish Meals",
    category: "Indian",
    price: "$16",
    rating: 5,
    image:"/images/dish14.jpg",
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
    name: "Red Velvet Cake",
    category: "Dessert",
    price: "$8",
    rating: 4.9,
    image:"/images/dish12.jpg",
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
    image:"/images/dish13.jpg",
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
const [showFavourites, setShowFavourites] = useState(false);

const [cart, setCart] = useState([]);
const [showCart, setShowCart] = useState(false);
const [orderConfirmed, setOrderConfirmed] = useState(false);
const [orderDetails, setOrderDetails] = useState(null);
const [cartPopup, setCartPopup] = useState(false);
const [lastAddedItem, setLastAddedItem] = useState(null);

const [tableNo, setTableNo] = useState("");
const [showTableSelection, setShowTableSelection] = useState(false);

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

const handleAddToCart = (item) => {
  setCart((prevCart) => {
    const existingItem = prevCart.find(
      (cartItem) => cartItem.id === item.id
    );

    if (existingItem) {
      return prevCart.map((cartItem) =>
        cartItem.id === item.id
          ? {
              ...cartItem,
              quantity: cartItem.quantity + 1,
            }
          : cartItem
      );
    }

    return [
      ...prevCart,
      {
        ...item,
        quantity: 1,
      },
    ];
  });

  setLastAddedItem(item);
  setCartPopup(true);

  setTimeout(() => {
    setCartPopup(false);
  }, 2500);
};
const updateQuantity = (id, change) => {
  setCart((prevCart) =>
    prevCart
      .map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: Math.max(0, item.quantity + change),
            }
          : item
      )
      .filter((item) => item.quantity > 0)
  );
};
const handlePlaceOrder = () => {
  if (cart.length === 0) {
    alert("Your cart is empty.");
    return;
  }

  if (!tableNo) {
    alert("Please select your table number.");
    return;
  }

  const orderId = `SG-${Date.now().toString().slice(-3)}`;

  setOrderDetails({
    orderId,
    tableNo: tableNo,
    items: cart,
    orderTime: new Date().toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    }),
  });

  setOrderConfirmed(true);
  setShowCart(false);
  setCart([]);
};

  return (
    <div className="min-h-screen bg-black text-white">

      {cart.length > 0 && (
  <button
    onClick={() => setShowCart(true)}
    className="fixed bottom-26 right-6 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r from-yellow-400 via-amber-500 to-yellow-600 text-black shadow-[0_0_30px_rgba(255,215,0,.4)] transition-all duration-300 hover:scale-110"
  >
    <FaShoppingCart size={24} />

    <span className="absolute -right-1 -top-1 flex h-7 w-7 items-center justify-center rounded-full bg-red-500 text-sm font-bold text-white">
      {cart.reduce((total, item) => total + item.quantity, 0)}
    </span>
  </button>
)}
{cartPopup && lastAddedItem && (
  <div className="fixed right-6 top-6 z-[100] flex items-center gap-4 rounded-2xl border border-yellow-500/30 bg-[#111111] p-4 shadow-[0_0_30px_rgba(255,215,0,.25)]">
    
    <img
      src={lastAddedItem.image}
      alt={lastAddedItem.name}
      className="h-14 w-14 rounded-xl object-cover"
    />

    <div>
      <p className="font-bold text-yellow-400">
        Added to Cart ✓
      </p>

      <p className="text-sm text-gray-400">
        {lastAddedItem.name}
      </p>
    </div>

    <button
      onClick={() => setShowCart(true)}
      className="rounded-lg bg-yellow-500 px-3 py-2 text-sm font-bold text-black"
    >
      View Cart
    </button>
  </div>
)}
{showCart && (
  <div className="fixed inset-0 z-[90] flex items-center justify-center bg-black/80 px-4 backdrop-blur-sm">

    <div className="cart-scroll max-h-[85vh] w-full max-w-lg overflow-y-auto rounded-3xl border border-yellow-500/20 bg-[#111111] p-6">

      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-black text-white">
          Your Cart
        </h2>

        <button
          onClick={() => setShowCart(false)}
          className="flex h-10 w-10 items-center justify-center rounded-full text-xl text-yellow-400 hover:bg-yellow-500 hover:text-black"
        >
          ×
        </button>
      </div>

      <div className="mt-6 space-y-4">

        {cart.map((item) => (
          <div
            key={item.id}
            className="flex items-center gap-4 rounded-2xl bg-black p-4"
          >

            <img
              src={item.image}
              alt={item.name}
              className="h-20 w-20 rounded-xl object-cover"
            />

            <div className="flex-1">

              <h3 className="font-bold text-yellow-400">
                {item.name}
              </h3>

              <p className="text-sm text-gray-400">
                {item.price}
              </p>

              <div className="mt-2 flex items-center gap-3">

                <button
                  onClick={() => updateQuantity(item.id, -1)}
                  className="h-7 w-7 rounded-full bg-yellow-500 font-bold text-black"
                >
                  −
                </button>

                <span className="font-bold text-white">
                  {item.quantity}
                </span>

                <button
                  onClick={() => updateQuantity(item.id, 1)}
                  className="h-7 w-7 rounded-full bg-yellow-500 font-bold text-black"
                >
                  +
                </button>

              </div>

            </div>

          </div>
        ))}

      </div>

     {/* Table Selection */}
<div className="mt-6">

  {/* Select Table Button */}
  {!showTableSelection ? (
    <button
      type="button"
      onClick={() => setShowTableSelection(true)}
      className="flex w-full items-center justify-between rounded-xl border border-yellow-500/30 bg-black px-5 py-4 text-left transition-all duration-300 hover:border-yellow-400 hover:bg-yellow-500/10"
    >
      <div>
        <p className="text-sm font-semibold text-gray-400">
          Select Table Number *
        </p>

        <p className="mt-1 font-bold text-yellow-400">
          {tableNo
            ? `Table ${tableNo}`
            : "Choose your table"}
        </p>
      </div>

      <span className="text-xl text-yellow-400">
        ▼
      </span>
    </button>
  ) : (

    /* Table Selection Popup */
    <div className="rounded-2xl border border-yellow-500/20 bg-black p-4">

      <div className="mb-4 flex items-center justify-between">

        <div>
          <p className="text-lg font-bold text-yellow-400">
            Select Table Number *
          </p>

          <p className="mt-1 text-sm text-gray-500">
            Choose one table
          </p>
        </div>

        {/* Close */}
        <button
          type="button"
          onClick={() => setShowTableSelection(false)}
          className="flex h-9 w-9 items-center justify-center rounded-full border border-yellow-500/20 text-lg text-yellow-400 transition hover:bg-yellow-500 hover:text-black"
        >
          ×
        </button>

      </div>

      {/* Tables */}
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">

        {Array.from({ length: 20 }, (_, index) => {
          const table = index + 1;
          const isSelected =
            String(table) === String(tableNo);

          return (
            <button
              key={table}
              type="button"
              onClick={() => {
                setTableNo(String(table));
                setShowTableSelection(false);
              }}
              className={`h-14 rounded-xl border font-bold transition-all duration-300 ${
                isSelected
                  ? "border-yellow-400 bg-gradient-to-r from-yellow-400 via-amber-500 to-yellow-600 text-black shadow-[0_0_20px_rgba(255,215,0,.35)]"
                  : "border-yellow-500/30 bg-black text-yellow-400 hover:border-yellow-400 hover:bg-yellow-500/10"
              }`}
            >
              Table {table}
            </button>
          );
        })}

      </div>

    </div>
  )}

  {/* Selected Table */}
  {tableNo && !showTableSelection && (
    <div className="mt-3 flex items-center justify-between rounded-xl border border-yellow-500/20 bg-yellow-500/10 px-4 py-3">

      <div>
        <p className="text-xs text-gray-400">
          Selected Table
        </p>

        <p className="font-bold text-yellow-400">
          Table {tableNo}
        </p>
      </div>

      <button
        type="button"
        onClick={() => setShowTableSelection(true)}
        className="rounded-lg border border-yellow-500 px-4 py-2 text-sm font-bold text-yellow-400 transition hover:bg-yellow-500 hover:text-black"
      >
        Change Table
      </button>

    </div>
  )}

</div>

      <button
  onClick={handlePlaceOrder}
  className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-yellow-400 via-amber-500 to-yellow-600 py-4 font-bold text-black transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(255,215,0,.35)]"
>
  <FaShoppingCart size={18} />
  <span>Order Now</span>
</button>

    </div>
  </div>
)}
{orderConfirmed && orderDetails && (
  <div className="fixed inset-0 z-[110] flex items-center justify-center bg-black/85 px-4 backdrop-blur-md">

    <div className="w-full max-w-md rounded-3xl border border-yellow-500/30 bg-[#111111] p-8 text-center">

      <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-r from-yellow-400 via-amber-500 to-yellow-600 text-4xl text-black">
        ✓
      </div>

      <h2 className="mt-6 text-3xl font-black text-white">
        Your Order is Confirmed!
      </h2>

      <p className="mt-4 text-gray-400">
        Your order has been successfully placed.
        <br />
        Please wait a few minutes while our chefs prepare your food.
      </p>

      <div className="mt-7 space-y-4 rounded-2xl bg-black p-5">

        <div className="flex justify-between">
          <span className="text-gray-400">
            Order ID
          </span>

          <span className="font-bold text-yellow-400">
            {orderDetails.orderId}
          </span>
        </div>

        <div className="flex justify-between">
          <span className="text-gray-400">
            Table No.
          </span>

          <span className="font-bold text-yellow-400">
  {orderDetails.tableNo}
</span>
        </div>

        <div className="flex justify-between">
          <span className="text-gray-400">
            Order Time
          </span>

          <span className="text-white">
            {orderDetails.orderTime}
          </span>
        </div>

      </div>

      <div className="mt-5 rounded-xl bg-green-500/10 p-4 text-green-400">
        🍽️ Your food is being prepared. Please wait a few minutes.
      </div>

      <button
        onClick={() => setOrderConfirmed(false)}
        className="mt-6 w-full rounded-xl border border-yellow-500 py-3 font-bold text-yellow-400 hover:bg-yellow-500 hover:text-black"
      >
        Continue Browsing
      </button>

    </div>
  </div>
)}

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

    {/* Favourite Button */}
    <button
      onClick={() => setShowFavourites(!showFavourites)}
      className={`rounded-full px-7 py-3 font-semibold transition-all duration-300 ${
  showFavourites
    ? "bg-gradient-to-r from-yellow-400 via-amber-500 to-yellow-600 text-black shadow-[0_0_25px_rgba(255,215,0,.4)]"
    : "border border-yellow-500/30 bg-[#111111] text-yellow-400 hover:bg-gradient-to-r hover:from-yellow-400 hover:via-amber-500 hover:to-yellow-600 hover:text-black hover:shadow-[0_0_25px_rgba(255,215,0,.35)]"
}`}
    >
      Favourite
    </button>

  </div>
</section>

{/* Menu Grid */}


{showFavourites && (
  <section className="relative overflow-hidden py-16">

  {/* Section Header */}
  <div className="mx-auto max-w-7xl px-6 text-center">
    
    <span className="uppercase tracking-[5px] font-bold text-yellow-400">
      ❤️ Customer Favourites
    </span>

    <h2 className="mt-3 text-4xl font-black text-white md:text-5xl">
      Our Favourite
      <span className="ml-2 bg-gradient-to-r from-yellow-300 via-yellow-400 to-amber-500 bg-clip-text text-transparent">
        Dishes
      </span>
    </h2>

    <p className="mx-auto mt-4 max-w-2xl text-gray-400">
      Taste the dishes our customers love the most, prepared fresh by our
      expert chefs.
    </p>
  </div>

  {/* Moving Cards */}
  <div className="favourite-slider mt-12">
    <div className="favourite-track">

      {/* First Set */}
      {favouriteItems.map((item) => (
        <div
          key={`first-${item.id}`}
          className="favourite-card group"
        >
          {/* Image */}
          <div className="relative overflow-hidden">
            <img
              src={item.image}
              alt={item.name}
              className="h-56 w-full object-cover transition duration-700 group-hover:scale-110"
            />

            {/* Dark Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

            {/* Favourite Badge */}
            <div className="absolute left-4 top-4 rounded-full bg-black/70 px-4 py-2 text-sm font-bold text-yellow-400 backdrop-blur-md">
              ❤️ Favourite
            </div>

            {/* Price */}
            <span className="absolute right-4 top-4 rounded-full bg-gradient-to-r from-yellow-400 via-amber-500 to-yellow-600 px-4 py-2 font-bold text-black shadow-lg">
              {item.price}
            </span>
          </div>

          {/* Content */}
          <div className="p-5">

            <h3 className="text-xl font-bold text-yellow-400">
              {item.name}
            </h3>

            <p className="mt-2 min-h-[48px] text-sm leading-6 text-gray-400">
              {item.desc}
            </p>

            <div className="mt-3 flex items-center justify-between">
              <span className="rounded-full border border-yellow-500/20 bg-yellow-500/10 px-3 py-1 text-xs font-semibold text-yellow-400">
                {item.type}
              </span>

              <div className="flex items-center gap-1 text-yellow-400">
                <FaStar />
                <span className="text-sm font-semibold">4.9</span>
              </div>
            </div>

            {/* Order Button */}
            <button
              onClick={() => handleAddToCart(item)}
              className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-yellow-400 via-amber-500 to-yellow-600 py-3 font-bold text-black transition-all duration-300 hover:scale-105 hover:shadow-[0_0_25px_rgba(255,215,0,.4)]"
            >
              <FaShoppingCart />
              Add Cart
            </button>

          </div>
        </div>
      ))}

      {/* Duplicate Set - Required for Continuous Animation */}
      {favouriteItems.map((item) => (
        <div
          key={`second-${item.id}`}
          className="favourite-card group"
        >
          <div className="relative overflow-hidden">
            <img
              src={item.image}
              alt={item.name}
              className="h-56 w-full object-cover transition duration-700 group-hover:scale-110"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

            <div className="absolute left-4 top-4 rounded-full bg-black/70 px-4 py-2 text-sm font-bold text-yellow-400 backdrop-blur-md">
              ❤️ Favourite
            </div>

            <span className="absolute right-4 top-4 rounded-full bg-gradient-to-r from-yellow-400 via-amber-500 to-yellow-600 px-4 py-2 font-bold text-black shadow-lg">
              {item.price}
            </span>
          </div>

          <div className="p-5">
            <h3 className="text-xl font-bold text-yellow-400">
              {item.name}
            </h3>

            <p className="mt-2 min-h-[48px] text-sm leading-6 text-gray-400">
              {item.desc}
            </p>

            <div className="mt-3 flex items-center justify-between">
              <span className="rounded-full border border-yellow-500/20 bg-yellow-500/10 px-3 py-1 text-xs font-semibold text-yellow-400">
                {item.type}
              </span>

              <div className="flex items-center gap-1 text-yellow-400">
                <FaStar />
                <span className="text-sm font-semibold">4.9</span>
              </div>
            </div>

            <button
             onClick={() => handleAddToCart(item)}
              className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-yellow-400 via-amber-500 to-yellow-600 py-3 font-bold text-black transition-all duration-300 hover:scale-105 hover:shadow-[0_0_25px_rgba(255,215,0,.4)]"
            >
              <FaShoppingCart />
              Add Cart
            </button>
          </div>
        </div>
      ))}

    </div>
  </div>

</section>

)}

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

          <button
  onClick={() => handleAddToCart(item)}
  className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-yellow-400 via-amber-500 to-yellow-600 py-3 font-bold text-black transition-all duration-300 hover:scale-105 hover:shadow-[0_0_25px_rgba(255,215,0,.35)]"
>
  <FaShoppingCart />
  Add Cart
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