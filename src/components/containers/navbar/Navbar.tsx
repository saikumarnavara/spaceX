import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">SpaceX</div>
        <ul className="navbar-menu">
          <li className="navbar-item">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "navbar-link active" : "navbar-link"
              }
            >
              Home
            </NavLink>
          </li>
          <li className="navbar-item">
            <NavLink
              to="/rockets"
              className={({ isActive }) =>
                isActive ? "navbar-link active" : "navbar-link"
              }
            >
              Rockets
            </NavLink>
          </li>
          <li className="navbar-item">
            <NavLink
              to="/history"
              className={({ isActive }) =>
                isActive ? "navbar-link active" : "navbar-link"
              }
            >
              History
            </NavLink>
          </li>
          <li className="navbar-item">
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? "navbar-link active" : "navbar-link"
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
