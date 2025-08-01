// const Home = () => {
//   return (
//     <div className="text-center mt-10">
//       <div className="bg-[url('https://images.unsplash.com/photo-1600891964599-f61ba0e24092')] bg-cover bg-center h-72 flex items-center justify-center rounded-2xl shadow-lg">
//         <h2 className="text-4xl font-bold text-white bg-black bg-opacity-50 px-4 py-2 rounded-xl">
//           Welcome to Foodies Point 🍕
//         </h2>
//       </div>

//       <div className="mt-10 max-w-2xl mx-auto text-gray-700">
//         <h3 className="text-2xl font-semibold mb-4">Delicious food, cozy vibes</h3>
//         <p>
//           At Foodies Point, we serve the best fast food and desi delights in town. Whether
//           you're craving juicy burgers or spicy biryani, we've got something to satisfy
//           your taste buds. Open all week!
//         </p>

//         <a
//           href="https://wa.me/923001234567?text=Hi%20I%20want%20to%20order%20food%20from%20Foodies%20Point"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <button className="mt-6 bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-full shadow-md">
//             Order Now on WhatsApp 📲
//           </button>
//         </a>
//       </div>
//     </div>
//   );
// };



// src/pages/Home.jsx
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="bg-yellow-50 min-h-screen flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center p-6"
      >
        <h1 className="text-4xl md:text-6xl font-bold text-red-600 mb-4">
          Welcome to Hammad Food 🍔
        </h1>
        <p className="text-lg md:text-xl text-gray-700 mb-6">
          Fast, Fresh & Tasty Meals – Delivered with Love!
        </p>
        <Link
          to="/category-menu"
          className="bg-red-600 text-white px-6 py-3 rounded-full text-lg hover:bg-red-700 transition"
        >
          View Menu 🍽️
        </Link>
      </motion.div>
    </div>
  );
}
