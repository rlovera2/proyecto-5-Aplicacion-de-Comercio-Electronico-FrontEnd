import { useContext, useEffect } from "react";
import ProductContext from "../context/ProductContext";
import { useParams } from "react-router-dom";
import Footer from "../components/Footer";
//import require from "react";

/************IMPORTANDP IMAGENES  *******/

import manos1 from "../img/manos1.jpg";
import manos2 from "../img/manos2.jpg";
import manos3 from "../img/manos3.jpg";
import manos4 from "../img/manos4.jpg";
import manos5 from "../img/manos5.jpg";
import manos6 from "../img/manos6.jpg";

const ProductPage = () => {
  const { getProduct, product, addProduct } = useContext(ProductContext);
  const { id } = useParams();

  let nameIMG = useContext(ProductContext);

  //  const srcIMG = require("../img", true);

  //  const srcIMG = import(`../img/${product.image}`);

  //let srcIMG = "../img/" + product.image + ".jpg";

  // const handleClick = async () => {
  //   await getProduct(id);
  // };

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

  const handleAddProduct = (id) => {
    //console.log(id);
    addProduct(id);
  };

  useEffect(() => {
    getProduct(id);
  }, [getProduct, id]);

  return (
    <>
      <br />
      <section className="row">
        <article className="col">
          {product && (
            <div className="card mb-3">
              <div className="row g-0">
                <div className="col-md-4">
                  {/* {console.log(product.image)} */}
                  {/* {console.log(srcIMG)} */}
                  {/* {console.log(nameIMG)} */}

                  <img
                    src={getnameIMG(product.image)}
                    className="img-fluid rounded-start"
                    alt={product.name}
                  />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">{product.name}</h5>
                    <p className="card-text">{product.description}</p>
                    US$
                    <h4>
                      <p className="card-text">
                        {/* <small className="text-body-secondary"> */}
                        {product.price}
                        {/* </small> */}
                      </p>
                    </h4>
                    {product.quantity == 0 ? (
                      <>
                        <h6>
                          <i>
                            {" "}
                            Sorry, there are no units available for this product
                            at this time.
                          </i>
                        </h6>
                        <p className="textoNotDisponible">
                          <h5>Not available</h5>
                        </p>
                        {/* si no existen productos se desabilita el boton de agregar
                      al carrito */}
                        <button
                          type="button"
                          className="btn btn-warning btn-lg"
                          onClick={() => handleAddProduct(product.id)}
                          disabled
                        >
                          <i className="bi bi-cart-plus" />
                        </button>
                      </>
                    ) : (
                      <>
                        <p className="textoDisponible">
                          <h5>Available</h5>
                        </p>
                        <h6>
                          Available in stock [ {product.quantity} ] units{" "}
                        </h6>
                        <br />
                        <button
                          type="button"
                          className="btn btn-warning btn-lg"
                          onClick={() => handleAddProduct(product.id)}
                        >
                          <i className="bi bi-cart-plus" />
                        </button>
                      </>
                    )}
                    <br />
                  </div>
                </div>
              </div>
            </div>
          )}
        </article>
      </section>
      <br /> <br />
      <Footer />
    </>
  );
};

export default ProductPage;
