import "./Login.css";
import {Link} from "react-router-dom";

function Login(){

    return(
        <div className="main-container">
        <div className="login-container">
            <h3>
                <center>Login</center>
            </h3>
            <label for="email">Email address:</label><br/>
            <input type="email" id="email" class="input" />
            <label for="password">Password:</label><br/>
            <input type="password" id="password" class="input" />
            <input type="checkbox" id="remember-me" />
            <label for="remember-me"><small>Remember me</small></label>
            <a href="/" id="forgot-pwd"><small>Forgot your password?</small></a>
            <button className="button primary-blue btn-login">Login</button>
            <span><small> new user?</small></span>
            <Link to="/signup"> <small>create new account.</small> </Link>
        </div>
        </div>
    );
}

export {Login};