import React, {Component, Fragment} from 'react';
import Navbar from "../components/navbar/navbar";
import CategorySection from "../components/sections/categorySection";


class Main extends Component {
  render() {
    return (
      <Fragment>
        <CategorySection section={this.props.match.params.section}/>
        <Navbar/>
      </Fragment>
    );
  }
}

export default Main;
