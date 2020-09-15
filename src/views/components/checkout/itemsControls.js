import React from 'react';

const ItemsControls = ({product, handleIncrease, handleDecrease}) => {
  return (
    <div className="cart-content__controls">
      <button className="btn btn-controls" onClick={() => {handleDecrease(product)}}>-</button>
      <span className="cart-content__price">{product.count}</span>
      <button className="btn btn-controls" onClick={() => {handleIncrease(product)}}>+</button>
    </div>
  );
};

export default ItemsControls;
