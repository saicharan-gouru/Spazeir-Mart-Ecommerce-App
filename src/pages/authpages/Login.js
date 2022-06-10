import "./Login.css";
import {useState} from "react";
import {Link,useNavigate,useLocation} from "react-router-dom";
import {useAuth} from "../../contexts";
import axios from "axios";


function Login(){

    const { setUser } = useAuth();
    const [email, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [error,setError] = useState("");
    const [showPassword,setShowPassword] = useState(false);
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
            const { foundUser, encodedToken } = data;
            setUser(foundUser);
            localStorage.setItem("token", encodedToken);
            navigate(location.state?.from?.pathname || "/", { replace: true });
          } 
          catch (error) {
            setError("Invalid username/password")
            console.error(error);
          }
    }

    const useTestCredentials = () => {
     
        setPassword("adarshBalika123");
        setUserName("adarshbalika@gmail.com")
    }


    return(
        <div>
            <h3 className="error-text">{error}</h3>
        <div className="main-container">
        <div className="login-container">
            <h3>
                <center>Login</center>
            </h3>
            <form onSubmit={submitLogin}>
                <label for="email">*Email address:</label><br/>
                <input required onChange={updateUserName} value={email} type="email" id="email" class="input" />
                <label for="password">*Password:{showPassword ? <span className="emoji" onClick={() => setShowPassword(prev => !prev)}> 🙈 </span> : <span className="emoji" onClick={()=>setShowPassword(prev => !prev)}> 👀 </span>}</label>
                <input required onChange={updatePassword} value={password} type={showPassword ? "text" : "password"} id="password" class="input" />

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
        </div>
    );
}

export {Login};