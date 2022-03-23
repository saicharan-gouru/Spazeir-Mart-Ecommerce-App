import { createContext, useContext, useEffect, useReducer } from "react";
import axios from "axios";
import { productsReducer } from "../reducers/productsReducer";
import { sortProductsByPrice } from "../Filters/sortProductsByPrice";
import {categoryFilter} from "../Filters/categoryFilter";
import { ratingFilter } from "../Filters/ratingFilter";
 
const ProductContext = createContext();

function DataProvider({children}){

    const [{products,categories,sortByPrice,includeStaples,includeSnacks,includeDairyandEggs,includeVegetables,rating},productsDispatch] = useReducer(productsReducer,{ products:[],categories:[] ,sortByPrice : null, includeStaples : false, includeSnacks : false,includeDairyandEggs : false, includeVegetables : false,rating:null });

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

    
    const categoryFilteredProducts = categoryFilter(products,includeSnacks,includeStaples,includeDairyandEggs,includeVegetables);
    const ratingFilteredProducts = ratingFilter(categoryFilteredProducts,rating);
    const sortedProducts = sortProductsByPrice(ratingFilteredProducts,sortByPrice);  

    return(
    <ProductContext.Provider value={{categories,products,sortedProducts,productsDispatch,sortByPrice,includeStaples,includeSnacks,includeDairyandEggs,includeVegetables,rating}}>
        {children}
    </ProductContext.Provider>
    );
}

const useData = () => useContext(ProductContext);

export {useData,DataProvider};