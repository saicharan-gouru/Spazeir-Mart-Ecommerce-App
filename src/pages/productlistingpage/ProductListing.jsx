import {useData,ProductCard} from "../../index";
import "./ProductListing.css";

function ProductListing(){

    const {productsData} = useData();

    return(
        <div>
            <h1>Products</h1>
            <div className="products-container">
                {productsData.map(product => <ProductCard product={product} key={product._id}/>)}
            </div>
        </div>
    );
}

export {ProductListing};