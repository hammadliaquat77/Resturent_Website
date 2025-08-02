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
