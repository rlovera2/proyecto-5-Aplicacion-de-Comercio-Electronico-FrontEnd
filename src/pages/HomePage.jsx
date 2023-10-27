import Header from "../components/Header";

const HomePage = () => {
  return (
    <>
      <Header title="Home Page" />

      <main className="row">
        <article className="col">
          <p>Contenido de la pagina de inicio</p>
          <img src="./src/img/manos1.jpg" />
        </article>
      </main>
    </>
  );
};

export default HomePage;
