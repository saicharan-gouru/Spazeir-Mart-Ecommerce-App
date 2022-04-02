import "./CartProductCard.css";
import {useCart,useWishlist} from "../../../contexts";
import {Link} from "react-router-dom";


function CartProductCard({product}){

    const {title,price,imageLink,_id} = product;
    const {cartDispatch} = useCart();
    const {wishlistDispatch,itemsInWishlist} = useWishlist();

   

    return(
        <div>
                <div className="cart-product-card">
                    <div className="container1">
                        <img className="hero-img" alt="product" src={imageLink}/>
                        <div className="content ">
                            <h2 className="hero-heading ">{title}</h2>
                            <h4 className="price">{price} Rupees</h4>
                            <div className="quantity-container">

                                {product.quantity !== 0 ?
                                (<button className="button primary-green btn-quantity" onClick={()=>cartDispatch({type:"INCREASE_PRODUCT_QUANTITY",payload:{item:product}})}>+</button>) : 
                                (<button className="button primary-green btn-quantity">+</button>)}

                                <label for="quantity">{product.quantity}</label>

                                {product.quantity !== 1 ? 
                                (<button className="button primary-red btn-quantity" onClick={()=>cartDispatch({type:"DECREASE_PRODUCT_QUANTITY",payload:{item:product}})}>-</button>) :
                                (<button className="button primary-red btn-quantity">-</button>)}

                            </div>
                            <button className="button primary-blue" onClick={()=>cartDispatch({type:"REMOVE_FROM_CART",payload:product})}>Remove from cart</button>
                            { 
                            itemsInWishlist.some(item => item._id === _id) ? 
                            <Link to="/wishlist"><button className="button primary-yellow">Go to wishlist</button></Link> :
                            <button className="button primary-blue" onClick={()=>wishlistDispatch({type:"MOVE_TO_WISHLIST",payload:product})}>Move to wishlist</button>
                            }
                        </div>
                    </div>
                </div>
        </div>
    );
}

export {CartProductCard};