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
              "Ach_kO1LQpE3jIz20dpuxBnfPNSclcFb-eQB5H6z-O3tXv-3gTrCHOgJj4SRo9WWaT7qFntunlrhyWEU",
          }}
        >
          {/* ARx4d5eWP-JPPqGpXIsVyiHxkBcjUG6KIdsB9LdRE_PrrC6kvpHpJ8FgdQpjvjEB7ZWQ3sn-fKwW0T6U ----> este ID de jesus */}
          {/* AbkDYj-HH8WknAGuonC6yATNHFU38Fw4waaA0LyKUqElnwzLOnmrKmSPwlIAFzNBBJS3oZaET0Tc-MCV ----> este ID personal */}
          <ProductState>
            <AppRouter />
          </ProductState>
        </PayPalScriptProvider>
      </AuthState>
    </>
  );
};

export default App;
