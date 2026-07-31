import { motion } from "framer-motion";
import { Camera, ArrowRight } from "lucide-react";

const galleryImages = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=900&auto=format&fit=crop",
    title: "Maldives",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=900&auto=format&fit=crop",
    title: "Bali",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1527631746610-bca00a040d60?w=900&auto=format&fit=crop",
    title: "Dubai",
  },
  {
    id: 4,
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=900&auto=format&fit=crop",
    title: "Switzerland",
  },
  {
    id: 5,
    image:
      "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=900&auto=format&fit=crop",
    title: "Paris",
  },
  {
    id: 6,
    image:
      "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=900&auto=format&fit=crop",
    title: "Singapore",
  },
];

function Gallery({ darkMode }) {
  return (
    <section
  id="gallery"
  className={`relative overflow-hidden py-32 transition-all duration-500 ${
  darkMode ? "bg-[#080C16]" : "bg-white"
}`}
>
<div
  className={`absolute left-0 top-40 h-80 w-80 rounded-full blur-[120px] ${
    darkMode ? "bg-orange-500/10" : "bg-orange-300/20"
  }`}
/>

<div
  className={`absolute right-0 bottom-0 h-80 w-80 rounded-full blur-[120px] ${
    darkMode ? "bg-orange-600/10" : "bg-yellow-300/20"
  }`}
/>

<div className="relative z-10 max-w-7xl mx-auto px-6">

       <motion.div
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  viewport={{ once: true }}
  className="mx-auto mb-14 max-w-3xl text-center"
>

  <span className="text-sm font-bold uppercase tracking-[6px] text-orange-400">
    GALLERY
  </span>

  <h2 className={`mt-4 text-4xl font-extrabold md:text-5xl ${
  darkMode ? "text-white" : "text-gray-900"
}`}>
    Explore Our{" "}
    <span className="bg-gradient-to-r from-orange-400 to-amber-300 bg-clip-text text-transparent">
      Travel Moments
    </span>
  </h2>

  <p className={`mx-auto mt-5 max-w-2xl text-base leading-7 ${
  darkMode ? "text-gray-400" : "text-gray-600"
}`}>
    Beautiful journeys, unforgettable memories and premium travel experiences
    captured from our happy customers.
  </p>

</motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">

          {galleryImages.map((item, index) => (

            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 70 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: .5,
                delay: index * .08,
              }}
              viewport={{ once: true }}
            className={`group relative overflow-hidden rounded-2xl transition-all duration-500 hover:-translate-y-2 ${
  darkMode
    ? "border border-white/10 bg-[#141922] hover:border-orange-500/40 hover:shadow-[0_0_30px_rgba(249,115,22,.18)]"
    : "border border-gray-200 bg-white shadow-lg hover:border-orange-400"
}`}
            >
              <img
                src={item.image}
                alt={item.title}
                className="h-64 w-full object-cover transition duration-700 group-hover:scale-110"
              />

              <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black via-black/40 to-transparent p-6 opacity-0 transition duration-500 group-hover:opacity-100">
                <Camera
                  size={34}
                  className="text-orange-400 mb-4"
                />

                <h3 className="text-2xl font-bold text-white">
                  {item.title}
                </h3>

                <button className="mt-3 flex items-center gap-2 text-sm font-semibold text-orange-300">
                  View Destination
                  <ArrowRight size={18} />
                </button>

              </div>

            </motion.div>

          ))}

        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: .3 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <button className={`rounded-full border-2 border-orange-500 px-8 py-3 text-base font-semibold transition-all duration-300 hover:bg-orange-500 hover:text-white ${
  darkMode
    ? "text-orange-400"
    : "text-orange-500"
}`}>
            View Complete Gallery
          </button>
        </motion.div>

      </div>
    </section>
  );
}

export default Gallery;