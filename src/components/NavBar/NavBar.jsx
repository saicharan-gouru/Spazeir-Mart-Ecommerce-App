import "./NavBar.css";
import {Link,useNavigate} from "react-router-dom";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteIcon from '@mui/icons-material/Favorite';
import {useData , useCart, useWishlist, useAuth} from "../../contexts"; 
import {useState} from "react";
import {ProductCard} from "../../pages/productlistingpage/components/ProductCard";
import {triggerToast} from "../../services";

function NavBar(){

    const {productsDispatch,searchedProducts} = useData();
    const {items_count} = useCart();
    const {wishlist_items_count} = useWishlist();
    const {user,setUser} = useAuth();
    const navigate = useNavigate();
    const [display,setDisplay] = useState("none");
    const [searchText,setSearchText] = useState("");

    const logoutHandler = () => {
        localStorage.removeItem("token");
        setUser(null);
        triggerToast("success","Logout successful")
        navigate("/");
      };

    return(
        <div className="hero-header-container">
            <nav className="hero-header">   
                <Link to="/" className="nav-link"><h1 className="hero-brand-name">SPAZEIR MART</h1></Link>
                <Link to="/products" className="nav-link hover-effect" onClick={()=>productsDispatch({type:"CLEAR"})}>Grocery</Link>
                <div className="search">
                <input type="search" placeholder="Search for items..." className="search-bar" onChange={(e)=>setSearchText(e.target.value)} />
                <button className="search-btn" onClick={()=>{setDisplay("block");productsDispatch({type:"SEARCH",payload:searchText})}}>Search</button>
                </div>
                <div className="modal" style={{display:display}}>
                    <div className="modal-content">
                        <span onClick={()=>setDisplay("none")} class="close">&times;</span>
                        <h1>Search results</h1>
                            {searchedProducts.length === 0 && <div className="default-page"><h1>No products found</h1></div>}
                            <div className="product-cards">
                                {searchedProducts.map(product => <ProductCard product={product} key={product._id}/>)}
                            </div>
                    </div>
                </div>
                <Link to="/cart" ><ShoppingCartIcon className="nav-link hover-effect" style={{ fontSize: "30px" }}></ShoppingCartIcon> <span className="badge"> {items_count} </span> </Link>
                <Link to="/wishlist" ><FavoriteIcon className="nav-link hover-effect" style={{ fontSize: "30px" }}></FavoriteIcon> <span className="badge"> {wishlist_items_count} </span> </Link>
                { !user ? <Link to="/login" className="nav-link hover-effect">Login/Signup</Link> : <button className="button primary-green nav-link hover-effect" onClick={logoutHandler} >Logout</button> }
            </nav>
        </div>
    );
}

export {NavBar};