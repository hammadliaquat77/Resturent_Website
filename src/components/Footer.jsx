// import { Link } from "react-router-dom";

// const Footer = () => {
//   return (
//     <footer className="bg-white border-t shadow-inner mt-8">
//       <div className="max-w-7xl mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-3 gap-8 text-sm text-gray-600">
//         {/* Logo & Branding */}
//         <div>
//           <h2 className="text-lg font-bold text-red-600 mb-2">🍕 Foodies Point</h2>
//           <p>Serving smiles and hot meals since 2024.</p>
//         </div>

//         {/* Navigation Links */}
//         <div className="space-y-2">
//           <h3 className="text-md font-semibold text-gray-800">Quick Links</h3>
//           <ul className="space-y-1">
//             <li><Link to="/" className="hover:text-red-500">Home</Link></li>
//             <li><Link to="/about" className="hover:text-red-500">About</Link></li>
//             <li><Link to="/menu" className="hover:text-red-500">Menu</Link></li>
//             <li><Link to="/gallery" className="hover:text-red-500">Gallery</Link></li>
//             <li><Link to="/contact" className="hover:text-red-500">Contact</Link></li>
//           </ul>
//         </div>

//         {/* Contact / Social */}
//         <div className="space-y-2">
//           <h3 className="text-md font-semibold text-gray-800">Contact Us</h3>
//           <p>Email: support@foodiespoint.com</p>
//           <p>Phone: +92 300 1234567</p>
//           <div className="flex space-x-4 pt-2">
//             <a href="#" className="hover:text-red-500">Facebook</a>
//             <a href="#" className="hover:text-red-500">Instagram</a>
//             <a href="#" className="hover:text-red-500">WhatsApp</a>
//           </div>
//         </div>
//       </div>

//       <div className="text-center text-xs text-gray-400 py-4 border-t">
//         © {new Date().getFullYear()} Foodies Point. All rights reserved.
//       </div>
//     </footer>
//   );
// };

// export default Footer;















// src/components/Footer.jsx
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-red-600 text-white py-6 mt-12">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between px-6">
        <p className="text-center md:text-left mb-4 md:mb-0">
          &copy; {new Date().getFullYear()} Hammad Food. All rights reserved.
        </p>

        <div className="flex gap-6 text-xl">
          <a
            href="https://wa.me/923163093120"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-green-300 transition"
          >
            <FaWhatsapp />
          </a>
          <a
            href="https://instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-300 transition"
          >
            <FaInstagram />
          </a>
          <a
            href="https://facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-300 transition"
          >
            <FaFacebook />
          </a>
        </div>
      </div>
    </footer>
  );
}
