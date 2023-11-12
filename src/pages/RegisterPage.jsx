import Header from "../components/Header";
import { useState, useContext } from "react";
import AuthContext from "../context/AuthContext";
// import { loginService } from "../services/authServices";

const initForm = {
  user_name: "",
  password: "",
};

const RegisterPage = () => {
  const [form, setForm] = useState(initForm);
  // const [user, setUser] = useState({});

  const { user, registrarUsuario } = useContext(AuthContext);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (form.user_name == "") {
      limpiarMensajesError();
      document.getElementById("mensaje_user_name").style.display = "inline";
      document.getElementById("inputUserName").focus();
    } else if (form.user_name.length <= 2) {
      limpiarMensajesError();
      document.getElementById("mensaje_user_name").style.display = "inline";
      document.getElementById("inputUserName").focus();
    } else if (form.password == "") {
      limpiarMensajesError();
      document.getElementById("mensaje_password").style.display = "inline";
      document.getElementById("inputPassword").focus();
    } else if (form.password.length < 4) {
      limpiarMensajesError();
      document.getElementById("mensaje_password").style.display = "inline";
      document.getElementById("inputPassword").focus();
    } else {
      await registrarUsuario(form);

      setForm(initForm);
    }
  };

  const limpiarMensajesError = () => {
    document.getElementById("mensaje_user_name").style.display = "none";
    document.getElementById("mensaje_password").style.display = "none";
  };

  return (
    <>
      <Header title="Register user" />
      <br />

      <main className="row">
        <article className="col">
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="inputUserName" className="form-label">
                User Name
              </label>
              <input
                type="text"
                className="form-control"
                id="inputUserName"
                name="user_name"
                value={form.user_name}
                onChange={handleChange}
              />
            </div>
            <div id="mensaje_user_name" className="mensaje">
              Por favor ingrese un [ <i>nombre de usuario</i> ] valido, gracias.
            </div>
            <div className="mb-3">
              <label htmlFor="inputPassword" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="inputPassword"
                name="password"
                value={form.password}
                onChange={handleChange}
              />
            </div>

            <div id="mensaje_password" className="mensaje">
              Por favor ingrese un [<i> Password</i> ] valido, gracias.
              <br />
              <br />
            </div>

            <button type="submit" className="btn btn-primary">
              Create Account
            </button>
          </form>
        </article>
      </main>
      <section className="row">
        <article className="col">
          {/* <pre>{JSON.stringify(user, null, 2)}</pre> */}
          {/* {user?.user_name} */}
        </article>
      </section>
    </>
  );
};

export default RegisterPage;
