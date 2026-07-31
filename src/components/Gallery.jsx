// src/components/Gallery.jsx

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

function Gallery() {
  return (
    <section
  id="gallery"
  className="relative overflow-hidden bg-[#080C16] py-28"
>
     {/* Background Glow */}

<div className="absolute left-0 top-40 h-96 w-96 rounded-full bg-orange-500/10 blur-[140px]" />

<div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-orange-600/10 blur-[150px]" />

<div className="relative z-10 max-w-7xl mx-auto px-6">

       <motion.div
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  viewport={{ once: true }}
  className="mx-auto mb-20 max-w-4xl text-center"
>

  <span className="text-sm font-bold uppercase tracking-[6px] text-orange-400">
    GALLERY
  </span>

  <h2 className="mt-5 text-5xl font-extrabold text-white md:text-6xl">
    Explore Our{" "}
    <span className="bg-gradient-to-r from-orange-400 to-amber-300 bg-clip-text text-transparent">
      Travel Moments
    </span>
  </h2>

  <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-gray-400">
    Beautiful journeys, unforgettable memories and premium travel experiences
    captured from our happy customers.
  </p>

</motion.div>

        {/* Gallery Grid */}

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">

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
             className="group relative overflow-hidden rounded-[30px] border border-white/10 bg-[#141922] shadow-xl transition-all duration-500 hover:-translate-y-2 hover:border-orange-500/40 hover:shadow-[0_0_40px_rgba(249,115,22,.18)]"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-80 object-cover group-hover:scale-110 transition duration-700"
              />

              {/* Overlay */}

              <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black via-black/40 to-transparent p-8 opacity-0 transition duration-500 group-hover:opacity-100">
                <Camera
                  size={45}
                  className="text-orange-400 mb-4"
                />

                <h3 className="text-3xl font-bold text-white">
                  {item.title}
                </h3>

                <button className="mt-5 flex items-center gap-2 text-orange-300 font-semibold">
                  View Destination
                  <ArrowRight size={18} />
                </button>

              </div>

            </motion.div>

          ))}

        </div>

        {/* Bottom CTA */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: .3 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <button className="rounded-full border-2 border-orange-500 px-10 py-4 text-lg font-bold text-orange-400 transition-all duration-300 hover:bg-orange-500 hover:text-white hover:shadow-lg hover:shadow-orange-500/30">
            View Complete Gallery
          </button>
        </motion.div>

      </div>
    </section>
  );
}

export default Gallery;