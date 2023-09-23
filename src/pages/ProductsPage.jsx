import Header from "../components/Header";
import { useContext } from "react";
import ProductContext from "../context/ProductContext";

/************IMPORTANDP IMAGENES  *******/

import manos1 from "../img/manos1.jpg";
//import manos2 from "../img/manos2.jpg";
//import manos3 from "../img/manos3.jpg";

const ProductsPage = () => {
  const { getProducts, products } = useContext(ProductContext);

  const handleClick = async () => {
    await getProducts();
  };

  return (
    <>
      <Header title="Products" />
      <br />
      <main className="row">
        <article className="col">
          <button type="button" onClick={handleClick}>
            Obtener productos
          </button>
        </article>
      </main>

      <div className="row row-cols-1 row-cols-md-3 g-4">
        {products.map((product) => (
          <div key={product.id} className="col">
            <div className="card">
              <img
                src={product.image}
                className="card-img-top"
                alt={product.name}
              />
              <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">
                  US$ <h5>{product.price}</h5>
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ProductsPage;
