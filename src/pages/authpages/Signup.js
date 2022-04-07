import "./Signup.css";
import {Link} from "react-router-dom";

function Signup(){

    return(
        <div className="main-container">
            <div className="signup-container">
            <h3>
                <center>Signup</center>
            </h3>
            <label for="email">Email address:</label><br/>
            <input type="email" id="email" class="input" />
            <label for="password">Password:</label><br/>
            <input type="password" id="password" class="input" />
            <label for="re-password">Re-enter Password:</label><br/>
            <input type="password" id="re-password" class="input" />
            <input type="checkbox" id="accept-terms" />
            <label for="accept-terms"><small>Accept terms & conditions</small></label>
            <button className="button primary-blue btn-signup">Signup</button>
            <span><small> already have an account?</small></span>
            <Link to="/login"> <small>login</small></Link>
        </div>
        </div>
    );
}

export {Signup};