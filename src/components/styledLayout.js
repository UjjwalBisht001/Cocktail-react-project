import { NavLink } from "react-router-dom";

const navbar = () => {
  return (
    <nav className="navbar">
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? "link active" : "link")}
      >
        Home
      </NavLink>
      <NavLink
        to="/about"
        className={({ isActive }) => (isActive ? "link active" : "link")}
      >
        About
      </NavLink>
      <NavLink
        to="/products"
        className={({ isActive }) => (isActive ? "link active" : "link")}
      >
        Products
      </NavLink>
      <NavLink
        to="/login"
        className={({ isActive }) => (isActive ? "link active" : "link")}
      >
        login
      </NavLink>
    </nav>
  );
};

export default navbar;
