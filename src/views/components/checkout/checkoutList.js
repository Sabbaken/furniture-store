import React from 'react';
import CartContent from "./cartContent";
import ShippingDetails from "./shippingDetails";
import PaymentMethod from "./paymentMethod";

const CheckoutList = () => {
  return (
    <div className="content">
      <CartContent/>
      <ShippingDetails/>
    </div>
  );
};

export default CheckoutList;
