import "./WishlistProductCard.css";
import {useCart,useWishlist} from "../../../contexts";
import {Link} from "react-router-dom";

function WishlistProductCard({product}){

    const {cartDispatch,itemsInCart} = useCart();
    const {wishlistDispatch} = useWishlist();
    const {title,imageLink,_id,price} = product;

    return(
        <div>
            <div className="wishlist-product-card">
                <div className="container1">
                    <img className="hero-img" alt="product" src={imageLink}/>
                    <div className="content ">
                        <h2 className="hero-heading ">{title}</h2>
                        <h4 className="price">{price} Rupees</h4>
                        <button className="button primary-blue" onClick={()=>wishlistDispatch({type:"REMOVE_FROM_WISHLIST",payload:product})}>Remove from wishlist</button>
                            { 
                            itemsInCart.some(item => item._id === _id) ? 
                            <Link to="/cart"><button className="button primary-yellow">Go to cart</button></Link> :
                            <button className="button primary-blue" onClick={()=>cartDispatch({type:"ADD_TO_CART",payload:product})}>Move to cart</button>
                            }
                    </div>
                </div>
            </div>
        </div>
    );
}

export {WishlistProductCard};