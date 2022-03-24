import "./Categories.css";
import {useData} from "../../../index";
import {Link } from "react-router-dom";


function Categories(){

    const {categories,productsDispatch} = useData();

    function generateType(categoryName){
        if(categoryName === "Staples")
        return "INCLUDE_STAPLES"
        if(categoryName === "Snacks")
        return "INCLUDE_SNACKS"
        if(categoryName === "Dairy&Eggs")
        return "INCLUDE_DAIRY_AND_EGGS"
        if(categoryName === "Vegetables")
        return "INCLUDE_VEGETABLES"

    }

    return(
        <div className="categories-container">
            <h1>Categories</h1>
            <div className="categories">
            {
                categories.map(item => 
                <Link to="/products" className="category-card" key={item._id} onClick={()=>{productsDispatch({type:"CLEAR"});productsDispatch({type:generateType(item.categoryName)})}}>
                    <img className="category-image" src={item.imageLink} alt="category"/>
                    <p className="category-name">{item.categoryName}</p>
                </Link>
                )
            }
            </div>
        </div>
    );
}

export { Categories }