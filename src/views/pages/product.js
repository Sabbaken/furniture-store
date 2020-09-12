import React, {Component} from 'react';
import BigCard from "../components/cards/bigCard";
import Navbar from "../components/navbar/navbar";
import {withRouter} from "react-router";
import {connect} from "react-redux";
import {fetchProduct} from "../../store/actions/productsActions";
import LoadingIcon from "../components/loadingIcon";
import Checkout from "../components/checkout";
import GoBack from "../components/goBack";

class Product extends Component {

  render() {
    const {product, fetchProduct} = this.props;

    if (this.props.match.params.id !== product.id) {
      fetchProduct(this.props.match.params.id)
      return (
        <div>
          <LoadingIcon/>
          <Navbar type={'product'}/>
        </div>
      )
    }

    return (
      <div>
        <GoBack/>
        <BigCard product={product}/>
        <Navbar type={'product'}/>
        <Checkout/>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchProduct: (productID) => dispatch(fetchProduct(productID))
  }
}

const mapStateToProps = (state) => {
  return {
    product: state.products.product
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Product));
