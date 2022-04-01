import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import {BrowserRouter} from "react-router-dom";
import {DataProvider} from "./contexts";
import {CartProvider} from "./contexts"



// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <DataProvider>
        <CartProvider>
          <App />
        </CartProvider>
      </DataProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

