import "./Signup.css";
import {useState} from "react";
import {Link,useNavigate} from "react-router-dom";
import {useAuth} from "../../contexts";
import axios from "axios";
import {triggerToast} from "../../services";

function Signup(){

    const { setUser } = useAuth();
    const [email, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [error,setError] = useState("");
    const [showPassword,setShowPassword] = useState(false);
    const navigate = useNavigate()
    const updateUserName = event => {
        setUserName(event.target.value)
    }
    const updatePassword = event => {
        setPassword(event.target.value)
    }

    const signupHandler = async (e) => {
        e.preventDefault()
        try{
            const {data} = await axios.post("api/auth/signup",{ email, password })
            const {createdUser,encodedToken} = data;
            localStorage.setItem("token",encodedToken);
            setUser(createdUser);
            triggerToast("success","Signup successful");
            navigate("/",{replace:true});
        }
        catch(error){
            setError("Something went wrong..! It seems you already have an account or there might be some technical issue..!");
            triggerToast("error","Signup failed")
        }
    }


    return(
        <div>
            <h3 className="error-text">{error}</h3>
        <div className="main-container">
            <div className="signup-container">
            <h3>
                <center>Signup</center>
            </h3>
            <form onSubmit={signupHandler}>
            <label for="email">*Email address:</label><br/>
            <input onChange={updateUserName} type="email" id="email" value={email} required class="input" />
            <label for="password">*Password:{showPassword ? <span className="emoji" onClick={() => setShowPassword(prev => !prev)}> 🙈 </span> : <span className="emoji" onClick={()=>setShowPassword(prev => !prev)}> 👀 </span>}</label><br/>
            <input required onChange={updatePassword} value={password} type={showPassword ? "text" : "password"} id="password" class="input" />
            <label for="re-password">*Re-enter Password:</label><br/>
            <input required type={showPassword ? "text" : "password"}  id="re-password" class="input" />
            <input required type="checkbox" id="accept-terms" />
            <label for="accept-terms"><small>Accept terms & conditions</small></label>
            <button type="submit" className="button primary-blue btn-signup">Signup</button>
            <span><small> already have an account?</small></span>
            <Link to="/login"> <small>login</small></Link>
            </form>
        </div>
        </div>
        </div>
    );
}

export {Signup};