import React, {Component} from 'react';
import BigCard from "../components/cards/bigCard";
import Navbar from "../components/navbar/navbar";

class Product extends Component {
  render() {
    return (
      <div>
        <BigCard product={this.props.match.params.section}/>
        <Navbar type={'product'}/>
      </div>
    );
  }
}

export default Product;
