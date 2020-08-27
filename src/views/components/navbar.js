import React from 'react';
import {NavLink} from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar__buttons">
        icons
      </div>

      <div className="navbar__links">
        <NavLink
          className="navbar__link"
          activeClassName="navbar__link navbar__link--active"
          to="/section/bathroom"
        >
          Bathroom
        </NavLink>

        <NavLink
          className="navbar__link"
          activeClassName="navbar__link navbar__link--active"
          to="/section/bedroom"
        >
          Bedroom
        </NavLink>

        <NavLink
          className="navbar__link"
          activeClassName="navbar__link navbar__link--active"
          to="/section/livingroom"
        >
          Living room
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
