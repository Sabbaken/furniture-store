import React from 'react';
import CartContent from "./cartContent";
import ShippingDetails from "./shippingDetails";
import PaymentMethod from "./paymentMethod";

const CheckoutList = () => {
  return (
    <div className="content">
      <CartContent/>
      <ShippingDetails/>
      <PaymentMethod/>

      <div className="card__content">
        <button className="btn btn-action">Confirm</button>
      </div>
    </div>
  );
};

export default CheckoutList;
