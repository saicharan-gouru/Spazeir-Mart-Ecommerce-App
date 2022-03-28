import "./ProductCard.css";
import {useCart} from "../../../index";

function ProductCard({product}){
    const {cartDispatch} = useCart();
    const {title,price,imageLink} = product;
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
                <button className="btn-add-to-cart" onClick={()=>cartDispatch({type:"ADD_TO_CART"})}>add to cart</button>
                <button className="btn-buy-now">Buy now</button>
            </div>
        </div>
    );
}

export {ProductCard};