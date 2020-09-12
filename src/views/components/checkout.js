import React, {Component} from 'react';
import 'react-responsive-modal/styles.css';
import {Link} from "react-router-dom";

class Checkout extends Component {
  render() {
    return (
      <Link className="checkout" to='/checkout'>
        <span className="checkout__link btn btn-secondary ">BUY NOW
        </span>
        <img className="checkout__icon" src="/icons/chevron-right.svg" alt="checkout"/>
      </Link>
    );
  }
}

export default Checkout;
