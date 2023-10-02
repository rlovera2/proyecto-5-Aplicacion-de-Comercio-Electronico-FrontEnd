import { useReducer, useCallback } from "react";
import ProductContext from "./ProductContext";
import productReducer from "./ProductReducer";
import PropTypes from "prop-types";
import Swal from "sweetalert2";

import {
  getProductsService,
  getProductService,
} from "../services/productServices";

const initialState = {
  products: [],
  product: {},
  cart: [],
};

const ProductState = ({ children }) => {
  const [globalState, dispatch] = useReducer(productReducer, initialState);

  const getProducts = useCallback(async () => {
    try {
      const response = await getProductsService();
      //console.log(response.data.data);

      dispatch({
        type: "OBTENER_PRODUCTOS",
        payload: response.data.data,
      });
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Error geting products list",
        showConfirmButton: false,
        timer: 2000,
      });
    }
  }, []);

  // const getProducts = async () => {
  //   const response = await getProductsService();
  //   console.log(response.data.data);

  //   dispatch({
  //     type: "OBTENER_PRODUCTOS",
  //     payload: response.data.data,
  //   });
  // };

  // const getProduct = async (id) => {
  //   const response = await getProductService(id);

  //   dispatch({
  //     type: "OBTENER_PRODUCTO",
  //     payload: response.data.data,
  //   });
  // };

  const getProduct = useCallback(async (id) => {
    try {
      const response = await getProductService(id);
      //console.log(response.data.data);

      dispatch({
        type: "OBTENER_PRODUCTO",
        payload: response.data.data,
      });
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Error geting product detail",
        showConfirmButton: false,
        timer: 2000,
      });
    }
  }, []);

  const addProduct = async (id) => {
    try {
      const response = await getProductService(id);

      dispatch({
        type: "AGREGAR_PRODUCTO",
        payload: response.data.data,
      });

      Swal.fire({
        icon: "success",
        title: "The product was added to the cart",
        showConfirmButton: false,
        timer: 2000,
      });
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Error adding product to cart",
        showConfirmButton: false,
        timer: 2000,
      });
    }
  };

  const deleteCartProduct = (id) => {
    try {
      dispatch({
        type: "ELIMINAR_PRODUCTO",
        payload: id,
      });
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Error removing product from cart",
        showConfirmButton: false,
        timer: 2000,
      });
    }
  };

  return (
    <>
      <ProductContext.Provider
        value={{
          products: globalState.products,
          product: globalState.product,
          getProducts,
          getProduct,
          addProduct,
          cart: globalState.cart,
          deleteCartProduct,
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
