import Header from "../components/Header";
import manos1 from "../img/manos1.jpg";

const HomePage = () => {
  return (
    <>
      <Header title="Home Page" />

      <main className="row">
        <article className="col">
          <p>Contenido de la pagina de inicio</p>

          <div className="card" style={{ width: "18rem" }}>
            <img src={manos1} className="card-img-top" alt="..." />
            <div className="card-body">
              <p className="card-text">
                Discover how you can have queens handst.
              </p>
            </div>
          </div>
        </article>
      </main>
    </>
  );
};

export default HomePage;
