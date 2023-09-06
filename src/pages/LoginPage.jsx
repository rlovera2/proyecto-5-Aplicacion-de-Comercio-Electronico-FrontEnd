import Header from "../components/Header";
import { useState } from "react";
import { loginService } from "../services/authServices";

const initForm = {
  user_name: "",
  password: "",
};

const LoginPage = () => {
  const [form, setForm] = useState(initForm);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await loginService(form);
      console.log(res.data);
    } catch (error) {
      console.log(error.response.data);
    }

    setForm(initForm);
  };

  return (
    <>
      <Header title="Login Page" />

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

            <button type="submit" className="btn btn-primary">
              Iniciar Sesion
            </button>
          </form>
        </article>
      </main>
    </>
  );
};

export default LoginPage;
