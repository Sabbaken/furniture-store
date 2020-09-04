import React from 'react';

const SmallCard = ({product}) => {
  return (
    <div className="small-card">
      <img className="small-card__image" src={product.models[0].photo} alt=""/>
      <div>
        <p className="small-card__title">{product.name}</p>
        <p className="small-card__price">${product.price}</p>
      </div>
    </div>
  );
};

export default SmallCard;
