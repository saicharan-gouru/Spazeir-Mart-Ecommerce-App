import "./Homepage.css";
import {Categories} from "../index";
import {Link} from "react-router-dom";



function Homepage(){

    return(
    <div className="homepage">
        <div className="hero-container">
            <img src="https://raw.githubusercontent.com/saicharan-gouru/Spazeir-Mart/development/hero-image.svg" className="hero-image" alt="hero" />
            <div>
                <p className="hero-text">Your choice matters, Buy groceries at Spazeir Mart to make the best choice...</p>
                <Link to="/products"><button className="button primary-blue">Shop now</button></Link>
            </div>
        </div>
        <Categories />
    </div>
    );
}

export { Homepage }