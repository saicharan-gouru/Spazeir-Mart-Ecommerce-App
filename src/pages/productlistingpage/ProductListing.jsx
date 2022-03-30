import {useData} from "../../contexts";
import {ProductCard,Filters} from "../index"
import "./ProductListing.css";



function ProductListing(){

    const {sortedProducts} = useData();

    return(
        <div className="main">
            <Filters />
            <div className="products-container">
                <div className="products">
                    <h1>Products</h1>
                    <div className="product-cards">
                        {sortedProducts.map(product => <ProductCard product={product} key={product._id}/>)}
                    </div>
                </div>
            </div>
        </div>
    );
}

export {ProductListing};