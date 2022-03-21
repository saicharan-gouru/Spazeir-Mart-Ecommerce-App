import "./ProductCard.css";

function ProductCard({product}){

    const {title,price,imageLink} = product;
    return(
        <div class="product-card">
            <div class="product-card-header">
                <img class="hero-img " src={imageLink} alt="product" />
                <div class="content ">
                    <h2 class="hero-heading ">{title}</h2>
                    <h4 class="price">{price} Rupees</h4>
                </div>
            </div>
            <div class="product-card-footer">
                <button class="btn-add-to-cart">add to cart</button>
                <button class="btn-buy-now">Buy now</button>
            </div>
        </div>
    );
}

export {ProductCard};