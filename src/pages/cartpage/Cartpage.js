import "./Cartpage.css";
import {useCart} from "../../index";
import {CartProductCard} from "../index";
import {Link} from "react-router-dom";

function CartPage(){

    const {itemsInCart,items_count} = useCart();

    return(
        <div className="cart-container">
            <h1>My cart({items_count})</h1>
            {items_count === 0 && <div className="default-cart-page"><h1 className="default-text">No items in cart...explore <Link to="/products"> products </Link></h1></div>}
            <div>
                {itemsInCart.map( product => <CartProductCard product = {product}  key={product._id} />)}
            </div>
        </div>
    );
}

export {CartPage};