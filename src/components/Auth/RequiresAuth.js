import { useAuth } from "../../contexts";
import { Navigate, useLocation } from "react-router-dom";

function RequiresAuth({children}){

    const {user} = useAuth();
    const location = useLocation();

    return(
        user ? children : <Navigate  to="/login" state={{from:location}} replace />
    )
}

export {RequiresAuth};