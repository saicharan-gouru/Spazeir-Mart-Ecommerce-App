import "./Login.css";
import {useState} from "react";
import {Link,useNavigate,useLocation} from "react-router-dom";
import {useAuth} from "../../contexts";


function Login(){

    const { loginUser } = useAuth();
    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')
    const location = useLocation()
    const navigate = useNavigate()
    const updateUserName = event => {
        setUserName(event.target.value)
    }
    const updatePassword = event => {
        setPassword(event.target.value)
    }
    const submitLogin = (e) => {
        e.preventDefault()
        if (userName !== '' && password !== '') {
            loginUser()
            navigate(location?.state?.from?.pathname, { replace: true })
        }
    }


    return(
        <div className="main-container">
        <div className="login-container">
            <h3>
                <center>Login</center>
            </h3>
            <form>
                <label for="email">Email address:</label><br/>
                <input onChange={updateUserName} type="email" id="email" class="input" />
                <label for="password">Password:</label><br/>
                <input onChange={updatePassword} type="password" id="password" class="input" />
                <input type="checkbox" id="remember-me" />
                <label for="remember-me"><small>Remember me</small></label>
                <a href="/" id="forgot-pwd"><small>Forgot your password?</small></a>
                <button onClick={submitLogin} className="button primary-blue btn-login">Login</button>
            </form>
            <span><small> new user?</small></span>
            <Link to="/signup"> <small>create new account.</small> </Link>
        </div>
        </div>
    );
}

export {Login};