import * as axios from "axios";

export const fetchSection = (section) => {
  return (dispatch, getState) => {
    axios.get(`https://us-central1-furniture-store-530bc.cloudfunctions.net/fetchSection?section=${section}`)
      .then((response) => {
        dispatch({type: 'FETCH_CATEGORY_SUCCESS', payload: {sectionName: section, section: response.data}})
      })
      .catch((error) => {
        console.log(error);
      });
  }
}

export const fetchProduct = (productID) => {
  console.log("fetchProduct")

  return (dispatch, getState) => {
    axios.get(`https://us-central1-furniture-store-530bc.cloudfunctions.net/fetchProduct?product=${productID}`)
      .then((response) => {
        dispatch({type: 'FETCH_PRODUCT_SUCCESS', payload: {...response.data.product, id: productID}})
      })
      .catch((error) => {
        console.log(error);
      });
  }
}
