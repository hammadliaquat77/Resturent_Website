// const galleryImages = [
//   "https://images.unsplash.com/photo-1543352634-4c3e72ab531d?auto=format&fit=crop&w=600&q=80",
//   "https://images.unsplash.com/photo-1627308595229-7830a5c91f9f?auto=format&fit=crop&w=600&q=80",
//   "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?auto=format&fit=crop&w=600&q=80",
//   "https://images.unsplash.com/photo-1543353071-873f17a7a088?auto=format&fit=crop&w=600&q=80",
//   "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=600&q=80",
//   "https://images.unsplash.com/photo-1600891965050-3c92aa682270?auto=format&fit=crop&w=600&q=80",
// ];

// const Gallery = () => {
//   return (
//     <div className="max-w-6xl mx-auto p-4 mt-10">
//       <h2 className="text-3xl font-bold text-center text-red-600 mb-8">
//         📷 Our Gallery
//       </h2>
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
//         {galleryImages.map((img, idx) => (
//           <div key={idx} className="overflow-hidden rounded-xl shadow-md">
//             <img
//               src={img}
//               alt={`gallery-${idx}`}
//               className="w-full h-60 object-cover hover:scale-105 transition-transform duration-300"
//             />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Gallery;







// src/pages/Gallery.jsx
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
