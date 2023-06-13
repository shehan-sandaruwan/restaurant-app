import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import store from "stores/store";
import { Provider } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { GoogleOAuthProvider } from "@react-oauth/google";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <GoogleOAuthProvider clientId="481185896078-53t76gj40epeuschjiapi7iovt7ksi16.apps.googleusercontent.com">
    <Provider store={store}>
      <App />
    </Provider>
  </GoogleOAuthProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
