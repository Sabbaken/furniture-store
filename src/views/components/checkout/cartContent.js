import React from 'react';
import SmallCard from "../cards/smallCard";
import {connect} from "react-redux";
import ItemsControls from "./itemsControls";
import {decreaseItem, increaseItem} from "../../../store/actions/cartActions";
import Card from "../cards/card";

const CartContent = ({cartContent, handleDecrease, handleIncrease}) => {

  const getTotal = (cartContent) => {
    let total = cartContent.reduce((acc, product) => {
      return acc + (product.price * product.count);
    }, 0)
    return total;
  }

  if (cartContent.length < 1)
    return (
      <Card title={'Cart'}>
          <span className="label">
            Your cart is empty
          </span>
      </Card>
    );

  return (
    <Card title={'Cart'}>
      {cartContent.map((product) => {
        return <div className="cart-content__item" key={product.id}>
          <SmallCard product={product}/>
          <ItemsControls product={product} handleIncrease={handleIncrease} handleDecrease={handleDecrease}/>
        </div>;
      })}
      <div className="cart-content__footer">
        ${getTotal(cartContent)}
      </div>
    </Card>
  );
};

const mapStateToProps = (state) => {
  return {
    cartContent: state.cart.cartContent
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleDecrease: (item) => {
      dispatch(decreaseItem(item))
    },
    handleIncrease: (item) => {
      dispatch(increaseItem(item))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartContent);
