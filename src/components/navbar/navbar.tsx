import { NavLink } from "react-router-dom";
import { LINKS } from "../../constants/data";
import "./navbar.css";
import { useState } from "react";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <nav className="nav">
      <div className={showMenu ? "nav__menu show_menu" : "nav__menu"}>
        <ul className="nav__list">
          {LINKS.map(({ id, name, icon, path }) => {
            return (
              <li className="nav__item" key={id}>
                <NavLink
                  to={path}
                  className={({ isActive }) =>
                    isActive ? "nav__link active_nav" : "nav__link"
                  }
                  onClick={() => {
                    setShowMenu(false);
                  }}
                >
                  {icon}
                  <h3 className="nav__name">{name}</h3>
                </NavLink>
              </li>
            );
          })}
        </ul>
      </div>

      <div
        className={showMenu ? "nav__toggle animate-toggle" : "nav__toggle"}
        onClick={() => {
          setShowMenu(!showMenu);
        }}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
};

export default Navbar;
