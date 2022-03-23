import { createContext, useContext, useEffect, useReducer } from "react";
import axios from "axios";
import { productsReducer } from "../reducers/productsReducer";
import { sortProductsByPrice } from "../Filters/sortProductsByPrice";
import { staplesFilter } from "../Filters/staplesFilter";

const ProductContext = createContext();

function DataProvider({children}){

    const [{products,categories,sortByPrice,includeStaples},productsDispatch] = useReducer(productsReducer,{ products:[],categories:[] ,sortByPrice : null, includeStaples : false });

    useEffect(()=>{ 
        async function FetchData(){
            try{
                const response1 = await axios.get("/api/categories");
                productsDispatch({type:"FETCH_CATEGORIES",payload:response1.data.categories})
                const response2 = await axios.get("/api/products");
                productsDispatch({type:"FETCH_PRODUCTS",payload:response2.data.products})
            }
            catch(error){
                console.log(error);
            }
        }
        FetchData();
    },[]
    );


    const filter1 = staplesFilter(products,includeStaples); 
    const sortedProducts = sortProductsByPrice(filter1,sortByPrice)  

    return(
    <ProductContext.Provider value={{categories,products,sortedProducts,productsDispatch,sortByPrice,includeStaples}}>
        {children}
    </ProductContext.Provider>
    );
}

const useData = () => useContext(ProductContext);

export {useData,DataProvider};