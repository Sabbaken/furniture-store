import React from 'react';
import {connect} from "react-redux";
import Section from "./section";
import SmallCard from "../cards/smallCard";
import {fetchSection} from "../../../store/actions/productsActions";
import LoadingIcon from "../loadingIcon";

const CategorySection = ({section, products, fetchSection}) => {

  if(!products[section]) {
    fetchSection(section);
    return <LoadingIcon/>;
  }

  return (
    <Section title={"Popular"}>
      {products[section].section.map((product) => {
        return <SmallCard key={product.id} product={product}/>;
      })}
    </Section>
  );
};

const mapStateToProps = (state) => {
  return ({
    products: state.products.products
  })
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchSection: (section) => dispatch(fetchSection(section))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CategorySection);
