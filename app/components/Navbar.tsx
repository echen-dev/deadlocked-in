import { NavLink } from "react-router";
import { FaSkull } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 border-b border-gray-700 shadow-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <NavLink
          to="/"
          className="flex items-center gap-2 text-lg font-bold text-blue-300"
        >
          <FaSkull />
          <span>Deadlocked-In</span>
        </NavLink>
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          <div className="space-x-4 text-sm text-gray-300">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/heroes">Heroes</NavLink>
            <NavLink to="/blog">Blog</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/contact">Contact</NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
