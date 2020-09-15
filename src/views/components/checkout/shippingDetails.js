import React from 'react';
import Card from "../cards/card";

const ShippingDetails = () => {
  return (
    <Card title={'Shipping to'}>
      <label className="label">Address</label>
      <input className="text-input" type="text" name="address" id="address" />
      <label className="label">Zip code</label>
      <input className="text-input" type="number" name="address" id="address" />
    </Card>
  );
};

export default ShippingDetails;
