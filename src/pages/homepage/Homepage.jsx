import "./Homepage.css";
import {Categories} from "../../index";



function Homepage(){

    return(
    <div>
        <Categories />
        <img src="https://raw.githubusercontent.com/saicharan-gouru/Spazeir-Mart/development/hero-image.svg" className="hero-image" alt="hero-image" />

    </div>
    );
}

export { Homepage }