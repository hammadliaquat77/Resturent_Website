import { motion } from "framer-motion";

const images = [
  "https://via.placeholder.com/300x200?text=Burger",
  "https://via.placeholder.com/300x200?text=Pizza",
  "https://via.placeholder.com/300x200?text=Fries",
  "https://via.placeholder.com/300x200?text=Broast",
  "https://via.placeholder.com/300x200?text=Shawarma",
  "https://via.placeholder.com/300x200?text=Roll+Paratha",
];

export default function Gallery() {
  return (
    <div className="min-h-screen bg-white py-10 px-4">
      <h2 className="text-4xl text-center font-bold text-red-600 mb-10">
        Our Gallery 📸
      </h2>

      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {images.map((img, index) => (
          <motion.div
            key={index}
            className="overflow-hidden rounded-xl shadow-lg"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.5 }}
          >
            <img
              src={img}
              alt={`Food ${index + 1}`}
              className="w-full h-48 object-cover"
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
}
