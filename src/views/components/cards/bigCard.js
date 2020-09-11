import React from 'react';
import Carousel from "../carousel/carousel";

const BigCard = ({product}) => {
  return (
    <div className="big-card">
      <div>
        <Carousel models={product.models}/>
      </div>
      <div>
        stars
        description
      </div>
      <div>
        price
        btn
      </div>
    </div>
  );
};

export default BigCard;
