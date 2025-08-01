// import { Link } from "react-router-dom";
// import { useState } from "react";
// import { Menu, X } from "lucide-react"; // for hamburger & close icons

// const Navbar = () => {
//   const [menuOpen, setMenuOpen] = useState(false);

//   const toggleMenu = () => setMenuOpen(!menuOpen);

//   return (
//     <nav className="bg-white shadow-md px-4 py-3">
//       <div className="max-w-7xl mx-auto flex justify-between items-center">
//         <h1 className="text-xl font-bold text-red-600">🍕 Foodies Point</h1>

//         {/* Desktop Links */}
//         <div className="hidden md:flex space-x-4">
//           <Link to="/" className="hover:text-red-500">Home</Link>
//           <Link to="/about" className="hover:text-red-500">About</Link>
//           <Link to="/menu" className="hover:text-red-500">Menu</Link>
//           <Link to="/gallery" className="hover:text-red-500">Gallery</Link>
//           <Link to="/contact" className="hover:text-red-500">Contact</Link>
//         </div>

//         {/* Mobile Icon */}
//         <div className="md:hidden">
//           <button onClick={toggleMenu} className="text-gray-600 focus:outline-none">
//             {menuOpen ? <X size={24} /> : <Menu size={24} />}
//           </button>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       {menuOpen && (
//         <div className="md:hidden mt-2 space-y-2 px-2 pb-4 text-sm text-center pt-4">
//           <Link to="/" className="block hover:text-red-500" onClick={toggleMenu}>Home</Link>
//           <Link to="/about" className="block hover:text-red-500" onClick={toggleMenu}>About</Link>
//           <Link to="/menu" className="block hover:text-red-500" onClick={toggleMenu}>Menu</Link>
//           <Link to="/gallery" className="block hover:text-red-500" onClick={toggleMenu}>Gallery</Link>
//           <Link to="/contact" className="block hover:text-red-500" onClick={toggleMenu}>Contact</Link>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;














import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-red-600 text-white p-4 shadow-lg">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Hammad Food</h1>
        <ul className="flex gap-4">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/category-menu">Menu</Link></li>
          {/* <li><Link to="/menu">Menu</Link></li> */}
          <li><Link to="/gallery">Gallery</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
}
