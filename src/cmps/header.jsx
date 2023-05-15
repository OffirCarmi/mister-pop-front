// import { Link } from "react-router-dom";

import { AppNavbar } from "./app-navbar.jsx";
import { Logo } from "./logo.jsx";

export const Header = () => {
  return (
    <header>
      <Logo />
      <AppNavbar />
      <div className="action">Actions</div>
    </header>
  );
};
