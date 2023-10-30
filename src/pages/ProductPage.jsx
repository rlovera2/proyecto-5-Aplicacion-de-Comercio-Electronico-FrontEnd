import { useContext, useEffect } from "react";
import ProductContext from "../context/ProductContext";
import { useParams } from "react-router-dom";
//import manos from "../img/manos1.jpg";

const ProductPage = () => {
  const { getProduct, product, addProduct } = useContext(ProductContext);
  const { id } = useParams();

  // const rutaIMG = () => {
  //   {product.map((item) => ())
  //   if (product.image == "manos1") {
  //     import manos1 from "../img/manos1.jpg";
  //   }
  // };

  // const handleClick = async () => {
  //   await getProduct(id);
  // };

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
                  {console.log(product.image)}
                  <img
                    src={product.image}
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
                    <h6>Available in stock [ {product.quantity} ] units </h6>
                    <br />
                    <button
                      type="button"
                      className="btn btn-warning btn-lg"
                      onClick={() => handleAddProduct(product.id)}
                    >
                      <i className="bi bi-cart-plus" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </article>
      </section>
    </>
  );
};

export default ProductPage;
