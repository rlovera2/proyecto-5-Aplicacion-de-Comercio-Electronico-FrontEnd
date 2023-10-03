import Header from "../components/Header";
import { useContext, useState, useEffect } from "react";
import ProductContext from "../context/ProductContext";
//import { Link } from "react-router-dom";

const CartPage = () => {
  const { cart, deleteCartProduct } = useContext(ProductContext);
  const [ammount, setAmmount] = useState(0);

  const handleDeleteProduct = (id) => {
    deleteCartProduct(id);
  };

  useEffect(() => {
    setAmmount(cart.reduce((acc, product) => acc + product.price, 0));
  }, [cart]);

  return (
    <>
      <Header title="Cart" />
      {/* {cart.map((item) => (
        <div key={item.id}>{item.name}</div>
      ))} */}

      <main className="row">
        <article className="col">
          {cart.map((item) => (
            <div key={item.id} className="card mb-3">
              <div className="row g-0">
                <div className="col-md-4">
                  <img
                    src={item.image}
                    className="img-fluid rounded-start"
                    alt={item.name}
                  />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">{item.name}</h5>
                    <p className="card-text">{item.description}</p>
                    <p className="card-text">US$</p>
                    <p className="fs-3">{item.price}</p>

                    <div className="d-flex justify-content-end">
                      <button
                        type="button"
                        className="btn btn-danger"
                        onClick={() => handleDeleteProduct(item.id)}
                      >
                        Eliminar del carrito
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </article>
      </main>
      <section className="row">
        <article className="col">
          <p className="fs-1">Total:</p>
          <p className="fs-2">{ammount}</p>
        </article>
      </section>
    </>
  );
};

export default CartPage;