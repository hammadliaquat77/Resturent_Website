import { useState } from "react";
import { motion } from "framer-motion";

import menuData from "../data/data";


export default function CategoryMenu() {
  const [activeCategory, setActiveCategory] = useState("Rolls");
  const [cart, setCart] = useState({});
  const [showCart, setShowCart] = useState(false);

  const addToCart = (item) => {
    setCart((prev) => {
      const qty = prev[item.name]?.quantity || 0;
      return {
        ...prev,
        [item.name]: { ...item, quantity: qty + 1 },
      };
    });
  };

  const updateQuantity = (name, change) => {
    setCart((prev) => {
      const item = prev[name];
      if (!item) return prev;
      const newQty = item.quantity + change;
      if (newQty <= 0) {
        const { [name]: _, ...rest } = prev;
        return rest;
      }
      return {
        ...prev,
        [name]: { ...item, quantity: newQty },
      };
    });
  };

  const generateWhatsAppMessage = () => {
    const message = Object.values(cart)
      .map((item) => `${item.name} x${item.quantity} = Rs ${item.price * item.quantity}`)
      .join("\n");
    const total = Object.values(cart).reduce((sum, item) => sum + item.quantity * item.price, 0);
    return encodeURIComponent(`I want to order:\n${message}\n\nTotal: Rs ${total}`);
  };

  return (
    <div className="min-h-screen bg-white py-10 px-4">
      <h2 className="text-3xl font-bold text-center text-red-600 mb-6">Select Category 🍴</h2>

      <div className="flex justify-center flex-wrap gap-4 mb-8">
        {Object.keys(menuData).map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-2 rounded-full font-semibold border-2 transition ${
              activeCategory === cat
                ? "bg-red-600 text-white"
                : "bg-white text-red-600 border-red-600 hover:bg-red-600 hover:text-white"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {menuData[activeCategory].map((item) => (
          <motion.div
            key={item.name}
            className="bg-yellow-50 p-4 rounded-xl shadow text-center"
            whileHover={{ scale: 1.05 }}
          >
            <img
              src={item.img}
              alt={item.name}
              className="w-full h-40  object-cover rounded mb-4"
            />
            <h3 className="text-xl font-bold text-gray-800">{item.name}</h3>
            <p className="text-red-600 font-semibold mb-2">Rs {item.price}</p>
            <button
              onClick={() => addToCart(item)}
              className="bg-green-500 text-white px-4 py-2 rounded-full hover:bg-green-600"
            >
              Add to Cart
            </button>
          </motion.div>
        ))}
      </div>

      {Object.keys(cart).length > 0 && (
        <div className="fixed bottom-6 right-6 z-50">
          <button
            onClick={() => setShowCart(true)}
            className="bg-green-600 text-white px-6 py-3 rounded-full shadow-lg hover:bg-red-700"
          >
            View Cart ({Object.keys(cart).length})
          </button>
        </div>
      )}

      {showCart && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            className="bg-white p-6 rounded-xl w-full max-w-md relative"
          >
            <button
              onClick={() => setShowCart(false)}
              className="absolute top-3 right-4 text-2xl text-gray-600 hover:text-red-600"
            >
              &times;
            </button>

            <h2 className="text-2xl font-bold text-center text-red-600 mb-4">Your Cart 🛒</h2>
            <div className="space-y-4 max-h-64 overflow-y-auto">
              {Object.values(cart).map((item) => (
                <div key={item.name} className="flex justify-between items-center border-b pb-2">
                  <div>
                    <h4 className="font-bold">{item.name}</h4>
                    <p className="text-sm text-gray-600">
                      Rs {item.price} x {item.quantity}
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => updateQuantity(item.name, -1)}
                      className="px-2 py-1 bg-red-500 text-white rounded"
                    >
                      −
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.name, 1)}
                      className="px-2 py-1 bg-green-500 text-white rounded"
                    >
                      +
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-right font-bold mt-4">
              Total: Rs{" "}
              {Object.values(cart).reduce(
                (sum, item) => sum + item.price * item.quantity,
                0
              )}
            </div>

            {Object.keys(cart).length > 0 && (
              <a
                href={`https://wa.me/923163093120?text=${generateWhatsAppMessage()}`}
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-green-600 text-white text-center py-3 rounded-full mt-6 hover:bg-green-700"
              >
                Order on WhatsApp
              </a>
            )}
          </motion.div>
        </div>
      )}
    </div>
  );
}
