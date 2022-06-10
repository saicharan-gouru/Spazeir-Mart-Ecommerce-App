import "./NavBar.css";
import {Link,useNavigate} from "react-router-dom";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteIcon from '@mui/icons-material/Favorite';
import {useData , useCart, useWishlist, useAuth} from "../../contexts"; 

function NavBar(){

    const {productsDispatch} = useData();
    const {items_count} = useCart();
    const {wishlist_items_count} = useWishlist();
    const {user,setUser} = useAuth();
    const navigate = useNavigate();

    const logoutHandler = () => {
        localStorage.removeItem("token");
        setUser(null);
        navigate("/");
      };

    return(
        <div className="hero-header-container">
            <nav className="hero-header">   
                <Link to="/" className="nav-link"><h1 className="hero-brand-name">SPAZEIR MART</h1></Link>
                <Link to="/products" className="nav-link hover-effect" onClick={()=>productsDispatch({type:"CLEAR"})}>Grocery</Link>
                <input className="search-bar" autoFocus/>
                { !user ? <Link to="/login" className="nav-link hover-effect">Login/Signup</Link> : <button className="button primary-green nav-link hover-effect" onClick={logoutHandler} >Logout</button> }
                <Link to="/cart" ><ShoppingCartIcon className="nav-link hover-effect" style={{ fontSize: "30px" }}></ShoppingCartIcon> <span className="badge"> {items_count} </span> </Link>
                <Link to="/wishlist" ><FavoriteIcon className="nav-link hover-effect" style={{ fontSize: "30px" }}></FavoriteIcon> <span className="badge"> {wishlist_items_count} </span> </Link>
            </nav>
        </div>
    );
}

export {NavBar};