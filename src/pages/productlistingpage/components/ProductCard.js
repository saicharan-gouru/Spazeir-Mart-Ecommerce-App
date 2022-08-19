import "./ProductCard.css";
import {useCart,useAuth,useWishlist} from "../../../contexts";
import {Link,useNavigate} from "react-router-dom";
import { AiOutlineHeart,AiFillHeart } from 'react-icons/ai';


function ProductCard({product}){
    const {cartDispatch,itemsInCart,items_count} = useCart();
    const {user} = useAuth();
    const navigate = useNavigate();
    const {title,price,imageLink,_id,rating} = product;
    const {itemsInWishlist,wishlist_items_count,wishlistDispatch} = useWishlist();

    const addToCartHandler = () => {
        user ?
        cartDispatch({type:"ADD_TO_CART",payload:product}) :
        navigate("/login")
    }

    const addToWishlistHandler = () => {
        user ?
        wishlistDispatch({type:"MOVE_TO_WISHLIST",payload:product}) :
        navigate("/login")
    }

    return(
        <div className="product-card">
            <div className="product-card-header">
                <img className="hero-img " src={imageLink} alt="product" />
                <div className="content ">
                    <h2 className="hero-heading ">{title}</h2>
                    <h4 className="price">{price} Rupees</h4>
                </div>
            </div>
            <div className="product-card-footer">
            <h4 className="rating">{rating}⭐</h4>
            {
            itemsInCart.some(item => item._id === _id) && items_count>0  ?
            (<Link to="/cart"><button className="button primary-yellow btn-go-to-cart">Go to cart</button></Link>):
            (<button className="button primary-blue btn-add-to-cart" onClick={addToCartHandler}>Add to cart</button>)
            }
            {
            itemsInWishlist.some(item => item._id === _id) && wishlist_items_count>0  ?
            (<AiFillHeart className="wishlist-icon" onClick={() => wishlistDispatch({type:"REMOVE_FROM_WISHLIST",payload:product})}></AiFillHeart>):
            (<AiOutlineHeart className="wishlist-icon"  onClick={addToWishlistHandler}></AiOutlineHeart>)
            }
            
            </div>
        </div>
    );
}

export {ProductCard};