import React from 'react';
import {Link} from "react-router-dom";

const SmallCard = ({product}) => {
  return (
    <Link to={"/product/" + product.id} className="small-card">
      <img className="small-card__image" src={product.models[0].photo} alt=""/>
      <div>
        <p className="small-card__title">{product.name}</p>
        <p className="small-card__price">${product.price}</p>
      </div>
    </Link>
  );
};

export default SmallCard;
