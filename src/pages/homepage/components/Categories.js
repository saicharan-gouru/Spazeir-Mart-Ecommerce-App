import "./Categories.css";
import {useData} from "../../../index";
import {Link } from "react-router-dom";

function Categories(){

    const {categoriesData} = useData();


    return(
        <div className="categories-container">
            <h1>Categories</h1>
            <div className="categories">
            {
                categoriesData.map(item => 
                <Link to="/products" className="category-card" key={item._id}>
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