import {createContext,useContext,useState} from "react";

const AuthContext = createContext();

function AuthProvider({children}){

    const [user,setUser] = useState(null);

    return(
        <AuthContext.Provider value={{user,setUser}}>
            {children}
        </AuthContext.Provider>
    )
}

const useAuth = () => useContext(AuthContext);

export {useAuth,AuthProvider}