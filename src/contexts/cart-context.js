import { createContext, useContext, useReducer } from "react";
import {cartReducer} from "../reducers/cartReducer";

const CartContext = createContext();

function CartProvider({children}){

    const [{items_count,itemsInCart},cartDispatch] = useReducer(cartReducer,{items_count:0,itemsInCart:[]})
    return(
        <CartContext.Provider value={{cartDispatch,items_count,itemsInCart}}>
            {children}
        </CartContext.Provider>
    )
}

const useCart = () => useContext(CartContext);

export {CartProvider,useCart};