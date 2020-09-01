import React from 'react';
import {connect} from "react-redux";
import {NavLink} from "react-router-dom";

const Cart = ({showDot = true}) => {
  console.log("showDot: ", showDot)

  return (
    <NavLink to="/checkout" className="cart">
      <img className="navbar__button" src="/icons/shopping-bag.svg" alt="shopping cart"/>
      {
        showDot ?
          <img className="cart__dot" src="/icons/dot.svg" alt="have items in cart"/> :
          ""
      }
    </NavLink>
  );
};

const mapStateToProps = (state) => {
  return {
    showDot: state.cart.cart.length > 0,
  }
}

export default connect(mapStateToProps)(Cart);
