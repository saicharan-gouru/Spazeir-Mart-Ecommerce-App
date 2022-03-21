import "./NavBar.css";
import {Link} from "react-router-dom";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteIcon from '@mui/icons-material/Favorite';

function NavBar(){
    return(
        <div className="hero-header-container">
            <nav className="hero-header">   
                <Link to="/" className="nav-link"><h1 className="hero-brand-name">SPAZEIR MART</h1></Link>
                <Link to="/products" className="nav-link hover-effect">Grocery</Link>
                <input className="search-bar" autoFocus/>
                <Link to="/login" className="nav-link hover-effect">Login/Signup</Link>
                <Link to="/cart" ><ShoppingCartIcon className="nav-link hover-effect" style={{ fontSize: "30px" }}></ShoppingCartIcon></Link>
                <Link to="/wishlist" ><FavoriteIcon className="nav-link hover-effect" style={{ fontSize: "30px" }}></FavoriteIcon></Link>
            </nav>
        </div>
    );
}

export {NavBar};