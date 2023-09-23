import { useReducer } from "react";
import ProductContext from "./ProductContext";
import productReducer from "./ProductReducer";
import PropTypes from "prop-types";

import { getProductsService } from "../services/productServices";

const initialState = {
  products: [],
  product: {},
};

const ProductState = ({ children }) => {
  const [globalState, dispatch] = useReducer(productReducer, initialState);

  const getProducts = async () => {
    const response = await getProductsService();
    console.log(response.data.data);

    dispatch({
      type: "OBTENER_PRODUCTOS",
      payload: response.data.data,
    });
  };
  const getProduct = () => {};

  return (
    <>
      <ProductContext.Provider
        value={{
          products: globalState.products,
          product: globalState.product,
          getProducts,
          getProduct,
        }}
      >
        {children}
      </ProductContext.Provider>
    </>
  );
};

ProductState.propTypes = {
  children: PropTypes.node,
};

export default ProductState;
