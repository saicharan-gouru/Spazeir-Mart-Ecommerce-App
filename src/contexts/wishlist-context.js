
import {createContext,useContext, useReducer} from "react";
import { wishlistReducer } from "../reducers";

const WishlistContext = createContext();

function WishlistProvider({children}){
    
    const [{itemsInWishlist,wishlist_items_count},wishlistDispatch] = useReducer(wishlistReducer,{itemsInWishlist:[],wishlist_items_count:0});

    return(
    <WishlistContext.Provider value={{itemsInWishlist,wishlist_items_count,wishlistDispatch}}>
        {children}
    </WishlistContext.Provider>
    );
}

const useWishlist = () => useContext(WishlistContext);

export {WishlistProvider, useWishlist};