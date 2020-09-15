import React from 'react';
import Card from "../cards/card";
import {SiPaypal, SiGooglepay} from 'react-icons/si';

const PaymentMethod = () => {
  return (

    <Card title={'Payment method'}>

      <form className="card__items-list">
        <label className="card__item">
          <input type="radio" name="paypal" id="paypal"/>
          <span>
            <SiPaypal style={{marginLeft: "20px"}} size={"20px"} color={"#FEFEFE"}/>
          </span>
        </label>

        <label className="card__item">
          <input type="radio" name="google pay" id="google-pay"/>
          <span>
            <SiGooglepay style={{marginLeft: "20px", marginTop: "6px"}} size={"36px"} color={"#FEFEFE"}/>
          </span>
        </label>

      </form>
    </Card>

  );
};

export default PaymentMethod;
