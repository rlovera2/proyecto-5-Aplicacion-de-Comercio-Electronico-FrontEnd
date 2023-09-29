import Header from "../components/Header";
import { useContext } from "react";
import ProductContext from "../context/ProductContext";

const CartPage = () => {
  const { cart } = useContext(ProductContext);
  return (
    <>
      <Header title="Cart Page" />

      {cart.map((item) => (
        <div key={item.id}>{item.name}</div>
      ))}
    </>
  );
};

export default CartPage;
