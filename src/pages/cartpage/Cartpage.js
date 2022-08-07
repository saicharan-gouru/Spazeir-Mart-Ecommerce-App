import "./Cartpage.css";
import {useCart} from "../../contexts";
import {CartProductCard} from "../index"; 
import {Link} from "react-router-dom";


function CartPage(){

    const {itemsInCart,items_count,total_price,cartDispatch} = useCart();

    return(
        <div className="cart-container">
            <h1>My cart({items_count})</h1>
            {items_count>0 && <button className="button primary-yellow btn-clear-cart" onClick={()=>cartDispatch({type:"CLEAR_CART"})}>Clear cart</button>}
            {items_count === 0 ? (<div className="default-cart-page"><h1 className="default-text">No items in cart...explore <Link to="/products"> products </Link></h1></div>) :
            (
            <div className="cart">
            <div className="cart-products-container">
                {itemsInCart.map( product => <CartProductCard product = {product}  key={product._id} />)}
            </div>
            <div class="price-details-container">
                <div class="price-details">
                    <h3>Price details</h3>
                    <hr />
                    <div class="price-view-container">
                        <div>
                            <p>price({items_count} items):</p>
                            <p>Discount:</p>
                            <p>Delivery charges:</p>
                        </div>
                        <div>
                            <p>Rs.{total_price}</p>
                            <p>Rs.50</p>
                            <p>Rs.30</p>
                        </div>
                    </div>
                    <hr />
                    <div class="price-view-container">
                        <div>
                            <p><b>Total Amount:</b></p>
                        </div>
                        <div>
                            <p>Rs.{total_price+30-50}</p>
                        </div>
                    </div>
                    <button class="button primary-blue btn-placeorder" onClick={()=>cartDispatch({type:"PLACE_ORDER"})}>Place Order</button>
                </div>
            </div>
            </div>
            )
            }
        </div>
    );
}

export {CartPage};