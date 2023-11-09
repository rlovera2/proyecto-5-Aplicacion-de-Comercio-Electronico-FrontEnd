import Header from "../components/Header";
import Footer from "../components/Footer";
/************IMPORTANDP IMAGENES  *******/

import manos1 from "../img/manos1.jpg";
import manos2 from "../img/manos2.jpg";
import manos3 from "../img/manos3.jpg";
import manos4 from "../img/manos4.jpg";
import manos5 from "../img/manos5.jpg";
import manos6 from "../img/manos6.jpg";

const HomePage = () => {
  return (
    <>
      <Header
        title="Queens Hands
"
      />
      <main className="row ">
        <article className="col ">
          <p>
            Come with us and let yourself be pampered so that you feel like a
            queen, choose the design of your choice
          </p>
          <center>
            <div style={{ width: "70%" }}>
              <div id="carouselExampleIndicators" className="carousel slide">
                <div className="carousel-indicators">
                  <button
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide-to={0}
                    className="active"
                    aria-current="true"
                    aria-label="Slide 1"
                  />
                  <button
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide-to={1}
                    aria-label="Slide 2"
                  />
                  <button
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide-to={2}
                    aria-label="Slide 3"
                  />
                  <button
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide-to={3}
                    aria-label="Slide 4"
                  />
                  <button
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide-to={4}
                    aria-label="Slide 5"
                  />
                  <button
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide-to={5}
                    aria-label="Slide 6"
                  />
                </div>
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img
                      src={manos1}
                      className="d-block w-100 imagenes_home"
                      alt="..."
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src={manos2}
                      className="d-block w-100 imagenes_home"
                      alt="..."
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src={manos3}
                      className="d-block w-100 imagenes_home"
                      alt="..."
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src={manos4}
                      className="d-block w-100 imagenes_home"
                      alt="..."
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src={manos5}
                      className="d-block w-100 imagenes_home"
                      alt="..."
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src={manos6}
                      className="d-block w-100 imagenes_home"
                      alt="..."
                    />
                  </div>
                </div>
                <button
                  className="carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide="prev"
                >
                  <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                  />
                  <span className="visually-hidden">Previous</span>
                </button>
                <button
                  className="carousel-control-next"
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide="next"
                >
                  <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                  />
                  <span className="visually-hidden">Next</span>
                </button>
              </div>

              <br />
              <div className="card-body">
                <p className="card-text">
                  Discover how you can have queens handst.
                </p>
              </div>
            </div>
          </center>
        </article>
      </main>
      <br />
      <br />
      <Footer />
    </>
  );
};

export default HomePage;
