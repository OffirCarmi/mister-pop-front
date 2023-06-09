import { NavLink } from "react-router-dom";

export const AppNavbar = () => {
  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/pop">POPS</NavLink>
      <NavLink to="/admin">Admin</NavLink>
      <NavLink to="/about">About</NavLink>
    </nav>
  );
};
