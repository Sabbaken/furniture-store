import React from 'react';
import Carousel from "../carousel/carousel";
import Stars from "../stars";

const BigCard = ({product}) => {
  return (
    <div className="big-card">
      <div>
        <Carousel models={product.models}/>
      </div>

      <div className="big-card__content">
        <span className="big-card__title">
          {product.name}
        </span>
        <Stars stars={5} value={product.rating - 1}/>
        <p className="big-card__description">
          {product.description}
        </p>
      </div>

      <div className="big-card__content big-card__footer">
        <span className="big-card__price-tag">
          ${product.price}
        </span>
        <button className="btn btn-primary">cart <img src="/icons/plus.svg" alt="add to cart"/></button>
      </div>
    </div>
  );
};

export default BigCard;
