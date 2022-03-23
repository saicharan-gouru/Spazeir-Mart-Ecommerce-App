import "./Homepage.css";
import {Categories} from "../../index";



function Homepage(){

    return(
    <div className="homepage">
        <Categories />
        <img src="https://raw.githubusercontent.com/saicharan-gouru/Spazeir-Mart/development/hero-image.svg" className="hero-image" alt="hero" />

    </div>
    );
}

export { Homepage }