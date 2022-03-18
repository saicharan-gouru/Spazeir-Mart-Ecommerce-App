import { Route,Routes } from "react-router-dom";
import "./App.css";
import logo from "./logo.png";
import Mockman from "mockman-js";
import {NavBar} from "./index"

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="mock" element={<Mockman/>}/>
      </Routes>
    </div>
  );
}

export default App;
