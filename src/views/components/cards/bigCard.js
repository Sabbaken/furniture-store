import React from 'react';
import Carousel from "../carousel/carousel";
import Stars from "../stars";
import {addItem} from "../../../store/actions/cartActions";
import {connect} from "react-redux";

const BigCard = ({product, addItem}) => {
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
        <button className="btn btn-primary" onClick={() => {addItem(product)}}>cart <img src="/icons/plus.svg" alt="add to cart"/></button>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    addItem: (item) => dispatch(addItem(item))
  }
}

export default connect(null, mapDispatchToProps)(BigCard);
