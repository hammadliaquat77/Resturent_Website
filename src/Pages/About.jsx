import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.div className="max-w-4xl mx-auto mt-10 p-4 text-gray-800" 
         initial={{ opacity: 0, scale: 0.9 }}
         animate={{ opacity: 1, scale: 1 }}
         transition={{ duration: 1 }}>
      <h2 className="text-3xl font-bold mb-6 text-center text-red-600">
         About Hammad Food 🍴
      </h2>

      <p className="mb-6 text-lg leading-relaxed">
         Hammad Food is your go-to place for fresh, fast and flavorful meals. 
         We are passionate about food and committed to delivering top-quality
         taste that satisfies your cravings!
      </p>

      <p className="mb-6 text-lg leading-relaxed">
        Whether you're in the mood for spicy burgers 🌶️, crispy fries 🍟, or sizzling rolls 🌯 – we make it all with love and hygiene.  
        Our mission is to serve every plate with freshness, flavor, and fast service.
      </p>

      <motion.div className="bg-gray-100 p-6 rounded-xl shadow-md mt-6">
        <h3 className="text-2xl font-semibold mb-4 text-center">Why Choose Us?</h3>
        <ul className="list-disc pl-6 space-y-2 text-left">
          <li>✅ Fresh and hygienic food</li>
          <li>✅ Fast delivery & friendly staff</li>
          <li>✅ Great ambiance for dine-in</li>
          <li>✅ Affordable pricing</li>
          <li>✅ Family-friendly environment</li>
        </ul>
      </motion.div>
    </motion.div>
  );
};

export default About;






// src/pages/About.jsx
// import { motion } from "framer-motion";

// export default function About() {
//   return (
//     <div className="min-h-screen bg-white flex items-center justify-center px-6 py-12">
//       <motion.div
//         className="max-w-3xl text-center"
//         initial={{ opacity: 0, scale: 0.9 }}
//         animate={{ opacity: 1, scale: 1 }}
//         transition={{ duration: 1 }}
//       >
//         <h2 className="text-4xl font-bold text-red-600 mb-4">
//           About Hammad Food
//         </h2>
//         <p className="text-gray-700 text-lg mb-6">
//           Hammad Food is your go-to place for fresh, fast and flavorful meals. 
//           We are passionate about food and committed to delivering top-quality taste that satisfies your cravings!
//         </p>
//         <p className="text-gray-600">
//           Whether you're in the mood for spicy burgers 🌶️, crispy fries 🍟, or sizzling rolls 🌯 – we make it all with love and hygiene.  
//           Our mission is to serve every plate with freshness, flavor, and fast service.  
//         </p>
//       </motion.div>
//     </div>
//   );
// }
