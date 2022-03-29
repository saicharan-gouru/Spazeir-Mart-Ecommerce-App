import "./CartProductCard.css";
import {useCart} from "../../../index";


function CartProductCard({product}){

    const {title,price,imageLink} = product;
    const {cartDispatch} = useCart();

    return(
        <div>
                <div className="cart-product-card">
                    <div className="container1">
                        <img className="hero-img" alt="product" src={imageLink}/>
                        <div className="content ">
                            <h2 className="hero-heading ">{title}</h2>
                            <h4 className="price">{price} Rupees</h4>
                            <div className="quantity-container">
                                <label for="quantity">Quantity</label>
                                <input id="quantity" type="number" min="1" />
                            </div>
                            <button className="button" onClick={()=>cartDispatch({type:"REMOVE_FROM_CART",payload:product})}>Remove from cart</button>
                            <button className="button">Move to wishlist</button>
                        </div>
                    </div>
                </div>
        </div>
    );
}

export {CartProductCard};