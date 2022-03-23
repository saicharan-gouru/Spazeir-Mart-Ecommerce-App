import { Route,Routes } from "react-router-dom";
import "./App.css";
import Mockman from "mockman-js";
import { Homepage,ProductListing} from "./pages/index";
import {NavBar,Footer} from "./index";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/mock" element={<Mockman/>}/>
        <Route path="/" element={<Homepage/>} />
        <Route path="/products" element={<ProductListing/>} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
