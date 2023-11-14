import Header from "../components/Header";
import Footer from "../components/Footer";
import { useContext, useEffect } from "react";
import ProductContext from "../context/ProductContext";
import { Link } from "react-router-dom";

/************IMPORTANDP IMAGENES  *******/

import manos1 from "../img/manos1.jpg";
import manos2 from "../img/manos2.jpg";
import manos3 from "../img/manos3.jpg";
import manos4 from "../img/manos4.jpg";
import manos5 from "../img/manos5.jpg";
import manos6 from "../img/manos6.jpg";
import manos7 from "../img/manos7.jpg";
import manos8 from "../img/manos8.jpg";
import manos9 from "../img/manos9.jpg";
import manos10 from "../img/manos10.jpg";

const ProductsPage = () => {
  const { getProducts, products, addProduct } = useContext(ProductContext);
  let { globalCant } = useContext(ProductContext);

  // const [nCant, setnCant] = useState();

  // setnCant(0);

  //let nameIMG = useContext(ProductContext);
  // let nameIMG = "";
  // const handleClick = async () => {
  //   await getProducts();
  // };

  const handleAddProduct = (id) => {
    //console.log(id);
    addProduct(id);
  };

  useEffect(() => {
    getProducts();
  }, [getProducts]);

  // function Images(ruta, nombre) {
  //   return (
  //     <>
  //       {/* <img src="../img/manos5.jpg" alt="Manos 5" /> */}

  //       <img src={ruta} alt={nombre} className="card-img-top" />
  //     </>
  //   );
  // }

  // const quantityProduct = (quantity) => {
  //   let quantityItems = [];
  //   quantity = 2;
  //   for (let i = 1; i <= quantity; i++) {
  //     quantityItems.push(`<option value="${[i]}">${[i]}</option>`);
  //   }

  //   //return console.log(quantityItems);

  //   return { quantityItems };
  // };

  // const loadQuantityProduct = (quantity) => {
  //   globalCant = quantity;
  //   alert(globalCant);
  // };

  // const handleInputChange = () => {
  //   // setnCant({ ...nCant, [e.target.name]: e.target.value });
  //   globalCant = document.nCant.value;
  //   alert(globalCant);
  // };

  return (
    <>
      <Header title="Products" />
      <br />
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {products.map((product) => (
          <div key={product.id} className="col">
            <div className="card">
              <Link to={`/products/${product.id}`}>
                {/* {console.log(manos1 + " el codigo")}
                {console.log(product.image + " la bd")}
                {console.log(product.image.substring(9, 15))} */}
                {product.image == "manos1" ? (
                  <>
                    <img
                      src={manos1}
                      className="card-img-top"
                      alt={product.name}
                      name={product.image}
                    />
                  </>
                ) : (
                  <>
                    {product.image == "manos2" ? (
                      <>
                        <img
                          src={manos2}
                          className="card-img-top"
                          alt={product.name}
                          name={product.image}
                        />
                      </>
                    ) : (
                      <>
                        {product.image == "manos3" ? (
                          <>
                            <img
                              src={manos3}
                              className="card-img-top"
                              alt={product.name}
                              name={product.image}
                            />
                          </>
                        ) : (
                          <>
                            {product.image == "manos4" ? (
                              <>
                                <img
                                  src={manos4}
                                  className="card-img-top"
                                  alt={product.name}
                                  name={product.image}
                                />
                              </>
                            ) : (
                              <>
                                {product.image == "manos5" ? (
                                  <>
                                    <img
                                      src={manos5}
                                      className="card-img-top"
                                      alt={product.name}
                                      name={product.image}
                                    />
                                  </>
                                ) : (
                                  <>
                                    {product.image == "manos6" ? (
                                      <>
                                        <img
                                          src={manos6}
                                          className="card-img-top"
                                          alt={product.name}
                                          name={product.image}
                                        />
                                      </>
                                    ) : (
                                      <>
                                        {product.image == "manos7" ? (
                                          <>
                                            <img
                                              src={manos7}
                                              className="card-img-top"
                                              alt={product.name}
                                              name={product.image}
                                            />
                                          </>
                                        ) : (
                                          <>
                                            {product.image == "manos8" ? (
                                              <>
                                                <img
                                                  src={manos8}
                                                  className="card-img-top"
                                                  alt={product.name}
                                                  name={product.image}
                                                />
                                              </>
                                            ) : (
                                              <>
                                                {product.image == "manos9" ? (
                                                  <>
                                                    <img
                                                      src={manos9}
                                                      className="card-img-top"
                                                      alt={product.name}
                                                      name={product.image}
                                                    />
                                                  </>
                                                ) : (
                                                  <>
                                                    {product.image ==
                                                    "manos10" ? (
                                                      <>
                                                        <img
                                                          src={manos10}
                                                          className="card-img-top"
                                                          alt={product.name}
                                                          name={product.image}
                                                        />
                                                      </>
                                                    ) : (
                                                      <>
                                                        <img
                                                          src={product.image}
                                                          className="card-img-top "
                                                          alt={product.name}
                                                          name={product.image}
                                                        />
                                                      </>
                                                    )}
                                                  </>
                                                )}
                                              </>
                                            )}
                                          </>
                                        )}
                                      </>
                                    )}
                                  </>
                                )}
                              </>
                            )}
                          </>
                        )}
                      </>
                    )}
                  </>
                )}
                {/* {Images(product.image, product.name)} */}
              </Link>
              {/* {console.log(product.image.substring(7, 13))} */}
              <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                US$
                <h4>
                  <p className="card-text">{product.price}</p>
                </h4>
                {product.quantity == 0 ? (
                  <>
                    <h6>
                      <i>
                        {" "}
                        Sorry, there are no units available for this product at
                        this time.
                      </i>
                    </h6>
                  </>
                ) : (
                  <>
                    <h6>Available in stock [ {product.quantity} ] units </h6>
                    <p />
                  </>
                )}
                {product.quantity == 0 ? (
                  <>
                    <p className="textoNotDisponible">
                      <h5>Not available</h5>
                    </p>
                  </>
                ) : (
                  <>
                    <p className="textoDisponible">
                      <h5>Available</h5>
                    </p>
                    {/* ******************************************************************************************** */}

                    {/* <select
                      id="nCantInput"
                      name="nCant"
                      onChange={handleInputChange}
                    >
                      {quantityProduct(product.quantity)}
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                    </select>
                    <br />
                    <br /> */}
                  </>
                )}
                <div className="d-flex justify-content-between">
                  {/* si no existen productos se desabilita el boton de agregar
                      al carrito */}
                  {product.quantity == 0 ? (
                    <>
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
                      <button
                        type="button"
                        className="btn btn-warning btn-lg"
                        onClick={() => handleAddProduct(product.id)}
                      >
                        <i className="bi bi-cart-plus" />
                      </button>
                    </>
                  )}

                  <Link
                    to={`/products/${product.id}`}
                    className="btn btn-info btn-lg"
                  >
                    <i className="bi bi-box-seam" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <br /> <br />
      <Footer />
    </>
  );
};

export default ProductsPage;
