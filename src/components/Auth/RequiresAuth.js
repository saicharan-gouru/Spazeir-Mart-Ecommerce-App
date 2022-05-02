import { useAuth } from "../../contexts";
import { Navigate, useLocation } from "react-router-dom";

function RequiresAuth({children}){

    const {isUserLoggedIn} = useAuth();
    const location = useLocation();

    return(
        isUserLoggedIn ? children : <Navigate  to="/login" state={{from:location}} replace />
    )
}

export {RequiresAuth};