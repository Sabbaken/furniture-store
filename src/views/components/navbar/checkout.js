import React, {Component} from 'react';
import 'react-responsive-modal/styles.css';
import {Link} from "react-router-dom";

class Checkout extends Component {
  render() {
    return (
      <Link to='/checkout'>
        <img className="navbar__button-big" src="/icons/chevron-right.svg" alt="checkout"/>
      </Link>
    );
  }
}

export default Checkout;
