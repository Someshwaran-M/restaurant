import { motion } from "framer-motion";
import {
  Phone,
  MessageCircle,
} from "lucide-react";

const destinations = [
  {
    id: 1,
    title: "Chennai One Way Taxi",
    subtitle: "Airport & City Travel",
    badge: "City",
    badgeColor: "bg-blue-500",
    image:
      "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?auto=format&fit=crop&w=900&q=80",
  },

  {
    id: 2,
    title: "Bangalore One Way Taxi",
    subtitle: "Business Trips",
    badge: "Business",
    badgeColor: "bg-slate-500",
    image:
      "https://images.unsplash.com/photo-1596176530529-78163a4f7af2?auto=format&fit=crop&w=900&q=80",
  },

  {
    id: 3,
    title: "Coimbatore One Way Taxi",
    subtitle: "Industrial & City Travel",
    badge: "Business",
    badgeColor: "bg-slate-500",
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=900&q=80",
  },

  {
    id: 4,
    title: "Madurai One Way Taxi",
    subtitle: "Temple & Family Trips",
    badge: "Temple",
    badgeColor: "bg-orange-500",
    image:
      "https://images.unsplash.com/photo-1589308454676-5a88f0df1f44?auto=format&fit=crop&w=900&q=80",
  },

  {
    id: 5,
    title: "Ooty One Way Taxi",
    subtitle: "Hill Station Trips",
    badge: "Hill",
    badgeColor: "bg-green-600",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80",
  },

  {
    id: 6,
    title: "Kodaikanal One Way Taxi",
    subtitle: "Nature & Lake Tours",
    badge: "Hill",
    badgeColor: "bg-green-600",
    image:
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=900&q=80",
  },

  {
    id: 7,
    title: "Pondicherry One Way Taxi",
    subtitle: "Beach & Leisure",
    badge: "Coastal",
    badgeColor: "bg-cyan-500",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=900&q=80",
  },

  {
    id: 8,
    title: "Mysore One Way Taxi",
    subtitle: "Heritage Tour",
    badge: "City",
    badgeColor: "bg-blue-500",
    image:
      "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=900&q=80",
  },
];

function DestinationCards() {
  return (
    <section className="bg-[#070B15] py-24">

      <div className="max-w-7xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >

          <span className="uppercase tracking-[6px] text-orange-400 font-bold">
            One Way Destinations
          </span>

          <h2 className="mt-6 text-5xl lg:text-6xl font-black text-white leading-tight">

            One Way Taxi Destinations Across{" "}

            <span className="text-orange-400">
              Tamil Nadu, Kerala & Karnataka
            </span>

          </h2>

          <p className="mt-6 text-gray-400 text-lg max-w-3xl mx-auto">
            Premium one way taxi service with transparent pricing,
            professional drivers and 24×7 booking support.
          </p>

        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 mt-20">

       {destinations.map((item, index) => (

  <motion.div
    key={item.id}
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{
      duration: 0.5,
      delay: index * 0.08,
    }}
    viewport={{ once: true }}
    className="group overflow-hidden rounded-3xl border border-white/10 bg-[#121721] hover:border-orange-500/40 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-orange-500/10"
  >

    <div className="grid md:grid-cols-[46%_54%]">

      {/* Left Image */}

      <div className="relative overflow-hidden h-[260px]">

        <img
          src={item.image}
          alt={item.title}
          className="w-full h-full object-cover transition duration-700 group-hover:scale-110"
        />

        {/* Dark Overlay */}

        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />

        {/* Badge */}

        <span
          className={`absolute top-4 left-4 ${item.badgeColor} text-white text-xs font-semibold px-4 py-2 rounded-full shadow-lg`}
        >
          {item.badge}
        </span>

      </div>

      {/* Right Content */}

      <div className="flex flex-col justify-between p-6">

        <div>

          <h3 className="text-3xl font-bold text-white leading-tight">

            {item.title}

          </h3>

          <p className="mt-3 text-gray-400 text-lg">

            {item.subtitle}

          </p>

        </div>

                {/* Buttons */}

        <div className="mt-8 flex gap-4">

          <a
            href="tel:+919888444952"
            className="flex-1 h-14 rounded-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 transition-all duration-300 flex items-center justify-center gap-3 text-white font-bold shadow-lg shadow-orange-500/20"
          >
            <Phone size={20} />
            Call Now
          </a>

          <a
            href="https://wa.me/919888444952"
            target="_blank"
            rel="noreferrer"
            className="flex-1 h-14 rounded-full border border-orange-500 bg-orange-500/10 hover:bg-orange-500 transition-all duration-300 flex items-center justify-center gap-3 text-orange-400 hover:text-white font-bold"
          >
            <MessageCircle size={20} />
            Get Fare
          </a>

        </div>

        {/* Bottom Info */}

        <p className="mt-5 text-sm text-gray-500 leading-7">
          Fixed fare • No hidden charges • 24/7 Booking Support
        </p>

      </div>

    </div>

  </motion.div>

))}

        </div>

      </div>

    </section>
  );
}

export default DestinationCards;