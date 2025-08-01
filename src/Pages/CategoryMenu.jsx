// src/pages/CategoryMenu.jsx
import { useState } from "react";
import { motion } from "framer-motion";

import French_Fries from "../../public/Starter/Fries.jpg"
import Masala_Fries from "../../public/Starter/Masala_fries.jpg"
import Cheese_Fries from "../../public/Starter/cheese_fries.jpg"
import Nuggets from "../../public/Starter/Nuggets.jpg"
import hot_wings from "../../public/Starter/hot_wings.jpg"
import Coleslaw_salad from "../../public/Starter/Coleslaw Salad.jpg"
import Russian_salad from "../../public/Starter/Russian Salad.jpg"


import Bbq_roll from '../../public/Roll/BBQ Roll.jpeg'
import Behari_roll from '../../public/Roll/Behari Roll.jpeg'
import Chese_roll from '../../public/Roll/Cheese Roll.jpeg'
import Chiken_roll from '../../public/Roll/Chiken_Roll.jpeg'
import Malai_Boti_roll from '../../public/Roll/Malai Boti Roll.jpeg'
import Mayo_roll from '../../public/Roll/Mayo_Roll.jpeg'
import Reshmi_roll from '../../public/Roll/Reshmi Roll.jpeg'
import Shawarma_roll from '../../public/Roll/Shawarma Roll.jpeg'
import Spicy_chiken_roll from '../../public/Roll/Spicy Chicken Roll.jpeg'
import Zinger_roll from '../../public/Roll/Zinger Roll.jpeg'

const menuData = {
    Starters: [
  { name: "French Fries", price: 200, img: French_Fries },
  { name: "Masala Fries", price: 220, img: Masala_Fries },
  { name: "Cheese Fries", price: 250, img: Cheese_Fries },
  { name: "Chicken Nuggets (6 pcs)", price: 300, img: Nuggets  },
  { name: "Hot Wings (6 pcs)", price: 350, img: hot_wings },
  { name: "Coleslaw Salad", price: 150, img: Coleslaw_salad },
  { name: "Russian Salad", price: 180, img: Russian_salad },
],

   Rolls: [
  { name: "Chicken Roll", price: 180, img: Chiken_roll },
  { name: "Mayo Garlic Roll", price: 220, img: Mayo_roll },
  { name: "Behari Roll", price: 200, img: Behari_roll},
  { name: "Malai Boti Roll", price: 230, img: Malai_Boti_roll },
  { name: "Reshmi Roll", price: 240, img: Reshmi_roll},
  { name: "Zinger Roll", price: 250, img: Zinger_roll },
  { name: "Cheese Roll", price: 270, img: Chese_roll },
  { name: "Shawarma Roll", price: 260, img: Shawarma_roll },
  { name: "Spicy Chicken Roll", price: 190, img: Spicy_chiken_roll },
  { name: "BBQ Roll", price: 210, img: Bbq_roll },
],

    Burgers: [
  { name: "Zinger Burger", price: 450, img: "https://via.placeholder.com/300x200?text=Zinger+Burger" },
  { name: "Beef Burger", price: 500, img: "https://via.placeholder.com/300x200?text=Beef+Burger" },
  { name: "Chicken Burger", price: 400, img: "https://via.placeholder.com/300x200?text=Chicken+Burger" },
  { name: "Double Patty Burger", price: 550, img: "https://via.placeholder.com/300x200?text=Double+Patty+Burger" },
  { name: "Cheese Burger", price: 470, img: "https://via.placeholder.com/300x200?text=Cheese+Burger" },
  { name: "Crispy Chicken Burger", price: 480, img: "https://via.placeholder.com/300x200?text=Crispy+Chicken+Burger" },
  { name: "Grilled Chicken Burger", price: 520, img: "https://via.placeholder.com/300x200?text=Grilled+Burger" },
  { name: "Spicy Zinger Burger", price: 490, img: "https://via.placeholder.com/300x200?text=Spicy+Zinger+Burger" },
  { name: "Stuffed Beef Burger", price: 580, img: "https://via.placeholder.com/300x200?text=Stuffed+Beef+Burger" },
  { name: "Mushroom Burger", price: 530, img: "https://via.placeholder.com/300x200?text=Mushroom+Burger" },
],

    Drinks: [
  { name: "Pepsi", price: 70, img: "https://via.placeholder.com/300x200?text=Pepsi" },
  { name: "7Up", price: 70, img: "https://via.placeholder.com/300x200?text=7Up" },
  { name: "Coca Cola", price: 70, img: "https://via.placeholder.com/300x200?text=Coca+Cola" },
  { name: "Sprite", price: 70, img: "https://via.placeholder.com/300x200?text=Sprite" },
  { name: "Fanta", price: 70, img: "https://via.placeholder.com/300x200?text=Fanta" },
  { name: "Pakola Ice Cream Soda", price: 60, img: "https://via.placeholder.com/300x200?text=Pakola" },
  { name: "Mineral Water", price: 50, img: "https://via.placeholder.com/300x200?text=Mineral+Water" },
  { name: "Mint Margarita", price: 120, img: "https://via.placeholder.com/300x200?text=Mint+Margarita" },
  { name: "Fresh Lime", price: 100, img: "https://via.placeholder.com/300x200?text=Fresh+Lime" },
  { name: "Cold Coffee", price: 180, img: "https://via.placeholder.com/300x200?text=Cold+Coffee" },
],

    Pizzas: [
  { name: "Cheese Pizza", price: 650, img: "https://via.placeholder.com/300x200?text=Cheese+Pizza" },
  { name: "Fajita Pizza", price: 750, img: "https://via.placeholder.com/300x200?text=Fajita+Pizza" },
  { name: "Chicken Tikka Pizza", price: 780, img: "https://via.placeholder.com/300x200?text=Chicken+Tikka+Pizza" },
  { name: "BBQ Chicken Pizza", price: 770, img: "https://via.placeholder.com/300x200?text=BBQ+Chicken+Pizza" },
  { name: "Pepperoni Pizza", price: 800, img: "https://via.placeholder.com/300x200?text=Pepperoni+Pizza" },
  { name: "Vegetable Pizza", price: 650, img: "https://via.placeholder.com/300x200?text=Vegetable+Pizza" },
  { name: "Crown Crust Pizza", price: 950, img: "https://via.placeholder.com/300x200?text=Crown+Crust+Pizza" },
  { name: "Stuffed Crust Pizza", price: 900, img: "https://via.placeholder.com/300x200?text=Stuffed+Crust+Pizza" },
  { name: "Malai Boti Pizza", price: 780, img: "https://via.placeholder.com/300x200?text=Malai+Boti+Pizza" },
  { name: "Smoky Pizza", price: 820, img: "https://via.placeholder.com/300x200?text=Smoky+Pizza" },
],

BBQ: [
  { name: "Chicken Seekh Kabab", price: 350, img: "https://via.placeholder.com/300x200?text=Chicken+Seekh+Kabab" },
  { name: "Beef Seekh Kabab", price: 380, img: "https://via.placeholder.com/300x200?text=Beef+Seekh+Kabab" },
  { name: "Chicken Boti", price: 400, img: "https://via.placeholder.com/300x200?text=Chicken+Boti" },
  { name: "Beef Boti", price: 420, img: "https://via.placeholder.com/300x200?text=Beef+Boti" },
  { name: "Reshmi Kabab", price: 450, img: "https://via.placeholder.com/300x200?text=Reshmi+Kabab" },
  { name: "Behari Boti", price: 430, img: "https://via.placeholder.com/300x200?text=Behari+Boti" },
  { name: "Grilled Tikka", price: 470, img: "https://via.placeholder.com/300x200?text=Grilled+Tikka" },
]

};

export default function CategoryMenu() {
    const [activeCategory, setActiveCategory] = useState("Rolls");

    const categories = Object.keys(menuData);

    return (
        <div className="min-h-screen bg-white py-10 px-4">
            <h2 className="text-3xl font-bold text-center text-red-600 mb-6">Select Category 🍴</h2>

            <div className="flex justify-center flex-wrap gap-4 mb-8">
                {categories.map((cat) => (
                    <button
                        key={cat}
                        onClick={() => setActiveCategory(cat)}
                        className={`px-4 py-2 rounded-full font-semibold border-2 transition ${activeCategory === cat
                                ? "bg-red-600 text-white border-red-600"
                                : "bg-white text-red-600 border-red-600 hover:bg-red-600 hover:text-white"
                            }`}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                {menuData[activeCategory].map((item, index) => (
                    <motion.div
                        key={index}
                        className="bg-yellow-50 p-4 rounded-xl shadow-lg text-center"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                    >
                        <img src={item.img} alt={item.name} className="w-full h-40 object-cover rounded-lg mb-4" />
                        <h3 className="text-xl font-bold text-gray-800">{item.name}</h3>
                        <p className="text-red-600 font-semibold mb-2">Rs {item.price}</p>
                        <a
                            href={`https://wa.me/923163093120?text=I want to order ${encodeURIComponent(item.name)}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block bg-green-500 text-white px-4 py-2 rounded-full mt-2 hover:bg-green-600 transition"
                        >
                            Order on WhatsApp
                        </a>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
