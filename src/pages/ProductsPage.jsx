import Header from "../components/Header";
import { useContext, useEffect } from "react";
import ProductContext from "../context/ProductContext";
import { Link } from "react-router-dom";

/************IMPORTANDP IMAGENES  *******/

// import manos1 from "../img/manos1.jpg";
// import manos2 from "../img/manos2.jpg";
// import manos6 from "../img/manos6.jpg";

const ProductsPage = () => {
  const { getProducts, products, addProduct } = useContext(ProductContext);

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

  return (
    <>
      <Header title="Products" />

      <br />
      {/* {Images(manos6)} */}
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {products.map((product) => (
          <div key={product.id} className="col">
            <div className="card">
              <Link to={`/products/${product.id}`}>
                <img
                  src={product.image}
                  className="card-img-top"
                  alt={product.name}
                  name={product.image.substring(8, 14)}
                />

                {/* {Images(product.image, product.name)} */}
              </Link>
              {console.log(product.image.substring(7, 13))}
              <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                US$
                <h4>
                  <p className="card-text">{product.price}</p>
                </h4>
                <h6>Available in stock [ {product.quantity} ] units </h6>
                <div className="d-flex justify-content-between">
                  <button
                    type="button"
                    className="btn btn-warning btn-lg"
                    onClick={() => handleAddProduct(product.id)}
                  >
                    <i className="bi bi-cart-plus" />
                  </button>
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

      {/* <div className="row row-cols-1 row-cols-md-3 g-4">
        <div className="card">
          <img src={manos1} className="card-img-top" alt="manos" />
          <div className="card-body">
            <h5 className="card-title">Modelo elegante</h5>
            <p className="card-text">
              US$ <h5>40</h5>
            </p>
          </div>
        </div>
      </div> */}
    </>
  );
};

export default ProductsPage;
