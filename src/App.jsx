import { PayPalScriptProvider } from "@paypal/react-paypal-js";

import AppRouter from "./router/AppRouter";
import AuthState from "./context/AuthState";
import ProductState from "./context/ProductState";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "bootstrap-icons/font/bootstrap-icons.min.css";

const App = () => {
  return (
    <>
      <AuthState>
        <PayPalScriptProvider
          options={{
            "cliente-id":
              "AbkDYj-HH8WknAGuonC6yATNHFU38Fw4waaA0LyKUqElnwzLOnmrKmSPwlIAFzNBBJS3oZaET0Tc-MCV",
          }}
        >
          {/* ARx4d5eWP-JPPqGpXIsVyiHxkBcjUG6KIdsB9LdRE_PrrC6kvpHpJ8FgdQpjvjEB7ZWQ3sn-fKwW0T6U ----> este ID de jesus */}
          {/* AbkDYj-HH8WknAGuonC6yATNHFU38Fw4waaA0LyKUqElnwzLOnmrKmSPwlIAFzNBBJS3oZaET0Tc-MCV ----> este ID personal merchant */}
          {/* AVnUAUn8bBrFL1lMuLmMFNK0_0TMPiImT0qiBQrDAeqSDhgtI9BEm09B_NObuJUi80AevascTca8iqkn ----> este ID personal platform */}
          <ProductState>
            <AppRouter />
          </ProductState>
        </PayPalScriptProvider>
      </AuthState>
    </>
  );
};

export default App;
