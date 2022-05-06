import "./Login.css";
import {useState} from "react";
import {Link,useNavigate,useLocation} from "react-router-dom";
import {useAuth} from "../../contexts";
import axios from "axios";


function Login(){

    const { setUser } = useAuth();
    const [email, setUserName] = useState("")
    const [password, setPassword] = useState("")
    const location = useLocation()
    const navigate = useNavigate()
    const updateUserName = event => {
        setUserName(event.target.value)
    }
    const updatePassword = event => {
        setPassword(event.target.value)
    }
    const submitLogin =async (e) => {
        e.preventDefault();
        try {
            const { data } = await axios.post("/api/auth/login", { email, password });
            console.log(data)
            const { foundUser, encodedToken } = data;
            setUser(foundUser);
            localStorage.setItem("token", encodedToken);
            navigate(location.state?.from?.pathname || "/", { replace: true });
          } 
          catch (error) {
            console.error(error);
          }
    }

    const useTestCredentials = () => {
     
        setPassword("adarshBalika123");
        setUserName("adarshbalika@gmail.com")
    }


    return(
        <div className="main-container">
        <div className="login-container">
            <h3>
                <center>Login</center>
            </h3>
            <form onSubmit={submitLogin}>
                <label for="email">Email address:</label><br/>
                <input onChange={updateUserName} value={email} type="email" id="email" class="input" />
                <label for="password">Password:</label><br/>
                <input onChange={updatePassword} value={password} type="password" id="password" class="input" />
                <input type="checkbox" id="remember-me" />
                <label for="remember-me"><small>Remember me</small></label>
                <a href="/" id="forgot-pwd"><small>Forgot your password?</small></a>
                <button type="submit" className="button primary-blue btn-login">Login</button>
                <button onClick={useTestCredentials} className="button primary-green">Use Test Credentials</button>
            </form>
            <span><small> new user?</small></span>
            <Link to="/signup"> <small>create new account.</small> </Link>
        </div>
        </div>
    );
}

export {Login};