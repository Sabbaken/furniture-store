import React from 'react';
import Search from "./search/search";
import Cart from "./cart";
import Links from "./links";
import Checkout from "./checkout";

const Navbar = ({type}) => {
  if (type === 'product') {
    return (
      <div className="navbar">
        <div className="navbar__buttons">
          <Cart/>
        </div>

        <div className="navbar__buttons">
          <Checkout/>
        </div>
      </div>
    );
  }

  return (
    <div className="navbar">
      <div className="navbar__buttons">
        <Cart/>
        <Search/>
      </div>

      <Links/>
    </div>
  );
};

export default Navbar;
