import { NavLink } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-800 text-white shadow-md z-30 mb-30">
      <div className="container mx-auto flex items-center justify-between p-4">
        <div
          className="text-2xl font-bold"
          onClick={() => (window.location.href = "/")}
        >
          SpaceX
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-white text-2xl md:hidden focus:outline-none"
        >
          ☰
        </button>

        <ul
          className={`fixed inset-y-0 left-0 w-3/4 bg-gray-900 transform ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          } transition-transform duration-300 ease-in-out z-20 md:static md:flex md:w-auto md:bg-transparent md:translate-x-0 md:transition-none`}
        >
          <li className="border-b border-gray-700 md:border-none">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "block px-4 py-2 text-gray-300 bg-gray-700 md:bg-transparent md:text-white md:hover:text-gray-300"
                  : "block px-4 py-2 text-gray-300 hover:bg-gray-700 md:hover:text-gray-300"
              }
            >
              Home
            </NavLink>
          </li>
          <li className="border-b border-gray-700 md:border-none">
            <NavLink
              to="/rockets"
              className={({ isActive }) =>
                isActive
                  ? "block px-4 py-2 text-gray-300 bg-gray-700 md:bg-transparent md:text-white md:hover:text-gray-300"
                  : "block px-4 py-2 text-gray-300 hover:bg-gray-700 md:hover:text-gray-300"
              }
            >
              Rockets
            </NavLink>
          </li>
          <li className="border-b border-gray-700 md:border-none">
            <NavLink
              to="/history"
              className={({ isActive }) =>
                isActive
                  ? "block px-4 py-2 text-gray-300 bg-gray-700 md:bg-transparent md:text-white md:hover:text-gray-300"
                  : "block px-4 py-2 text-gray-300 hover:bg-gray-700 md:hover:text-gray-300"
              }
            >
              History
            </NavLink>
          </li>
          <li className="border-b border-gray-700 md:border-none">
            <NavLink
              to="/launches"
              className={({ isActive }) =>
                isActive
                  ? "block px-4 py-2 text-gray-300 bg-gray-700 md:bg-transparent md:text-white md:hover:text-gray-300"
                  : "block px-4 py-2 text-gray-300 hover:bg-gray-700 md:hover:text-gray-300"
              }
            >
              Launches
            </NavLink>
          </li>
          <li className="border-b border-gray-700 md:border-none">
            <NavLink
              to="/ships"
              className={({ isActive }) =>
                isActive
                  ? "block px-4 py-2 text-gray-300 bg-gray-700 md:bg-transparent md:text-white md:hover:text-gray-300"
                  : "block px-4 py-2 text-gray-300 hover:bg-gray-700 md:hover:text-gray-300"
              }
            >
              Ships
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive
                  ? "block px-4 py-2 text-gray-300 bg-gray-700 md:bg-transparent md:text-white md:hover:text-gray-300"
                  : "block px-4 py-2 text-gray-300 hover:bg-gray-700 md:hover:text-gray-300"
              }
            >
              About
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
