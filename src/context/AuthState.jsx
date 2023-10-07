import { useReducer } from "react";
import AuthContext from "./AuthContext";
import authReducer from "./AuthReducer";
import PropTypes from "prop-types";
import Swal from "sweetalert2";

import { loginService, registerService } from "../services/authServices";

const initialState = {
  user: null,
};

const AuthState = ({ children }) => {
  const [globalState, dispatch] = useReducer(authReducer, initialState);

  const iniciarSesion = async (form) => {
    try {
      const resp = await loginService(form);

      dispatch({
        type: "INICIAR_SESION",
        payload: resp.data.data,
      });

      localStorage.setItem("token", resp.data.token);
    } catch (error) {
      console.log(error.response.data);
      Swal.fire({
        icon: "error",
        title: "Error when logging in with incorrect username or password",
        showConfirmButton: false,
        timer: 2000,
      });
    }
  };

  const registrarUsuario = async (form) => {
    try {
      const resp = await registerService(form);

      dispatch({
        // se pudede usar el mismo reducer de INICIAR_SESION ya que la operacion es la misma
        type: "INICIAR_SESION",
        payload: resp.data.data,
      });

      localStorage.setItem("token", resp.data.token);
    } catch (error) {
      console.log(error.response.data);
      Swal.fire({
        icon: "error",
        title: "Error when creating account of user",
        showConfirmButton: false,
        timer: 2000,
      });
    }
  };

  const logout = () => {
    dispatch({
      type: "LOGOUT",
      payload: null,
    });

    localStorage.removeItem("token");
  };

  return (
    <AuthContext.Provider
      value={{
        user: globalState.user,
        iniciarSesion,
        logout,
        registrarUsuario,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

AuthState.propTypes = {
  children: PropTypes.node,
};

export default AuthState;
