import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import {BrowserRouter} from "react-router-dom";
import {NavBar} from "./components/NavBar/NavBar";
import {Homepage} from "./pages/homepage/Homepage";
import {Categories} from "./pages/homepage/components/Categories";
import {DataProvider,useData} from "./contexts/data-context";
import {Footer} from "./components/Footer/Footer"

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <DataProvider>
        <App />
      </DataProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

export { NavBar,Homepage,Categories,useData,Footer };