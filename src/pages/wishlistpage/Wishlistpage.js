import "./Wishlistpage.css";
import {useWishlist} from "../../contexts";
import {WishlistProductCard} from "../index";
import {Link} from "react-router-dom";

function Wishlistpage(){

    const {itemsInWishlist,wishlist_items_count,wishlistDispatch} = useWishlist();

    return(
        <div className="wishlist-container">
            <h1>My wishlist({wishlist_items_count})</h1>
            {wishlist_items_count>0 && <button className="button primary-yellow btn-clear-wishlist" onClick={()=>wishlistDispatch({type:"CLEAR_WISHLIST"})}>Clear wishlist</button>}
            {
            wishlist_items_count === 0 ? (<div className="default-wishlist-page"><h1 className="default-text">No items in wishlist...explore <Link to="/products"> products </Link></h1></div>) :
            (
            <div className="wishlist-products-container">
                {itemsInWishlist.map(item => <WishlistProductCard product={item} />)} 
            </div>
            )
            }
        </div>
    );
}

export { Wishlistpage };