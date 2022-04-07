import { Route,Routes } from "react-router-dom";
import "./App.css";
import Mockman from "mockman-js";
import { Homepage,ProductListing,CartPage,Wishlistpage, Login, Signup} from "./pages";
import {NavBar,Footer} from "./components";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/mock" element={<Mockman/>}/>
        <Route path="/" element={<Homepage/>} />
        <Route path="/products" element={<ProductListing/>} />
        <Route path="/cart" element={<CartPage/>} />
        <Route path="/wishlist" element={<Wishlistpage/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<Signup/>} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
