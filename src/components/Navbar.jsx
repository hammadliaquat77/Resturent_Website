import { Link } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react"; // icons

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className="bg-red-600 text-white p-4 shadow-lg">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Hammad Food</h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6">
          <li><Link to="/" className="hover:text-gray-300">Home</Link></li>
          <li><Link to="/about" className="hover:text-gray-300">About</Link></li>
          <li><Link to="/category-menu" className="hover:text-gray-300">Menu</Link></li>
          <li><Link to="/gallery" className="hover:text-gray-300">Gallery</Link></li>
          <li><Link to="/contact" className="hover:text-gray-300">Contact</Link></li>
        </ul>

        {/* Mobile Icon */}
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden flex flex-col gap-3 mt-3 text-center">
          <Link to="/" onClick={toggleMenu} className="hover:text-gray-300 hover:font-bold">Home</Link>
          <Link to="/about" onClick={toggleMenu} className="hover:text-gray-300 hover:font-bold">About</Link>
          <Link to="/category-menu" onClick={toggleMenu} className="hover:text-gray-300 hover:font-bold">Menu</Link>
          <Link to="/gallery" onClick={toggleMenu} className="hover:text-gray-300 hover:font-bold">Gallery</Link>
          <Link to="/contact" onClick={toggleMenu} className="hover:text-gray-300 hover:scale-105 hover:font-bold ">Contact</Link>
        </div>
      )}
    </nav>
  );
}
