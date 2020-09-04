import React from 'react';
import {connect} from "react-redux";
import Section from "./section";
import SmallCard from "../navbar/cards/smallCard";
import {fetchSection} from "../../../store/actions/productsActions";

const CategorySection = ({section, products, fetchSection}) => {
  if(!products[section]) {
    fetchSection(section);
    return <LoadingIcon/>;
  }

  section = products[section];

  return (
    <Section title={"Popular"}>
      {section.map((product) => {
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
