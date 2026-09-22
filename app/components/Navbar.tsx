import { useState } from "react";
import { NavLink } from "react-router";
import { FaSkull, FaTimes, FaBars } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const baseStyles = "transition hover:text-blue-400";
  const activeStyles = "text-blue-400 font-semibold";
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
            <NavLink
              className={({ isActive }) =>
                isActive ? activeStyles : baseStyles
              }
              to="/"
            >
              Home
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive ? activeStyles : baseStyles
              }
              to="/heroes"
            >
              Heroes
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive ? activeStyles : baseStyles
              }
              to="/guides"
            >
              Guides
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive ? activeStyles : baseStyles
              }
              to="/about"
            >
              About
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive ? activeStyles : baseStyles
              }
              to="/contact"
            >
              Contact
            </NavLink>
          </div>
        </div>

        <div className="md:hidden flex items-center gap-4">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-blue-400 text-xl cursor-pointer"
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>
      {/*Mobile Navigation*/}
      {menuOpen && (
        <div className="md:hidden bg-gray-800 border-t border-gray-700 px-6 py-4 space-y-2 space-x-4 text-center">
          <NavLink
            className={({ isActive }) => (isActive ? activeStyles : baseStyles)}
            to="/"
            onClick={() => setMenuOpen(false)}
          >
            Home
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? activeStyles : baseStyles)}
            to="/heroes"
            onClick={() => setMenuOpen(false)}
          >
            Heroes
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? activeStyles : baseStyles)}
            to="/guides"
            onClick={() => setMenuOpen(false)}
          >
            Guides
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? activeStyles : baseStyles)}
            to="/about"
            onClick={() => setMenuOpen(false)}
          >
            About
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? activeStyles : baseStyles)}
            to="/contact"
            onClick={() => setMenuOpen(false)}
          >
            Contact
          </NavLink>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
