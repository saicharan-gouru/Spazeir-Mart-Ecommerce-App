import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import {BrowserRouter} from "react-router-dom";
import {NavBar} from "./components/NavBar/NavBar";
import {DataProvider,useData} from "./contexts/product-context";
import {Footer} from "./components/Footer/Footer";
import {CartProvider,useCart} from "./contexts/cart-context"



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

export { NavBar,useData,Footer,useCart };