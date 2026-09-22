import { NavLink } from "react-router";
import { FaSkull } from "react-icons/fa";

const Navbar = () => {
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
              to="/blog"
            >
              Blog
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
      </div>
    </nav>
  );
};

export default Navbar;
