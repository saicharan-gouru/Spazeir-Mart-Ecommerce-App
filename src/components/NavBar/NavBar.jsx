import "./NavBar.css";
import {Link} from "react-router-dom";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteIcon from '@mui/icons-material/Favorite';

function NavBar(){
    return(
        <nav className="hero-header">   
            <Link to="/" className="nav-link"><h1 className="hero-brand-name">SPAZEIR MART</h1></Link>
            <input className="search" />
            <Link to="/login" className="nav-link hover-effect">Login/Signup</Link>
            <Link to="/cart" ><ShoppingCartIcon className="nav-link hover-effect"></ShoppingCartIcon></Link>
            <Link to="/wishlist" ><FavoriteIcon className="nav-link hover-effect"></FavoriteIcon></Link>
        </nav>
    );
}

export {NavBar};