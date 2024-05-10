import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./App.jsx";
import "./index.css";
import MovieHomePage from "./Components/Movie Home/MovieHome.jsx";
import Routing from "./Router/MovieRouter.jsx";
import { Provider } from "react-redux";
import mystore from "./Store/store.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={mystore}>
      <Routing />
    </Provider>
  </React.StrictMode>
);
