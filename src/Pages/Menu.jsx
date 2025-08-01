// const menuItems = [
//   {
//     id: 1,
//     name: "Zinger Burger",
//     price: "Rs. 450",
//     image:
//       "https://images.unsplash.com/photo-1613145998572-b9c0c3fc7ab7?auto=format&fit=crop&w=400&q=80",
//   },
//   {
//     id: 2,
//     name: "Biryani Plate",
//     price: "Rs. 300",
//     image:
//       "https://images.unsplash.com/photo-1590080876844-bdfd3c1c3928?auto=format&fit=crop&w=400&q=80",
//   },
//   {
//     id: 3,
//     name: "Club Sandwich",
//     price: "Rs. 350",
//     image:
//       "https://images.unsplash.com/photo-1627308595229-7830a5c91f9f?auto=format&fit=crop&w=400&q=80",
//   },
//   {
//     id: 4,
//     name: "Cold Drink (500ml)",
//     price: "Rs. 80",
//     image:
//       "https://images.unsplash.com/photo-1619949177485-df8e4f676d8e?auto=format&fit=crop&w=400&q=80",
//   },
// ];

// const Menu = () => {
//   return (
//     <div className="max-w-6xl mx-auto p-4 mt-10">
//       <h2 className="text-3xl font-bold text-center text-red-600 mb-8">🍽 Our Menu</h2>
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
//         {menuItems.map((item) => (
//           <div
//             key={item.id}
//             className="bg-white shadow-md rounded-xl overflow-hidden hover:scale-105 transition-transform duration-300"
//           >
//             <img src={item.image} alt={item.name} className="w-full h-48 object-cover" />
//             <div className="p-4 text-center">
//               <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
//               <p className="text-red-600 font-bold">{item.price}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Menu;


















// src/pages/Menu.jsx
import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";

const foodItems = [
  {
    id: 1,
    name: "Zinger Burger",
    price: 450,
    image: "https://via.placeholder.com/300x200?text=Zinger+Burger",
  },
  {
    id: 2,
    name: "Fries",
    price: 200,
    image: "https://via.placeholder.com/300x200?text=Fries",
  },
  {
    id: 3,
    name: "Chicken Roll",
    price: 180,
    image: "https://via.placeholder.com/300x200?text=Chicken+Roll",
  },
];

export default function Menu() {
  const whatsappNumber = "03163093120";

  const createOrderLink = (itemName) =>
    `https://wa.me/92${whatsappNumber}?text=Hello%20Hammad%20Food!%20I%20want%20to%20order%20${encodeURIComponent(
      itemName
    )}`;

  return (
    <div className="min-h-screen bg-yellow-50 py-10 px-4">
      <h2 className="text-4xl text-center font-bold text-red-600 mb-10">
        Our Menu 🍽️
      </h2>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {foodItems.map((item) => (
          <motion.div
            key={item.id}
            className="bg-white rounded-xl shadow-lg p-4 text-center"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-40 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-800">{item.name}</h3>
            <p className="text-red-600 font-bold text-lg mb-3">Rs {item.price}</p>

            <a
              href={createOrderLink(item.name)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-green-500 text-white px-4 py-2 rounded-full hover:bg-green-600 transition"
            >
              <FaWhatsapp />
              Order on WhatsApp
            </a>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
