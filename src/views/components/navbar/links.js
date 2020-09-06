import React from 'react';
import {NavLink} from "react-router-dom";

const Links = () => {
  return (
    <div className="navbar__links">
      <NavLink
        className="navbar__link"
        activeClassName="navbar__link navbar__link--active"
        to="/section/bathroom"
      >
        Kitchen
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
  );
};

export default Links;
