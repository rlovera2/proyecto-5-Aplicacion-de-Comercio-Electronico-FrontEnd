import Header from "../components/Header";
import manos1 from "../img/manos1.jpg";

const HomePage = () => {
  return (
    <>
      <Header title="Home Page" />

      <main className="row">
        <article className="col">
          <p>Contenido de la pagina de inicio</p>
          <img src={manos1} />
        </article>
      </main>
    </>
  );
};

export default HomePage;
