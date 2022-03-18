import { Route,Routes } from "react-router-dom";
import "./App.css";
import logo from "./logo.png";
import Mockman from "mockman-js";

function App() {
  return (
    <div className="App">
      <h1>Spazeir Mart</h1>

      <Routes>
        <Route path="mock" element={<Mockman/>}/>
      </Routes>
    </div>
  );
}

export default App;
