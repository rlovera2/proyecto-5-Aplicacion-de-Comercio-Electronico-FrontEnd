import Header from "../components/Header";
import { useContext, useState, useEffect } from "react";
import ProductContext from "../context/ProductContext";
//import PaypalCheckoutButton from "../components/PayPalButton";
import AuthContext from "../context/AuthContext";
import { Link } from "react-router-dom";

/************IMPORTANDP IMAGENES  *******/

import manos1 from "../img/manos1.jpg";
import manos2 from "../img/manos2.jpg";
import manos3 from "../img/manos3.jpg";
import manos4 from "../img/manos4.jpg";
import manos5 from "../img/manos5.jpg";
import manos6 from "../img/manos6.jpg";

import {
  PayPalScriptProvider,
  PayPalButtons,
  usePayPalScriptReducer,
} from "@paypal/react-paypal-js";

// This value is from the props in the UI
const style = { layout: "vertical" };

function createOrder() {
  // replace this url with your server
  return fetch(
    "https://react-paypal-js-storybook.fly.dev/api/paypal/create-order",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      // use the "body" param to optionally pass additional order information
      // like product ids and quantities
      body: JSON.stringify({
        cart: [
          {
            sku: "1blwyeo8",
            quantity: 2,
          },
        ],
      }),
    }
  )
    .then((response) => response.json())
    .then((order) => {
      // Your code here after create the order
      return order.id;
    });
}
function onApprove(data) {
  // replace this url with your server
  return fetch(
    "https://react-paypal-js-storybook.fly.dev/api/paypal/capture-order",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        orderID: data.orderID,
      }),
    }
  )
    .then((response) => response.json())
    .then((orderData) => {
      // Your code here after capture the order
    });
}

// Custom component to wrap the PayPalButtons and show loading spinner
const ButtonWrapper = ({ showSpinner }) => {
  const [{ isPending }] = usePayPalScriptReducer();

  return (
    <>
      {showSpinner && isPending && <div className="spinner" />}
      <PayPalButtons
        style={style}
        disabled={false}
        forceReRender={[style]}
        fundingSource={undefined}
        createOrder={createOrder}
        onApprove={onApprove}
      />
    </>
  );
};

const CartPage = () => {
  const { cart, deleteCartProduct } = useContext(ProductContext);
  const { user } = useContext(AuthContext);

  let nameIMG = useContext(ProductContext);

  const [ammount, setAmmount] = useState(0);

  const handleDeleteProduct = (id) => {
    deleteCartProduct(id);
  };

  useEffect(() => {
    setAmmount(cart.reduce((acc, product) => acc + product.price, 0));
  }, [cart]);

  const getnameIMG = (name) => {
    if (name == "manos1") {
      nameIMG = manos1;
    } else if (name == "manos2") {
      nameIMG = manos2;
    } else if (name == "manos3") {
      nameIMG = manos3;
    } else if (name == "manos4") {
      nameIMG = manos4;
    } else if (name == "manos5") {
      nameIMG = manos5;
    } else if (name == "manos6") {
      nameIMG = manos6;
    }
    return nameIMG;
  };

  return (
    <>
      <Header title="Cart" />

      <main className="row">
        <article className="col">
          {cart.map((item) => (
            <div key={item.id} className="card mb-3">
              <div className="row g-0">
                <div className="col-md-4">
                  <img
                    src={getnameIMG(item.image)}
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
                        Remove from cart
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
          {cart.length > 0 ? (
            <>
              <p className="fs-2">Total taxes ( 7% ):</p>
              <p className="fs-2">{(ammount * 7) / 100}</p>
              <p className="fs-1 textoTotal">Total del pedido:</p>
              <p className="fs-2 textoTotal">{ammount + (ammount * 7) / 100}</p>
              <br />
              {user.user_name ? (
                <>
                  {/* <p>Boton Paypal</p>
                  <PaypalCheckoutButton
                    currency={"USD"}
                    amount={ammount}
                    showSpinner={false}
                  /> */}
                  <div style={{ maxWidth: "250px", minHeight: "200px" }}>
                    <PayPalScriptProvider
                      options={{
                        clientId: "test",
                        components: "buttons",
                        currency: "USD",
                      }}
                    >
                      <ButtonWrapper showSpinner={false} amount={ammount} />
                    </PayPalScriptProvider>
                  </div>
                  ;
                  <br />
                  <br />
                </>
              ) : (
                <>
                  <Link to="/login" className="btn btn-success">
                    Login
                  </Link>
                  <br />
                  <br />
                </>
              )}
            </>
          ) : (
            <>
              <br />
              <p className="fs-2">No hay productos en el carrito</p>
            </>
          )}
        </article>
      </section>
    </>
  );
};

export default CartPage;
