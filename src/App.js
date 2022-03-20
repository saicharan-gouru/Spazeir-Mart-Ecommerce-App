import { Route,Routes } from "react-router-dom";
import "./App.css";
import Mockman from "mockman-js";
import {NavBar,Homepage,Footer} from "./index"

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="mock" element={<Mockman/>}/>
        <Route path="/" element={<Homepage/>} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
