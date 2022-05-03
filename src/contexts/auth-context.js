import {createContext,useContext,useState} from "react";

const AuthContext = createContext();

function AuthProvider({children}){

    const [isUserLoggedIn,setIsUserLoggedIn] = useState(false);

    function loginUser(){
        setIsUserLoggedIn(true);
    }

    function logoutUser(){
        setIsUserLoggedIn(false);
    }

    return(
        <AuthContext.Provider value={{isUserLoggedIn,loginUser,logoutUser}}>
            {children}
        </AuthContext.Provider>
    )
}

const useAuth = () => useContext(AuthContext);

export {useAuth,AuthProvider}