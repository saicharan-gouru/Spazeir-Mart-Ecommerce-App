import {useData,ProductCard} from "../../index";
import "./ProductListing.css";
import {Filters} from "./components/Filters"

function ProductListing(){

    const {productsData} = useData();

    return(
        <div className="main">
            
            <Filters />
            <div className="products-container">
                <div className="products">
                    <h1>Products</h1>
                    <div className="product-cards">
                        {productsData.map(product => <ProductCard product={product} key={product._id}/>)}
                    </div>
                </div>
            </div>
        </div>
    );
}

export {ProductListing};