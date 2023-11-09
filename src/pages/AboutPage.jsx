import Header from "../components/Header";
import Footer from "../components/Footer";
import imagenAbout from "../img/manos-home.jpg";

const AboutPage = () => {
  return (
    <>
      <Header title="About Queens Hands" />

      <main className="row">
        <article className="col">
          <p>
            We are a company dedicated to preserving the beauty of women, taking
            care of every detail that makes the difference of being in our hands
            creating the hands of a queen.
          </p>

          <br />
          <br />
          <center>
            <img src={imagenAbout} />
          </center>
        </article>
      </main>
      <br />
      <br />
      <Footer />
    </>
  );
};

export default AboutPage;
