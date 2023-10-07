const reducer = (globalState, action) => {
  switch (action.type) {
    //Esta accion se puede usar tanto para "INICIAR_SESION" como para "CREAR_USUARIO" la respuesta es la misma
    case "INICIAR_SESION":
      return {
        ...globalState,
        user: action.payload,
      };

    case "LOGOUT":
      return {
        ...globalState,
        user: action.payload,
      };

    default:
      return globalState;
  }
};

export default reducer;
